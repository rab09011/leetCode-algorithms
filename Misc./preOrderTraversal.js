function PreorderTraversal(strArr) {
  //parent = n/2;
  //left = n*2;
  //right = n*2 + 1;
  //leaf node: is index i > (n/2)?

  const recursion = (index) => {
    let output = [];
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (strArr[index] != "#") {
      output.push(strArr[index]);
    } else return [];

    if (strArr[left]) {
      output = output.concat(recursion(left));
    }

    if (strArr[right]) {
      output = output.concat(recursion(right));
    }

    return output;
  };

  let result = recursion(0);

  return result.join(" ");
}

const result = PreorderTraversal([
  "5",
  "2",
  "6",
  "1",
  "9",
  "#",
  "8",
  "#",
  "#",
  "#",
  "#",
  "4",
  "#"
]);

console.log(result);
