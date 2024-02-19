// imports
import userEntity from "./user.service.js";
// imports utils
import { createToken, verifyToken } from "../../../utils/tokenSystem.js";
import logError from "../../../utils/devLog.js";
import formDataParser, { multerError } from '../../../utils/formDataParser.js'
import { deleteFile } from "../../../utils/fileSystem.js";
// user controller
export default {
  // create user
  createUser: async (user) => {
    try {
      // create user
      const id = await userEntity.createUser(user);
      // create token
      const accessToken = createToken(id);
      return accessToken;
    } catch (err) {
      logError("create user failed - " + err, "controller Error", "", {});
      throw err;
    }
  },
  // get users
  getUsers: async () => {
    try {
      // get users from db
      const users = await userEntity.getUsers();
      // return
      return users;
    } catch (err) {
      // log controller error
      logError('get users failed ' + err, 'controller error', '', {});
      // throw error
      throw err;
    }
  },
  // get user
  getUser: async (id) => {
    try {
      // get target user by id from db
      const user = await userEntity.getUserById(id);
      // return user
      return user;
    } catch (err) {
      // log error
      logError('get user faild - ' + err, 'controller Error', '', {});
      // throw error
      throw err;
    }
  },
  // delete user
  deleteUser: async (id) => {
    try {
      // delete user by id from db
      const user = await userEntity.deleteUser(id);
      // delete user files
      if(user) deleteFile(process.env.USER_AVATAR_PATH, user.avatar);
      // return deleted user or null 
      return user;
    } catch (err) {
      logError('delete user failed - ' + err, 'controller error', '', {});
      throw err;
    }
  },
  // edit user
  editUser: async (id, ediedUser) => {
    try {
      // edit user in db
      const user = await userEntity.editUser(id, ediedUser);
      // return user
      return user;
    } catch (err) {
      // log error
      logError('edit user failed - ' + err, 'controller error', '', {});
      // throw error
      throw err;
    }
  },
  // authenticate User
  authenticateUser: async (token) => {
    try {
      // convert token to id
      const id = verifyToken(token).id;
      // get user from db
      const user = await userEntity.getUserById(id);
      // return user
      return user;
    } catch (err) {
      logError("authenticate user failed - " + err, "controller Error", "", {});
      throw err;
    }
  },
  // check duplicate
  checkerDuplicateUser: async (user) => {
    try {
      // check duplicating
      const userName = await userEntity.getUserByUserName(user.userName);
      const phoneNumber = await userEntity.getUserByPhoneNumber(user.phoneNumber);
      const email = await userEntity.getUserByEmail(user.email);
      const isUserExists = userName || email || phoneNumber;
      if (isUserExists) return true;
      return false;
    } catch (err) {
      logError("check duplicating failed - " + err, 'user Controller error', '', {})
      throw err;
    }
  },
  // form data parser
  formDataParserForUser: () => {
    try {
      const parser = formDataParser(process.env.USER_AVATAR_PATH, 'avatar').single('image');
      return {
        parser,
        multerError
      }
    } catch (err) {
      logError('parsing form data for user failed - ' + err, 'controller error', '', {});
      throw err;
    }
  }
};
