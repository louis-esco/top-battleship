/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: system-ui, sans-serif;
  margin: none;
}

h1 {
  text-align: center;
}

.player-name,
.game-status {
  text-align: center;
}

.gameboards {
  display: flex;
  justify-content: space-around;
}

.grid {
  height: 400px;
  width: 400px;
  display: grid;
  grid-template: 1fr 10fr / 1fr 10fr;
}

.grid-letters {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.grid-numbers {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}

.grid-cells {
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  gap: 1px;
}

.cell-btn {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #e2e8f0;
  color: #ffffff;
}

.cell-btn:disabled {
  cursor: auto;
  background-color: #f1f5f9;
}

.cell-btn.empty-cell-hit {
  background-color: #fde047;
}

.cell-btn.ship-cell-hit {
  background-color: #ef4444;
}

.game-btns {
  margin-top: 15px;
}

.game-btn {
  margin-right: 10px;
  background-color: #bfdbfe;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["body {\n  font-family: system-ui, sans-serif;\n  margin: none;\n}\n\nh1 {\n  text-align: center;\n}\n\n.player-name,\n.game-status {\n  text-align: center;\n}\n\n.gameboards {\n  display: flex;\n  justify-content: space-around;\n}\n\n.grid {\n  height: 400px;\n  width: 400px;\n  display: grid;\n  grid-template: 1fr 10fr / 1fr 10fr;\n}\n\n.grid-letters {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.grid-numbers {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  text-align: center;\n}\n\n.grid-cells {\n  display: grid;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n  gap: 1px;\n}\n\n.cell-btn {\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n  background-color: #e2e8f0;\n  color: #ffffff;\n}\n\n.cell-btn:disabled {\n  cursor: auto;\n  background-color: #f1f5f9;\n}\n\n.cell-btn.empty-cell-hit {\n  background-color: #fde047;\n}\n\n.cell-btn.ship-cell-hit {\n  background-color: #ef4444;\n}\n\n.game-btns {\n  margin-top: 15px;\n}\n\n.game-btn {\n  margin-right: 10px;\n  background-color: #bfdbfe;\n  border: none;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game-logic/boardCell.js":
/*!*************************************!*\
  !*** ./src/game-logic/boardCell.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardCell: () => (/* binding */ BoardCell)
/* harmony export */ });
class BoardCell {
  constructor() {
    this.ship = null;
    this.isHit = false;
  }

  hitCell() {
    this.isHit = true;
    if (this.ship !== null) this.ship.hit();
    return this;
  }

  hasShip() {
    if (this.ship === null) return false;
    else return true;
  }
}


/***/ }),

/***/ "./src/game-logic/gameController.js":
/*!******************************************!*\
  !*** ./src/game-logic/gameController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameController: () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/game-logic/player.js");


class GameController {
  constructor(playerOneName, playerOneType, playerTwoName, playerTwoType) {
    this.players = [
      new _player__WEBPACK_IMPORTED_MODULE_0__.Player("Player", "real"),
      new _player__WEBPACK_IMPORTED_MODULE_0__.Player("Computer", "computer"),
    ];
    this.activePlayer = this.players[0];
    this.opponentPlayer = this.players[1];
  }

  getActivePlayer() {
    return this.activePlayer;
  }

  getOpponentPlayer() {
    return this.opponentPlayer;
  }

  switchPlayerTurn() {
    if (this.activePlayer === this.players[0]) {
      this.activePlayer = this.players[1];
      this.opponentPlayer = this.players[0];
    } else {
      this.activePlayer = this.players[0];
      this.opponentPlayer = this.players[1];
    }
  }

  makeComputerPlay() {
    let attack = false;
    while (!attack) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      attack = this.playRound(x, y);
    }
  }

  playRound(x, y) {
    return this.getOpponentPlayer().gameboard.receiveAttack(x, y);
  }

  checkWinner() {
    if (this.getOpponentPlayer().gameboard.checkAllShipsSunk()) return true;
    return false;
  }

  getPlayerBoard(player) {
    return player.gameboard.board;
  }

  placeShipsRandomly(player) {
    player.gameboard.placeShipsRandom();
  }
}


/***/ }),

