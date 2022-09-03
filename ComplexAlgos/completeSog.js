/************************
 
    We want to index a small book about animals, and then retrieve the location of specific words from the index.
    In the book, each page is broken up into separate lines.
    Lines are separated by new-line characters. Within each line, words are separated by spaces.
    The index should be case-insensitive, and should preserve any punctuation in the words.
    There are two methods below to be filled in, index_page and find_word.
    The index_page method should take in a page of the book, and add it to the index.
    The find_word method should retrieve the location of a word from the index, in the form of [page_number, line_number].
    This method should return the location of only the first occurrence of the word. 
    Example:
        let page_num = 1; 
        let text = 'I study penguins for my job\nThey do not fly.'
        let indexer = new PageIndexer();
        indexer.index_page(page_num, text)
        indexer.find_word('penguins')
        > [1, 1] //page number 1, line number 1
        indexer.find_word('fly.')
        > [1, 2]
***********************/

function PageIndexer() { 
  // The index_page method should take in a page of the book, and add it to the index.
  this.index_page = function(page_num, text) {
      /** 
      * Indexes a given page of the book
      * @param page_num: the page number
      * @param text: the page's text
      */
      // console.log('page_num', page_num)
      // console.log('text', text)
      
      const splitLine = text.split('\n')
      console.log('split ', splitLine)
      let obj = {}
      for (let i = 0; i < splitLine.length; i++) {
        const splitWord = splitLine[i].split(' ')
          for (let j = 0; j < splitWord; j++) {
            
          }
      }
      console.log('obj ', obj)


  }


  // The find_word method should retrieve the location of a word from the index, in the form of [page_number, line_number].
  // indexer.find_word('penguins')
  // > [1, 1] //page number 1, line number 1
  // indexer.find_word('fly.')
  // > [1, 2]
  this.find_word = function(word) {
      /**
      * Finds a given word
      * @param word: the word to find
      * @return: The location of the word, in terms of [page_num, line_num], or undefined if not found
      */
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