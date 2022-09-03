function PageIndexer() { 
  let mapPage = new Map()
  let mapLine = new Map()
  this.index_page = function(page_num, text) {
      const splitLine = text.split('\n')
      for (let i = 0; i < splitLine.length; i++) {
        const splitWords = splitLine[i].split(' ')
          for (let j = 0; j < splitWords.length; j++) {
            mapPage.set(splitWords[j], page_num)
            mapLine.set(splitWords[j], (i+1))
          }
      }
  }
  this.find_word = function(word) {
    return([mapPage.get(word), mapLine.get(word)])
  }
}
let book = [
  {'page_num': 2, 'text': "The best four-legged animal is the alpaca due to the fur.\nTurtles are also very cool."},
  {'page_num': 1, 'text': 'Animals live all over the world.\nAnywhere and everywhere you look.'},
  {'page_num': 3, 'text': 'Birds like to fly, and do it a lot.\nThere are many birds in Europe.\nAnd also many animals there.'}
];

let indexer = new PageIndexer();
book.forEach((page) => {
  indexer.index_page(page['page_num'], page['text']);
});

let test_case_one = indexer.find_word('alpaca');
if (JSON.stringify(test_case_one) === '[2,1]') {
  console.log("TRUE");
} else {
  console.log(`FALSE: ${test_case_one} is your result. The correct result is [2, 1]`);
}
