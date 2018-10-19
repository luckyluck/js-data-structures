/**
 * Custom Set implementation
 * @constructor
 */
function MySet() {
    // collection will hold the Set
    this.collection = [];
}

/**
 * Method will check for the presence of an element and return true or false
 * @param element
 * @returns {boolean}
 */
MySet.prototype.has = function (element) {
    return this.collection.indexOf(element) !== -1;
};

/**
 * Method will return all the values in the Set
 * @returns {Array}
 */
MySet.prototype.values = function () {
    return this.collection;
};

/**
 * Method will add an element to the Set
 * ONLY if there is no such element in the Set
 * @param element
 * @returns {boolean}
 */
MySet.prototype.add = function (element) {
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
MySet.prototype.remove = function (element) {
    if (this.has(element)) {
        var index = this.collection.indexOf(element);
        this.collection.splice(index, 1);

        return true;
    }

    return false;
};

/**
 * Method will return the size of the collection
 * @returns {number}
 */
MySet.prototype.size = function () {
    return this.collection.length;
};

/**
 * Method will return the union of two Sets as a new Set
 * @param otherSet - second Set to combine with
 * @returns {MySet} - new Set with unique elements from both Sets
 */
MySet.prototype.union = function (otherSet) {
    var unionSet = new MySet();

    this.values().forEach(function (element) {
        unionSet.add(element);
    });

    otherSet.values().forEach(function (element) {
        unionSet.add(element);
    });

    return unionSet;
};

/**
 * Method will return the intersection of two Sets as a new Set
 * @param otherSet - second Set
 * @returns {MySet} - new Set with elements, which were found in both Sets
 */
MySet.prototype.intersection = function (otherSet) {
    var intersectionSet = new MySet();

    this.values().forEach(function (element) {
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
MySet.prototype.difference = function (otherSet) {
    var differenceSet = new MySet();

    this.values().forEach(function (element) {
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
MySet.prototype.subset = function (otherSet) {
    // This is not a required part of the check
    // But anyway if the set is bigger than otherSat it a priori cannot be a subset of otherSet
    if (this.size() > otherSet.size()) {
        return false;
    }

    return this.values().every(function (element) {
        return otherSet.has(element);
    });
};

export default MySet;
