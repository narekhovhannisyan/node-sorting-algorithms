/**
 * Sorts given `array` using insertion sort algorithm.
 * @param {Array} array - The array to sort.
 * @returns {Array}
 */
const insertionSort = (array) => {
  const arrayLength = array.length

  let i = 1
  for (i; i < arrayLength; i++) {

    let j = i
    while (j >= 0 && array[j - 1] > array[j]) {
      array[j] = array[j] + array[j - 1]
      array[j - 1] = array[j] - array[j - 1]
      array[j] = array[j] - array[j - 1]

      j--
    }
  }

  return array
}

module.exports = insertionSort;
