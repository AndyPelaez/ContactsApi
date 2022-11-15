export function emailValidator(value: string) {
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegexp.test(value)
}
