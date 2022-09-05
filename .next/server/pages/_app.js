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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _themes_firstTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/firstTheme */ \"./themes/firstTheme.js\");\n/* harmony import */ var _themes_secondTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes/secondTheme */ \"./themes/secondTheme.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _themes_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themes/GlobalStyles */ \"./themes/GlobalStyles.js\");\n\n\n\n\n\n\n\nfunction getActiveTheme(themeMode) {\n    return themeMode === \"light\" ? _themes_firstTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : _themes_secondTheme__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n}\nconst App = ({ Component , pageProps  })=>{\n    const { 0: activeTheme , 1: setActiveTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_themes_firstTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const { 0: selectedTheme , 1: setSelectedTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"light\");\n    const toggleTheme = ()=>{\n        const desiredTheme = selectedTheme === \"dark\" ? \"light\" : \"dark\";\n        setSelectedTheme(desiredTheme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setActiveTheme(getActiveTheme(selectedTheme));\n    }, [\n        selectedTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: activeTheme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_themes_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\playa\\\\Desktop\\\\idlenesskills\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                toggleTheme: toggleTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\playa\\\\Desktop\\\\idlenesskills\\\\pages\\\\_app.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\playa\\\\Desktop\\\\idlenesskills\\\\pages\\\\_app.js\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDYTtBQUNSO0FBQ0U7QUFDSjtBQUNNO0FBRWpELFNBQVNPLGNBQWMsQ0FBQ0MsU0FBUyxFQUFDO0lBQ2hDLE9BQU9BLFNBQVMsS0FBSyxPQUFPLEdBQUdOLDBEQUFVLEdBQUdDLDJEQUFXO0NBQ3hEO0FBRUQsTUFBTU0sR0FBRyxHQUFHLENBQUMsRUFBQ0MsU0FBUyxHQUFFQyxTQUFTLEdBQUMsR0FBSztJQUV4QyxNQUFNLEtBQUNDLFdBQVcsTUFBQ0MsY0FBYyxNQUFJVCwrQ0FBUSxDQUFDRiwwREFBVSxDQUFDO0lBQ3pELE1BQU0sS0FBQ1ksYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSVgsK0NBQVEsQ0FBQyxPQUFPLENBQUM7SUFFM0QsTUFBTVksV0FBVyxHQUFHLElBQU07UUFDeEIsTUFBTUMsWUFBWSxHQUFHSCxhQUFhLEtBQUssTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO1FBQ2hFQyxnQkFBZ0IsQ0FBQ0UsWUFBWSxDQUFDO0tBQy9CO0lBRURaLGdEQUFTLENBQUMsSUFBTTtRQUNkUSxjQUFjLENBQUNOLGNBQWMsQ0FBQ08sYUFBYSxDQUFDLENBQUM7S0FDOUMsRUFBRTtRQUFDQSxhQUFhO0tBQUMsQ0FBQztJQUVqQixxQkFDQSw4REFBQ2IsK0RBQWE7UUFBRWlCLEtBQUssRUFBRU4sV0FBVzs7MEJBQ2hDLDhEQUFDTiw0REFBWTs7Ozt5QkFBRTswQkFDZiw4REFBQ0ksU0FBUztnQkFBRSxHQUFHQyxTQUFTO2dCQUFFSyxXQUFXLEVBQUVBLFdBQVc7Ozs7O3lCQUFHOzs7Ozs7aUJBQ3ZDLENBQ2Y7Q0FDRjtBQUVELGlFQUFlaEIsMkRBQWlCLENBQUNTLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkbGVuZXNza2lsbHMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgZmlyc3RUaGVtZSBmcm9tICcuLi90aGVtZXMvZmlyc3RUaGVtZSdcclxuaW1wb3J0IHNlY29uZFRoZW1lIGZyb20gJy4uL3RoZW1lcy9zZWNvbmRUaGVtZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL3RoZW1lcy9HbG9iYWxTdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBnZXRBY3RpdmVUaGVtZSh0aGVtZU1vZGUpe1xyXG4gIHJldHVybiB0aGVtZU1vZGUgPT09ICdsaWdodCcgPyBmaXJzdFRoZW1lIDogc2Vjb25kVGhlbWVcclxufVxyXG5cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuXHJcbmNvbnN0IFthY3RpdmVUaGVtZSxzZXRBY3RpdmVUaGVtZV0gPSB1c2VTdGF0ZShmaXJzdFRoZW1lKVxyXG5jb25zdCBbc2VsZWN0ZWRUaGVtZSwgc2V0U2VsZWN0ZWRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxyXG5cclxuY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVzaXJlZFRoZW1lID0gc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJ1xyXG4gIHNldFNlbGVjdGVkVGhlbWUoZGVzaXJlZFRoZW1lKVxyXG59XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIHNldEFjdGl2ZVRoZW1lKGdldEFjdGl2ZVRoZW1lKHNlbGVjdGVkVGhlbWUpKVxyXG59LCBbc2VsZWN0ZWRUaGVtZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPFRoZW1lUHJvdmlkZXIgIHRoZW1lPXthY3RpdmVUaGVtZX0+XHJcbiAgICA8R2xvYmFsU3R5bGVzLz5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gdG9nZ2xlVGhlbWU9e3RvZ2dsZVRoZW1lfS8+XHJcbiAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKVxyXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIlRoZW1lUHJvdmlkZXIiLCJmaXJzdFRoZW1lIiwic2Vjb25kVGhlbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdsb2JhbFN0eWxlcyIsImdldEFjdGl2ZVRoZW1lIiwidGhlbWVNb2RlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYWN0aXZlVGhlbWUiLCJzZXRBY3RpdmVUaGVtZSIsInNlbGVjdGVkVGhlbWUiLCJzZXRTZWxlY3RlZFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJkZXNpcmVkVGhlbWUiLCJ0aGVtZSIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/reducer.js":
/*!**************************!*\
  !*** ./store/reducer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DownloadTodosAction\": () => (/* binding */ DownloadTodosAction),\n/* harmony export */   \"default\": () => (/* binding */ mainReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    todos: []\n};\nconst DownloadTodos = \"DownloadTodos\";\nfunction mainReducer(state = initialState, action) {\n    switch(action.type){\n        case DownloadTodos:\n            return {\n                ...state,\n                todos: action.todos\n            };\n        default:\n            return state;\n    }\n};\nconst DownloadTodosAction = (todos)=>({\n        type: DownloadTodos,\n        todos\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0Q7QUFFL0QsTUFBTUUsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUUsRUFBRTtDQUNWO0FBRUQsTUFBTUMsYUFBYSxHQUFHLGVBQWU7QUFFdEIsU0FBU0MsV0FBVyxDQUFDQyxLQUFLLEdBQUdKLFlBQVksRUFBRUssTUFBTSxFQUFFO0lBQ2hFLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixLQUFLSixhQUFhO1lBQ2hCLE9BQU87Z0JBQUUsR0FBR0UsS0FBSztnQkFBRUgsS0FBSyxFQUFFSSxNQUFNLENBQUNKLEtBQUs7YUFBRTtRQUMxQztZQUNFLE9BQU9HLEtBQUs7S0FDZjtDQUNGO0FBRU0sTUFBTUcsbUJBQW1CLEdBQUcsQ0FBQ04sS0FBSyxHQUFLLENBQUM7UUFBQ0ssSUFBSSxFQUFDSixhQUFhO1FBQUVELEtBQUs7S0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRsZW5lc3NraWxscy8uL3N0b3JlL3JlZHVjZXIuanM/YjAyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24sIGNyZWF0ZVJlZHVjZXIgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRvZG9zOiBbXVxufTtcblxuY29uc3QgRG93bmxvYWRUb2RvcyA9IFwiRG93bmxvYWRUb2Rvc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW5SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRG93bmxvYWRUb2RvczpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0b2RvczogYWN0aW9uLnRvZG9zIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERvd25sb2FkVG9kb3NBY3Rpb24gPSAodG9kb3MpID0+ICh7dHlwZTpEb3dubG9hZFRvZG9zLCB0b2Rvc30pXG4iXSwibmFtZXMiOlsiY3JlYXRlQWN0aW9uIiwiY3JlYXRlUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsInRvZG9zIiwiRG93bmxvYWRUb2RvcyIsIm1haW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiRG93bmxvYWRUb2Rvc0FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducer.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./store/reducer.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst store = ()=>{\n    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_4___default()))));\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ1Y7QUFDRztBQUMzQjtBQUNIO0FBR2hDLE1BQU1RLEtBQUssR0FBRyxJQUFNO0lBQ2xCLE9BQU9SLGtEQUFXLENBQUNNLGdEQUFXLEVBQUVELDZFQUFtQixDQUFDSixzREFBZSxDQUFDTSxvREFBSyxDQUFDLENBQUMsQ0FBQztDQUM3RTtBQUNNLE1BQU1FLE9BQU8sR0FBR0wsaUVBQWEsQ0FBQ0ksS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRsZW5lc3NraWxscy8uL3N0b3JlL3N0b3JlLmpzPzM2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCBtYWluUmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5cbmNvbnN0IHN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUobWFpblJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpXG59XG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoc3RvcmUpXG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJIWURSQVRFIiwiY3JlYXRlV3JhcHBlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJtYWluUmVkdWNlciIsInRodW5rIiwic3RvcmUiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./themes/GlobalStyles.js":
