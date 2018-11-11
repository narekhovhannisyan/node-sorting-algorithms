/**
 * Sorts given `array` using optimized selection sort algorithm.
 * @param {Array} array - The array to sort.
 * @returns {Array}
 */
const selectionSort = (array) => {
  const arrayLength = array.length

  let i = 0
  for (i; i <= arrayLength - 1; i++) {
    let isPlaceChanged = false

    let j = i + 1
    for (j; j <= arrayLength - 1; j++) {
      if (array[i] > array[j]) {
        array[j] = array[j] + array[i]
        array[i] = array[j] - array[i]
        array[j] = array[j] - array[i]
        isPlaceChanged = true
      }

      if (j === arrayLength - 1 && !isPlaceChanged) {
        break
      }
    }
  }

  return array
}

module.exports = selectionSort
