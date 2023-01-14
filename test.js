let arr = [
    {
        "item": {
            "displayOrder": 0,
            "phase": {
                "displayOrder": 0
            }
        }
    },
    {
        "item": {
            "displayOrder": 3,
            "phase": {}
        }
    },
    {
        "item": {
            "displayOrder": 0,
            "phase": {
                "displayOrder": 1
            }
        }
    },
    {
        "item": {
            "displayOrder": 2,
            "phase": {}
        }
    },
    {
        "item": {
            "displayOrder": 1,
            "phase": {
                "displayOrder": 0
            }
        }
    },
    {
        "item": {
            "displayOrder": 1,
            "phase": {}
        }
    }
]   
    // chat gpt
//    let result = arr.sort(function(a, b) {
//       if (a.item.displayOrder < b.item.displayOrder) {
//         return -1;
//       }
//       if (a.item.displayOrder > b.item.displayOrder) {
//         return 1;
//       }
//       if (a.item.displayOrder === b.item.displayOrder) {
//         if (a.item.phase.displayOrder < b.item.phase.displayOrder) {
//           return -1;
//         }
//         if (a.item.phase.displayOrder > b.item.phase.displayOrder) {
//           return 1;
//         }
//         if (a.item.phase.displayOrder === b.item.phase.displayOrder) {
//           return 0;
//         }
//       }
//     });


let result2 = arr.sort((a, b) => {
  if (a.item.displayOrder > b.item.displayOrder) {
    return 1;
  }
  if (a.item.displayOrder < b.item.displayOrder) {
    return -1;
  }
  if (a.item.phase.displayOrder > b.item.phase.displayOrder) {
    return 1;
  }
  if (a.item.phase.displayOrder < b.item.phase.displayOrder) {
    return -1;
  }
  return 0;
});

  //copied code
// App = { isNull(value) {
//     return typeof value === 'undefined' || value === null;
// }}

// const sortByDisplayOrder = (a, b) => {
//     if (!App.isNull(a.item.phase) && App.isNull(b.item.phase)) {
//         return 1;
//     }

//     if (App.isNull(a.item.phase) && !App.isNull(b.item.phase)) {
//         return -1;
//     }

//     if (
//         (App.isNull(a.item.phase) && App.isNull(b.item.phase)) ||
//         a.item.phase.displayOrder === b.item.phase.displayOrder
//     ) {
//         return a.item.displayOrder - b.item.displayOrder;
//     }

//     return a.item.phase.displayOrder - b.item.phase.displayOrder;
// };


//let result = arr.sort(sortByDisplayOrder)
//console.log(JSON.stringify(result));
console.log(result2);

            // expectedBudgetItemsOrdered [
        //     { item: { displayOrder: 1, phase: null } },
        //     { item: { displayOrder: 2, phase: null } },
        //     { item: { displayOrder: 3, phase: null } },
        //     { item: { displayOrder: 0, phase: [Object] } },
        //     { item: { displayOrder: 1, phase: [Object] } },
        //     { item: { displayOrder: 0, phase: [Object] } }
        //   ]