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

  const sortArray = (array) => array.sort((a, b) => {
    if (a.item.displayOrder === b.item.displayOrder) {
      return a.item.phase.displayOrder - b.item.phase.displayOrder;
    }
    return a.item.displayOrder - b.item.displayOrder;
  });
  
  
  console.log(sortArray(testInput));
  

  