/***/ "./src/game-logic/gameboard.js":
/*!*************************************!*\
  !*** ./src/game-logic/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _boardCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardCell */ "./src/game-logic/boardCell.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/game-logic/ship.js");



class Gameboard {
  constructor(size) {
    this.board = this.createBoard((size = 10));
    this.ships = this.createShips();
  }

  createBoard(size) {
    let board = new Array(10);
    for (let i = 0; i < size; i++) {
      board[i] = new Array(10);
      for (let j = 0; j < size; j++) {
        board[i][j] = new _boardCell__WEBPACK_IMPORTED_MODULE_0__.BoardCell();
      }
    }
    return board;
  }

  createShips() {
    return {
      carrier: new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5, "carrier"),
      battleship: new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4, "battleship"),
      cruiser: new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, "cruiser"),
      submarine: new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, "submarine"),
      destroyer: new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2, "destroyer"),
    };
  }

  placeShip(shipName, x, y, axis) {
    if (this.checkValidPlacement(shipName, x, y, axis)) {
      this.changeCellsShip(shipName, x, y, axis);
      return true;
    }
    return false;
  }

  receiveAttack(x, y) {
    if (this.board[y][x].isHit) return false;
    return this.board[y][x].hitCell();
  }

  checkAllShipsSunk() {
    for (let ship in this.ships) {
      if (!this.ships[ship].isSunk()) return false;
    }
    return true;
  }

  removeAllShips() {
    for (let i = 0; i < this.board.length; i++)
      for (let j = 0; j < this.board.length; j++) this.board[i][j].ship = null;
  }

  placeShipsRandom() {
    this.removeAllShips();
    for (let ship in this.ships) {
      let placed = false;
      while (!placed) {
        let x = Math.floor(Math.random() * (this.board.length - 2));
        let y = Math.floor(Math.random() * (this.board.length - 2));
        let axis = Math.random() < 0.5 ? "xAxis" : "yAxis";
        placed = this.placeShip(ship, x, y, axis);
      }
    }
  }

  checkValidPlacement(shipName, x, y, axis) {
    return (
      this.ships[shipName] &&
      this.checkPositionValidity(shipName, x, y, axis) &&
      this.checkCellsAvailability(shipName, x, y, axis)
    );
  }

  checkPositionValidity(shipName, x, y, axis) {
    if (
      axis === "xAxis" &&
      x + this.ships[shipName].length <= this.board.length &&
      y < this.board.length
    )
      return true;
    if (
      axis === "yAxis" &&
      y + this.ships[shipName].length <= this.board.length &&
      x < this.board.length
    )
      return true;
    return false;
  }

  checkCellsAvailability(shipName, x, y, axis) {
    if (axis === "xAxis") {
      for (let i = x; i < this.ships[shipName].length + x; i++) {
        if (this.board[y][i].ship !== null) return false;
      }
      return true;
    }
    if (axis === "yAxis") {
      for (let i = y; i < this.ships[shipName].length + y; i++) {
        if (this.board[i][x].ship !== null) return false;
      }
      return true;
    }
    return false;
  }

  changeCellsShip(shipName, x, y, axis) {
    if (axis === "xAxis") {
      for (let i = x; i < this.ships[shipName].length + x; i++) {
        this.board[y][i].ship = this.ships[shipName];
      }
    } else if (axis === "yAxis") {
      for (let i = y; i < this.ships[shipName].length + y; i++) {
        this.board[i][x].ship = this.ships[shipName];
      }
    }
  }
}


/***/ }),

/***/ "./src/game-logic/player.js":
/*!**********************************!*\
  !*** ./src/game-logic/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/game-logic/gameboard.js");


class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(10);
  }
}


/***/ }),

/***/ "./src/game-logic/ship.js":
/*!********************************!*\
  !*** ./src/game-logic/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, name) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    if (this.sunk) return this;
    this.hits++;
    this.isSunk();
    return this;
  }

  isSunk() {
    if (this.hits >= this.length) this.sunk = true;
    return this.sunk;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _game_logic_gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-logic/gameController */ "./src/game-logic/gameController.js");



