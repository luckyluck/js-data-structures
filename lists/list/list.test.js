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
});
