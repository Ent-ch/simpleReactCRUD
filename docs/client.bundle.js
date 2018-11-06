/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/App.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@blueprintjs/core/src/blueprint.scss":
/*!***********************************************************!*\
  !*** ./node_modules/@blueprintjs/core/src/blueprint.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/react-router-redux/lib/actions.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/actions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

function updateLocation(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: CALL_HISTORY_METHOD,
      payload: { method: method, args: args }
    };
  };
}

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
var push = exports.push = updateLocation('push');
var replace = exports.replace = updateLocation('replace');
var go = exports.go = updateLocation('go');
var goBack = exports.goBack = updateLocation('goBack');
var goForward = exports.goForward = updateLocation('goForward');

var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ }),

/***/ "./node_modules/react-router-redux/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-redux/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

var _reducer = __webpack_require__(/*! ./reducer */ "./node_modules/react-router-redux/lib/reducer.js");

Object.defineProperty(exports, 'LOCATION_CHANGE', {
  enumerable: true,
  get: function get() {
    return _reducer.LOCATION_CHANGE;
  }
});
Object.defineProperty(exports, 'routerReducer', {
  enumerable: true,
  get: function get() {
    return _reducer.routerReducer;
  }
});

var _actions = __webpack_require__(/*! ./actions */ "./node_modules/react-router-redux/lib/actions.js");

Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
  enumerable: true,
  get: function get() {
    return _actions.CALL_HISTORY_METHOD;
  }
});
Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function get() {
    return _actions.push;
  }
});
Object.defineProperty(exports, 'replace', {
  enumerable: true,
  get: function get() {
    return _actions.replace;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _actions.go;
  }
});
Object.defineProperty(exports, 'goBack', {
  enumerable: true,
  get: function get() {
    return _actions.goBack;
  }
});
Object.defineProperty(exports, 'goForward', {
  enumerable: true,
  get: function get() {
    return _actions.goForward;
  }
});
Object.defineProperty(exports, 'routerActions', {
  enumerable: true,
  get: function get() {
    return _actions.routerActions;
  }
});

var _sync = __webpack_require__(/*! ./sync */ "./node_modules/react-router-redux/lib/sync.js");

var _sync2 = _interopRequireDefault(_sync);

var _middleware = __webpack_require__(/*! ./middleware */ "./node_modules/react-router-redux/lib/middleware.js");

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.syncHistoryWithStore = _sync2['default'];
exports.routerMiddleware = _middleware2['default'];

/***/ }),

/***/ "./node_modules/react-router-redux/lib/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/middleware.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = routerMiddleware;

var _actions = __webpack_require__(/*! ./actions */ "./node_modules/react-router-redux/lib/actions.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
function routerMiddleware(history) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type !== _actions.CALL_HISTORY_METHOD) {
          return next(action);
        }

        var _action$payload = action.payload,
            method = _action$payload.method,
            args = _action$payload.args;

        history[method].apply(history, _toConsumableArray(args));
      };
    };
  };
}

/***/ }),

/***/ "./node_modules/react-router-redux/lib/reducer.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-redux/lib/reducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routerReducer = routerReducer;
/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

var initialState = {
  locationBeforeTransitions: null
};

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
function routerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  if (type === LOCATION_CHANGE) {
    return _extends({}, state, { locationBeforeTransitions: payload });
  }

  return state;
}

/***/ }),

/***/ "./node_modules/react-router-redux/lib/sync.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-redux/lib/sync.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = syncHistoryWithStore;

var _reducer = __webpack_require__(/*! ./reducer */ "./node_modules/react-router-redux/lib/reducer.js");

var defaultSelectLocationState = function defaultSelectLocationState(state) {
  return state.routing;
};

/**
 * This function synchronizes your history state with the Redux store.
 * Location changes flow from history to the store. An enhanced history is
 * returned with a listen method that responds to store updates for location.
 *
 * When this history is provided to the router, this means the location data
 * will flow like this:
 * history.push -> store.dispatch -> enhancedHistory.listen -> router
 * This ensures that when the store state changes due to a replay or other
 * event, the router will be updated appropriately and can transition to the
 * correct router state.
 */
