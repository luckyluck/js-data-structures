/**
 * Hash Table JS implementation
 */

/**
 * Hash generator
 * which uses algorithm known as Horner's method for the better hash
 * @param str - string to insert
 * @param max - maximum numbers of storing buckets
 * @returns {number} - generated hash
 */
let hash = (str, max) => {
    const H = 37; // prime constant
    let total = 0;

    for (let i = 0; i < str.length; i++) {
        total += H * total + str.charCodeAt(i);
    }

    return parseInt(total % max, 10);
};

class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 137; // a prime number
    }

    /**
     * Adding new key:value pair into the table
     * @param key
     * @param value
     */
    add(key, value) {
        let index = hash(key, this.storageLimit);

        if (!this.storage[index]) {
            this.storage[index] = [
                [key, value]
            ];
        } else {
            let inserted = false;

            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }

            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    }

    /**
     * Removing from the table by key
     * @param key
     */
    remove(key) {
        let index = hash(key, this.storageLimit);

        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                    break;
                }
            }
        }
    }

    /**
     * Get value by key
     * @param key
     * @returns {*}
     */
    lookup(key) {
        let index = hash(key, this.storageLimit);

        if (!this.storage[index]) {
            return undefined;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }
}

export default HashTable;
