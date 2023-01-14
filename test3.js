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

  const sortInput = (input) => {
    return input.sort(function (a, b) {
        if (a.item.displayOrder !== b.item.displayOrder) {
            return a.item.displayOrder - b.item.displayOrder;
        }
        if (a.item.phase === null && b.item.phase !== null) {
            return -1;
        }
        if (a.item.phase !== null && b.item.phase === null) {
            return 1;
        }
        if (a.item.phase !== null && b.item.phase !== null) {
            return a.item.phase.displayOrder - b.item.phase.displayOrder;
        }
        return 0;
    });
};

let sortedInput = sortInput(testInput);

console.log(sortedInput); // expectedBudgetItemsOrdered
