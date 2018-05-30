import List from './list';

describe('List test:', function () {
    
    test('test append()', function () {
        const list = new List();
        list.append(1);
        expect(list.length()).toBe(1);
    });
    
    test('test find()', function () {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        const foundAt = list.find(2);
        expect(foundAt).toBe(1);
    });
    
    test('test remove()', function () {
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
    
    test('test length()', function () {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.length()).toBe(3);
    });
    
    test('test toString()', function () {
        const list = new List();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.toString()).toBe('1,2,3');
    });
    
    test('test insert()', function () {
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
});
