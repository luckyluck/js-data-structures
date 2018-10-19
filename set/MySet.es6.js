/**
 * Custom Set ES6 implementation
 * @constructor
 */
class MySet {
    constructor() {
        // collection will hold the Set
        this.collection = [];
    }

    /**
     * Method will check for the presence of an element and return true or false
     * @param element
     * @returns {boolean}
     */
    has(element) {
        return this.collection.includes(element);
    };

    /**
     * Method will return all the values in the Set
     * @returns {Array}
     */
    values() {
        return this.collection;
    };

    /**
     * Method will add an element to the Set
     * ONLY if there is no such element in the Set
     * @param element
     * @returns {boolean}
     */
    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            return true;
        }

        return false;
    };

    /**
     * Method will remove an element from a Set
     * @param element
     * @returns {boolean}
     */
    remove(element) {
        if (this.has(element)) {
            let index = this.collection.indexOf(element);
            this.collection.splice(index, 1);

            return true;
        }

        return false;
    };

    /**
     * Method will return the size of the collection
     * @returns {number}
     */
    size() {
        return this.collection.length;
    };

    /**
     * Method will return the union of two Sets as a new Set
     * @param otherSet - second Set to combine with
     * @returns {MySet} - new Set with unique elements from both Sets
     */
    union(otherSet) {
        let unionSet = new MySet();

        this.values().forEach(element => {
            unionSet.add(element);
        });

        otherSet.values().forEach(element => {
            unionSet.add(element);
        });

        return unionSet;
    };

    /**
     * Method will return the intersection of two Sets as a new Set
     * @param otherSet - second Set
     * @returns {MySet} - new Set with elements, which were found in both Sets
     */
    intersection(otherSet) {
        let intersectionSet = new MySet();

        this.values().forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });

        return intersectionSet;
    };

    /**
     * Method will return the difference of two Sets as a new Set
     * @param otherSet - second Set
     * @returns {MySet} - new Set with elements, which were found in the first Set but not in the second
     */
    difference(otherSet) {
        let differenceSet = new MySet();

        this.values().forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });

        return differenceSet;
    };

    /**
     * Method will test if the Set is a subset of a given Set
     * @param otherSet - given Set
     * @returns {boolean} - true, if the set is completely contained in the given Set
     */
    subset(otherSet) {
        // This is not a required part of the check
        // But anyway if the set is bigger than otherSat it a priori cannot be a subset of otherSet
        if (this.size() > otherSet.size()) {
            return false;
        }
        return this.values().every(element => otherSet.has(element));
    };
}


export default MySet;