function screenController() {
  const game = new _game_logic_gameController__WEBPACK_IMPORTED_MODULE_1__.GameController();
  game.placeShipsRandomly(game.getActivePlayer());
  game.placeShipsRandomly(game.getOpponentPlayer());

  const gameStatusDiv = document.querySelector(".game-status");
  const p1NameDiv = document.querySelector(".player-name.p1");
  const p2NameDiv = document.querySelector(".player-name.p2");
  const p1BoardDiv = document.querySelector(".grid-cells.p1");
  const p2BoardDiv = document.querySelector(".grid-cells.p2");
  const boardArr = [p1BoardDiv, p2BoardDiv];
  const gameBtns = document.querySelector(".game-btns");

  p1NameDiv.textContent = game.players[0].name;
  p2NameDiv.textContent = game.players[1].name;

  function placeShipScreen() {
    gameStatusDiv.textContent = "Place your ships !";
    gameBtns.textContent = "";

    for (let [index, player] of game.players.entries()) {
      const gameboard = game.getPlayerBoard(player);
      const boardDiv = boardArr[index];

      boardDiv.textContent = "";

      for (let row of gameboard) {
        for (let cell of row) {
          const cellBtn = document.createElement("button");
          cellBtn.classList.add("cell-btn");

          if (cell.hasShip() && player.type === "real")
            cellBtn.classList.add("empty-cell-hit");

          if (player.type === "computer") cellBtn.disabled = true;

          boardDiv.appendChild(cellBtn);
        }
      }

      if (player.type === "real") {
        const randomShipsBtn = document.createElement("button");
        randomShipsBtn.classList.add("game-btn");
        randomShipsBtn.textContent = "Random placement";

        randomShipsBtn.addEventListener("click", () => {
          game.placeShipsRandomly(player);
          placeShipScreen();
        });

        const startGameBtn = document.createElement("button");
        startGameBtn.classList.add("game-btn");
        startGameBtn.textContent = "Start game";

        startGameBtn.addEventListener("click", () => {
          launchGame();
        });

        gameBtns.appendChild(randomShipsBtn);
        gameBtns.appendChild(startGameBtn);
      }
    }
  }

  function launchGame() {
    gameBtns.textContent = "";

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart game";
    restartBtn.classList.add("game-btn");
    restartBtn.addEventListener("click", screenController);
    gameBtns.appendChild(restartBtn);

    updateGameScreen();
  }

  function updateGameScreen() {
    gameStatusDiv.textContent = game.checkWinner()
      ? `${game.getActivePlayer().name} has won the game !`
      : `It's ${game.getActivePlayer().name}'s turn`;

    for (let [index, player] of game.players.entries()) {
      const gameboard = game.getPlayerBoard(player);
      const boardDiv = boardArr[index];
      let cellIndex = 0;

      boardDiv.textContent = "";

      for (let row of gameboard) {
        for (let cell of row) {
          const cellBtn = document.createElement("button");
          cellBtn.classList.add("cell-btn");
          if (cell.hasShip() && cell.isHit)
            cellBtn.classList.add("ship-cell-hit");
          if (cell.hasShip() && cell.isHit && cell.ship.isSunk())
            cellBtn.textContent = "KO";

          if (cell.isHit) cellBtn.classList.add("empty-cell-hit");
          if (
            player === game.getActivePlayer() ||
            game.checkWinner() ||
            cell.isHit ||
            game.getActivePlayer().type === "computer"
          )
            cellBtn.disabled = true;

          const x = cellIndex % 10;
          const y = Math.floor(cellIndex / 10);

          cellBtn.addEventListener("click", () => {
            game.playRound(x, y);
            if (!game.checkWinner()) game.switchPlayerTurn();
            updateGameScreen();

            if (game.getActivePlayer().type === "computer") {
              setTimeout(() => {
                game.makeComputerPlay();
                if (!game.checkWinner()) game.switchPlayerTurn();
                updateGameScreen();
              }, 0);
            }
          });

          boardDiv.appendChild(cellBtn);
          cellIndex++;
        }
      }
    }
  }
  //   updateGameScreen();
  placeShipScreen();
}

