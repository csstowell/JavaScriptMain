"use strict";
// word_counts = {}

// for word in phrase.split(' '):
//     if word in word_counts:
//         word_counts[word] += 1;
//     else:
//         word_counts[word] = 1;

// return word_counts

// 1. countWords
function countWords(phrase) {
    const wordCount = {};
    for (const word of phrase.split(' ')){
      if (wordCount[word]){
        wordCount[word] += 1
      } 
      else{
        wordCount[word] = 1
      }
  
    }
    return wordCount
}

// def print_melon_at_price(price):
//     """Return the list of melons that cost `price`.

//     Arguments:
//         price (float)

//     Returns:
//         list: List of melons that cost `price`
//         None: If there are no melons that cost `price`
//     """

//     melon_prices = {
//         2.50: ['Cantaloupe', 'Honeydew'],
//         2.95: ['Watermelon'],
//         3.25: ['Musk', 'Crenshaw'],
//         14.25: ['Christmas']
//     }

//     if price not in melon_prices:
//         return

//     return sorted(melon_prices[price])

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // const melons_at_price = []
  const melon_prices = {
            2.50: ['Cantaloupe', 'Honeydew'],
            2.95: ['Watermelon'],
            3.25: ['Musk', 'Crenshaw'],
            14.25: ['Christmas']
        };

  if (!melon_prices[price]){
    return;
  }
     

  return melon_prices[price].sort();
}
