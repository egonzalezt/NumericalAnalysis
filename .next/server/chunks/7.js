exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupForm": () => (/* binding */ SignupForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(717);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(976);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const SignupForm = () => {
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({
    initialValues: {
      function: '',
      x0: '',
      delta: '',
      iter: ''
    },
    onSubmit: values => {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get('localhost:2000/', {
        params: {
          funtion: values.function,
          x0: values.x0,
          delta: values.delta,
          iter: values.iter
        }
      }).then(res => {
        console.log(res.data);
        console.log(res.status);
      }).catch(err => {
        console.log(err);
      });
    }
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
        onSubmit: formik.handleSubmit,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            id: "function",
            name: "function",
            type: "function",
            className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
            placeholder: "function",
            onChange: formik.handleChange,
            value: formik.values.function
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            id: "x0",
            name: "x0",
            type: "number",
            className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
            placeholder: "x0",
            onChange: formik.handleChange,
            value: formik.values.x0
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            id: "delta",
            name: "delta",
            type: "number",
            className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
            placeholder: "delta",
            onChange: formik.handleChange,
            value: formik.values.delta
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
            id: "iter",
            name: "iter",
            type: "number",
            className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),
            placeholder: "iter",
            onChange: formik.handleChange,
            value: formik.values.iter
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
            className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
            type: "submit",
            children: "Submit"
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupForm);

/***/ }),

/***/ 976:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "Form_input__1Lu0K",
	"form": "Form_form__1jpez",
	"button": "Form_button__2qqHY",
	"grid": "Form_grid__F6_oA"
};


/***/ })

};
;