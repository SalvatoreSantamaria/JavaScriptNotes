let testInput = [
    { item: { displayOrder: 2, phase: null } },
    { item: { displayOrder: 1, phase: {displayOrder: 0}} },
    { item: { displayOrder: 1, phase: null } },
    { item: { displayOrder: 0, phase: {displayOrder: 0}} },
    { item: { displayOrder: 0, phase: {displayOrder: 1}} },
    { item: { displayOrder: 3, phase: null } },
  ]


let expectedBudgetItemsOrdered = [
    { item: { displayOrder: 1, phase: null } },
    { item: { displayOrder: 2, phase: null } },
    { item: { displayOrder: 3, phase: null } },
    { item: { displayOrder: 0, phase: {displayOrder: 0}} },
    { item: { displayOrder: 1, phase: {displayOrder: 0}} },
    { item: { displayOrder: 0, phase: {displayOrder: 1}} },
  ]


  const sortByDisplayOrder = (input) => {
    return input.sort((a, b) => {
        if(a.item.displayOrder === 0 && b.item.displayOrder !== 0) {
            return 1;
        }
        if(b.item.displayOrder === 0 && a.item.displayOrder !== 0) {
            return -1;
        }
        if(a.item.phase && b.item.phase) {
            if(a.item.phase.displayOrder === 0 && b.item.phase.displayOrder !== 0 ) {
                return 1;
            }
            if(b.item.phase.displayOrder === 0 && a.item.phase.displayOrder !== 0 ) {
                return -1;
            }
        }
        return a.item.displayOrder - b.item.displayOrder;
    });
  }
  

  let result = sortByDisplayOrder(testInput);


console.log('result', result)