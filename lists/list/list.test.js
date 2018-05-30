import List from './list';

describe('List test:', () => {
    
    test('test append()', () => {
        const list = new List();
        list.append(1);
        expect(list.length()).toBe(1);
    });
    
    test('test find()', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        const foundAt = list.find(2);
        expect(foundAt).toBe(1);
    });
    
    test('test remove()', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.length()).toBe(3);
        
        list.remove(2);
        const foundAt = list.find(2);
        expect(list.length()).toBe(2);
        expect(foundAt).toBe(-1);
    });
    
    test('test length()', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.length()).toBe(3);
    });
    
    test('test toString()', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.toString()).toBe('1,2,3');
    });
    
    test('test insert()', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(4);
        let foundAt = list.find(4);
        expect(foundAt).toBe(2);
        let result = list.insert(3, 2);
        foundAt = list.find(4);
        expect(foundAt).toBe(3);
        expect(result).toBe(true);
        expect(list.length()).toBe(4);
        
        result = list.insert(4, 7);
        expect(result).toBe(false);
        expect(list.length()).toBe(4);
    });
    
    test('test clear', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(4);
        expect(list.length()).toBe(3);
        
        list.clear();
        expect(list.length()).toBe(0);
    });
    
    test('test contains()', function () {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        let isContains = list.contains(2);
        expect(isContains).toBe(true);
        isContains = list.contains(5);
        expect(isContains).toBe(false);
    });
    
    test('test positioning within a list', () => {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);
        list.append(7);
        list.append(8);
        list.append(9);
        list.append(10);
        
        expect(list.currPos()).toBe(0);
        list.next();
        list.next();
        list.next();
        expect(list.currPos()).toBe(3);
        list.end();
        expect(list.currPos()).toBe(9);
        list.prev();
        list.prev();
        expect(list.currPos()).toBe(7);
        list.moveTo(5);
        expect(list.currPos()).toBe(5);
        const element = list.getElement();
        expect(element).toBe(6);
        list.front();
        expect(list.currPos()).toBe(0);
    });
});