function syncHistoryWithStore(history, store) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$selectLocationSt = _ref.selectLocationState,
      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

  // Ensure that the reducer is mounted on the store and functioning properly.
  if (typeof selectLocationState(store.getState()) === 'undefined') {
    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
  }

  var initialLocation = void 0;
  var isTimeTraveling = void 0;
  var unsubscribeFromStore = void 0;
  var unsubscribeFromHistory = void 0;
  var currentLocation = void 0;

  // What does the store say about current location?
  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
    var locationState = selectLocationState(store.getState());
    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
  };

  // Init initialLocation with potential location in store
  initialLocation = getLocationInStore();

  // If the store is replayed, update the URL in the browser to match.
  if (adjustUrlOnReplay) {
    var handleStoreChange = function handleStoreChange() {
      var locationInStore = getLocationInStore(true);
      if (currentLocation === locationInStore || initialLocation === locationInStore) {
        return;
      }

      // Update address bar to reflect store state
      isTimeTraveling = true;
      currentLocation = locationInStore;
      history.transitionTo(_extends({}, locationInStore, {
        action: 'PUSH'
      }));
      isTimeTraveling = false;
    };

    unsubscribeFromStore = store.subscribe(handleStoreChange);
    handleStoreChange();
  }

  // Whenever location changes, dispatch an action to get it in the store
  var handleLocationChange = function handleLocationChange(location) {
    // ... unless we just caused that location change
    if (isTimeTraveling) {
      return;
    }

    // Remember where we are
    currentLocation = location;

    // Are we being called for the first time?
    if (!initialLocation) {
      // Remember as a fallback in case state is reset
      initialLocation = location;

      // Respect persisted location, if any
      if (getLocationInStore()) {
        return;
      }
    }

    // Tell the store to update by dispatching an action
    store.dispatch({
      type: _reducer.LOCATION_CHANGE,
      payload: location
    });
  };
  unsubscribeFromHistory = history.listen(handleLocationChange);

  // History 3.x doesn't call listen synchronously, so fire the initial location change ourselves
  if (history.getCurrentLocation) {
    handleLocationChange(history.getCurrentLocation());
  }

  // The enhanced history uses store as source of truth
  return _extends({}, history, {
    // The listeners are subscribed to the store instead of history
    listen: function listen(listener) {
      // Copy of last location.
      var lastPublishedLocation = getLocationInStore(true);

      // Keep track of whether we unsubscribed, as Redux store
      // only applies changes in subscriptions on next dispatch
      var unsubscribed = false;
      var unsubscribeFromStore = store.subscribe(function () {
        var currentLocation = getLocationInStore(true);
        if (currentLocation === lastPublishedLocation) {
          return;
        }
        lastPublishedLocation = currentLocation;
        if (!unsubscribed) {
          listener(lastPublishedLocation);
        }
      });

      // History 2.x listeners expect a synchronous call. Make the first call to the
      // listener after subscribing to the store, in case the listener causes a
      // location change (e.g. when it redirects)
      if (!history.getCurrentLocation) {
        listener(lastPublishedLocation);
      }

      // Let user unsubscribe later
      return function () {
        unsubscribed = true;
        unsubscribeFromStore();
      };
    },


    // It also provides a way to destroy internal listeners
    unsubscribe: function unsubscribe() {
      if (adjustUrlOnReplay) {
        unsubscribeFromStore();
      }
      unsubscribeFromHistory();
    }
  });
}

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reducers = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");

var _history = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");

__webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");

__webpack_require__(/*! @blueprintjs/core/src/blueprint.scss */ "./node_modules/@blueprintjs/core/src/blueprint.scss");

__webpack_require__(/*! ./App.scss */ "./src/App.scss");

var _AppContainer = __webpack_require__(/*! ./AppContainer.jsx */ "./src/AppContainer.jsx");

var _AppContainer2 = _interopRequireDefault(_AppContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)(_reducers2.default);
var hashHistory = (0, _history.createHashHistory)();
var history = (0, _reactRouterRedux.syncHistoryWithStore)(hashHistory, store);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterDom.HashRouter,
          { history: history },
          _react2.default.createElement(_AppContainer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("app"));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/AppContainer.jsx":
