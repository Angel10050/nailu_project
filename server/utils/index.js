'use strict'

function validateData(props, data) {
  let valid = true
  props.forEach(item => {
    if (!data[item]) {
      valid = false
    }
  })

  return valid
}

module.exports = {
  validateData
}