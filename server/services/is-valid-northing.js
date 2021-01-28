module.exports = {
  get: (northing) => {
    var formattedNorthing = northing.trim()
    var response = { northingError: '', isValid: false }
    if (formattedNorthing) {
      if (!isNaN(formattedNorthing)) {
        if (formattedNorthing >= 1 && formattedNorthing <= 1300000) {
          response.northingError = ''
          response.isValid = true
        } else {
          response.northingError = 'Northing should be between 1 and 1300000 '
          response.isValid = false
        }
      } else {
        response.northingError = 'Northing should be a number'
        response.isValid = false
      }
    } else {
      response.northingError = 'Enter a northing'
      response.isValid = false
    }
    return response
  }
}