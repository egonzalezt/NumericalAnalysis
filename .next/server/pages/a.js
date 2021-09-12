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
exports.id = "pages/a";
exports.ids = ["pages/a"];
exports.modules = {

/***/ "./pages/a.js":
/*!********************!*\
  !*** ./pages/a.js ***!
  \********************/
/***/ (() => {

eval("$(document).ready(function () {\n  var randomQuote;\n  var randomNum;\n  var author;\n  var randomAuthor;\n  getQuote();\n\n  function getQuote() {\n    var quotes = [\"It’s dangerous to go alone, take this!\", \"War. War never changes.\", \"Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It's a losing game. Without passion, you are already dead.\", \"Thank you Mario! But our Princess is in another castle!\", \"Snake? Snake? SNAAAAAAAAKE!!!\", \"I used to be an adventurer like you, until I took an arrow to the knee.\", \"It’s super effective!\", \"Space. Space. I'm in space. SPAAAAAAACE!\", \"Do a barrel roll!\", \"Praise the sun!\", \"Do you like hurting other people?\"];\n    var author = [\"- Old Man, The Legend of Zelda\", \"- Narrator, Fallout\", \"- Max Payne, Max Payne 2: The Fall of Max Payne\", \"- Toad, Super Mario Bros.\", \"- The Colonel, Metal Gear Solid 2\", \"- Town Guard, Elder Scrolls V: Skyrim\", \"- Pokemon series\", \"- Space Core, Portal 2\", \"- Star Fox 64\", \"- Solaire of Astora, Dark Souls\", \"- Richard, Hotline Miami\"];\n    randomNum = Math.floor(Math.random() * quotes.length);\n    randomQuote = quotes[randomNum];\n    randomAuthor = author[randomNum];\n    $('.quote').text(randomQuote);\n    $('.author').text(randomAuthor);\n  }\n\n  ;\n  $('#newQuote').on('click', function () {\n    getQuote();\n  });\n  $('#tweetOut').on('click', function () {\n    window.open(\"https://twitter.com/intent/tweet?text=\" + randomQuote + \" \" + randomAuthor);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udW1lcmljYWwtYW5hbHlzaXMvLi9wYWdlcy9hLmpzPzViODMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJyYW5kb21RdW90ZSIsInJhbmRvbU51bSIsImF1dGhvciIsInJhbmRvbUF1dGhvciIsImdldFF1b3RlIiwicXVvdGVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwidGV4dCIsIm9uIiwid2luZG93Iiwib3BlbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QixNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLE1BQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0FDLEVBQUFBLFFBQVE7O0FBQ1IsV0FBU0EsUUFBVCxHQUFvQjtBQUNsQixRQUFJQyxNQUFNLEdBQUcsQ0FBQyx3Q0FBRCxFQUEyQyx5QkFBM0MsRUFBc0Usd0lBQXRFLEVBQWdOLHlEQUFoTixFQUEyUSwrQkFBM1EsRUFBNFMseUVBQTVTLEVBQXVYLHVCQUF2WCxFQUFnWiwwQ0FBaFosRUFBNGIsbUJBQTViLEVBQWlkLGlCQUFqZCxFQUFvZSxtQ0FBcGUsQ0FBYjtBQUNBLFFBQUlILE1BQU0sR0FBRyxDQUFDLGdDQUFELEVBQW1DLHFCQUFuQyxFQUEwRCxpREFBMUQsRUFBNkcsMkJBQTdHLEVBQTBJLG1DQUExSSxFQUErSyx1Q0FBL0ssRUFBd04sa0JBQXhOLEVBQTRPLHdCQUE1TyxFQUFzUSxlQUF0USxFQUF1UixpQ0FBdlIsRUFBMFQsMEJBQTFULENBQWI7QUFDQUQsSUFBQUEsU0FBUyxHQUFJSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWNILE1BQU0sQ0FBQ0ksTUFBaEMsQ0FBYjtBQUNBVCxJQUFBQSxXQUFXLEdBQUdLLE1BQU0sQ0FBQ0osU0FBRCxDQUFwQjtBQUNBRSxJQUFBQSxZQUFZLEdBQUdELE1BQU0sQ0FBQ0QsU0FBRCxDQUFyQjtBQUVBSixJQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlhLElBQVosQ0FBaUJWLFdBQWpCO0FBQ0FILElBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWEsSUFBYixDQUFrQlAsWUFBbEI7QUFFRDs7QUFBQTtBQUNITixFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVjLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBVztBQUNyQ1AsSUFBQUEsUUFBUTtBQUNSLEdBRkQ7QUFJQVAsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlYyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQVc7QUFDckNDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDJDQUEyQ2IsV0FBM0MsR0FBeUQsR0FBekQsR0FBK0RHLFlBQTNFO0FBRUEsR0FIRDtBQUlDLENBekJIIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJhbmRvbVF1b3RlO1xuICAgIHZhciByYW5kb21OdW07XG4gICAgdmFyIGF1dGhvcjtcbiAgICB2YXIgcmFuZG9tQXV0aG9yO1xuICAgIGdldFF1b3RlKCk7XG4gICAgZnVuY3Rpb24gZ2V0UXVvdGUoKSB7XG4gICAgICB2YXIgcXVvdGVzID0gW1wiSXTigJlzIGRhbmdlcm91cyB0byBnbyBhbG9uZSwgdGFrZSB0aGlzIVwiLCBcIldhci4gV2FyIG5ldmVyIGNoYW5nZXMuXCIsIFwiRGVhdGggaXMgaW5ldml0YWJsZS4gT3VyIGZlYXIgb2YgaXQgbWFrZXMgdXMgcGxheSBzYWZlLCBibG9ja3Mgb3V0IGVtb3Rpb24uIEl0J3MgYSBsb3NpbmcgZ2FtZS4gV2l0aG91dCBwYXNzaW9uLCB5b3UgYXJlIGFscmVhZHkgZGVhZC5cIiwgXCJUaGFuayB5b3UgTWFyaW8hIEJ1dCBvdXIgUHJpbmNlc3MgaXMgaW4gYW5vdGhlciBjYXN0bGUhXCIsIFwiU25ha2U/IFNuYWtlPyBTTkFBQUFBQUFBS0UhISFcIiwgXCJJIHVzZWQgdG8gYmUgYW4gYWR2ZW50dXJlciBsaWtlIHlvdSwgdW50aWwgSSB0b29rIGFuIGFycm93IHRvIHRoZSBrbmVlLlwiLCBcIkl04oCZcyBzdXBlciBlZmZlY3RpdmUhXCIsIFwiU3BhY2UuIFNwYWNlLiBJJ20gaW4gc3BhY2UuIFNQQUFBQUFBQUNFIVwiLCBcIkRvIGEgYmFycmVsIHJvbGwhXCIsIFwiUHJhaXNlIHRoZSBzdW4hXCIsIFwiRG8geW91IGxpa2UgaHVydGluZyBvdGhlciBwZW9wbGU/XCJdO1xuICAgICAgdmFyIGF1dGhvciA9IFtcIi0gT2xkIE1hbiwgVGhlIExlZ2VuZCBvZiBaZWxkYVwiLCBcIi0gTmFycmF0b3IsIEZhbGxvdXRcIiwgXCItIE1heCBQYXluZSwgTWF4IFBheW5lIDI6IFRoZSBGYWxsIG9mIE1heCBQYXluZVwiLCBcIi0gVG9hZCwgU3VwZXIgTWFyaW8gQnJvcy5cIiwgXCItIFRoZSBDb2xvbmVsLCBNZXRhbCBHZWFyIFNvbGlkIDJcIiwgXCItIFRvd24gR3VhcmQsIEVsZGVyIFNjcm9sbHMgVjogU2t5cmltXCIsIFwiLSBQb2tlbW9uIHNlcmllc1wiLCBcIi0gU3BhY2UgQ29yZSwgUG9ydGFsIDJcIiwgXCItIFN0YXIgRm94IDY0XCIsIFwiLSBTb2xhaXJlIG9mIEFzdG9yYSwgRGFyayBTb3Vsc1wiLCBcIi0gUmljaGFyZCwgSG90bGluZSBNaWFtaVwiXTtcbiAgICAgIHJhbmRvbU51bSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcXVvdGVzLmxlbmd0aCkpO1xuICAgICAgcmFuZG9tUXVvdGUgPSBxdW90ZXNbcmFuZG9tTnVtXTtcbiAgICAgIHJhbmRvbUF1dGhvciA9IGF1dGhvcltyYW5kb21OdW1dO1xuICAgIFxuICAgICAgJCgnLnF1b3RlJykudGV4dChyYW5kb21RdW90ZSk7XG4gICAgICAkKCcuYXV0aG9yJykudGV4dChyYW5kb21BdXRob3IpO1xuICAgIFxuICAgIH07XG4gICQoJyNuZXdRdW90ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgZ2V0UXVvdGUoKTtcbiAgfSk7XG4gIFxuICAkKCcjdHdlZXRPdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1cIiArIHJhbmRvbVF1b3RlICsgXCIgXCIgKyByYW5kb21BdXRob3IpOyBcbiAgXG4gIH0pO1xuICB9KTsiXSwiZmlsZSI6Ii4vcGFnZXMvYS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/a.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/a.js"));
module.exports = __webpack_exports__;

})();