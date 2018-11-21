/**
 * Sorts given `array` using optimized bubble sort algorithm.
 * @param {Array} array - The array to sort.
 * @returns {Array}
 */
const bubbleSort = (array) => {
  const arrayLength = array.length

  let i = 0
  for (i; i <= arrayLength - 1; i++) {
    let isSwapped = false

    let j = 0
    for (j; j <= arrayLength - 1; j++) {
      if (array[j] > array[j + 1]) {
        array[j] = array[j] + array[j + 1]
        array[j + 1] = array[j] - array[j + 1]
        array[j] = array[j] - array[j + 1]
        isSwapped = true
      }
    }

    if (!isSwapped) {
      break
    }
  }

  return array
}

module.exports = bubbleSort;
