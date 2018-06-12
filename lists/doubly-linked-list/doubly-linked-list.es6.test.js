import DLList from './doubly-linked-list.es6';

describe('A DLList', () => {
    test('test insert()', () => {
        const list = new DLList();
        list.insert('Conway', 'head');
        list.insert('Russellville', 'Conway');
        list.insert('Alma', 'Russellville');
        
        expect(list.head.next.element).toBe('Conway');
        
        expect(list.head.next.next.element).toBe('Russellville');
        expect(list.head.next.next.previous.element).toBe('Conway');
        
        expect(list.head.next.next.next.element).toBe('Alma');
        expect(list.head.next.next.next.previous.element).toBe('Russellville');
    });
    
    test('test findLast()', () => {
        const list = new DLList();
        list.insert('Conway', 'head');
        list.insert('Russellville', 'Conway');
        list.insert('Alma', 'Russellville');
        
        const element = list.findLast('Russellville');
        
        expect(element.element).toBe('Russellville');
        expect(element.next).not.toBe(null);
        expect(element.next.element).toBe('Alma');
    });
    
    test('test remove()', () => {
        const list = new DLList();
        list.insert('Conway', 'head');
        list.insert('Russellville', 'Conway');
        list.insert('Alma', 'Russellville');
        
        let element = list.findLast('Russellville');
        expect(element).not.toBe(null);
        
        list.remove('Russellville');
        
        element = list.findLast('Russellville');
        expect(element).toBe(null);
    });
});
