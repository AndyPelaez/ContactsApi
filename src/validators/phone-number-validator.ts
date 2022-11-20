export function phoneNumberValidator(value: string) {
  const numberRegexp = /^[0-9]+$/;
  return value.length < 15 && numberRegexp.test(value);
}
