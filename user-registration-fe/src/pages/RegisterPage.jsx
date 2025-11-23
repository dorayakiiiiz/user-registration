// code các page trong này, gọi các service xử lí API từ folder service

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

import { authService } from "../services/authService";
import { Validator } from "../utils/Validator";


export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [log, setLog] = useState({ type: '', content: '' });

    useEffect(() => {
        if (log.content) {
            const timerId = setTimeout(() => setLog({ type: '', content: ''}), 2600);
            return () => clearTimeout(timerId);
        }
    }, [log]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // validate data
        const emailError = Validator.validateEmail(email);
        if (emailError) {
            setLog({ type: 'error', content: emailError });
            return;
        }

        const passwordError = Validator.validatePasswordRegister(password);
        if (passwordError) {
            setLog({ type: 'error', content: passwordError });
            return;
        }
        
        try {
            await authService.register({
                email,
                password
            });

            setLog({
                type: 'success',
                content: 'Register successfully! Redirecting to login page...'
            });

            setTimeout(() => {
                navigate('/user/login');
            }, 3000);

        } catch (err) {
            setLog({
                type: 'error',
                content: err?.response?.data?.message || 'Error occured. Try again later.'
            });
        }
        
    }

    return (
      
        <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">

            <div className="w-full h-screen md:h-auto max-w-[700px] border border-[#a7b9f2] p-[20px] bg-white/20 md:rounded-3xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center md:justify-start">
                
                <Link
                    to="/"
                    className="font-momo text-[#fff] m-[20px] self-start"
                >
                    Home
                    <i className="fa-solid fa-house text-[#43E660] ml-[4px]"></i>
                </Link>

                <div
                    className="font-semibold text-[#fff] text-3xl font-momo"
                >
                    Register account
                </div>

                <div
                    className="text-[#ccc] my-[5px]"
                >
                    Sign up an account now!
                </div>

                <form
                    className="flex flex-col w-full justify-center items-center mt-[10px]"
                >

                    <input 
                        type="email"
                        value={email}
                        className="h-[50px] w-full max-w-[400px] my-[10px] rounded-xl bg-[#f7f8f6] px-[20px]"
                        placeholder="Input your email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        type="password"
                        value={password}
                        className="h-[50px] w-full max-w-[400px] my-[10px] rounded-xl bg-[#f7f8f6] px-[20px]"
                        placeholder="Input your password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <div className={`h-[20px] mb-[10px] ${log.type === 'error' ? 'text-[#ff303a]' : log.type === 'success' ? 'text-[#43E660] success-text' : ''} font-semibold`}>
                        {log.content}
                    </div>

                    <button
                        className="cursor-pointer px-[40px] py-[12px] font-semibold rounded-3xl bg-[#000] hover:bg-[#676b5f] text-[#fff]"
                        onClick={handleSubmit}
                    >
                        Create account
                    </button>

                </form>                

                <div className="mt-[10px] text-[#ccc]">
                    Already have an account?
                    <Link 
                        to="/user/login"
                        className="ml-[4px] text-[#fff]"
                    >
                        Log in
                    </Link>
                </div>      


            </div>
        </div>
    )
}