import { Link, useLocation } from "react-router-dom"

export default function DashboardPage() {
    const location = useLocation();
    const { email } = location.state;

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
            <div className="w-full md:max-w-[500px] h-screen md:max-h-[300px] border border-[#a7b9f2] bg-white/20 md:rounded-3xl backdrop-blur-md flex flex-col gap-[30px] items-center justify-center font-momo text-3xl text-[#fff]">
                <div className="mx-[20px]">
                    <div>
                        Welcome, 
                        <div className="mt-[5px] text-[#26c5ff]">{email}</div>
                    </div>
                    <div className="text-xl mt-[20px]">
                        You are now logged in
                    </div>
                </div>
                    
                <Link
                    to="/"
                    className="font-momo text-[#fff]"
                >
                    <i className="fa-solid fa-house text-[#43E660] ml-[4px]"></i>
                </Link>
            </div>
        </div>
    )
}