/*!********************************!*\
  !*** ./themes/GlobalStyles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(()=>(0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({\n        \"@global\": {\n            \"*, *::before, *::after\": {\n                padding: \"0\",\n                margin: \"0\",\n                boxSizing: \"border-box\",\n                transition: \"all .5s linear\"\n            }\n        }\n    }));\nconst GlobalStyles = ()=>{\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)().palette;\n    console.log(theme);\n    useStyles();\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvR2xvYmFsU3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBQ2I7QUFFaEQsTUFBTUcsU0FBUyxHQUFHRiw2REFBVSxDQUFDLElBRTNCRCwrREFBWSxDQUNWO1FBRUEsU0FBUyxFQUFFO1lBRVQsd0JBQXdCLEVBQUU7Z0JBQ3hCSSxPQUFPLEVBQUMsR0FBRztnQkFDWEMsTUFBTSxFQUFDLEdBQUc7Z0JBQ1ZDLFNBQVMsRUFBRSxZQUFZO2dCQUN2QkMsVUFBVSxFQUFDLGdCQUFnQjthQUM1QjtTQVFGO0tBQ0YsQ0FBQyxDQUNIO0FBQ0QsTUFBTUMsWUFBWSxHQUFHLElBQU07SUFDekIsTUFBTUMsS0FBSyxHQUFHUCw4REFBUSxFQUFFLENBQUNRLE9BQU87SUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFLLENBQUM7SUFFaEJOLFNBQVMsRUFBRSxDQUFDO0lBRVosT0FBTyxJQUFJLENBQUM7Q0FDYjtBQUVELGlFQUFlSyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZGxlbmVzc2tpbGxzLy4vdGhlbWVzL0dsb2JhbFN0eWxlcy5qcz8wNzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+XHJcblxyXG4gIGNyZWF0ZVN0eWxlcyhcclxuICAgIHtcclxuICAgIFxyXG4gICAgJ0BnbG9iYWwnOiB7XHJcbiAgICAgIFxyXG4gICAgICAnKiwgKjo6YmVmb3JlLCAqOjphZnRlcic6IHtcclxuICAgICAgICBwYWRkaW5nOicwJyxcclxuICAgICAgICBtYXJnaW46JzAnLFxyXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAgIHRyYW5zaXRpb246J2FsbCAuNXMgbGluZWFyJ1xyXG4gICAgICB9XHJcbiAgICAgIC8qLCdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjBweCknOntcclxuICAgICAgICAnKiwgKjo6YmVmb3JlLCAqOjphZnRlcic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjoncmVkJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSovXHJcblxyXG4gICAgICBcclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpLnBhbGV0dGVcclxuY29uc29sZS5sb2codGhlbWUpXHJcblxyXG4gIHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlczsiXSwibmFtZXMiOlsiY3JlYXRlU3R5bGVzIiwibWFrZVN0eWxlcyIsInVzZVRoZW1lIiwidXNlU3R5bGVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNpemluZyIsInRyYW5zaXRpb24iLCJHbG9iYWxTdHlsZXMiLCJ0aGVtZSIsInBhbGV0dGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./themes/GlobalStyles.js\n");

/***/ }),

