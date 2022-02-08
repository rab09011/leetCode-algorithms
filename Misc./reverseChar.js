/**** NOT COMPLETE */

//This algorithm will reverse each word in a string individually.
//i.e. "am i here" -> "here i am"

/*  
  logic:
  iterate over the array backwards until I find a space
  pointer at the end
  
  when space found:
  at current char, push onto new array the values until I reach the end pointer
  reset the end pointer to char after space
  
  for loop from length-1 to 0
  initial char pointer gets set to char after space
  end pointer is at length-1
  
  while inital pointer is not greater than the end pointer,
  push onto new array, each char
  reset end pointer to what it was -1
*/

const reverseWords = function(arr) {
  let result = [];

  if (arr.length === 1) return arr;
  if (arr.length === 0) return result;

  let end = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === " ") {
      initial = i + 1;

      for (let i = initial; i <= end; i++) {
        result.push(arr[i]);
      }

      result.push(" ");
      end = initial - 1;
    }

    for (let i = 0; i < end; i++) {
      result.push[arr[i]];
    }
  }

  result.pop();
  return result;
}

arr = ["a", "m", " ", "i", " ", "h", "e", "r", "e"];
arr2 = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  " ",
  "m",
  "a",
  "k",
  "e",
  "s",
  " ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e"
];

reverseWords(arr);
reverseWords(arr2);

console.log(arr, arr2);
