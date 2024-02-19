import jsonResponse from "../../../utils/jsonResponse.js";
import userController from "./user.controller.js";
import logError from "../../../utils/devLog.js";
import { unlinkSync } from 'fs'

export default {
  // create user
  createUser: async (req, res, next) => {
    try {
      const user = {
        ...req.body,
        avatar: req.file?.filename ? req.file.filename : null
      };
      // console.log(req.files[0]);
      // create user
      const accessToken = await userController.createUser(user);
      if (!accessToken)
        return res.status(400).json(
          jsonResponse(false, accessToken, {
            message: "accesstoken was not received"
          })
        );
      return res.status(200).json(jsonResponse(true, accessToken));
    } catch (err) {
      logError('create user failed - ' + err, "middleware error", "", {});
      // handler error in error handling middleware
      next(err);
    }
  },
  // get users
  getUsers: async (req, res, next) => {
    try {
      // get users
      const users = await userController.getUsers();
      // res
      if (users.length <= 0)
        return res.status(404).json(
          jsonResponse(true, users, {
            message: "There are no users to display"
          })
        );
      return res.status(200).json(jsonResponse(true, users));
    } catch (err) {
      logError('get users error - ' + err, "middleware error", "", {});
      next(err);
    }
  },
  // get user
  getUser: async (req, res, next) => {
    // get user id from params
    const id = req.params.id;
    try {
      // get user by user id
      const user = await userController.getUser(id);
      // response
      if (!user)
        return res.status(404).json(
          jsonResponse(false, user, {
            message: "The user with the desired id was not found"
          })
        );
      return res.status(200).json(jsonResponse(true, user));
    } catch (err) {
      logError('get user failed - ' + err, "middleware error", "", {});
      // go to error handling middleware
      next(err);
    }
  },
  // edit user
  editUser: async (req, res, next) => {
    // get user id from params
    const id = req.params.id;
    // get user info from body
    const editedUser = req.body;
    try {
      // edit user
      const user = await userController.editUser(id, editedUser);
      if (!user)
        return res.status(404).json(
          jsonResponse(false, user, {
            message: "The user with the desired id was not found"
          })
        );
      return res.status(200).json(jsonResponse(true, user));
    } catch (err) {
      logError('edit user failed - ' + err, "middleware error", "", {});
      // go to error handling middleware
      next(err);
    }
  },
  // delete user
  deleteUser: async (req, res, next) => {
    try {
      // get user id from request
      const id = req.params.id;
      // delete user by id
      const user = await userController.deleteUser(id);
      // dend response
      if (!user)
        return res.status(404).json(
          jsonResponse(false, user, {
            message: "The user with the desired id was not found"
          })
        );
      return res.status(200).json(jsonResponse(true, user));
    } catch (err) {
      logError('delete user failed' + err, "middleware error", "", {});
      // go to error handling middleware
      next(err);
    }
  },
  // authenticate user
  authenticateUser: async (req, res, next) => {
    try {
      // get token
      const token = req.header("Authorization")?.split(" ")[1];
      // send res if token is not valid
      if (!token)
        return res
          .status(401)
          .json(jsonResponse(false, [], { message: "token is required" }));
      // authenticate user with athenticate controller
      const user = await userController.authenticateUser(token);
      if (!user)
        return res.status(401).json(
          jsonResponse(false, [], {
            message: "Invalid authorization header."
          })
        );
      req.authenticatedUser = user;
      // go to next middleware
      return next();
    } catch (err) {
      // go to error handling middleware
      logError('authenticate user failed - ' + err, "middleware error", "", {});
      next(err);
    }
  },
  // check duplicate user
  checkerDuplicateUser: async (req, res, next) => {
    try {
      // get req.body
      const user = req.body;
      // check duplication
      const result = await userController.checkerDuplicateUser(user);
      // res
      if (result) {
        // remove file
        if (req.file?.path) {
          unlinkSync(req.file.path);
        }
        return res.status(409).json(
          jsonResponse(false, [], {
            message: "Username, email or phone number duplicated"
          })
        );
      }

      next();
    } catch (err) {
      logError('check duplicate user failed - ' + err, "middleware error", "", {});
      next(err);
    }
  },
  // parsing form data for user
  formDataParserForUserAvatar: (req, res, next) => {
    const { parser, multerError } = userController.formDataParserForUser();
    parser(req, res, function (err) {
      if (err instanceof multerError) {

        switch (err.code) {
          case 'LIMIT_PART_COUNT': {
            return res.json(jsonResponse(false, [], { message: 'Too many parts' }))
          }
          case "LIMIT_FILE_SIZE": {
            return res.json(jsonResponse(false, [], { message: 'File too large' }))
          }
          case "LIMIT_FILE_COUNT": {
            return res.json(jsonResponse(false, [], { message: 'Too many files' }))
          }
          case "LIMIT_FIELD_KEY": {
            return res.json(jsonResponse(false, [], { message: 'Field name too long' }))
          }
          case "LIMIT_FIELD_VALUE": {
            return res.json(jsonResponse(false, [], { message: 'Field value too long' }))
          }
          case "LIMIT_FIELD_COUNT": {
            return res.json(jsonResponse(false, [], { message: 'Too many fields' }))
          }
          case "LIMIT_UNEXPECTED_FILE": {
            return res.json(jsonResponse(false, [], { message: 'Unexpected field' }))
          }
          case "MISSING_FIELD_NAME": {
            return res.json(jsonResponse(false, [], { message: 'Field name missing' }))
          }
        }
        // A Multer error occurred when uploading.
        logError('form data parser for avatar user - ' + err.code, 'multer error', '', {});
        next(err)
      } else if (err) {
        // An unknown error occurred when uploading.
        logError('form data parser for user avatar failed - ' + err, 'middleware error', '', {});
        next(err)
      }
      next()
    })
  }
};
