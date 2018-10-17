class Dictionary {
    constructor() {
        this.datastore = [];
    }

    add(key, value) {
        this.datastore[key] = value;
    }

    find(key) {
        return this.datastore[key];
    }

    remove(key) {
        delete this.datastore[key];
    }

    /**
     * Returns the number of added pairs
     * @returns {number}
     */
    count() {
        return Object.keys(this.datastore).length;
    }

    /**
     * Removing everything from the dictionary
     */
    clear() {
        for (const key of Object.keys(this.datastore)) {
            delete this.datastore[key];
            // this.remove(key);
        }
    }

    showAll() {
        for (const key of Object.keys(this.datastore)) {
            console.log(key, '->', this.datastore[key]);
        }
    }
}
