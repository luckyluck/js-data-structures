import HashTable from './hash-table';

describe('HashTable test', () => {
    test('test add() and get()', () => {
        const hashTable = new HashTable();
        hashTable.add('beau', 'person');
        hashTable.add('fido', 'dog');
        hashTable.add('rex', 'dinosaur');
        hashTable.add('tux', 'penguin');
        expect(hashTable.lookup('rex')).toBe('dinosaur');
        expect(hashTable.lookup('beau')).toBe('person');
        expect(hashTable.lookup('ralf')).toBeUndefined();
    });

    test('test remove()', () => {
        const hashTable = new HashTable();
        hashTable.add('beau', 'person');
        hashTable.add('fido', 'dog');
        hashTable.add('rex', 'dinosaur');
        hashTable.add('tux', 'penguin');
        expect(hashTable.lookup('rex')).toBe('dinosaur');
        hashTable.remove('rex');
        expect(hashTable.lookup('rex')).toBeUndefined();
    });
});
