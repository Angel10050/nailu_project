'use strict'

function validateData (props, data) {
  return props.every(key => data[key]);
}

function validateEmail (value) {
  const regExpPassword = new RegExp( /^(([^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+(\.[^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  console.log("esto es una prueba", regExpPassword.test(value));
  return regExpPassword.test(value);
}

function validatePhone (value) {
  const regExpPassword = new RegExp(/^([0-9])*$/);
  return regExpPassword.test(value);
}

module.exports = {
  validateData, validateEmail, validatePhone
}
