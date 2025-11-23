export const validateRegisterInput = (email, password) => {
    if (!email || email.trim() === "") return "Please input email.";

    if (!password || password.trim() === "") return "Please input password.";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return 'Invalid email format.';
    }

    if (password.length < 5) {
        return 'Password must be at least 5 characters.';
    }

    return null;
};