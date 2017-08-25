import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import Main from './components/main'

import * as reducers from './reducers'
import routes from './routes'
import 'components/style/index.less';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-b" changePositionKey="ctrl-q" defaultIsVisible={false}>
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)
const reducer = combineReducers({
  ...reducers, // eslint-disable-line
  routing: routerReducer
})
let store = null;
store = createStore(
  reducer,
  compose(applyMiddleware(thunk), DevTools.instrument()),
)

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Main>
      <div>
        <Router routes={routes} history={history} />
        <DevTools />
      </div>
    </Main>
  </Provider>,
  document.getElementById('app')
)