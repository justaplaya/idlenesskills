"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\playa\\\\Desktop\\\\idlenesskills\\\\pages\\\\_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF3QztBQUV4QyxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQ3hDLHFCQUFPLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7aUJBQUk7Q0FDcEM7QUFFRCxpRUFBZUgsMkRBQWlCLENBQUNDLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkbGVuZXNza2lsbHMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcClcclxuIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DownloadTodosAction\": () => (/* binding */ DownloadTodosAction),\n/* harmony export */   \"default\": () => (/* binding */ mainReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\n//import { counterActionTypes } from \"./action\";\nconst DownloadTodos = \"DownloadTodos\";\nconst INCREMENT = \"INCREMENT\";\nconst initialState = {\n    count: 0,\n    todos: []\n};\n/*const DownloadTodos = createAction('DownloadTodos')\n\nexport default createReducer(initialState,{\n  [DownloadTodos]: function(state){\n    state.todos = action.todos\n  }\n})*/ function mainReducer(state = initialState, action) {\n    switch(action.type){\n        case INCREMENT:\n            return {\n                ...state,\n                count: state.count + 1\n            };\n        case DownloadTodos:\n            return {\n                ...state,\n                todos: action.todos\n            };\n        default:\n            return state;\n    }\n};\nconst DownloadTodosAction = (todos)=>({\n        type: DownloadTodos,\n        todos\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0Q7QUFDL0QsZ0RBQWdEO0FBR2hELE1BQU1FLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLE1BQU1DLFNBQVMsR0FBRyxXQUFXO0FBRzdCLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsS0FBSyxFQUFFLENBQUM7SUFDUkMsS0FBSyxFQUFFLEVBQUU7Q0FDVjtBQUVEOzs7Ozs7SUFNSSxDQUVXLFNBQVNDLFdBQVcsQ0FBQ0MsS0FBSyxHQUFHSixZQUFZLEVBQUVLLE1BQU0sRUFBRTtJQUNoRSxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBS1AsU0FBUztZQUNaLE9BQU87Z0JBQUMsR0FBR0ssS0FBSztnQkFBRUgsS0FBSyxFQUFFRyxLQUFLLENBQUNILEtBQUssR0FBRyxDQUFDO2FBQUM7UUFDM0MsS0FBS0gsYUFBYTtZQUNoQixPQUFPO2dCQUFFLEdBQUdNLEtBQUs7Z0JBQUVGLEtBQUssRUFBRUcsTUFBTSxDQUFDSCxLQUFLO2FBQUUsQ0FBQztRQUUzQztZQUNFLE9BQU9FLEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRU0sTUFBTUcsbUJBQW1CLEdBQUcsQ0FBQ0wsS0FBSyxHQUFLLENBQUM7UUFBQ0ksSUFBSSxFQUFDUixhQUFhO1FBQUVJLEtBQUs7S0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRsZW5lc3NraWxscy8uL3N0b3JlL3JlZHVjZXIuanM/YjAyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuLy9pbXBvcnQgeyBjb3VudGVyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9hY3Rpb25cIjtcblxuXG5jb25zdCBEb3dubG9hZFRvZG9zID0gXCJEb3dubG9hZFRvZG9zXCJcbmNvbnN0IElOQ1JFTUVOVCA9IFwiSU5DUkVNRU5UXCJcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNvdW50OiAwLFxuICB0b2RvczogW11cbn07XG5cbi8qY29uc3QgRG93bmxvYWRUb2RvcyA9IGNyZWF0ZUFjdGlvbignRG93bmxvYWRUb2RvcycpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLHtcbiAgW0Rvd25sb2FkVG9kb3NdOiBmdW5jdGlvbihzdGF0ZSl7XG4gICAgc3RhdGUudG9kb3MgPSBhY3Rpb24udG9kb3NcbiAgfVxufSkqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOQ1JFTUVOVDpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCArIDF9XG4gICAgY2FzZSBEb3dubG9hZFRvZG9zOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRvZG9zOiBhY3Rpb24udG9kb3MgfTtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEb3dubG9hZFRvZG9zQWN0aW9uID0gKHRvZG9zKSA9PiAoe3R5cGU6RG93bmxvYWRUb2RvcywgdG9kb3N9KSJdLCJuYW1lcyI6WyJjcmVhdGVBY3Rpb24iLCJjcmVhdGVSZWR1Y2VyIiwiRG93bmxvYWRUb2RvcyIsIklOQ1JFTUVOVCIsImluaXRpYWxTdGF0ZSIsImNvdW50IiwidG9kb3MiLCJtYWluUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkRvd25sb2FkVG9kb3NBY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducer.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./store/reducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n//import mainReducer from './reducer'\n\n\n//import { combineReducers, configureStore} from '@reduxjs/toolkit'\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    main: _reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/*const store = configureStore({\n  reducer: rootReducer,\n\n})*/ const store = ()=>{\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_4___default()))));\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ1Y7QUFDRztBQUM5RCxxQ0FBcUM7QUFDRjtBQUNIO0FBRWhDLG1FQUFtRTtBQUVuRSxNQUFNUSxXQUFXLEdBQUdOLHNEQUFlLENBQUM7SUFDbENPLElBQUksRUFBRUgsZ0RBQVc7Q0FDbEIsQ0FBQztBQUdGOzs7SUFHSSxDQUVKLE1BQU1JLEtBQUssR0FBRyxJQUFNO0lBQ2xCLE9BQU9WLGtEQUFXLENBQUNRLFdBQVcsRUFBRUgsNkVBQW1CLENBQUNKLHNEQUFlLENBQUNNLG9EQUFLLENBQUMsQ0FBQyxDQUFDO0NBQzdFO0FBRU0sTUFBTUksT0FBTyxHQUFHUCxpRUFBYSxDQUFDTSxLQUFLLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZGxlbmVzc2tpbGxzLy4vc3RvcmUvc3RvcmUuanM/MzY2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuLy9pbXBvcnQgbWFpblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IG1haW5SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbi8vaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZX0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBtYWluOiBtYWluUmVkdWNlclxufSlcblxuXG4vKmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiByb290UmVkdWNlcixcblxufSkqL1xuXG5jb25zdCBzdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKVxufVxuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoc3RvcmUpXG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJIWURSQVRFIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJtYWluUmVkdWNlciIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJtYWluIiwic3RvcmUiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();