import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";
import { Validator } from "../utils/Validator";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [log, setLog] = useState({ type: '', content: '' });

    const navigate = useNavigate();

    useEffect(() => {
        if (log.content) {
            const timerId = setTimeout(() => setLog({ type: '', content: ''}), 2600);
            return () => clearTimeout(timerId);
        }
    }, [log]);

    const mutation = useMutation({
        mutationFn: authService.login,
        onSuccess: () => {
            setLog({ type: 'success', content: 'Login successfully! Redirecting...'})
            setTimeout(() => {
                navigate('/dashboard', { state: { email }, replace: true });
            }, 1500);
        },
        onError: () => {
            setLog({ type: 'error', content: err?.response?.data?.message || 'Login failed' });
        }
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLog({ type: '', content: '' });
        
        // validate data
        const emailError = Validator.validateEmail(email);
        if (emailError) {
            setLog({ type: 'error', content: emailError });
            return;
        }

        const passwordError = Validator.validatePasswordLogin(password);
        if (passwordError) {
            setLog({ type: 'error', content: passwordError });
            return;
        }

        mutation.mutate({ email, password });

    }

    return (
        <>
            <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">

                
                <div className="w-full h-screen md:h-auto md:max-w-[700px] border border-[#a7b9f2] p-[20px] bg-white/20 md:rounded-3xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center md:justify-start">
                    
                    <Link
                        to="/"
                        className="font-momo m-[20px] self-start text-[#fff]"
                    >
                        Home
                        <i className="fa-solid fa-house text-[#43E660] ml-[4px]"></i>
                    </Link>

                    <div
                        className="font-semibold text-[#fff] text-3xl font-momo"
                    >
                        Welcome back
                    </div>

                    <div
                        className="text-[#ccc] my-[10px]"
                    >
                        Log in to your account
                    </div>

                    <form
                        className="flex flex-col w-full justify-center items-center mt-[20px]"
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

                        <div className={`h-[20px] mb-[10px] ${log.type === 'error' ? 'text-[#ff303a]' : log.type === 'success' ? 'text-[#43E660]' : ''} font-semibold`}>
                            {log.content}
                        </div>

                        <button
                            className="cursor-pointer px-[40px] py-[12px] font-semibold rounded-3xl bg-[#000] hover:bg-[#676b5f] text-[#fff]"
                            onClick={handleSubmit}
                            disabled={mutation.isPending}
                        >
                            {mutation.isPending ? 'Logging in...' : 'Continue'}
                        </button>

                    </form>

                    <div className="mt-[20px] text-[#ccc]">
                        Don't have an account?
                        <Link 
                            to="/user/register"
                            className="ml-[4px] text-[#fff]"
                        >
                            Sign up
                        </Link>
                    </div>       


                </div>

            </div>
        </>
    )
}
