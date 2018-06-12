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
     * @returns {String}
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
    
    /**
     * Removing all elements from a list
     */
    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    
    /**
     * Determing if a Given value is in a list
     * @param element
     */
    contains(element) {
        for (const item of this.dataStore) {
            if (item === element) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Moving position to the beginning within a list
     */
    front() {
        this.pos = 0;
    }
    
    /**
     * Moving position to the end within a list
     */
    end() {
        if (this.listSize > 1) {
            this.pos = this.listSize - 1;
        }
    }
    
    /**
     * Moving position to the previous one within a list
     */
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    
    /**
     * Moving position to the next one within a list
     */
    next() {
        if (this.pos < this.listSize) {
            ++this.pos;
        }
    }
    
    /**
     * Returning current position in a list
     * @returns {number|*}
     */
    currPos() {
        return this.pos;
    }
    
    /**
     * Moving list's position to the given one
     * @param position
     */
    moveTo(position) {
        // TODO: what if position is out of list?
        this.pos = position;
    }
    
    /**
     * Move current node n indexes forward
     * Move till the end if n bigger than the list
     * @param n
     */
    advance(n) {
        if (n >= 0 &&  this.pos + n < this.dataStore.length) {
            this.pos += n;
        } else {
            this.pos = this.dataStore.length - 1;
        }
    }
    
    /**
     * Move current node n indexes backward
     * Move till the zero if n bigger than the current pos
     * @param n
     */
    back(n) {
        this.pos -= n < this.pos ? n : this.pos;
    }
    
    /**
     * Returning element in the current position
     * @returns {*}
     */
    getElement() {
        return this.dataStore[this.pos];
    }
}
