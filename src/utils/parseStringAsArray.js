module.exports = function parseStringAsArray(arrayAsString){
  try {
    return arrayAsString
      .split(',').map(diameter => Number(diameter.trim()))
      .filter(diameter => diameter !== 0)
  } catch (error) {
    return false
  }
}