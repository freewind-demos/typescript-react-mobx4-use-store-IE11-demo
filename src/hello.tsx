import {observer} from 'mobx-react';
import React from 'react'
import {Counter} from './modal';

type Props = {
  counter: Counter
}

function Hello({counter}: Props) {
  return <div>
    <button onClick={() => counter.count += 1}>+1</button>
    <h1>Count: {counter.count}</h1>
  </div>
}

export default observer(Hello)
