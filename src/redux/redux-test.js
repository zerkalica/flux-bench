import { createStore } from 'redux';

const stub = {
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

function counter(state, action) {
  state = state || stub;
  switch (action.type) {
  case 'set1':
    var ex = {
      ...state,
    };
    ex.a.b.c.e = action.num;
    return ex;
  case 'set3':
  var ex = {
    ...state
  };
  ex.a.b.c.k = action.num;
    return ex;
  case 'set2':
    var ex = {
      ...state
    };
    ex.a.b.d = action.num;
    return ex;
  default:
    return state;
  }
}

let store = createStore(counter);

export default function reduxTest() {
  store.dispatch({ type: 'set1', num: 'test.abce.' + Math.random() });
  store.dispatch({ type: 'set3', num: 'test.abck.' + Math.random() });
  store.dispatch({ type: 'set2', num: 'test.abd.' + Math.random() });
  if (store.getState());
}
