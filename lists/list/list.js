/**
 * List implemented reading the book "Data Structures and Algorithms with JavaScript" by Michael McMillan
 */

export default class List {
    constructor() {
        this.listSize = 0; // number of elements in list
        this.pos = 0; // current position in list
        this.dataStore = []; // initializes an empty array to store list elements
    }
    
    /**
     * Adding an Element to a List
     * @param element
     */
    append(element) {
        this.dataStore[this.listSize++] = element;
    }
    
    /**
     * Finding an element in the list
     * @param element
     * @returns {number} - return index of the element or -1 if there is no such element
     */
    find(element) {
        const l = this.dataStore.length; // small optimization for the for loop
        for (let i = 0; i < l; ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        
        return -1;
    }
    
    /**
     * Removing element from a list
     * @param element
     */
    remove(element) {
        const foundAt = this.find(element);
        
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            
            return true;
        }
        
        return false;
    }
    
    /**
     * Determining the number of elements in a list
     * @returns {number}
     */
    length() {
        return this.listSize;
    }
    
    /**
     * Retrieving a list's elements
     * @returns {Array}
     */
    toString() {
        return this.dataStore.join(',');
    }
    
    /**
     * Inserting an element into a list
     * @param element
     * @param after
     */
    insert(element, after) {
        const insertPos = this.find(after);
        
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            
            return true;
        }
        
        return false;
    }
}
