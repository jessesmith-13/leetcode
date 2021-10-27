// Write a function that takes in an array of at leasr two integers and that returns an array of the starting and ending indices of 
// the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted 
// (in ascending order). iIf the input array is already sorted, the function should return [-1, -1]

function subarraySort(array) {
	const sortedArray = array.slice(0).sort((a, b) => a - b);
	let start = 0,
			end = array.length - 1;
	while (start < end) {
		if (array[start] === sortedArray[start]) {
			start++;
		} else {
			break;
		}
	}
	while (end > start) {
		if (array[end] === sortedArray[end]) {
			end--;
		} else {
			break;
		}
	}
	if (start === end) {
		return [-1, -1]
	}
	return [start, end];
}

const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]; //[3, 9]
