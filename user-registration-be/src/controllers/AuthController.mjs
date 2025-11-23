import bcrypt from "bcrypt"
import User from "../models/User.mjs";
import { validateRegisterInput } from '../utils/validator.mjs';

const saltRounds = 10;

class AuthController {
    // [POST] /user/register
    async register(req, res, next) {
        try {

            const { email, password } = req.body;

            const error = validateRegisterInput(email, password);
            if (error) 
                return res.status(400).json({ message: error });

            const user = await User.findOne({ email });
            if (user) 
                return res.status(400).json({ message: 'User existed.'});

            const hashPassword = await bcrypt.hash(password, saltRounds);

            const newUser = await User.create({
                email,
                password: hashPassword
            });

            res.json({ message: 'Register successfully!', userId: newUser._id });
            
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // [POST] /auth/login
    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user)
                return res.status(404).json({ message: 'Email does not exist.'});

            const match = await bcrypt.compare(password, user.password);
            if (!match) 
                return res.status(400).json({ message: 'Incorrect password.' });

            res.json({ message: 'Login successfully!' });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}

export default new AuthController();