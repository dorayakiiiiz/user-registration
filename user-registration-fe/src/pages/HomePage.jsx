import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
            <div className="w-full md:max-w-[600px] h-screen md:max-h-[400px] border border-[#a7b9f2] shadow-2xl bg-white/20 md:rounded-3xl backdrop-blur-md flex flex-col items-center justify-center gap-[40px]">
                <div className="font-momo text-3xl text-[#fff]">
                    User registration form
                </div>

                <div className="flex items-center justify-center gap-[40px]">
                    <Link
                        to="/user/login"
                        className="h-[60px] w-[160px] rounded-3xl bg-[#3b96f7] hover:bg-[#87c1ff] text-[#fff] font-semibold font-quicksand text-xl flex items-center justify-center"
                    >
                        <i className="fa-solid fa-arrow-right-to-bracket mr-[10px]"></i>
                        Login
                    </Link>
                    <Link
                        to="/user/register"
                        className="h-[60px] w-[160px] rounded-3xl bg-[#b51af2] hover:bg-[#d877ff] text-[#fff] font-semibold font-quicksand text-xl flex items-center justify-center"
                    >
                        <i className="fa-solid fa-user-plus mr-[10px]"></i>
                        Register
                    </Link>

                </div>
            </div>
        </div>
    )
}