/*!******************************!*\
  !*** ./src/AppContainer.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:/Sites/simpleReactCRUD/src/AppContainer.jsx: Unexpected token (62:2)\n\n\u001b[0m \u001b[90m 60 | \u001b[39m\n \u001b[90m 61 | \u001b[39m\u001b[36mconst\u001b[39m mapStateToProps \u001b[33m=\u001b[39m (state\u001b[33m,\u001b[39m ownProps) \u001b[33m=>\u001b[39m ({\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 62 | \u001b[39m  \u001b[33m...\u001b[39mstate\u001b[33m,\u001b[39m\n \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 63 | \u001b[39m})\u001b[33m;\u001b[39m\n \u001b[90m 64 | \u001b[39m\n \u001b[90m 65 | \u001b[39m\u001b[36mconst\u001b[39m mapDispatchToProps \u001b[33m=\u001b[39m dispatch \u001b[33m=>\u001b[39m ({\u001b[0m\n");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.js */ "./src/reducers/login.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
	login: _login_js__WEBPACK_IMPORTED_MODULE_2__["default"],
	routing: react_router_redux__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
}));


/***/ }),

/***/ "./src/reducers/login.js":
/*!*******************************!*\
  !*** ./src/reducers/login.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
	auth: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

/* harmony default export */ __webpack_exports__["default"] = (login);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BibHVlcHJpbnRqcy9jb3JlL3NyYy9ibHVlcHJpbnQuc2Nzcz85YTU1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/NmFhNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvbGliL21pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9saWIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2xpYi9zeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9BcHAuc2Nzcz84ODIxIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvbG9naW4uanMiXSwibmFtZXMiOlsic3RvcmUiLCJyb290UmVkdWNlciIsImhhc2hIaXN0b3J5IiwiaGlzdG9yeSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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Q3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQyIsImZpbGUiOiJjbGllbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjbGllbnRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9BcHAuanN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKipcbiAqIFRoaXMgYWN0aW9uIHR5cGUgd2lsbCBiZSBkaXNwYXRjaGVkIGJ5IHRoZSBoaXN0b3J5IGFjdGlvbnMgYmVsb3cuXG4gKiBJZiB5b3UncmUgd3JpdGluZyBhIG1pZGRsZXdhcmUgdG8gd2F0Y2ggZm9yIG5hdmlnYXRpb24gZXZlbnRzLCBiZSBzdXJlIHRvXG4gKiBsb29rIGZvciBhY3Rpb25zIG9mIHRoaXMgdHlwZS5cbiAqL1xudmFyIENBTExfSElTVE9SWV9NRVRIT0QgPSBleHBvcnRzLkNBTExfSElTVE9SWV9NRVRIT0QgPSAnQEByb3V0ZXIvQ0FMTF9ISVNUT1JZX01FVEhPRCc7XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG1ldGhvZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBDQUxMX0hJU1RPUllfTUVUSE9ELFxuICAgICAgcGF5bG9hZDogeyBtZXRob2Q6IG1ldGhvZCwgYXJnczogYXJncyB9XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGVzZSBhY3Rpb25zIGNvcnJlc3BvbmQgdG8gdGhlIGhpc3RvcnkgQVBJLlxuICogVGhlIGFzc29jaWF0ZWQgcm91dGVyTWlkZGxld2FyZSB3aWxsIGNhcHR1cmUgdGhlc2UgZXZlbnRzIGJlZm9yZSB0aGV5IGdldCB0b1xuICogeW91ciByZWR1Y2VyIGFuZCByZWlzc3VlIHRoZW0gYXMgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIG9uIHlvdXIgaGlzdG9yeS5cbiAqL1xudmFyIHB1c2ggPSBleHBvcnRzLnB1c2ggPSB1cGRhdGVMb2NhdGlvbigncHVzaCcpO1xudmFyIHJlcGxhY2UgPSBleHBvcnRzLnJlcGxhY2UgPSB1cGRhdGVMb2NhdGlvbigncmVwbGFjZScpO1xudmFyIGdvID0gZXhwb3J0cy5nbyA9IHVwZGF0ZUxvY2F0aW9uKCdnbycpO1xudmFyIGdvQmFjayA9IGV4cG9ydHMuZ29CYWNrID0gdXBkYXRlTG9jYXRpb24oJ2dvQmFjaycpO1xudmFyIGdvRm9yd2FyZCA9IGV4cG9ydHMuZ29Gb3J3YXJkID0gdXBkYXRlTG9jYXRpb24oJ2dvRm9yd2FyZCcpO1xuXG52YXIgcm91dGVyQWN0aW9ucyA9IGV4cG9ydHMucm91dGVyQWN0aW9ucyA9IHsgcHVzaDogcHVzaCwgcmVwbGFjZTogcmVwbGFjZSwgZ286IGdvLCBnb0JhY2s6IGdvQmFjaywgZ29Gb3J3YXJkOiBnb0ZvcndhcmQgfTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJvdXRlck1pZGRsZXdhcmUgPSBleHBvcnRzLnJvdXRlckFjdGlvbnMgPSBleHBvcnRzLmdvRm9yd2FyZCA9IGV4cG9ydHMuZ29CYWNrID0gZXhwb3J0cy5nbyA9IGV4cG9ydHMucmVwbGFjZSA9IGV4cG9ydHMucHVzaCA9IGV4cG9ydHMuQ0FMTF9ISVNUT1JZX01FVEhPRCA9IGV4cG9ydHMucm91dGVyUmVkdWNlciA9IGV4cG9ydHMuTE9DQVRJT05fQ0hBTkdFID0gZXhwb3J0cy5zeW5jSGlzdG9yeVdpdGhTdG9yZSA9IHVuZGVmaW5lZDtcblxudmFyIF9yZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2VyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTE9DQVRJT05fQ0hBTkdFJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlZHVjZXIuTE9DQVRJT05fQ0hBTkdFO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncm91dGVyUmVkdWNlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZWR1Y2VyLnJvdXRlclJlZHVjZXI7XG4gIH1cbn0pO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDQUxMX0hJU1RPUllfTUVUSE9EJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FjdGlvbnMuQ0FMTF9ISVNUT1JZX01FVEhPRDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3B1c2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWN0aW9ucy5wdXNoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVwbGFjZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hY3Rpb25zLnJlcGxhY2U7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnbycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hY3Rpb25zLmdvO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ29CYWNrJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FjdGlvbnMuZ29CYWNrO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ29Gb3J3YXJkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FjdGlvbnMuZ29Gb3J3YXJkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncm91dGVyQWN0aW9ucycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hY3Rpb25zLnJvdXRlckFjdGlvbnM7XG4gIH1cbn0pO1xuXG52YXIgX3N5bmMgPSByZXF1aXJlKCcuL3N5bmMnKTtcblxudmFyIF9zeW5jMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bmMpO1xuXG52YXIgX21pZGRsZXdhcmUgPSByZXF1aXJlKCcuL21pZGRsZXdhcmUnKTtcblxudmFyIF9taWRkbGV3YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21pZGRsZXdhcmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmV4cG9ydHMuc3luY0hpc3RvcnlXaXRoU3RvcmUgPSBfc3luYzJbJ2RlZmF1bHQnXTtcbmV4cG9ydHMucm91dGVyTWlkZGxld2FyZSA9IF9taWRkbGV3YXJlMlsnZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJvdXRlck1pZGRsZXdhcmU7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLyoqXG4gKiBUaGlzIG1pZGRsZXdhcmUgY2FwdHVyZXMgQ0FMTF9ISVNUT1JZX01FVEhPRCBhY3Rpb25zIHRvIHJlZGlyZWN0IHRvIHRoZVxuICogcHJvdmlkZWQgaGlzdG9yeSBvYmplY3QuIFRoaXMgd2lsbCBwcmV2ZW50IHRoZXNlIGFjdGlvbnMgZnJvbSByZWFjaGluZyB5b3VyXG4gKiByZWR1Y2VyIG9yIGFueSBtaWRkbGV3YXJlIHRoYXQgY29tZXMgYWZ0ZXIgdGhpcyBvbmUuXG4gKi9cbmZ1bmN0aW9uIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlICE9PSBfYWN0aW9ucy5DQUxMX0hJU1RPUllfTUVUSE9EKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfYWN0aW9uJHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIG1ldGhvZCA9IF9hY3Rpb24kcGF5bG9hZC5tZXRob2QsXG4gICAgICAgICAgICBhcmdzID0gX2FjdGlvbiRwYXlsb2FkLmFyZ3M7XG5cbiAgICAgICAgaGlzdG9yeVttZXRob2RdLmFwcGx5KGhpc3RvcnksIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLnJvdXRlclJlZHVjZXIgPSByb3V0ZXJSZWR1Y2VyO1xuLyoqXG4gKiBUaGlzIGFjdGlvbiB0eXBlIHdpbGwgYmUgZGlzcGF0Y2hlZCB3aGVuIHlvdXIgaGlzdG9yeVxuICogcmVjZWl2ZXMgYSBsb2NhdGlvbiBjaGFuZ2UuXG4gKi9cbnZhciBMT0NBVElPTl9DSEFOR0UgPSBleHBvcnRzLkxPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xuXG52YXIgaW5pdGlhbFN0YXRlID0ge1xuICBsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zOiBudWxsXG59O1xuXG4vKipcbiAqIFRoaXMgcmVkdWNlciB3aWxsIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCB0aGUgbW9zdCByZWNlbnQgbG9jYXRpb24gaGlzdG9yeVxuICogaGFzIHRyYW5zaXRpb25lZCB0by4gVGhpcyBtYXkgbm90IGJlIGluIHN5bmMgd2l0aCB0aGUgcm91dGVyLCBwYXJ0aWN1bGFybHlcbiAqIGlmIHlvdSBoYXZlIGFzeW5jaHJvbm91c2x5LWxvYWRlZCByb3V0ZXMsIHNvIHJlYWRpbmcgZnJvbSBhbmQgcmVseWluZyBvblxuICogdGhpcyBzdGF0ZSBpcyBkaXNjb3VyYWdlZC5cbiAqL1xuZnVuY3Rpb24gcm91dGVyUmVkdWNlcigpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBpbml0aWFsU3RhdGU7XG5cbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHBheWxvYWQgPSBfcmVmLnBheWxvYWQ7XG5cbiAgaWYgKHR5cGUgPT09IExPQ0FUSU9OX0NIQU5HRSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHsgbG9jYXRpb25CZWZvcmVUcmFuc2l0aW9uczogcGF5bG9hZCB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlO1xuXG52YXIgX3JlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXInKTtcblxudmFyIGRlZmF1bHRTZWxlY3RMb2NhdGlvblN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFNlbGVjdExvY2F0aW9uU3RhdGUoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnJvdXRpbmc7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gc3luY2hyb25pemVzIHlvdXIgaGlzdG9yeSBzdGF0ZSB3aXRoIHRoZSBSZWR1eCBzdG9yZS5cbiAqIExvY2F0aW9uIGNoYW5nZXMgZmxvdyBmcm9tIGhpc3RvcnkgdG8gdGhlIHN0b3JlLiBBbiBlbmhhbmNlZCBoaXN0b3J5IGlzXG4gKiByZXR1cm5lZCB3aXRoIGEgbGlzdGVuIG1ldGhvZCB0aGF0IHJlc3BvbmRzIHRvIHN0b3JlIHVwZGF0ZXMgZm9yIGxvY2F0aW9uLlxuICpcbiAqIFdoZW4gdGhpcyBoaXN0b3J5IGlzIHByb3ZpZGVkIHRvIHRoZSByb3V0ZXIsIHRoaXMgbWVhbnMgdGhlIGxvY2F0aW9uIGRhdGFcbiAqIHdpbGwgZmxvdyBsaWtlIHRoaXM6XG4gKiBoaXN0b3J5LnB1c2ggLT4gc3RvcmUuZGlzcGF0Y2ggLT4gZW5oYW5jZWRIaXN0b3J5Lmxpc3RlbiAtPiByb3V0ZXJcbiAqIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gdGhlIHN0b3JlIHN0YXRlIGNoYW5nZXMgZHVlIHRvIGEgcmVwbGF5IG9yIG90aGVyXG4gKiBldmVudCwgdGhlIHJvdXRlciB3aWxsIGJlIHVwZGF0ZWQgYXBwcm9wcmlhdGVseSBhbmQgY2FuIHRyYW5zaXRpb24gdG8gdGhlXG4gKiBjb3JyZWN0IHJvdXRlciBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gc3luY0hpc3RvcnlXaXRoU3RvcmUoaGlzdG9yeSwgc3RvcmUpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgICAgX3JlZiRzZWxlY3RMb2NhdGlvblN0ID0gX3JlZi5zZWxlY3RMb2NhdGlvblN0YXRlLFxuICAgICAgc2VsZWN0TG9jYXRpb25TdGF0ZSA9IF9yZWYkc2VsZWN0TG9jYXRpb25TdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFNlbGVjdExvY2F0aW9uU3RhdGUgOiBfcmVmJHNlbGVjdExvY2F0aW9uU3QsXG4gICAgICBfcmVmJGFkanVzdFVybE9uUmVwbGEgPSBfcmVmLmFkanVzdFVybE9uUmVwbGF5LFxuICAgICAgYWRqdXN0VXJsT25SZXBsYXkgPSBfcmVmJGFkanVzdFVybE9uUmVwbGEgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGFkanVzdFVybE9uUmVwbGE7XG5cbiAgLy8gRW5zdXJlIHRoYXQgdGhlIHJlZHVjZXIgaXMgbW91bnRlZCBvbiB0aGUgc3RvcmUgYW5kIGZ1bmN0aW9uaW5nIHByb3Blcmx5LlxuICBpZiAodHlwZW9mIHNlbGVjdExvY2F0aW9uU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcm91dGluZyBzdGF0ZSB0byBiZSBhdmFpbGFibGUgZWl0aGVyIGFzIGBzdGF0ZS5yb3V0aW5nYCAnICsgJ29yIGFzIHRoZSBjdXN0b20gZXhwcmVzc2lvbiB5b3UgY2FuIHNwZWNpZnkgYXMgYHNlbGVjdExvY2F0aW9uU3RhdGVgICcgKyAnaW4gdGhlIGBzeW5jSGlzdG9yeVdpdGhTdG9yZSgpYCBvcHRpb25zLiAnICsgJ0Vuc3VyZSB5b3UgaGF2ZSBhZGRlZCB0aGUgYHJvdXRlclJlZHVjZXJgIHRvIHlvdXIgc3RvcmVcXCdzICcgKyAncmVkdWNlcnMgdmlhIGBjb21iaW5lUmVkdWNlcnNgIG9yIHdoYXRldmVyIG1ldGhvZCB5b3UgdXNlIHRvIGlzb2xhdGUgJyArICd5b3VyIHJlZHVjZXJzLicpO1xuICB9XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IHZvaWQgMDtcbiAgdmFyIGlzVGltZVRyYXZlbGluZyA9IHZvaWQgMDtcbiAgdmFyIHVuc3Vic2NyaWJlRnJvbVN0b3JlID0gdm9pZCAwO1xuICB2YXIgdW5zdWJzY3JpYmVGcm9tSGlzdG9yeSA9IHZvaWQgMDtcbiAgdmFyIGN1cnJlbnRMb2NhdGlvbiA9IHZvaWQgMDtcblxuICAvLyBXaGF0IGRvZXMgdGhlIHN0b3JlIHNheSBhYm91dCBjdXJyZW50IGxvY2F0aW9uP1xuICB2YXIgZ2V0TG9jYXRpb25JblN0b3JlID0gZnVuY3Rpb24gZ2V0TG9jYXRpb25JblN0b3JlKHVzZUluaXRpYWxJZkVtcHR5KSB7XG4gICAgdmFyIGxvY2F0aW9uU3RhdGUgPSBzZWxlY3RMb2NhdGlvblN0YXRlKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgIHJldHVybiBsb2NhdGlvblN0YXRlLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwgKHVzZUluaXRpYWxJZkVtcHR5ID8gaW5pdGlhbExvY2F0aW9uIDogdW5kZWZpbmVkKTtcbiAgfTtcblxuICAvLyBJbml0IGluaXRpYWxMb2NhdGlvbiB3aXRoIHBvdGVudGlhbCBsb2NhdGlvbiBpbiBzdG9yZVxuICBpbml0aWFsTG9jYXRpb24gPSBnZXRMb2NhdGlvbkluU3RvcmUoKTtcblxuICAvLyBJZiB0aGUgc3RvcmUgaXMgcmVwbGF5ZWQsIHVwZGF0ZSB0aGUgVVJMIGluIHRoZSBicm93c2VyIHRvIG1hdGNoLlxuICBpZiAoYWRqdXN0VXJsT25SZXBsYXkpIHtcbiAgICB2YXIgaGFuZGxlU3RvcmVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVTdG9yZUNoYW5nZSgpIHtcbiAgICAgIHZhciBsb2NhdGlvbkluU3RvcmUgPSBnZXRMb2NhdGlvbkluU3RvcmUodHJ1ZSk7XG4gICAgICBpZiAoY3VycmVudExvY2F0aW9uID09PSBsb2NhdGlvbkluU3RvcmUgfHwgaW5pdGlhbExvY2F0aW9uID09PSBsb2NhdGlvbkluU3RvcmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBVcGRhdGUgYWRkcmVzcyBiYXIgdG8gcmVmbGVjdCBzdG9yZSBzdGF0ZVxuICAgICAgaXNUaW1lVHJhdmVsaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uSW5TdG9yZTtcbiAgICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKF9leHRlbmRzKHt9LCBsb2NhdGlvbkluU3RvcmUsIHtcbiAgICAgICAgYWN0aW9uOiAnUFVTSCdcbiAgICAgIH0pKTtcbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICB1bnN1YnNjcmliZUZyb21TdG9yZSA9IHN0b3JlLnN1YnNjcmliZShoYW5kbGVTdG9yZUNoYW5nZSk7XG4gICAgaGFuZGxlU3RvcmVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8vIFdoZW5ldmVyIGxvY2F0aW9uIGNoYW5nZXMsIGRpc3BhdGNoIGFuIGFjdGlvbiB0byBnZXQgaXQgaW4gdGhlIHN0b3JlXG4gIHZhciBoYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uKSB7XG4gICAgLy8gLi4uIHVubGVzcyB3ZSBqdXN0IGNhdXNlZCB0aGF0IGxvY2F0aW9uIGNoYW5nZVxuICAgIGlmIChpc1RpbWVUcmF2ZWxpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZW1lbWJlciB3aGVyZSB3ZSBhcmVcbiAgICBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIC8vIEFyZSB3ZSBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lP1xuICAgIGlmICghaW5pdGlhbExvY2F0aW9uKSB7XG4gICAgICAvLyBSZW1lbWJlciBhcyBhIGZhbGxiYWNrIGluIGNhc2Ugc3RhdGUgaXMgcmVzZXRcbiAgICAgIGluaXRpYWxMb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgICAvLyBSZXNwZWN0IHBlcnNpc3RlZCBsb2NhdGlvbiwgaWYgYW55XG4gICAgICBpZiAoZ2V0TG9jYXRpb25JblN0b3JlKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRlbGwgdGhlIHN0b3JlIHRvIHVwZGF0ZSBieSBkaXNwYXRjaGluZyBhbiBhY3Rpb25cbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlOiBfcmVkdWNlci5MT0NBVElPTl9DSEFOR0UsXG4gICAgICBwYXlsb2FkOiBsb2NhdGlvblxuICAgIH0pO1xuICB9O1xuICB1bnN1YnNjcmliZUZyb21IaXN0b3J5ID0gaGlzdG9yeS5saXN0ZW4oaGFuZGxlTG9jYXRpb25DaGFuZ2UpO1xuXG4gIC8vIEhpc3RvcnkgMy54IGRvZXNuJ3QgY2FsbCBsaXN0ZW4gc3luY2hyb25vdXNseSwgc28gZmlyZSB0aGUgaW5pdGlhbCBsb2NhdGlvbiBjaGFuZ2Ugb3Vyc2VsdmVzXG4gIGlmIChoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbikge1xuICAgIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCkpO1xuICB9XG5cbiAgLy8gVGhlIGVuaGFuY2VkIGhpc3RvcnkgdXNlcyBzdG9yZSBhcyBzb3VyY2Ugb2YgdHJ1dGhcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgLy8gVGhlIGxpc3RlbmVycyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc3RvcmUgaW5zdGVhZCBvZiBoaXN0b3J5XG4gICAgbGlzdGVuOiBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgIC8vIENvcHkgb2YgbGFzdCBsb2NhdGlvbi5cbiAgICAgIHZhciBsYXN0UHVibGlzaGVkTG9jYXRpb24gPSBnZXRMb2NhdGlvbkluU3RvcmUodHJ1ZSk7XG5cbiAgICAgIC8vIEtlZXAgdHJhY2sgb2Ygd2hldGhlciB3ZSB1bnN1YnNjcmliZWQsIGFzIFJlZHV4IHN0b3JlXG4gICAgICAvLyBvbmx5IGFwcGxpZXMgY2hhbmdlcyBpbiBzdWJzY3JpcHRpb25zIG9uIG5leHQgZGlzcGF0Y2hcbiAgICAgIHZhciB1bnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIHZhciB1bnN1YnNjcmliZUZyb21TdG9yZSA9IHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50TG9jYXRpb24gPSBnZXRMb2NhdGlvbkluU3RvcmUodHJ1ZSk7XG4gICAgICAgIGlmIChjdXJyZW50TG9jYXRpb24gPT09IGxhc3RQdWJsaXNoZWRMb2NhdGlvbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsYXN0UHVibGlzaGVkTG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG4gICAgICAgIGlmICghdW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgbGlzdGVuZXIobGFzdFB1Ymxpc2hlZExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpc3RvcnkgMi54IGxpc3RlbmVycyBleHBlY3QgYSBzeW5jaHJvbm91cyBjYWxsLiBNYWtlIHRoZSBmaXJzdCBjYWxsIHRvIHRoZVxuICAgICAgLy8gbGlzdGVuZXIgYWZ0ZXIgc3Vic2NyaWJpbmcgdG8gdGhlIHN0b3JlLCBpbiBjYXNlIHRoZSBsaXN0ZW5lciBjYXVzZXMgYVxuICAgICAgLy8gbG9jYXRpb24gY2hhbmdlIChlLmcuIHdoZW4gaXQgcmVkaXJlY3RzKVxuICAgICAgaWYgKCFoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbikge1xuICAgICAgICBsaXN0ZW5lcihsYXN0UHVibGlzaGVkTG9jYXRpb24pO1xuICAgICAgfVxuXG4gICAgICAvLyBMZXQgdXNlciB1bnN1YnNjcmliZSBsYXRlclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdW5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgdW5zdWJzY3JpYmVGcm9tU3RvcmUoKTtcbiAgICAgIH07XG4gICAgfSxcblxuXG4gICAgLy8gSXQgYWxzbyBwcm92aWRlcyBhIHdheSB0byBkZXN0cm95IGludGVybmFsIGxpc3RlbmVyc1xuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmIChhZGp1c3RVcmxPblJlcGxheSkge1xuICAgICAgICB1bnN1YnNjcmliZUZyb21TdG9yZSgpO1xuICAgICAgfVxuICAgICAgdW5zdWJzY3JpYmVGcm9tSGlzdG9yeSgpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgeyBIYXNoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlSGFzaEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuXHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJztcclxuaW1wb3J0IFwiQGJsdWVwcmludGpzL2NvcmUvc3JjL2JsdWVwcmludC5zY3NzXCI7XHJcbmltcG9ydCAnLi9BcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vQXBwQ29udGFpbmVyLmpzeCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcclxuY29uc3QgaGFzaEhpc3RvcnkgPSBjcmVhdGVIYXNoSGlzdG9yeSgpO1xyXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoaGFzaEhpc3RvcnksIHN0b3JlKTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIYXNoUm91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgICAgIDxBcHBDb250YWluZXIgLz5cclxuICAgICAgPC9IYXNoUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXHJcbik7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuXHJcbmltcG9ydCBsb2dpbiBmcm9tICcuL2xvZ2luLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcblx0bG9naW4sXHJcblx0cm91dGluZzogcm91dGVyUmVkdWNlcixcclxufSk7XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRhdXRoOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGxvZ2luID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdBRERfVE9ETyc6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcclxuICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxyXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKFxyXG4gICAgICAgIHRvZG8gPT5cclxuICAgICAgICAgIHRvZG8uaWQgPT09IGFjdGlvbi5pZCA/IHsgLi4udG9kbywgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfSA6IHRvZG9cclxuICAgICAgKVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==