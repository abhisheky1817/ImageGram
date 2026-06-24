import { signinUserService, signupUserService } from "../services/userService.js";

export async function signup(req, res) {
    try {
        const user = await signupUserService(req.body);
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export async function signin(req, res) {
    try {
        const response = await signinUserService(req.body);
        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data: response
        });
    } catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const signinUserService = async (userDetails) => {
    try {
        // 1. Check if there is a valid registsred user with the email
        const user = await findUserByEmail(userDetails.email);
        if(!user) {
            throw {
                status: 404,
                message: "User not found"
            }
        }

        // 2. Compare the password
        const isPasswordValid = bcrypt.compareSync(userDetails.password, user.password);

        if(!isPasswordValid) {
            throw {
                status: 401,
                message: "Invalid password"
            }
        }

        const token = generateJwtToken({ email: user.email, _id: user._id, username: user.username, role: user.role || "user"  });

        return token;


    } catch (error) {
        throw error;
    }
}