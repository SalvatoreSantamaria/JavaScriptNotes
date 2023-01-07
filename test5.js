const draw = {}

const getItem = (itemDisplayOrder, phaseDisplayOrder) => ({
    item: {
        displayOrder: itemDisplayOrder,
        phase: Number.isNaN(phaseDisplayOrder) ? null : { displayOrder: phaseDisplayOrder },
    },
});

const ungroupedItem1 = getItem(1);
const ungroupedItem2 = getItem(2);
const ungroupedItem3 = getItem(3);
const group1Item1 = getItem(0, 0);
const group1Item2 = getItem(1, 0);
const group2Item1 = getItem(0, 1);

const budgetItems = [
    group1Item1,
    ungroupedItem3,
    group2Item1,
    ungroupedItem2,
    group1Item2,
    ungroupedItem1,
];
draw.items = [...budgetItems]

console.log('1 draw', draw)

///----------------------------------------------------------------

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


//This is the algo that I want

App = { isNull(value) {
    return typeof value === 'undefined' || value === null;
}}

const sortBudgetItemsByDisplayOrder = (budgetItems) => {
    //console.log('dashboards draw', draw);

    //const budgetItems = draw.attr('items').attr();
    console.log('dashboards budgetItems input', JSON.stringify(budgetItems));//this gives me a very confusing Can.js object 
    
    const sortByDisplayOrder = (a, b) => {
        if (!App.isNull(a.item.phase) && App.isNull(b.item.phase)) {
            return 1;
        }

        if (App.isNull(a.item.phase) && !App.isNull(b.item.phase)) {
            return -1;
        }

        if (
            (App.isNull(a.item.phase) && App.isNull(b.item.phase)) ||
            a.item.phase.displayOrder === b.item.phase.displayOrder
        ) {
            return a.item.displayOrder - b.item.displayOrder;
        }

        return a.item.phase.displayOrder - b.item.phase.displayOrder;
    };

    const budgetItemsOrderedByDisplayOrder = budgetItems.sort(sortByDisplayOrder);
    console.log('result', budgetItemsOrderedByDisplayOrder)
    //draw.attr('items', budgetItemsOrderedByDisplayOrder);
}

sortBudgetItemsByDisplayOrder(testInput)