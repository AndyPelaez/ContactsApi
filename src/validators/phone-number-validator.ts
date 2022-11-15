export function phoneNumberValidator(value: string) {
  const numberRegexp = / \d+ /;
  return value.length < 12 && numberRegexp.test(value);
}
