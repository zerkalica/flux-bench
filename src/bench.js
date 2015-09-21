/* eslint-env node */
import {Suite} from 'benchmark'
import imdiGetSetTest from './immutable-di/imdiGetSetTest'
import baobabGetSetTest from './baobab/baobabGetSetTest'
import reduxTest from './redux/redux-test'

import calibrate from './calibrate'

const suite = new Suite()

function onComplete() {
    const fastestHz = this.filter('fastest').pluck('hz')
    this.forEach(stat => {
        const rate = Math.ceil(stat.hz * 100 / fastestHz)
        console.log(stat.name, rate)
    })
}

suite
    .add('calibrate', calibrate)
    .add('imdiGetSetTest', imdiGetSetTest)
    .add('baobabGetSetTest', baobabGetSetTest)
    .add('reduxTest', reduxTest)
    .on('cycle', event => {
        console.log(event.target.toString())
    })
    .on('complete', onComplete)
    .run({
        async: true
    })
