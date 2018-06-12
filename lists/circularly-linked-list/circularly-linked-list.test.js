import CLList from './circularly-linked-list';
//
describe('A CLList', () => {
    test('test insert()', () => {
        const list = new CLList();
        list.insert('Conway', 'head');
        list.insert('Russellville', 'Conway');
        list.insert('Alma', 'Russellville');

        expect(list.head.next.element).toBe('Conway');
        expect(list.head.next.next.element).toBe('Russellville');
        expect(list.head.next.next.next.element).toBe('Alma');
    });

    test('test find()', () => {
        const list = new CLList();
        list.insert('Conway', 'head');
        list.insert('Russellville', 'Conway');
        list.insert('Alma', 'Russellville');

        const element = list.find('Russellville');

        expect(element.element).toBe('Russellville');
        expect(element.next).not.toBe(null);
        expect(element.next.element).toBe('Alma');
    });

    test('test remove()', () => {
        const list = new CLList();
        list.insert('Conway', 'head');
        list.insert('Russellville', 'Conway');
        list.insert('Alma', 'Russellville');

        let element = list.find('Russellville');
        expect(element.element).toBe('Russellville');

        list.remove('Russellville');

        element = list.find('Russellville');
        expect(element.element).not.toBe('Russellville');
    });
});
