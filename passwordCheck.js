/**
 * Перевірка складності паролю
 * @param {string} password - Пароль для перевірки
 * @returns {string} - "Strong" або "Weak"
 */
function checkPasswordStrength(password) {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    if (hasMinLength && hasNumber && hasLowercase && hasUppercase) {
        return "Strong";
    }
    return "Weak";
}
