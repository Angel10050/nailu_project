'use strict'

function validateData (props, data) {
  let valid = true
  props.forEach(key => {
    if (!data[key]) {
      valid = false
    }
  });
  return valid
}

module.exports = {
  validateData
}
