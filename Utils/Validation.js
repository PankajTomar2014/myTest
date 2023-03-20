
export const validateEmail = email => {
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-\.]+)\.([a-zA-Z]{2,5})$/;
  email = email.trim();

  if (email == '' || email == undefined || email == null) {
    return {status: false, error: 'Please enter email'};
  } else if (!emailRegex.test(email)) {
    return {status: false, error: 'Email is not valid'};
  } else {
    return {status: true, error: ''};
  }
};


export const validatePassword = no => {
  no = no.trim();
  if (no == '' || no == undefined || no == null) {
    return {status: false, error: 'Please enter password'};
  } 
  else if (no.length < 6 ) {
    return {status: false, error: 'Password min length is 6 characters'};
  } 
  else {
    return {status: true, error: ''};
  }
};

