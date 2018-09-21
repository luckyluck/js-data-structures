import LinkedList from './linked-list';

describe('LinkedList test', () => {

    test('test insert() && size()', () => {
        const list = new LinkedList();
        expect(list.size()).toBe(0);
        list.insert('Conway');
        list.insert('Russellville');
        list.insert('Alma');
        expect(list.size()).toBe(3);
    });

    test('test isEmpty()', () => {
        const list = new LinkedList();
        expect(list.isEmpty()).toBeTruthy();
        list.insert('Conway');
        expect(list.isEmpty()).toBeFalsy();
    });

    test('test indexOf()', () => {
        const list = new LinkedList();
        list.insert('Conway');
        list.insert('Russellville');
        list.insert('Alma');

        expect(list.indexOf('Conway')).toBe(0);
        expect(list.indexOf('Alma')).toBe(2);
        expect(list.indexOf('John')).toBe(-1);

    });

    test('test remove()', () => {
        const list = new LinkedList();
        list.insert('Conway');

        expect(list.indexOf('Conway')).toBe(0);
        expect(list.isEmpty()).toBeFalsy();
        list.remove('Conway');
        expect(list.indexOf('Conway')).toBe(-1);
        expect(list.isEmpty()).toBeTruthy();
    });

    test('test elementAt()', () => {
        const list = new LinkedList();
        list.insert('Conway');
        list.insert('Russellville');
        list.insert('Alma');

        expect(list.elementAt(0)).toBe('Conway');
        expect(list.elementAt(2)).toBe('Alma');
        expect(list.elementAt(15)).toBeUndefined();
    });

    test('test addAt()', () => {
        const list = new LinkedList();
        list.insert('Russellville');
        list.insert('Alma');
        expect(list.addAt(15, 'Conway')).toBeFalsy();
        expect(list.addAt(1, 'Conway')).toBeTruthy();
    });

    test('test removeAt()', () => {
        const list = new LinkedList();
        list.insert('Conway');
        list.insert('Russellville');
        list.insert('Alma');

        expect(list.removeAt(15)).toBeNull();
        expect(list.removeAt(1)).toBe('Russellville');
    });
});
