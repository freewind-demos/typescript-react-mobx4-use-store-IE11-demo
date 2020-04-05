import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'
import {Counter} from './modal';

ReactDOM.render(
  <Hello counter={new Counter()}/>,
  document.body
)
