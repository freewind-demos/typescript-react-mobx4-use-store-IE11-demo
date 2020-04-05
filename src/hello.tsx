import {observer} from 'mobx-react';
import React from 'react'
import {Counter} from './modal';

type Props = {
  counter: Counter
}

function Hello({counter}: Props) {
  return <div>
    <button onClick={() => counter.increase()}>+1</button>
    <div>Count: {counter.count}</div>
    <div>Double: {counter.double}</div>
  </div>
}

export default observer(Hello)
