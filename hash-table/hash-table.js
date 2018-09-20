/**
 * Hash Table JS implementation
 */

/**
 * Simple hash generator for demonstrative purposes
 * @param str - string to insert
 * @param max - maximum numbers of storing buckets
 * @returns {number} - generated hash
 */
let hash = (str, max) => {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }

    return hash % max;
};

class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 4;
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
