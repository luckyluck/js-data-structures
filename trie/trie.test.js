import Trie from './trie';

describe('test Trie', () => {

    test('test add() and print()', () => {
        const trie = new Trie();

        expect(trie.print()).toBeNull();

        trie.add('ball');
        trie.add('bat');
        trie.add('doll');
        trie.add('dork');
        trie.add('do');
        trie.add('dorm');
        trie.add('send');
        trie.add('sense');

        expect(trie.print()).not.toBeNull();
        expect(trie.print().length).toBe(8);
    });

    test('test isWord()', () => {
        const trie = new Trie();
        trie.add('ball');
        trie.add('bat');

        expect(trie.isWord('ball')).toBeTruthy();
        expect(trie.isWord('bal')).toBeFalsy();
        expect(trie.isWord('bat')).toBeTruthy();
        expect(trie.isWord('bold')).toBeFalsy();
    });
});
