module.exports = function getMeanOfArray(array){
  try {
    const total = array.reduce((accumulator, currentValue) => accumulator + currentValue)
    
    return Number(total/array.length).toFixed(2)
  } catch (error) {
    alert(error)
  }

}