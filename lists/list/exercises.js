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
console.log('=======================');

list.clear();

/**
 * Write a function that inserts an element into a list only if the element to be inserted is smaller
 * than any of the elements currently in the list
 */
function addOnlySmaller(element, list) {
    let canAdd = true;
    
    if (list.length() > 0) {
        for (list.front(); list.currPos() < list.length(); list.next()) {
            if (element > list.getElement()) {
                canAdd = false;
                break;
            }
        }
    }
    
    if (canAdd) {
        list.append(element);
    }
}

addOnlySmaller(5, list);
console.log('list:', list.toString());
addOnlySmaller(2, list);
console.log('list:', list.toString());
addOnlySmaller(5, list);
console.log('list:', list.toString());
addOnlySmaller(6, list);
console.log('list:', list.toString());
addOnlySmaller(1, list);
console.log('list:', list.toString());
console.log('=======================');

list.clear();

/**
 * Create a Person class that stores a person's name an their gender. Create a list of
 * at least 10 Person objects. Write a function that displays all the people in the list of
 * the same gender.
 */
class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

function displayByGender(list, gender) {
    if (list.length() > 0) {
        for (list.front(); list.currPos() < list.length(); list.next()) {
            if (list.getElement().gender === gender) {
                console.log(list.getElement().name, ':', list.getElement().gender);
            }
        }
    }
}

list.append(new Person('Name 1', 'male'));
list.append(new Person('Name 2', 'female'));
list.append(new Person('Name 3', 'male'));
list.append(new Person('Name 4', 'female'));
list.append(new Person('Name 5', 'male'));
list.append(new Person('Name 6', 'female'));
list.append(new Person('Name 7', 'male'));
list.append(new Person('Name 8', 'female'));
list.append(new Person('Name 9', 'male'));
list.append(new Person('Name 10', 'female'));

displayByGender(list, 'male');
console.log('=======================');
displayByGender(list, 'female');
console.log('=======================');

list.clear();


