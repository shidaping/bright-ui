/*
This error happens because webpack doesn't support es6 modules

if you are using babel to transpile es6 code then use the default keyword like

require('./components/Hello').default
so the routes will be

const routes = [{
    path:"/",
    getComponents(location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./components/Hello').default)
        })
    }
}];
see: http://stackoverflow.com/questions/36194806/invariant-violation-the-root-route-must-render-a-single-element-error-in-react
*/
const rootRoute = {
  path: '/',
  // component: require('modules/example/components/main').default,  // eslint-disable-line global-require
  indexRoute: {
    component: require( // eslint-disable-line global-require
      'modules/example/pages/home' // eslint-disable-line
    ).default,
  },
  childRoutes: [
    {
      path: 'toast',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-toast' // eslint-disable-line
      ).default,
    },
    {
      path: 'loading',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-loading' // eslint-disable-line
      ).default,
    },
    {
      path: 'modal',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-modal' // eslint-disable-line
      ).default,
    },
    {
      path: 'form',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-form' // eslint-disable-line
      ).default,
    },
    {
      path: 'switch',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-switch' // eslint-disable-line
      ).default,
    },
    {
      path: 'alert',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-alert' // eslint-disable-line
      ).default,
    },
    {
      path: 'dialog',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-dialog' // eslint-disable-line
      ).default,
    },
    {
      path: 'button',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-button' // eslint-disable-line
      ).default,
    },
    {
      path: 'table',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-table' // eslint-disable-line
      ).default,
    },
    {
      path: 'form',
      component: require( // eslint-disable-line global-require
        'modules/example/pages/page-form' // eslint-disable-line
      ).default,
    },
    {
      path: '*',
      component: require( // eslint-disable-line global-require
        'modules/error/components/not-found.js' // eslint-disable-line
      ).default,
    },
  ],
};

export default rootRoute;
