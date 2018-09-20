import MySet from './MySet.es6';

describe('MySet ES6 test:', function () {

    test('test add() and values()', function () {
        const set = new MySet();
        set.add('a');
        expect(set.values().toString()).toBe('a');
        set.add('b');
        set.add('c');
        expect(set.values().toString()).toBe('a,b,c');
    });

    test('test has()', function () {
        const set = new MySet();
        set.add('a');
        expect(set.has('a')).toBeTruthy();
        expect(set.has('b')).toBeFalsy();
    });

    test('test remove()', function () {
        const set = new MySet();
        set.add('a');
        set.add('b');
        set.add('c');
        expect(set.values().toString()).toBe('a,b,c');
        set.remove('b');
        expect(set.values().toString()).toBe('a,c');
    });

    test('test size()', function () {
        const set = new MySet();
        set.add('a');
        set.add('b');
        set.add('c');
        expect(set.size()).toBe(3);
    });

    test('test union()', function () {
        const setA = new MySet();
        setA.add('a');
        setA.add('b');
        setA.add('c');
        const setB = new MySet();
        setB.add('a');
        setB.add('c');
        setB.add('d');
        setB.add('e');
        const unionSet = setA.union(setB);
        expect(unionSet.size()).toBe(5);
        expect(unionSet.values().toString()).toBe('a,b,c,d,e');
    });

    test('test intersection()', function () {
        const setA = new MySet();
        setA.add('a');
        setA.add('b');
        setA.add('c');
        const setB = new MySet();
        setB.add('a');
        setB.add('c');
        setB.add('d');
        setB.add('e');
        const intersectionSet = setA.intersection(setB);
        expect(intersectionSet.size()).toBe(2);
        expect(intersectionSet.values().toString()).toBe('a,c');
    });

    test('test difference()', function () {
        const setA = new MySet();
        setA.add('a');
        setA.add('b');
        setA.add('c');
        setA.add('f');
        const setB = new MySet();
        setB.add('a');
        setB.add('c');
        setB.add('d');
        setB.add('e');
        const differenceSet = setA.difference(setB);
        expect(differenceSet.size()).toBe(2);
        expect(differenceSet.values().toString()).toBe('b,f');
    });

    test('test subset()', function () {
        const setA = new MySet();
        setA.add('a');
        setA.add('b');
        setA.add('c');
        const setB = new MySet();
        setB.add('a');
        setB.add('c');
        setB.add('d');
        setB.add('e');
        expect(setA.subset(setB)).toBeFalsy();
        setA.remove('b');
        setA.add('d');
        expect(setA.subset(setB)).toBeTruthy();
    });
});
