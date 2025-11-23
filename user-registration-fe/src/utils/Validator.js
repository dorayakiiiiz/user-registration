const validateEmail = (email) => {
    if (!email || email.trim() === "") return "Please input email.";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "Invalid email format.";
    return null;
}

const validatePasswordRegister = (password) => {
    if (!password || password.trim() === "") return "Please input password.";
    if (password.length < 5) return "Password must be at least 5 characters.";
    return null;
}

const validatePasswordLogin = (password) => {
    if (!password || password.trim() === "") return "Please input password.";
    return null;
}

export const Validator = {
    validateEmail,
    validatePasswordRegister,
    validatePasswordLogin
};