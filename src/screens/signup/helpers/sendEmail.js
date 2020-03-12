const sendEmail = ({
  userFirstName,
  userLastName,
  userEmail,
  employeeId,
  accountId,
  password
}) => {
    const subject = 'Welcome to LHL! Please check your account info and edit it.'
    const body = `Hello ${userFirstName}!${'%0D%0A'} ${'%0D%0A'}Welcome to LHL!${'%0D%0A'}We are very excited to have you on our team.${'%0D%0A'}We have created your account to check your shifts.${'%0D%0A'}You can use this account ID / PW to login.${'%0D%0A'}Please make sure to change your password.${'%0D%0A'} ${'%0D%0A'} ${'%0D%0A'}Your account info: ${'%0D%0A'}${'%0D%0A'}Name: ${userFirstName} ${userLastName}${'%0D%0A'}Employee ID: ${employeeId}${'%0D%0A'}Login ID: ${accountId}${'%0D%0A'}Temporary PW: ${password}${'%0D%0A'}${'%0D%0A'}${'%0D%0A'}Thank you!${'%0D%0A'} ${'%0D%0A'}Lighthouse Labs
    `
    window.open(`mailto:${userEmail}?subject=${subject}&body=${body}`);
};

export default sendEmail;