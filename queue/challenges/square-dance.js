import Queue from '../queue.es6';

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

const males = new Queue();
const females = new Queue();

females.enqueue(new Dancer('Allison McMillan', 'F'));
males.enqueue(new Dancer('Frank Opitz', 'M'));
males.enqueue(new Dancer('Mason McMillan', 'M'));
males.enqueue(new Dancer('Clayton Ruff', 'M'));
females.enqueue(new Dancer('Cheryl Ferenback', 'F'));
males.enqueue(new Dancer('Raymond Williams', 'M'));
females.enqueue(new Dancer('Jennifer Ingram', 'F'));
males.enqueue(new Dancer('Bryan Frazer', 'M'));
males.enqueue(new Dancer('David Durr', 'M'));
males.enqueue(new Dancer('Danny Martin', 'M'));
females.enqueue(new Dancer('Aurora Adney', 'F'));

/**
 * Function pairs up the male amd female dancers and announces the pairings
 * @param males
 * @param females
 */
function dance(males, females) {
    console.log('The dance partners are:');
    
    while (!females.empty() && !males.empty()) {
        console.log('Female dancer is:', females.dequeue());
        console.log('Male dancer is:', males.dequeue());
    }
}

dance(females, males);
if (!females.count()) {
    console.log(females.front().name, ' is waiting to dance.')
}
if (!males.empty()) {
    console.log(males.front().name, ' is waiting to dance.')
}
