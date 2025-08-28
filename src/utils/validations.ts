export function validateEmail(email: string): boolean {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}