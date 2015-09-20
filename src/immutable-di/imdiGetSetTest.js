import {Factory, Setter} from 'immutable-di/define'
import Container from 'immutable-di/container'
import NativeCursor from 'immutable-di/cursors/native'

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

const cursor = new NativeCursor(state)

const A = Factory([['a', 'b']])(v => v)
const B = Factory([['a', 'b', 'c', 'e']])(v => v)
const C = Factory([['a', 'b', 'd'], A, B, ['a', 'b', 'c', 'k']])((p, a, b, k) => ({p, a, b, k}))

const container = new Container(cursor)
const get = container.get
const set1 = get(Setter(['a', 'b', 'c', 'e']))
const set2 = get(Setter(['a', 'b', 'd']))
const set3 = get(Setter(['a', 'b', 'c', 'k']))

export default function imdiGetSetTest() {
    set1('test.abce.' + Math.random())
    set3('test.abck.' + Math.random())
    set2('test.abd.' + Math.random()).commit()
    if (get(C));
}