/***/ "./themes/firstTheme.js":
/*!******************************!*\
  !*** ./themes/firstTheme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firstTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    breakpoints: {\n        values: {\n            zero: 0,\n            mobile: 360,\n            tablet: 768,\n            laptopS: 1024,\n            laptopL: 1366,\n            pc: 1920\n        }\n    },\n    spacing: 2,\n    palette: {\n        mode: \"light\",\n        primary: {\n            main: \"rgb(0,0,0)\"\n        },\n        secondary: {\n            main: \"rgb(245,245,245)\"\n        },\n        success: {\n            main: \"rgb(245,222,179)\"\n        },\n        error: {\n            main: \"rgb(135,0,10)\"\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstTheme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvZmlyc3RUaGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNSO0FBRTNDLE1BQU1FLFVBQVUsR0FBR0YsaUVBQVcsQ0FBQztJQUM3QkcsV0FBVyxFQUFFO1FBQ1hDLE1BQU0sRUFBRTtZQUNOQyxJQUFJLEVBQUMsQ0FBQztZQUNOQyxNQUFNLEVBQUUsR0FBRztZQUNYQyxNQUFNLEVBQUUsR0FBRztZQUNYQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxFQUFFLEVBQUUsSUFBSTtTQUNUO0tBQ0Y7SUFDREMsT0FBTyxFQUFFLENBQUM7SUFDVkMsT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBQyxPQUFPO1FBQ1pDLE9BQU8sRUFBRTtZQUNQQyxJQUFJLEVBQUUsWUFBWTtTQUNuQjtRQUNEQyxTQUFTLEVBQUU7WUFDVEQsSUFBSSxFQUFFLGtCQUFrQjtTQUN6QjtRQUNERSxPQUFPLEVBQUU7WUFDUEYsSUFBSSxFQUFFLGtCQUFrQjtTQUN6QjtRQUNERyxLQUFLLEVBQUU7WUFDTEgsSUFBSSxFQUFFLGVBQWU7U0FDdEI7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZWIsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWRsZW5lc3NraWxscy8uL3RoZW1lcy9maXJzdFRoZW1lLmpzPzRhMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcclxuXHJcbmNvbnN0IGZpcnN0VGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIHZhbHVlczoge1xyXG4gICAgICB6ZXJvOjAsXHJcbiAgICAgIG1vYmlsZTogMzYwLFxyXG4gICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgbGFwdG9wUzogMTAyNCxcclxuICAgICAgbGFwdG9wTDogMTM2NixcclxuICAgICAgcGM6IDE5MjAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3BhY2luZzogMixcclxuICBwYWxldHRlOiB7XHJcbiAgICBtb2RlOidsaWdodCcsXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICdyZ2IoMCwwLDApJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJ3JnYigyNDUsMjQ1LDI0NSknLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgbWFpbjogJ3JnYigyNDUsMjIyLDE3OSknLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46ICdyZ2IoMTM1LDAsMTApJyxcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyc3RUaGVtZTsiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJyZWQiLCJmaXJzdFRoZW1lIiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ6ZXJvIiwibW9iaWxlIiwidGFibGV0IiwibGFwdG9wUyIsImxhcHRvcEwiLCJwYyIsInNwYWNpbmciLCJwYWxldHRlIiwibW9kZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5Iiwic3VjY2VzcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./themes/firstTheme.js\n");

/***/ }),

