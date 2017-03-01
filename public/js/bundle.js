/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by scottbaron on 11/14/16.
	 */
	'use strict';

	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(10);
	__webpack_require__(12);


	// require('../js/ui');
	// require('../js/basicModal');


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./pure-min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./pure-min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\nPure v0.6.0\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*/\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hidden,[hidden]{display:none!important}.pure-img{max-width:100%;height:auto;display:block}.pure-g{letter-spacing:-.31em;*letter-spacing:normal;*word-spacing:-.43em;text-rendering:optimizespeed;font-family:FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;display:-webkit-flex;-webkit-flex-flow:row wrap;display:-ms-flexbox;-ms-flex-flow:row wrap;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.opera-only :-o-prefocus,.pure-g{word-spacing:-.43em}.pure-u{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-g [class *=\"pure-u\"]{font-family:sans-serif}.pure-u-1,.pure-u-1-1,.pure-u-1-2,.pure-u-1-3,.pure-u-2-3,.pure-u-1-4,.pure-u-3-4,.pure-u-1-5,.pure-u-2-5,.pure-u-3-5,.pure-u-4-5,.pure-u-5-5,.pure-u-1-6,.pure-u-5-6,.pure-u-1-8,.pure-u-3-8,.pure-u-5-8,.pure-u-7-8,.pure-u-1-12,.pure-u-5-12,.pure-u-7-12,.pure-u-11-12,.pure-u-1-24,.pure-u-2-24,.pure-u-3-24,.pure-u-4-24,.pure-u-5-24,.pure-u-6-24,.pure-u-7-24,.pure-u-8-24,.pure-u-9-24,.pure-u-10-24,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-1-24{width:4.1667%;*width:4.1357%}.pure-u-1-12,.pure-u-2-24{width:8.3333%;*width:8.3023%}.pure-u-1-8,.pure-u-3-24{width:12.5%;*width:12.469%}.pure-u-1-6,.pure-u-4-24{width:16.6667%;*width:16.6357%}.pure-u-1-5{width:20%;*width:19.969%}.pure-u-5-24{width:20.8333%;*width:20.8023%}.pure-u-1-4,.pure-u-6-24{width:25%;*width:24.969%}.pure-u-7-24{width:29.1667%;*width:29.1357%}.pure-u-1-3,.pure-u-8-24{width:33.3333%;*width:33.3023%}.pure-u-3-8,.pure-u-9-24{width:37.5%;*width:37.469%}.pure-u-2-5{width:40%;*width:39.969%}.pure-u-5-12,.pure-u-10-24{width:41.6667%;*width:41.6357%}.pure-u-11-24{width:45.8333%;*width:45.8023%}.pure-u-1-2,.pure-u-12-24{width:50%;*width:49.969%}.pure-u-13-24{width:54.1667%;*width:54.1357%}.pure-u-7-12,.pure-u-14-24{width:58.3333%;*width:58.3023%}.pure-u-3-5{width:60%;*width:59.969%}.pure-u-5-8,.pure-u-15-24{width:62.5%;*width:62.469%}.pure-u-2-3,.pure-u-16-24{width:66.6667%;*width:66.6357%}.pure-u-17-24{width:70.8333%;*width:70.8023%}.pure-u-3-4,.pure-u-18-24{width:75%;*width:74.969%}.pure-u-19-24{width:79.1667%;*width:79.1357%}.pure-u-4-5{width:80%;*width:79.969%}.pure-u-5-6,.pure-u-20-24{width:83.3333%;*width:83.3023%}.pure-u-7-8,.pure-u-21-24{width:87.5%;*width:87.469%}.pure-u-11-12,.pure-u-22-24{width:91.6667%;*width:91.6357%}.pure-u-23-24{width:95.8333%;*width:95.8023%}.pure-u-1,.pure-u-1-1,.pure-u-5-5,.pure-u-24-24{width:100%}.pure-button{display:inline-block;zoom:1;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button{font-family:inherit;font-size:100%;padding:.5em 1em;color:#444;color:rgba(0,0,0,.8);border:1px solid #999;border:0 rgba(0,0,0,0);background-color:#E6E6E6;text-decoration:none;border-radius:2px}.pure-button-hover,.pure-button:hover,.pure-button:focus{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000', GradientType=0);background-image:-webkit-gradient(linear,0 0,0 100%,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:-moz-linear-gradient(top,rgba(0,0,0,.05) 0,rgba(0,0,0,.1));background-image:-o-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus{outline:0}.pure-button-active,.pure-button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;border-color:#000\\9}.pure-button[disabled],.pure-button-disabled,.pure-button-disabled:hover,.pure-button-disabled:focus,.pure-button-disabled:active{border:0;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);filter:alpha(opacity=40);-khtml-opacity:.4;-moz-opacity:.4;opacity:.4;cursor:not-allowed;box-shadow:none}.pure-button-hidden{display:none}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected{background-color:#0078e7;color:#fff}.pure-form input[type=text],.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=color],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input:not([type]){padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input[type=color]{padding:.2em .5em}.pure-form input[type=text]:focus,.pure-form input[type=password]:focus,.pure-form input[type=email]:focus,.pure-form input[type=url]:focus,.pure-form input[type=date]:focus,.pure-form input[type=month]:focus,.pure-form input[type=time]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=week]:focus,.pure-form input[type=number]:focus,.pure-form input[type=search]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=color]:focus,.pure-form select:focus,.pure-form textarea:focus{outline:0;border-color:#129FEA}.pure-form input:not([type]):focus{outline:0;border-color:#129FEA}.pure-form input[type=file]:focus,.pure-form input[type=radio]:focus,.pure-form input[type=checkbox]:focus{outline:thin solid #129FEA;outline:1px auto #129FEA}.pure-form .pure-checkbox,.pure-form .pure-radio{margin:.5em 0;display:block}.pure-form input[type=text][disabled],.pure-form input[type=password][disabled],.pure-form input[type=email][disabled],.pure-form input[type=url][disabled],.pure-form input[type=date][disabled],.pure-form input[type=month][disabled],.pure-form input[type=time][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=week][disabled],.pure-form input[type=number][disabled],.pure-form input[type=search][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=color][disabled],.pure-form select[disabled],.pure-form textarea[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input:not([type])[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly]{background-color:#eee;color:#777;border-color:#ccc}.pure-form input:focus:invalid,.pure-form textarea:focus:invalid,.pure-form select:focus:invalid{color:#b94a48;border-color:#e9322d}.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus,.pure-form input[type=checkbox]:focus:invalid:focus{outline-color:#e9322d}.pure-form select{height:2.25em;border:1px solid #ccc;background-color:#fff}.pure-form select[multiple]{height:auto}.pure-form label{margin:.5em 0 .2em}.pure-form fieldset{margin:0;padding:.35em 0 .75em;border:0}.pure-form legend{display:block;width:100%;padding:.3em 0;margin-bottom:.3em;color:#333;border-bottom:1px solid #e5e5e5}.pure-form-stacked input[type=text],.pure-form-stacked input[type=password],.pure-form-stacked input[type=email],.pure-form-stacked input[type=url],.pure-form-stacked input[type=date],.pure-form-stacked input[type=month],.pure-form-stacked input[type=time],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=week],.pure-form-stacked input[type=number],.pure-form-stacked input[type=search],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=color],.pure-form-stacked input[type=file],.pure-form-stacked select,.pure-form-stacked label,.pure-form-stacked textarea{display:block;margin:.25em 0}.pure-form-stacked input:not([type]){display:block;margin:.25em 0}.pure-form-aligned input,.pure-form-aligned textarea,.pure-form-aligned select,.pure-form-aligned .pure-help-inline,.pure-form-message-inline{display:inline-block;*display:inline;*zoom:1;vertical-align:middle}.pure-form-aligned textarea{vertical-align:top}.pure-form-aligned .pure-control-group{margin-bottom:.5em}.pure-form-aligned .pure-control-group label{text-align:right;display:inline-block;vertical-align:middle;width:10em;margin:0 1em 0 0}.pure-form-aligned .pure-controls{margin:1.5em 0 0 11em}.pure-form input.pure-input-rounded,.pure-form .pure-input-rounded{border-radius:2em;padding:.5em 1em}.pure-form .pure-group fieldset{margin-bottom:10px}.pure-form .pure-group input,.pure-form .pure-group textarea{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus{z-index:3}.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child{top:1px;border-radius:4px;margin:0}.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.pure-form .pure-group button{margin:.35em 0}.pure-form .pure-input-1{width:100%}.pure-form .pure-input-2-3{width:66%}.pure-form .pure-input-1-2{width:50%}.pure-form .pure-input-1-3{width:33%}.pure-form .pure-input-1-4{width:25%}.pure-form .pure-help-inline,.pure-form-message-inline{display:inline-block;padding-left:.3em;color:#666;vertical-align:middle;font-size:.875em}.pure-form-message{display:block;color:#666;font-size:.875em}@media only screen and (max-width :480px){.pure-form button[type=submit]{margin:.7em 0 0}.pure-form input:not([type]),.pure-form input[type=text],.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=color],.pure-form label{margin-bottom:.3em;display:block}.pure-group input:not([type]),.pure-group input[type=text],.pure-group input[type=password],.pure-group input[type=email],.pure-group input[type=url],.pure-group input[type=date],.pure-group input[type=month],.pure-group input[type=time],.pure-group input[type=datetime],.pure-group input[type=datetime-local],.pure-group input[type=week],.pure-group input[type=number],.pure-group input[type=search],.pure-group input[type=tel],.pure-group input[type=color]{margin-bottom:0}.pure-form-aligned .pure-control-group label{margin-bottom:.3em;text-align:left;display:block;width:100%}.pure-form-aligned .pure-controls{margin:1.5em 0 0}.pure-form .pure-help-inline,.pure-form-message-inline,.pure-form-message{display:block;font-size:.75em;padding:.2em 0 .8em}}.pure-menu{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-menu-fixed{position:fixed;left:0;top:0;z-index:3}.pure-menu-list,.pure-menu-item{position:relative}.pure-menu-list{list-style:none;margin:0;padding:0}.pure-menu-item{padding:0;margin:0;height:100%}.pure-menu-link,.pure-menu-heading{display:block;text-decoration:none;white-space:nowrap}.pure-menu-horizontal{width:100%;white-space:nowrap}.pure-menu-horizontal .pure-menu-list{display:inline-block}.pure-menu-horizontal .pure-menu-item,.pure-menu-horizontal .pure-menu-heading,.pure-menu-horizontal .pure-menu-separator{display:inline-block;*display:inline;zoom:1;vertical-align:middle}.pure-menu-item .pure-menu-item{display:block}.pure-menu-children{display:none;position:absolute;left:100%;top:0;margin:0;padding:0;z-index:3}.pure-menu-horizontal .pure-menu-children{left:0;top:auto;width:inherit}.pure-menu-allow-hover:hover>.pure-menu-children,.pure-menu-active>.pure-menu-children{display:block;position:absolute}.pure-menu-has-children>.pure-menu-link:after{padding-left:.5em;content:\"\\25B8\";font-size:small}.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after{content:\"\\25BE\"}.pure-menu-scrollable{overflow-y:scroll;overflow-x:hidden}.pure-menu-scrollable .pure-menu-list{display:block}.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list{display:inline-block}.pure-menu-horizontal.pure-menu-scrollable{white-space:nowrap;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;padding:.5em 0}.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar{display:none}.pure-menu-separator{background-color:#ccc;height:1px;margin:.3em 0}.pure-menu-horizontal .pure-menu-separator{width:1px;height:1.3em;margin:0 .3em}.pure-menu-heading{text-transform:uppercase;color:#565d64}.pure-menu-link{color:#777}.pure-menu-children{background-color:#fff}.pure-menu-link,.pure-menu-disabled,.pure-menu-heading{padding:.5em 1em}.pure-menu-disabled{opacity:.5}.pure-menu-disabled .pure-menu-link:hover{background-color:transparent}.pure-menu-active>.pure-menu-link,.pure-menu-link:hover,.pure-menu-link:focus{background-color:#eee}.pure-menu-selected .pure-menu-link,.pure-menu-selected .pure-menu-link:visited{color:#000}.pure-table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}.pure-table caption{color:#000;font:italic 85%/1 arial,sans-serif;padding:1em 0;text-align:center}.pure-table td,.pure-table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:.5em 1em}.pure-table td:first-child,.pure-table th:first-child{border-left-width:0}.pure-table thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}.pure-table td{background-color:transparent}.pure-table-odd td{background-color:#f2f2f2}.pure-table-striped tr:nth-child(2n-1) td{background-color:#f2f2f2}.pure-table-bordered td{border-bottom:1px solid #cbcbcb}.pure-table-bordered tbody>tr:last-child>td{border-bottom-width:0}.pure-table-horizontal td,.pure-table-horizontal th{border-width:0 0 1px;border-bottom:1px solid #cbcbcb}.pure-table-horizontal tbody>tr:last-child>td{border-bottom-width:0}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "body {\n    background-color: black;\n    background-size: cover;\n    background-position: center;\n}\n\n.log {\n    text-align: center;\n    border: transparent;\n    width: 35%;\n    display: inline-block;\n    min-height: 700px;\n    float: left;\n    background-image: url(" + __webpack_require__(8) + ");\n    background-size: cover;\n    border-radius: 5px;\n    margin-left: 5%;\n}\n\n.login-div {\n    margin-top: 30%;\n}\n\n.Email, .Password {\n    margin-bottom: 5px;\n    border: 2px solid white;\n    border-radius: 5px;\n    color:#fff;\n    background-color: transparent;\n    padding: 5px;\n}\n\nh2 {\n    color: rgb(223, 117, 20);\n}\n\n.menu-height-override{\n    height: auto;\n}\n\n#main {\n    padding-left: 20px;\n    padding-top: 15px;\n}\n\n.logo {\n    height: 40px;\n    display: inline-block;\n}\n\n.cheers {\n    margin-top: 15%;\n    width: 50%;\n}\n\n.quote {\n    color: white;\n    display: block;\n    text-align: center;\n    margin-top: 25px;\n    font-weight: 200;\n    letter-spacing: 2px;\n    font-size: 30px;\n}\n\n.dashboard_centering {\n    text-align: center;\n}\n\n.dashboard_layout {\n    padding-top: 15px;\n    padding-bottom: 10px;\n}\n\n.dashboard_backing{\n    background-image: url(" + __webpack_require__(9) + ");\n\n}\n\n.logout_btn{\n    margin-left: 47%;\n    margin-top: 30px;\n}\n\n.dashboard_title {\n    margin-top: 40px;\n    font-size: 40px;\n    font-weight: 300;\n    letter-spacing: 1px;\n    color: rgb(223, 117, 20);\n\n}\n\n.dashboard_content{\n    margin-top: 25px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    border-radius: 20px;\n    background-color: rgba(255, 255, 255, 0.3);\n}\n\n.ondraft_button_primary {\n    background: rgb(223, 117, 20);\n    color: #ffffff;\n    font-size: large;\n    font-weight: 200;\n\n}\n\n.frgtpass, .account {\n    margin-bottom: 5px;\n    display: block;\n}\n\n.login {\n    color: #ffffff;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n    background: rgb(223, 117, 20);\n    border-radius: 5px;\n    margin-bottom: 15px;\n    margin-top: 5px;\n}\n\na {\n    color: rgb(223, 117, 20);\n    text-decoration: none;\n}\n\n/* Modal Main Element */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Header */\n.modal-header {\n    padding: 2px 16px;\n    background-color: #1f8dd6;\n    color: white;\n}\n\n/* Modal Body */\n.modal-body {padding: 2px 16px;}\n\n/* Modal Footer */\n.modal-footer {\n    padding: 2px 16px;\n    background-color: #1f8dd6;\n    color: white;\n}\n\n.modal-content-padding{\n    margin-top: 15px;\n}\n\n.modal-close {\n    margin: auto;\n    font-size: x-large;\n    text-align: right;\n}\n\n/* Modal Content */\n.modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 30%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n}\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n}\n\n@keyframes animatetop {\n    from {top: -300px; opacity: 0}\n    to {top: 0; opacity: 1}\n}", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/public/img/WoodPatternDark.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "/public/img/cheers.JPG";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./side-menu.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./side-menu.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "body {\n    color: #777;\n}\n\n.pure-img-responsive {\n    max-width: 100%;\n    height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n#layout,\n#menu,\n.menu-link {\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -ms-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n#layout {\n    position: relative;\n    left: 0;\n    padding-left: 0;\n}\n    #layout.active #menu {\n        left: 150px;\n        width: 150px;\n    }\n\n    #layout.active .menu-link {\n        left: 150px;\n    }\n/*\nThe content `<div>` is where all your content goes.\n*/\n.content {\n    margin: 0 auto;\n    padding: 0 2em;\n    max-width: 800px;\n    margin-bottom: 50px;\n    line-height: 1.6em;\n}\n\n.header {\n     margin: 0;\n     color: #333;\n     text-align: center;\n     padding: 2.5em 2em 0;\n     border-bottom: 1px solid #eee;\n }\n    .header h1 {\n        margin: 0.2em 0;\n        font-size: 3em;\n        font-weight: 300;\n    }\n     .header h2 {\n        font-weight: 300;\n        color: #ccc;\n        padding: 0;\n        margin-top: 0;\n    }\n\n.content-subhead {\n    margin: 50px 0 20px 0;\n    font-weight: 300;\n    color: #888;\n}\n\n\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n    margin-left: -150px; /* \"#menu\" width */\n    width: 150px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000; /* so the menu or its navicon stays above all content */\n    background: #191818;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n}\n    /*\n    All anchors inside the menu should be styled like this.\n    */\n    #menu a {\n        color: #999;\n        border: none;\n        padding: 0.6em 0 0.6em 0.6em;\n    }\n\n    /*\n    Remove all background/borders, since we are applying them to #menu.\n    */\n     #menu .pure-menu,\n     #menu .pure-menu ul {\n        border: none;\n        background: transparent;\n    }\n\n    /*\n    Add that light border to separate items into groups.\n    */\n    #menu .pure-menu ul,\n    #menu .pure-menu .menu-item-divided {\n        border-top: 1px solid #333;\n    }\n        /*\n        Change color of the anchor links on hover/focus.\n        */\n        #menu .pure-menu li a:hover,\n        #menu .pure-menu li a:focus {\n            background: #333;\n        }\n\n    /*\n    This styles the selected menu item `<li>`.\n    */\n    #menu .pure-menu-selected,\n    #menu .pure-menu-heading {\n        background: #1f8dd6;\n    }\n        /*\n        This styles a link within a selected menu item `<li>`.\n        */\n        #menu .pure-menu-selected a {\n            color: #fff;\n        }\n\n    /*\n    This styles the menu heading.\n    */\n    #menu .pure-menu-heading {\n        font-size: 110%;\n        color: #fff;\n        margin: 0;\n    }\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n.menu-link {\n    position: fixed;\n    display: block; /* show this only on small screens */\n    top: 0;\n    left: 0; /* \"#menu width\" */\n    background: #000;\n    background: rgba(0,0,0,0.7);\n    font-size: 10px; /* change this value to increase/decrease button size */\n    z-index: 10;\n    width: 2em;\n    height: auto;\n    padding: 2.1em 1.6em;\n}\n\n    .menu-link:hover,\n    .menu-link:focus {\n        background: #000;\n    }\n\n    .menu-link span {\n        position: relative;\n        display: block;\n    }\n\n    .menu-link span,\n    .menu-link span:before,\n    .menu-link span:after {\n        background-color: #fff;\n        width: 100%;\n        height: 0.2em;\n    }\n\n        .menu-link span:before,\n        .menu-link span:after {\n            position: absolute;\n            margin-top: -0.6em;\n            content: \" \";\n        }\n\n        .menu-link span:after {\n            margin-top: 0.6em;\n        }\n\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n@media (min-width: 48em) {\n\n    .header,\n    .content {\n        padding-left: 2em;\n        padding-right: 2em;\n    }\n\n    #layout {\n        padding-left: 150px; /* left col width \"#menu\" */\n        left: 0;\n    }\n    #menu {\n        left: 150px;\n    }\n\n    .menu-link {\n        position: fixed;\n        left: 150px;\n        display: none;\n    }\n\n    #layout.active .menu-link {\n        left: 150px;\n    }\n}\n\n@media (max-width: 48em) {\n    /* Only apply this when the window is small. Otherwise, the following\n    case results in extra padding on the left:\n        * Make the window small.\n        * Tap the menu to trigger the active state.\n        * Make the window large again.\n    */\n    #layout.active {\n        position: relative;\n        left: 150px;\n    }\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./side-menu-old-ie.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./side-menu-old-ie.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "body {\n    color: #777;\n}\n\n.pure-img-responsive {\n    max-width: 100%;\n    height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n\n#layout,\n#menu,\n.menu-link {\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -ms-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n\n#layout {\n    position: relative;\n    left: 0;\n    padding-left: 0;\n}\n\n#layout.active #menu {\n    left: 150px;\n    width: 150px;\n}\n\n#layout.active .menu-link {\n    left: 150px;\n}\n\n/*\nThe content `<div>` is where all your content goes.\n*/\n\n.content {\n    margin: 0 auto;\n    padding: 0 2em;\n    max-width: 800px;\n    margin-bottom: 50px;\n    line-height: 1.6em;\n}\n\n.header {\n    margin: 0;\n    color: #333;\n    text-align: center;\n    padding: 2.5em 2em 0;\n    border-bottom: 1px solid #eee;\n}\n\n.header h1 {\n    margin: 0.2em 0;\n    font-size: 3em;\n    font-weight: 300;\n}\n\n.header h2 {\n    font-weight: 300;\n    color: #ccc;\n    padding: 0;\n    margin-top: 0;\n}\n\n.content-subhead {\n    margin: 50px 0 20px 0;\n    font-weight: 300;\n    color: #888;\n}\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n    margin-left: -150px;\n    /* \"#menu\" width */\n    width: 150px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000;\n    /* so the menu or its navicon stays above all content */\n    background: #191818;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n}\n\n/*\n    All anchors inside the menu should be styled like this.\n    */\n\n#menu a {\n    color: #999;\n    border: none;\n    padding: 0.6em 0 0.6em 0.6em;\n}\n\n/*\n    Remove all background/borders, since we are applying them to #menu.\n    */\n\n#menu .pure-menu,\n#menu .pure-menu ul {\n    border: none;\n    background: transparent;\n}\n\n/*\n    Add that light border to separate items into groups.\n    */\n\n#menu .pure-menu ul,\n#menu .pure-menu .menu-item-divided {\n    border-top: 1px solid #333;\n}\n\n/*\n        Change color of the anchor links on hover/focus.\n        */\n\n#menu .pure-menu li a:hover,\n#menu .pure-menu li a:focus {\n    background: #333;\n}\n\n/*\n    This styles the selected menu item `<li>`.\n    */\n\n#menu .pure-menu-selected,\n#menu .pure-menu-heading {\n    background: #1f8dd6;\n}\n\n/*\n        This styles a link within a selected menu item `<li>`.\n        */\n\n#menu .pure-menu-selected a {\n    color: #fff;\n}\n\n/*\n    This styles the menu heading.\n    */\n\n#menu .pure-menu-heading {\n    font-size: 110%;\n    color: #fff;\n    margin: 0;\n}\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n\n.menu-link {\n    position: fixed;\n    display: block;\n    /* show this only on small screens */\n    top: 0;\n    left: 0;\n    /* \"#menu width\" */\n    background: #000;\n    background: rgba(0,0,0,0.7);\n    font-size: 10px;\n    /* change this value to increase/decrease button size */\n    z-index: 10;\n    width: 2em;\n    height: auto;\n    padding: 2.1em 1.6em;\n}\n\n.menu-link:hover,\n.menu-link:focus {\n    background: #000;\n}\n\n.menu-link span {\n    position: relative;\n    display: block;\n}\n\n.menu-link span,\n.menu-link span:before,\n.menu-link span:after {\n    background-color: #fff;\n    width: 100%;\n    height: 0.2em;\n}\n\n.menu-link span:before,\n.menu-link span:after {\n    position: absolute;\n    margin-top: -0.6em;\n    content: \" \";\n}\n\n.menu-link span:after {\n    margin-top: 0.6em;\n}\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n\n.header,\n.content {\n    padding-left: 2em;\n    padding-right: 2em;\n}\n\n#layout {\n    padding-left: 150px;\n    /* left col width \"#menu\" */\n    left: 0;\n}\n\n#menu {\n    left: 150px;\n}\n\n.menu-link {\n    position: fixed;\n    left: 150px;\n    display: none;\n}\n\n#layout.active .menu-link {\n    left: 150px;\n}", ""]);

	// exports


/***/ }
/******/ ]);