screenController();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QyxnQkFBZ0IsNEJBQTRCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMvYm9hcmRDZWxsLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb2dpYy9zaGlwLmpzIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiBub25lO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYXllci1uYW1lLFxuLmdhbWUtc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ2FtZWJvYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZ3JpZCB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgLyAxZnIgMTBmcjtcbn1cblxuLmdyaWQtbGV0dGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ3JpZC1udW1iZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtY2VsbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMXB4O1xufVxuXG4uY2VsbC1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNlbGwtYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xufVxuXG4uY2VsbC1idG4uZW1wdHktY2VsbC1oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xufVxuXG4uY2VsbC1idG4uc2hpcC1jZWxsLWhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ0NDQ7XG59XG5cbi5nYW1lLWJ0bnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZ2FtZS1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmRiZmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLW5hbWUsXFxuLmdhbWUtc3RhdHVzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxMGZyIC8gMWZyIDEwZnI7XFxufVxcblxcbi5ncmlkLWxldHRlcnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtbnVtYmVycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZC1jZWxscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxufVxcblxcbi5jZWxsLWJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jZWxsLWJ0bjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbn1cXG5cXG4uY2VsbC1idG4uZW1wdHktY2VsbC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcXG59XFxuXFxuLmNlbGwtYnRuLnNoaXAtY2VsbC1oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NDtcXG59XFxuXFxuLmdhbWUtYnRucyB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uZ2FtZS1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmZGJmZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBCb2FyZENlbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoaXAgPSBudWxsO1xuICAgIHRoaXMuaXNIaXQgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdENlbGwoKSB7XG4gICAgdGhpcy5pc0hpdCA9IHRydWU7XG4gICAgaWYgKHRoaXMuc2hpcCAhPT0gbnVsbCkgdGhpcy5zaGlwLmhpdCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaGFzU2hpcCgpIHtcbiAgICBpZiAodGhpcy5zaGlwID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllck9uZU5hbWUsIHBsYXllck9uZVR5cGUsIHBsYXllclR3b05hbWUsIHBsYXllclR3b1R5cGUpIHtcbiAgICB0aGlzLnBsYXllcnMgPSBbXG4gICAgICBuZXcgUGxheWVyKFwiUGxheWVyXCIsIFwicmVhbFwiKSxcbiAgICAgIG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCBcImNvbXB1dGVyXCIpLFxuICAgIF07XG4gICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgdGhpcy5vcHBvbmVudFBsYXllciA9IHRoaXMucGxheWVyc1sxXTtcbiAgfVxuXG4gIGdldEFjdGl2ZVBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVQbGF5ZXI7XG4gIH1cblxuICBnZXRPcHBvbmVudFBsYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHBvbmVudFBsYXllcjtcbiAgfVxuXG4gIHN3aXRjaFBsYXllclR1cm4oKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyID09PSB0aGlzLnBsYXllcnNbMF0pIHtcbiAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xuICAgICAgdGhpcy5vcHBvbmVudFBsYXllciA9IHRoaXMucGxheWVyc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICB0aGlzLm9wcG9uZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VDb21wdXRlclBsYXkoKSB7XG4gICAgbGV0IGF0dGFjayA9IGZhbHNlO1xuICAgIHdoaWxlICghYXR0YWNrKSB7XG4gICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgYXR0YWNrID0gdGhpcy5wbGF5Um91bmQoeCwgeSk7XG4gICAgfVxuICB9XG5cbiAgcGxheVJvdW5kKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcHBvbmVudFBsYXllcigpLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9XG5cbiAgY2hlY2tXaW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2V0T3Bwb25lbnRQbGF5ZXIoKS5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0UGxheWVyQm9hcmQocGxheWVyKSB7XG4gICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG4gIH1cblxuICBwbGFjZVNoaXBzUmFuZG9tbHkocGxheWVyKSB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJvYXJkQ2VsbCB9IGZyb20gXCIuL2JvYXJkQ2VsbFwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgoc2l6ZSA9IDEwKSk7XG4gICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKHNpemUpIHtcbiAgICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IG5ldyBCb2FyZENlbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgY3JlYXRlU2hpcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcnJpZXI6IG5ldyBTaGlwKDUsIFwiY2FycmllclwiKSxcbiAgICAgIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKSxcbiAgICAgIGNydWlzZXI6IG5ldyBTaGlwKDMsIFwiY3J1aXNlclwiKSxcbiAgICAgIHN1Ym1hcmluZTogbmV3IFNoaXAoMywgXCJzdWJtYXJpbmVcIiksXG4gICAgICBkZXN0cm95ZXI6IG5ldyBTaGlwKDIsIFwiZGVzdHJveWVyXCIpLFxuICAgIH07XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIGF4aXMpIHtcbiAgICBpZiAodGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBOYW1lLCB4LCB5LCBheGlzKSkge1xuICAgICAgdGhpcy5jaGFuZ2VDZWxsc1NoaXAoc2hpcE5hbWUsIHgsIHksIGF4aXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdLmlzSGl0KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeV1beF0uaGl0Q2VsbCgpO1xuICB9XG5cbiAgY2hlY2tBbGxTaGlwc1N1bmsoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0uaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmVBbGxTaGlwcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpKyspXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmQubGVuZ3RoOyBqKyspIHRoaXMuYm9hcmRbaV1bal0uc2hpcCA9IG51bGw7XG4gIH1cblxuICBwbGFjZVNoaXBzUmFuZG9tKCkge1xuICAgIHRoaXMucmVtb3ZlQWxsU2hpcHMoKTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuYm9hcmQubGVuZ3RoIC0gMikpO1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmJvYXJkLmxlbmd0aCAtIDIpKTtcbiAgICAgICAgbGV0IGF4aXMgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJ4QXhpc1wiIDogXCJ5QXhpc1wiO1xuICAgICAgICBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBheGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBOYW1lLCB4LCB5LCBheGlzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2hpcHNbc2hpcE5hbWVdICYmXG4gICAgICB0aGlzLmNoZWNrUG9zaXRpb25WYWxpZGl0eShzaGlwTmFtZSwgeCwgeSwgYXhpcykgJiZcbiAgICAgIHRoaXMuY2hlY2tDZWxsc0F2YWlsYWJpbGl0eShzaGlwTmFtZSwgeCwgeSwgYXhpcylcbiAgICApO1xuICB9XG5cbiAgY2hlY2tQb3NpdGlvblZhbGlkaXR5KHNoaXBOYW1lLCB4LCB5LCBheGlzKSB7XG4gICAgaWYgKFxuICAgICAgYXhpcyA9PT0gXCJ4QXhpc1wiICYmXG4gICAgICB4ICsgdGhpcy5zaGlwc1tzaGlwTmFtZV0ubGVuZ3RoIDw9IHRoaXMuYm9hcmQubGVuZ3RoICYmXG4gICAgICB5IDwgdGhpcy5ib2FyZC5sZW5ndGhcbiAgICApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoXG4gICAgICBheGlzID09PSBcInlBeGlzXCIgJiZcbiAgICAgIHkgKyB0aGlzLnNoaXBzW3NoaXBOYW1lXS5sZW5ndGggPD0gdGhpcy5ib2FyZC5sZW5ndGggJiZcbiAgICAgIHggPCB0aGlzLmJvYXJkLmxlbmd0aFxuICAgIClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrQ2VsbHNBdmFpbGFiaWxpdHkoc2hpcE5hbWUsIHgsIHksIGF4aXMpIHtcbiAgICBpZiAoYXhpcyA9PT0gXCJ4QXhpc1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHRoaXMuc2hpcHNbc2hpcE5hbWVdLmxlbmd0aCArIHg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVtpXS5zaGlwICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGF4aXMgPT09IFwieUF4aXNcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB0aGlzLnNoaXBzW3NoaXBOYW1lXS5sZW5ndGggKyB5OyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1beF0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoYW5nZUNlbGxzU2hpcChzaGlwTmFtZSwgeCwgeSwgYXhpcykge1xuICAgIGlmIChheGlzID09PSBcInhBeGlzXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgdGhpcy5zaGlwc1tzaGlwTmFtZV0ubGVuZ3RoICsgeDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeV1baV0uc2hpcCA9IHRoaXMuc2hpcHNbc2hpcE5hbWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ5QXhpc1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHRoaXMuc2hpcHNbc2hpcE5hbWVdLmxlbmd0aCArIHk7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW3hdLnNoaXAgPSB0aGlzLnNoaXBzW3NoaXBOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoMTApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5zdW5rKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLmhpdHMrKztcbiAgICB0aGlzLmlzU3VuaygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHRoaXMuc3VuayA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL2dhbWUtbG9naWMvZ2FtZUNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcigpIHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcigpO1xuICBnYW1lLnBsYWNlU2hpcHNSYW5kb21seShnYW1lLmdldEFjdGl2ZVBsYXllcigpKTtcbiAgZ2FtZS5wbGFjZVNoaXBzUmFuZG9tbHkoZ2FtZS5nZXRPcHBvbmVudFBsYXllcigpKTtcblxuICBjb25zdCBnYW1lU3RhdHVzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXN0YXR1c1wiKTtcbiAgY29uc3QgcDFOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZS5wMVwiKTtcbiAgY29uc3QgcDJOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZS5wMlwiKTtcbiAgY29uc3QgcDFCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jZWxscy5wMVwiKTtcbiAgY29uc3QgcDJCb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1jZWxscy5wMlwiKTtcbiAgY29uc3QgYm9hcmRBcnIgPSBbcDFCb2FyZERpdiwgcDJCb2FyZERpdl07XG4gIGNvbnN0IGdhbWVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWJ0bnNcIik7XG5cbiAgcDFOYW1lRGl2LnRleHRDb250ZW50ID0gZ2FtZS5wbGF5ZXJzWzBdLm5hbWU7XG4gIHAyTmFtZURpdi50ZXh0Q29udGVudCA9IGdhbWUucGxheWVyc1sxXS5uYW1lO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcFNjcmVlbigpIHtcbiAgICBnYW1lU3RhdHVzRGl2LnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNoaXBzICFcIjtcbiAgICBnYW1lQnRucy50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBbaW5kZXgsIHBsYXllcl0gb2YgZ2FtZS5wbGF5ZXJzLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgZ2FtZWJvYXJkID0gZ2FtZS5nZXRQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuICAgICAgY29uc3QgYm9hcmREaXYgPSBib2FyZEFycltpbmRleF07XG5cbiAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgZm9yIChsZXQgcm93IG9mIGdhbWVib2FyZCkge1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHJvdykge1xuICAgICAgICAgIGNvbnN0IGNlbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGNlbGxCdG4uY2xhc3NMaXN0LmFkZChcImNlbGwtYnRuXCIpO1xuXG4gICAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCgpICYmIHBsYXllci50eXBlID09PSBcInJlYWxcIilcbiAgICAgICAgICAgIGNlbGxCdG4uY2xhc3NMaXN0LmFkZChcImVtcHR5LWNlbGwtaGl0XCIpO1xuXG4gICAgICAgICAgaWYgKHBsYXllci50eXBlID09PSBcImNvbXB1dGVyXCIpIGNlbGxCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY2VsbEJ0bik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllci50eXBlID09PSBcInJlYWxcIikge1xuICAgICAgICBjb25zdCByYW5kb21TaGlwc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJhbmRvbVNoaXBzQnRuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJ0blwiKTtcbiAgICAgICAgcmFuZG9tU2hpcHNCdG4udGV4dENvbnRlbnQgPSBcIlJhbmRvbSBwbGFjZW1lbnRcIjtcblxuICAgICAgICByYW5kb21TaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGdhbWUucGxhY2VTaGlwc1JhbmRvbWx5KHBsYXllcik7XG4gICAgICAgICAgcGxhY2VTaGlwU2NyZWVuKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1idG5cIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnQgZ2FtZVwiO1xuXG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGxhdW5jaEdhbWUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ2FtZUJ0bnMuYXBwZW5kQ2hpbGQocmFuZG9tU2hpcHNCdG4pO1xuICAgICAgICBnYW1lQnRucy5hcHBlbmRDaGlsZChzdGFydEdhbWVCdG4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhdW5jaEdhbWUoKSB7XG4gICAgZ2FtZUJ0bnMudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiUmVzdGFydCBnYW1lXCI7XG4gICAgcmVzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1idG5cIik7XG4gICAgcmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2NyZWVuQ29udHJvbGxlcik7XG4gICAgZ2FtZUJ0bnMuYXBwZW5kQ2hpbGQocmVzdGFydEJ0bik7XG5cbiAgICB1cGRhdGVHYW1lU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVHYW1lU2NyZWVuKCkge1xuICAgIGdhbWVTdGF0dXNEaXYudGV4dENvbnRlbnQgPSBnYW1lLmNoZWNrV2lubmVyKClcbiAgICAgID8gYCR7Z2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfSBoYXMgd29uIHRoZSBnYW1lICFgXG4gICAgICA6IGBJdCdzICR7Z2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfSdzIHR1cm5gO1xuXG4gICAgZm9yIChsZXQgW2luZGV4LCBwbGF5ZXJdIG9mIGdhbWUucGxheWVycy5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGdhbWUuZ2V0UGxheWVyQm9hcmQocGxheWVyKTtcbiAgICAgIGNvbnN0IGJvYXJkRGl2ID0gYm9hcmRBcnJbaW5kZXhdO1xuICAgICAgbGV0IGNlbGxJbmRleCA9IDA7XG5cbiAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgZm9yIChsZXQgcm93IG9mIGdhbWVib2FyZCkge1xuICAgICAgICBmb3IgKGxldCBjZWxsIG9mIHJvdykge1xuICAgICAgICAgIGNvbnN0IGNlbGxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIGNlbGxCdG4uY2xhc3NMaXN0LmFkZChcImNlbGwtYnRuXCIpO1xuICAgICAgICAgIGlmIChjZWxsLmhhc1NoaXAoKSAmJiBjZWxsLmlzSGl0KVxuICAgICAgICAgICAgY2VsbEJ0bi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsLWhpdFwiKTtcbiAgICAgICAgICBpZiAoY2VsbC5oYXNTaGlwKCkgJiYgY2VsbC5pc0hpdCAmJiBjZWxsLnNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgICBjZWxsQnRuLnRleHRDb250ZW50ID0gXCJLT1wiO1xuXG4gICAgICAgICAgaWYgKGNlbGwuaXNIaXQpIGNlbGxCdG4uY2xhc3NMaXN0LmFkZChcImVtcHR5LWNlbGwtaGl0XCIpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYXllciA9PT0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKSB8fFxuICAgICAgICAgICAgZ2FtZS5jaGVja1dpbm5lcigpIHx8XG4gICAgICAgICAgICBjZWxsLmlzSGl0IHx8XG4gICAgICAgICAgICBnYW1lLmdldEFjdGl2ZVBsYXllcigpLnR5cGUgPT09IFwiY29tcHV0ZXJcIlxuICAgICAgICAgIClcbiAgICAgICAgICAgIGNlbGxCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgY29uc3QgeCA9IGNlbGxJbmRleCAlIDEwO1xuICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGNlbGxJbmRleCAvIDEwKTtcblxuICAgICAgICAgIGNlbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGdhbWUucGxheVJvdW5kKHgsIHkpO1xuICAgICAgICAgICAgaWYgKCFnYW1lLmNoZWNrV2lubmVyKCkpIGdhbWUuc3dpdGNoUGxheWVyVHVybigpO1xuICAgICAgICAgICAgdXBkYXRlR2FtZVNjcmVlbigpO1xuXG4gICAgICAgICAgICBpZiAoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS50eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZS5tYWtlQ29tcHV0ZXJQbGF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFnYW1lLmNoZWNrV2lubmVyKCkpIGdhbWUuc3dpdGNoUGxheWVyVHVybigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUdhbWVTY3JlZW4oKTtcbiAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBib2FyZERpdi5hcHBlbmRDaGlsZChjZWxsQnRuKTtcbiAgICAgICAgICBjZWxsSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyAgIHVwZGF0ZUdhbWVTY3JlZW4oKTtcbiAgcGxhY2VTaGlwU2NyZWVuKCk7XG59XG5cbnNjcmVlbkNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==