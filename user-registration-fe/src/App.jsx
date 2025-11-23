import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/user/login" element={<LoginPage />} />
                <Route path="/user/register" element={<RegisterPage />} />

                <Route path="/dashboard" element={<DashboardPage />} />

            </Routes>
        </Router>

    )
}

export default App
