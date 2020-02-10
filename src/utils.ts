export function isNumeric(char: string) {
    return /\d/.test(char);
}

export function isLowerCaseChar(char: string) {
    return /[a-z]/.test(char);
}

export function isUpperCaseChar(char: string) {
    return /[A-Z]/.test(char);
}

export function isOpeningBracket(char: string) {
    return /\(|\{|\[/.test(char);
}

export function isClosingBracket(char: string) {
    return /\)|\}|\]/.test(char);
}