"use strict";


// 1. printIndices
// const fruit = ['cherry', 'berry', 'apple']
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for(const i in items) {
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);
}

// We can also simplify the function by taking advantage of the fact that the difference of a - b will always be

// negative if a is less than b

// positive if a is greater than b

// 0 if a is equivalent to b
// const nums = [1, 30, 4, 21, 100000]
// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItem = items.sort((a,b) => a-b);
  // const reverseItem = sortedItem.slice(0,n);
  sortedItem.reverse();
  const smallestItem = sortedItem[(sortedItem.length - 1)];


  console.log(smallestItem)
}
