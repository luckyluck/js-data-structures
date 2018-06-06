import List from '../list';

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

/**
 * Modify the video-rental kiosk program so that when a movie checked out it is
 * added to a list of rented movies. Display this list whenever a customer checks out
 * a movie
 */
function checkOutMovie(movieList, rentedList, movie) {
    // we can iterate through the list till we find appropriate movie
    // for (movieList.front(); movieList.currPos() < movieList.length(); movieList.next()) {
    //     if (movie === movieList.getElement()) {
    //         rentedList.append(movieList.getElement());
    //         movieList.remove(movie);
    //         displayMovieList(rentedList);
    //         break;
    //     }
    // }
    
    // we can just add/remove movie, but there is no guarantee that we have this movie in our least
    // or that this movie was already returned
    // rentedList.append(movie);
    // movieList.remove(movie);
    // displayMovieList(rentedList);
    
    // or we can just check if there is a movie in the list
    // here we have a guarantee that only existing movie will be rent
    if (movieList.contains(movie)) {
        rentedList.append(movie);
        movieList.remove(movie);
        displayMovieList(rentedList);
    }
}

function displayMovieList(list) {
    console.log('Rented movie list:');
    for (list.front(); list.currPos() < list.length(); list.next()) {
        console.log((list.currPos() + 1) + '. ' + list.getElement());
    }
}

list.append('The Shawshank Redemption');
list.append('The Godfather');
list.append('The Godfather: Part II');
list.append('Pulp Fiction');
list.append('The Good, the Bad and the Ugly');
list.append('12 Angry Men');
list.append('Schidnler\'s List');
list.append('The Dark Knight');
list.append('The Lord of the Rings: The Return of the King');
list.append('Fight Club');
list.append('Star Wars: Episode V - The Empire Strikes Back');
list.append('One Flew Over the Cuckoo\'s Nest');
list.append('The Lord of the Rings: The Fellowship of the Ring');
list.append('Inception');
list.append('Goodfellas');
list.append('Star Wars');
list.append('Seven Samurai');
list.append('The Matrix');
list.append('Forrest Gump');
list.append('City of God');

const rentedMovies = new List();

checkOutMovie(list, rentedMovies, 'The Shawshank Redemption');
checkOutMovie(list, rentedMovies, 'Pulp Fiction');
checkOutMovie(list, rentedMovies, 'The Dark Knight');
checkOutMovie(list, rentedMovies, 'Fight Club');
checkOutMovie(list, rentedMovies, 'Inception');
checkOutMovie(list, rentedMovies, 'The Matrix');
checkOutMovie(list, rentedMovies, 'Forrest Gump');
console.log('=======================');

// list.clear();

/**
 * Create a check-in function for the video-rental kiosk program so that a returned
 * movies is deleted from the rented
 */
function checkIn(movieList, rentedList, movie) {
    if (rentedList.contains(movie)) {
        movieList.append(movie);
        rentedList.remove(movie);
        displayMovieList(rentedList);
    }
}

checkIn(list, rentedMovies, 'Fight Club');
checkIn(list, rentedMovies, 'Inception');
checkIn(list, rentedMovies, 'The Matrix');
checkIn(list, rentedMovies, 'Forrest Gump');
console.log('=======================');

list.clear();