/***/ "./themes/secondTheme.js":
/*!*******************************!*\
  !*** ./themes/secondTheme.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst secondTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    breakpoints: {\n        values: {\n            zero: 0,\n            mobile: 360,\n            tablet: 768,\n            laptopS: 1024,\n            laptopL: 1366,\n            pc: 1920\n        }\n    },\n    spacing: 2,\n    palette: {\n        mode: \"dark\",\n        primary: {\n            main: \"rgb(245,245,245)\"\n        },\n        secondary: {\n            main: \"rgb(0,0,0)\"\n        },\n        success: {\n            main: \"rgb(135,0,10)\"\n        },\n        error: {\n            main: \"rgb(245,222,179)\"\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (secondTheme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZXMvc2Vjb25kVGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUUzQyxNQUFNRSxXQUFXLEdBQUdGLGlFQUFXLENBQUM7SUFDOUJHLFdBQVcsRUFBRTtRQUNYQyxNQUFNLEVBQUU7WUFDTkMsSUFBSSxFQUFDLENBQUM7WUFDTkMsTUFBTSxFQUFFLEdBQUc7WUFDWEMsTUFBTSxFQUFFLEdBQUc7WUFDWEMsT0FBTyxFQUFFLElBQUk7WUFDYkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsRUFBRSxFQUFFLElBQUk7U0FDVDtLQUNGO0lBQ0RDLE9BQU8sRUFBRSxDQUFDO0lBRVZDLE9BQU8sRUFBRTtRQUNQQyxJQUFJLEVBQUMsTUFBTTtRQUNYQyxPQUFPLEVBQUU7WUFDUEMsSUFBSSxFQUFFLGtCQUFrQjtTQUN6QjtRQUNEQyxTQUFTLEVBQUU7WUFDVEQsSUFBSSxFQUFFLFlBQVk7U0FDbkI7UUFDREUsT0FBTyxFQUFFO1lBQ1BGLElBQUksRUFBRSxlQUFlO1NBQ3RCO1FBQ0RHLEtBQUssRUFBRTtZQUNMSCxJQUFJLEVBQUUsa0JBQWtCO1NBQ3pCO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsaUVBQWViLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lkbGVuZXNza2lsbHMvLi90aGVtZXMvc2Vjb25kVGhlbWUuanM/OWMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5cclxuY29uc3Qgc2Vjb25kVGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIHZhbHVlczoge1xyXG4gICAgICB6ZXJvOjAsXHJcbiAgICAgIG1vYmlsZTogMzYwLFxyXG4gICAgICB0YWJsZXQ6IDc2OCxcclxuICAgICAgbGFwdG9wUzogMTAyNCxcclxuICAgICAgbGFwdG9wTDogMTM2NixcclxuICAgICAgcGM6IDE5MjAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3BhY2luZzogMixcclxuICBcclxuICBwYWxldHRlOiB7XHJcbiAgICBtb2RlOidkYXJrJyxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJ3JnYigyNDUsMjQ1LDI0NSknLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBtYWluOiAncmdiKDAsMCwwKScsXHJcbiAgICB9LFxyXG4gICAgc3VjY2Vzczoge1xyXG4gICAgICBtYWluOiAncmdiKDEzNSwwLDEwKScsXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHtcclxuICAgICAgbWFpbjogJ3JnYigyNDUsMjIyLDE3OSknLFxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWNvbmRUaGVtZTsiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJyZWQiLCJzZWNvbmRUaGVtZSIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwiemVybyIsIm1vYmlsZSIsInRhYmxldCIsImxhcHRvcFMiLCJsYXB0b3BMIiwicGMiLCJzcGFjaW5nIiwicGFsZXR0ZSIsIm1vZGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./themes/secondTheme.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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