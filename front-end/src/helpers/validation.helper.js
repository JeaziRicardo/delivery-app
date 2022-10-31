const loginValidation = ({ loginName, loginEmail, loginPassword }) => {
  const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isValidate = emailRegex.test(loginEmail);
  const MIN_PASSWORD_LENGTH = 6;
  const MIN_NAME_LENGTH = 12;
  if (!loginName) {
    return !(isValidate && loginPassword.length >= MIN_PASSWORD_LENGTH);
  }
  return !(isValidate
    && loginPassword.length >= MIN_PASSWORD_LENGTH
    && loginName.length > MIN_NAME_LENGTH
  );
};

export default loginValidation;
