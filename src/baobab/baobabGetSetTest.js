import Baobab from 'baobab'
const monkey = Baobab.dynamicNode

const state = {
    a: {
        b: {
            d: 'test1',
            c: {
                k: 'test3',
                e: 'test2'
            }
        }
    }
}

const baobab = new Baobab(state)

baobab.set(['facets', 'A'], monkey(
    ['a', 'b'],
    v => v
))

baobab.set(['facets', 'B'], monkey(
    ['a', 'b', 'c', 'e'],
    v => v
))

baobab.set(['facets', 'D'], monkey(
    ['a', 'b', 'd'],
    ['facets', 'A'],
    ['facets', 'B'],
    ['a', 'b', 'c', 'k'],
    (p, a, b, k) => ({p, a, b, k})
))

const set1 = baobab.select(['a', 'b', 'c', 'e'])
const set2 = baobab.select(['a', 'b', 'd'])
const set3 = baobab.select(['a', 'b', 'c', 'k'])
const node = baobab.select('facets', 'D')

export default function imdiGetSetTest() {
    set1.set('test.abce.' + Math.random())
    set3.set('test.abck.' + Math.random())
    set2.set('test.abd.' + Math.random())
    baobab.commit()
    if (node.get());
}
