import List from './list';

const list = new List();

/**
 * Write a function that inserts an element into a list only if the element to be inserted is larger than any
 * of the elements currently in the list. Larger can mean either greater than when working with numeric values,
 * or further down in the alphabet, when working with textual values.
 */
function addOnlyGreater(element, list) {
    let canAdd = true;
    
    if (list.length() > 0) {
        for (list.front(); list.currPos() < list.length(); list.next()) {
            if (element < list.getElement()) {
                canAdd = false;
                break;
            }
        }
    }

    if (canAdd) {
        list.append(element);
    }
}

addOnlyGreater(1, list);
console.log('list:', list.toString());
addOnlyGreater(2, list);
console.log('list:', list.toString());
addOnlyGreater(5, list);
console.log('list:', list.toString());
addOnlyGreater(3, list);
console.log('list:', list.toString());
