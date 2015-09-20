export default function calibrate() {
    const arr = []
    const o = {}
    for (let i = 0; i < 10; i++) {
        o[i + 'r'] = 's' + i * 10
        arr.push('test.' + i / 2 * 100)
    }
}
