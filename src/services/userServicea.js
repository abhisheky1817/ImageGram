import { createUser, findUserByEmail } from "../repositories/userRepository.js"
import bcrypt from 'bcrypt';

export const signupUserService = async (user) => {
    try {
        const newUser = await createUser(user);

        return newUser;
    } catch (error) {
        if(error.name === "MongoServerError" && error.code === 11000) {
            throw {
                status: 400,
                message: "User with the same email or username already exists"
            }
        }
        throw error;
    }
}