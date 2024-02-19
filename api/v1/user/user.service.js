// imports
import User from "./user.model.js";
import * as dbError from '../../../utils/devLog.js';
// user service
export default {
    createUser: async function (user) {
        try {
            return (await User.create(user))._id;
        } catch (err) {
            dbError.createInstanceError(err, 'User');
            throw err;
        }
    },
    getUsers: async () => {
        try {
            return await User.find();
        } catch (err) {
            dbError.readInstanceError(err, 'User');
            throw err;
        }
    },
    getUserById: async (_id) => {
        try {
            // get user by id
            return await User.findById(_id);
        } catch (err) {
            // log db error
            dbError.readInstanceError(err, 'User');
            // throw error
            throw err;
        }
    },
    deleteUser: async (id) => {
        try {
            // delete user by id from db
            const user = await User.findByIdAndDelete({ _id: id });
            // return deleted user or null
            return user;
        } catch (err) {
            // log error
            dbError.deleteInstanceError(err, 'User');
            // throw error
            throw err;
        }
    },
    editUser: async (id, user) => {
        try {
            // edit user 
            return await User.findByIdAndUpdate(id, user, {new: true});
        } catch (err) {
            // log db error
            dbError.updateInstanceError(err, 'User');
            // throw error
            throw err;
        }
    },
    getUserByEmail: async (email) => {
        try {
            return await User.findOne({ email });
        } catch (err) {
            dbError.readInstanceError(err, 'User');
            throw err;
        }
    },
    getUserByPhoneNumber: async (phoneNumber) => {
        try {
            return await User.findOne({ phoneNumber });
        } catch (err) {
            dbError.readInstanceError(err, 'User');
            throw err;
        }
    },
    getUserByUserName: async (userName) => {
        try {
            return await User.findOne({ userName });
        } catch (err) {
            dbError.readInstanceError(err, 'User');
            throw err;
        }
    },
};
