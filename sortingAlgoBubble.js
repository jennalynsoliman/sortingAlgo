//PROBLEM 6


// creating function to sort numbers using the bubble sort method.
function bubbleSort(numbers) {
    // We'll keep track of whether any swaps happened in each pass.
    let swapped; // to track if any swaps occured in the current pass
  
    // this process repeats until the array is sorted.
    do {
      swapped = false; // this reset the the swapped flag at the beginning of each pass
  
      // this compare adjacent pairs of numbers.
      for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) { // the current number is greater than the next one this need to swap them.
          // this perform swap using array destructuring
          [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
          swapped = true; //set the swapped flog to true if a swap is occured
          console.log(`Swapped ${numbers[i + 1]} and ${numbers[i]}`); //this log the swap for debugging
        }
      }
    } while (swapped);  // this continues the loop as long as any swaps occured in the previous
  
    // on this part the array is now sorted
    return numbers;
  }
  
  // 
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const number = parseInt(`prompt(Enter number ${i + 1}:)`); //this gets the user input and convert it into integer
    numbers.push( number); // push () method to add the entered number to the array
  }
  
  // this sort the numbers using the bubble sort function.
  const sortedNumbers = bubbleSort(numbers);
  
  // this finally print the sorted numbers.
  console.log("Sorted numbers: ", sortedNumbers);