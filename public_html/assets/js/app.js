webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/accordion.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'accordion-list',
    data: function data() {
        return {
            contents: {
                type: Array,
                default: [{
                    title: 'How are you?',
                    msg: 'I am fine thank you.'
                }]
            }
        };
    },

    methods: {
        toggle: function toggle(num) {
            if (this.$el.children[num].classList.contains('open')) {
                this.$el.children[num].classList.remove('open');
            } else {
                var prevFaqQuestion = this.$el.querySelectorAll('.open');
                if (prevFaqQuestion.length !== 0) {
                    prevFaqQuestion[0].classList.remove('open');
                }
                this.$el.children[num].classList.add('open');
            }
        }
    },
    mounted: function mounted() {
        this.contents = window.faqList;
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/youtube.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "youtube",
    props: {
        videoId: String,
        videoThumb: String
    },
    data: function data() {
        return {
            activeButton: true,
            activeVideo: false,
            videoUrl: null
        };
    },

    methods: {
        video: function video(code) {
            return '//www.youtube.com/embed/' + code + '?enablejsapi=1&rel=0&playsinline=1&autoplay=1&showinfo=0&autohide=1&modestbranding=1';
        },
        showVideo: function showVideo(e) {
            e.preventDefault();
            this.activeButton = false;
            this.activeVideo = true;
            this.videoUrl = this.video(this.videoId);
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.player-box[data-v-2a1ea1a7] {\n  position: relative;\n}\n.thumbnail[data-v-2a1ea1a7] {\n  margin: auto;\n  width: 100%;\n  max-width: 100%;\n  background-size: cover;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.thumbnail[data-v-2a1ea1a7]:before {\n    content: \"\";\n    display: block;\n    padding-top: 56.25%;\n}\n.play[data-v-2a1ea1a7] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  width: 40px;\n  height: 40px;\n  background: #FCD133;\n  color: #fff;\n  font-size: 20px;\n  padding-left: 10px;\n  padding-top: 5px;\n  border: 1px solid #FCD133;\n  border-radius: 50%;\n  z-index: 9;\n  cursor: pointer;\n}\n.video[data-v-2a1ea1a7] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/youtube.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE;AAEvB;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,yBAAyB;EACzB,6BAA6B;CAAE;AAC/B;IACE,YAAY;IACZ,eAAe;IACf,oBAAoB;CAAE;AAE1B;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,WAAW;EACX,gBAAgB;CAAE;AAEpB;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,UAAU;EACV,YAAY;EACZ,aAAa;CAAE","file":"youtube.vue","sourcesContent":[".player-box {\n  position: relative; }\n\n.thumbnail {\n  margin: auto;\n  width: 100%;\n  max-width: 100%;\n  background-size: cover;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n  .thumbnail:before {\n    content: \"\";\n    display: block;\n    padding-top: 56.25%; }\n\n.play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  width: 40px;\n  height: 40px;\n  background: #FCD133;\n  color: #fff;\n  font-size: 20px;\n  padding-left: 10px;\n  padding-top: 5px;\n  border: 1px solid #FCD133;\n  border-radius: 50%;\n  z-index: 9;\n  cursor: pointer; }\n\n.video {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.faq-container[data-v-7bc4f64c] {\n  width: 100%;\n}\n.faq-question[data-v-7bc4f64c] {\n  padding: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.faq-description[data-v-7bc4f64c] {\n  font-size: 18px;\n  cursor: pointer;\n  padding: 8px 0;\n}\n.faq-description span[data-v-7bc4f64c] {\n    margin-left: 35px;\n    color: #FCD133;\n    display: inline-block;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.faq-content[data-v-7bc4f64c] {\n  font-size: 14px;\n  display: block;\n  height: auto;\n  max-width: 450px;\n  max-height: 0;\n  padding-left: 2px;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  -webkit-transition: max-height 0.2s, -webkit-transform 0.2s;\n  transition: max-height 0.2s, -webkit-transform 0.2s;\n  transition: max-height 0.2s, transform 0.2s;\n  transition: max-height 0.2s, transform 0.2s, -webkit-transform 0.2s;\n}\n.faq-content p[data-v-7bc4f64c] {\n    margin: 0;\n    padding: 20px 0;\n}\n.faq-question.open .faq-description span[data-v-7bc4f64c]:last-child {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.faq-question.open .faq-content[data-v-7bc4f64c] {\n  max-height: 1000px;\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n}\n", "", {"version":3,"sources":["/Users/vladstarkovsky/DEVSRV/mossebo-ico/src/js/components/accordion.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;CAAE;AAEhB;EACE,WAAW;EACX,6BAAqB;EAArB,qBAAqB;CAAE;AAEzB;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;CAAE;AACjB;IACE,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,6BAAqB;IAArB,qBAAqB;CAAE;AAE3B;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,6BAAqB;UAArB,qBAAqB;EACrB,8BAAsB;UAAtB,sBAAsB;EACtB,4DAA4C;EAA5C,oDAA4C;EAA5C,4CAA4C;EAA5C,oEAA4C;CAAE;AAC9C;IACE,UAAU;IACV,gBAAgB;CAAE;AAEtB;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,mBAAmB;EACnB,6BAAqB;UAArB,qBAAqB;CAAE","file":"accordion.vue","sourcesContent":[".faq-container {\n  width: 100%; }\n\n.faq-question {\n  padding: 0;\n  transition: all 0.3s; }\n\n.faq-description {\n  font-size: 18px;\n  cursor: pointer;\n  padding: 8px 0; }\n  .faq-description span {\n    margin-left: 35px;\n    color: #FCD133;\n    display: inline-block;\n    transition: all 0.3s; }\n\n.faq-content {\n  font-size: 14px;\n  display: block;\n  height: auto;\n  max-width: 450px;\n  max-height: 0;\n  padding-left: 2px;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: max-height 0.2s, transform 0.2s; }\n  .faq-content p {\n    margin: 0;\n    padding: 20px 0; }\n\n.faq-question.open .faq-description span:last-child {\n  transform: rotate(90deg); }\n\n.faq-question.open .faq-content {\n  max-height: 1000px;\n  transform: scaleY(1); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-carousel-3d/dist/vue-carousel-3d.min.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-carousel-3d v0.1.21
 * (c) 2018 Vladimir Bujanovic
 * https://github.com/wlada/vue-carousel-3d#readme
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Carousel3d=e():t.Carousel3d=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Slide=e.Carousel3d=void 0;var r=n(1),o=i(r),s=n(15),a=i(s),u=function(t){t.component("carousel3d",o.default),t.component("slide",a.default)};e.default={install:u},e.Carousel3d=o.default,e.Slide=a.default},function(t,e,n){n(2);var i=n(7)(n(8),n(62),"data-v-c06c963c",null);t.exports=i.exports},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(5)("e749a8c4",i,!0)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".carousel-3d-container[data-v-c06c963c]{min-height:1px;width:100%;position:relative;z-index:0;overflow:hidden;margin:20px auto;box-sizing:border-box}.carousel-3d-slider[data-v-c06c963c]{position:relative;margin:0 auto;transform-style:preserve-3d;-webkit-perspective:1000px;-moz-perspective:1000px;perspective:1000px}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=c[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(o(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(x){var o=f++;i=h||(h=r()),e=s.bind(null,i,o,!1),n=s.bind(null,i,o,!0)}else i=r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function a(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,l=n(6),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,v=function(){},x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=l(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],a=c[s.id];a.refs--,n.push(a)}e?(r=l(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],u=o[2],l=o[3],c={id:t+":"+r,css:a,media:u,sourceMap:l};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}},function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var u=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];u[t]=function(){return e}})}return{esModule:r,exports:o,options:a}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=i(r),s=n(10),a=i(s),u=n(15),l=i(u),c=function(){};e.default={name:"carousel3d",components:{Controls:a.default,Slide:l.default},props:{count:{type:[Number,String],default:0},perspective:{type:[Number,String],default:35},display:{type:[Number,String],default:5},loop:{type:Boolean,default:!0},animationSpeed:{type:[Number,String],default:500},dir:{type:String,default:"rtl"},width:{type:[Number,String],default:360},height:{type:[Number,String],default:270},border:{type:[Number,String],default:1},space:{type:[Number,String],default:"auto"},startIndex:{type:[Number,String],default:0},clickable:{type:Boolean,default:!0},disable3d:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:10},inverseScaling:{type:[Number,String],default:300},controlsVisible:{type:Boolean,default:!1},controlsPrevHtml:{type:String,default:"&lsaquo;"},controlsNextHtml:{type:String,default:"&rsaquo;"},controlsWidth:{type:[String,Number],default:50},controlsHeight:{type:[String,Number],default:50},onLastSlide:{type:Function,default:c},onSlideChange:{type:Function,default:c},bias:{type:String,default:"left"},onMainSlideClick:{type:Function,default:c}},data:function(){return{viewport:0,currentIndex:0,total:0,lock:!1,dragOffset:0,dragStartX:0,mousedown:!1,zIndex:998}},mixins:[o.default],watch:{count:function(){this.computeData()}},computed:{isLastSlide:function(){return this.currentIndex===this.total-1},isFirstSlide:function(){return 0===this.currentIndex},isNextPossible:function(){return!(!this.loop&&this.isLastSlide)},isPrevPossible:function(){return!(!this.loop&&this.isFirstSlide)},slideWidth:function(){var t=this.viewport,e=parseInt(this.width)+2*parseInt(this.border,10);return t<e?t:e},slideHeight:function(){var t=parseInt(this.width,10)+2*parseInt(this.border,10),e=parseInt(parseInt(this.height)+2*this.border,10),n=this.calculateAspectRatio(t,e);return this.slideWidth/n},visible:function(){var t=this.display>this.total?this.total:this.display;return t},hasHiddenSlides:function(){return this.total>this.visible},leftIndices:function(){var t=(this.visible-1)/2;t="left"===this.bias.toLowerCase()?Math.ceil(t):Math.floor(t);for(var e=[],n=1;n<=t;n++)e.push("ltr"===this.dir?(this.currentIndex+n)%this.total:(this.currentIndex-n)%this.total);return e},rightIndices:function(){var t=(this.visible-1)/2;t="right"===this.bias.toLowerCase()?Math.ceil(t):Math.floor(t);for(var e=[],n=1;n<=t;n++)e.push("ltr"===this.dir?(this.currentIndex-n)%this.total:(this.currentIndex+n)%this.total);return e},leftOutIndex:function(){var t=(this.visible-1)/2;return t="left"===this.bias.toLowerCase()?Math.ceil(t):Math.floor(t),t++,"ltr"===this.dir?this.total-this.currentIndex-t<=0?-parseInt(this.total-this.currentIndex-t):this.currentIndex+t:this.currentIndex-t},rightOutIndex:function(){var t=(this.visible-1)/2;return t="right"===this.bias.toLowerCase()?Math.ceil(t):Math.floor(t),t++,"ltr"===this.dir?this.currentIndex-t:this.total-this.currentIndex-t<=0?-parseInt(this.total-this.currentIndex-t,10):this.currentIndex+t}},methods:{goNext:function(){this.isNextPossible&&(this.isLastSlide?this.goSlide(0):this.goSlide(this.currentIndex+1))},goPrev:function(){this.isPrevPossible&&(this.isFirstSlide?this.goSlide(this.total-1):this.goSlide(this.currentIndex-1))},goSlide:function(t){var e=this;this.currentIndex=t<0||t>this.total-1?0:t,this.lock=!0,this.isLastSlide&&(this.onLastSlide!==c&&console.warn("onLastSlide deprecated, please use @last-slide"),this.onLastSlide(this.currentIndex),this.$emit("last-slide",this.currentIndex)),this.$emit("before-slide-change",this.currentIndex),setTimeout(function(){return e.animationEnd()},this.animationSpeed)},goFar:function(t){var e=this,n=t===this.total-1&&this.isFirstSlide?-1:t-this.currentIndex;this.isLastSlide&&0===t&&(n=1);for(var i=n<0?-n:n,r=0,o=0;o<i;){o+=1;var s=1===i?0:r;setTimeout(function(){return n<0?e.goPrev(i):e.goNext(i)},s),r+=this.animationSpeed/i}},animationEnd:function(){this.lock=!1,this.onSlideChange!==c&&console.warn("onSlideChange deprecated, please use @after-slide-change"),this.onSlideChange(this.currentIndex),this.$emit("after-slide-change",this.currentIndex)},handleMouseup:function(){this.mousedown=!1,this.dragOffset=0},handleMousedown:function(t){t.touches||t.preventDefault(),this.mousedown=!0,this.dragStartX="ontouchstart"in window?t.touches[0].clientX:t.clientX},handleMousemove:function(t){if(this.mousedown){var e="ontouchstart"in window?t.touches[0].clientX:t.clientX,n=this.dragStartX-e;this.dragOffset=n,this.dragOffset>this.minSwipeDistance?(this.handleMouseup(),this.goNext()):this.dragOffset<-this.minSwipeDistance&&(this.handleMouseup(),this.goPrev())}},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var n={attributes:!0,childList:!0,characterData:!0};this.mutationObserver=new e(function(){t.$nextTick(function(){t.computeData()})}),this.$el&&this.mutationObserver.observe(this.$el,n)}},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getSlideCount:function(){return void 0!==this.$slots.default?this.$slots.default.filter(function(t){return void 0!==t.tag}).length:0},calculateAspectRatio:function(t,e){return Math.min(t/e)},computeData:function(t){this.total=this.getSlideCount(),(t||this.currentIndex>=this.total)&&(this.currentIndex=parseInt(this.startIndex)>this.total-1?this.total-1:parseInt(this.startIndex)),this.viewport=this.$el.clientWidth},setSize:function(){this.$el.style.cssText+="height:"+this.slideHeight+"px;",this.$el.childNodes[0].style.cssText+="width:"+this.slideWidth+"px; height:"+this.slideHeight+"px;"}},mounted:function(){this.computeData(!0),this.attachMutationObserver(),this.$isServer||(window.addEventListener("resize",this.setSize),"ontouchstart"in window?(this.$el.addEventListener("touchstart",this.handleMousedown),this.$el.addEventListener("touchend",this.handleMouseup),this.$el.addEventListener("touchmove",this.handleMousemove)):(this.$el.addEventListener("mousedown",this.handleMousedown),this.$el.addEventListener("mouseup",this.handleMouseup),this.$el.addEventListener("mousemove",this.handleMousemove)))},beforeDestroy:function(){this.$isServer||(this.detachMutationObserver(),"ontouchstart"in window?this.$el.removeEventListener("touchmove",this.handleMousemove):this.$el.removeEventListener("mousemove",this.handleMousemove),window.removeEventListener("resize",this.setSize))}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.pauseAutoplay(),this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){var t=this;this.autoplay&&(this.autoplayInterval=setInterval(function(){"ltr"===t.dir?t.goPrev():t.goNext()},this.autoplayTimeout))}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};e.default=n},function(t,e,n){n(11);var i=n(7)(n(13),n(14),"data-v-43e93932",null);t.exports=i.exports},function(t,e,n){var i=n(12);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(5)("06c66230",i,!0)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".carousel-3d-controls[data-v-43e93932]{position:absolute;top:50%;height:0;margin-top:-30px;left:0;width:100%;z-index:9099}.next[data-v-43e93932],.prev[data-v-43e93932]{width:60px;position:absolute;z-index:9999;font-size:60px;height:60px;line-height:60px;color:#333;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;top:0}.next[data-v-43e93932]:hover,.prev[data-v-43e93932]:hover{cursor:pointer;opacity:.7}.prev[data-v-43e93932]{left:10px;text-align:left}.next[data-v-43e93932]{right:10px;text-align:right}.disabled[data-v-43e93932],.disabled[data-v-43e93932]:hover{opacity:.2;cursor:default}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"controls",props:{width:{type:[String,Number],default:50},height:{type:[String,Number],default:60},prevHtml:{type:String,default:"&lsaquo;"},nextHtml:{type:String,default:"&rsaquo;"}},data:function(){return{parent:this.$parent}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-3d-controls"},[n("a",{staticClass:"prev",class:{disabled:!t.parent.isPrevPossible},style:"width: "+t.width+"px; height: "+t.height+"px; line-height: "+t.height+"px;",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.parent.goPrev()}}},[n("span",{domProps:{innerHTML:t._s(t.prevHtml)}})]),t._v(" "),n("a",{staticClass:"next",class:{disabled:!t.parent.isNextPossible},style:"width: "+t.width+"px; height: "+t.height+"px; line-height: "+t.height+"px;",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.parent.goNext()}}},[n("span",{domProps:{innerHTML:t._s(t.nextHtml)}})])])},staticRenderFns:[]}},function(t,e,n){n(16);var i=n(7)(n(18),n(61),null,null);t.exports=i.exports},function(t,e,n){var i=n(17);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(5)("1dbacf8a",i,!0)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".carousel-3d-slide{position:absolute;opacity:0;visibility:hidden;overflow:hidden;top:0;border-radius:1px;border-color:#000;border-color:rgba(0,0,0,.4);border-style:solid;background-size:cover;background-color:#ccc;display:block;margin:0;box-sizing:border-box;text-align:left}.carousel-3d-slide img{width:100%}.carousel-3d-slide.current{opacity:1!important;visibility:visible!important;transform:none!important;z-index:999}",""])},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),o=i(r),s=n(39),a=i(s);e.default={name:"slide",props:{index:{type:Number}},data:function(){return{parent:this.$parent,styles:{},zIndex:999}},computed:{isCurrent:function(){return this.index===this.parent.currentIndex},leftIndex:function(){return this.getSideIndex(this.parent.leftIndices)},rightIndex:function(){return this.getSideIndex(this.parent.rightIndices)},slideStyle:function(){var t={};if(!this.isCurrent){var e=this.leftIndex,n=this.rightIndex;(e>=0||n>=0)&&(t=e>=0?this.calculatePosition(e,!0,this.zIndex):this.calculatePosition(n,!1,this.zIndex),t.opacity=1,t.visibility="visible"),this.parent.hasHiddenSlides&&(this.matchIndex(this.parent.leftOutIndex)?t=this.calculatePosition(this.parent.leftIndices.length-1,!1,this.zIndex):this.matchIndex(this.parent.rightOutIndex)&&(t=this.calculatePosition(this.parent.rightIndices.length-1,!0,this.zIndex)))}return(0,a.default)(t,{"border-width":this.parent.border+"px",width:this.parent.slideWidth+"px",height:this.parent.slideHeight+"px",transition:" transform "+this.parent.animationSpeed+"ms,                opacity "+this.parent.animationSpeed+"ms,                visibility "+this.parent.animationSpeed+"ms"})},computedClasses:function(){var t;return t={},(0,o.default)(t,"left-"+(this.leftIndex+1),this.leftIndex>=0),(0,o.default)(t,"right-"+(this.rightIndex+1),this.rightIndex>=0),(0,o.default)(t,"current",this.isCurrent),t}},methods:{getSideIndex:function(t){var e=this,n=-1;return t.forEach(function(t,i){e.matchIndex(t)&&(n=i)}),n},matchIndex:function(t){return t>=0?this.index===t:this.parent.total+t===this.index},calculatePosition:function(t,e,n){var i=this.parent.disable3d?0:parseInt(this.parent.inverseScaling)+100*(t+1),r=this.parent.disable3d?0:parseInt(this.parent.perspective),o="auto"===this.parent.space?parseInt((t+1)*(this.parent.width/1.5),10):parseInt((t+1)*this.parent.space,10),s=e?"translateX("+o+"px) translateZ(-"+i+"px) rotateY(-"+r+"deg)":"translateX(-"+o+"px) translateZ(-"+i+"px) rotateY("+r+"deg)",a="auto"===this.parent.space?0:parseInt((t+1)*this.parent.space);return{transform:s,top:a,zIndex:n-(Math.abs(t)+1)}},goTo:function(){this.isCurrent?this.parent.onMainSlideClick():this.parent.clickable===!0&&this.parent.goFar(this.index)}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(20),o=i(r);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports={default:n(21),__esModule:!0}},function(t,e,n){n(22);var i=n(25).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(23);i(i.S+i.F*!n(33),"Object",{defineProperty:n(29).f})},function(t,e,n){var i=n(24),r=n(25),o=n(26),s=n(28),a=n(38),u="prototype",l=function(t,e,n){var c,d,h,f=t&l.F,p=t&l.G,v=t&l.S,x=t&l.P,g=t&l.B,m=t&l.W,y=p?r:r[e]||(r[e]={}),b=y[u],S=p?i:v?i[e]:(i[e]||{})[u];p&&(n=e);for(c in n)d=!f&&S&&void 0!==S[c],d&&a(y,c)||(h=d?S[c]:n[c],y[c]=p&&"function"!=typeof S[c]?n[c]:g&&d?o(h,i):m&&S[c]==h?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[u]=t[u],e}(h):x&&"function"==typeof h?o(Function.call,h):h,x&&((y.virtual||(y.virtual={}))[c]=h,t&l.R&&b&&!b[c]&&s(b,c,h)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(27);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(29),r=n(37);t.exports=n(33)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(30),r=n(32),o=n(36),s=Object.defineProperty;e.f=n(33)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(31);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(33)&&!n(34)(function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(34)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(31),r=n(24).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(31);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports={default:n(40),__esModule:!0}},function(t,e,n){n(41),t.exports=n(25).Object.assign},function(t,e,n){var i=n(23);i(i.S+i.F,"Object",{assign:n(42)})},function(t,e,n){"use strict";var i=n(43),r=n(58),o=n(59),s=n(60),a=n(46),u=Object.assign;t.exports=!u||n(34)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=i})?function(t,e){for(var n=s(t),u=arguments.length,l=1,c=r.f,d=o.f;u>l;)for(var h,f=a(arguments[l++]),p=c?i(f).concat(c(f)):i(f),v=p.length,x=0;v>x;)d.call(f,h=p[x++])&&(n[h]=f[h]);return n}:u},function(t,e,n){var i=n(44),r=n(57);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(38),r=n(45),o=n(49)(!1),s=n(53)("IE_PROTO");t.exports=function(t,e){var n,a=r(t),u=0,l=[];for(n in a)n!=s&&i(a,n)&&l.push(n);for(;e.length>u;)i(a,n=e[u++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),r=n(48);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(47);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(45),r=n(50),o=n(52);t.exports=function(t){return function(e,n,s){var a,u=i(e),l=r(u.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if(a=u[c++],a!=a)return!0}else for(;l>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(51),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(51),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(54)("keys"),r=n(56);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(25),r=n(24),o="__core-js_shared__",s=r[o]||(r[o]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(55)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var i=n(48);t.exports=function(t){return Object(i(t))}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-3d-slide",class:t.computedClasses,style:t.slideStyle,on:{click:function(e){t.goTo()}}},[t._t("default",null,{index:t.index,isCurrent:t.isCurrent,leftIndex:t.leftIndex,rightIndex:t.rightIndex})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel-3d-container",style:{height:this.slideHeight+"px"}},[n("div",{staticClass:"carousel-3d-slider",style:{width:this.slideWidth+"px",height:this.slideHeight+"px"}},[t._t("default")],2),t._v(" "),t.controlsVisible?n("controls",{attrs:{"next-html":t.controlsNextHtml,"prev-html":t.controlsPrevHtml,width:t.controlsWidth,height:t.controlsHeight}}):t._e()],1)},staticRenderFns:[]}}])});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a1ea1a7\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "player-box" }, [
    _c(
      "div",
      {
        staticClass: "thumbnail",
        style: { backgroundImage: "url(" + _vm.videoThumb + ")" }
      },
      [
        _c(
          "button",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.activeButton,
                expression: "activeButton"
              }
            ],
            staticClass: "play",
            on: { click: _vm.showVideo }
          },
          [_vm._v("\n            ▶\n        ")]
        ),
        _vm._v(" "),
        _c("iframe", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.activeVideo,
              expression: "activeVideo"
            }
          ],
          staticClass: "video",
          attrs: {
            width: "560",
            height: "315",
            src: _vm.videoUrl,
            frameborder: "0",
            allow: "autoplay; encrypted-media",
            allowfullscreen: ""
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2a1ea1a7", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7bc4f64c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "faq-container" },
    _vm._l(_vm.contents, function(item, index) {
      return _c(
        "div",
        {
          staticClass: "faq-question",
          on: {
            click: function($event) {
              _vm.toggle(index)
            }
          }
        },
        [
          _c("div", { staticClass: "faq-description" }, [
            _vm._v(_vm._s(item.title)),
            _c("span", [_vm._v("▸")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "faq-content" }, [
            _c("p", [_vm._v(_vm._s(item.msg))])
          ])
        ]
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7bc4f64c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6263023e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./youtube.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./youtube.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2551f0ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./accordion.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./accordion.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__("./src/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_youtube__ = __webpack_require__("./src/js/components/youtube.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_youtube___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_youtube__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__ = __webpack_require__("./node_modules/vue-carousel-3d/dist/vue-carousel-3d.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_accordion__ = __webpack_require__("./src/js/components/accordion.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_accordion__);

/**
 * Imports
 */




/**
 * Components
 */
//import './components/heightToogle'




/**
 * APP
 */
var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    el: '#app',
    data: {},
    components: {
        'youtube': __WEBPACK_IMPORTED_MODULE_2__components_youtube___default.a,
        'accordion-list': __WEBPACK_IMPORTED_MODULE_4__components_accordion___default.a,
        'carousel-3d': __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__["Carousel3d"],
        'slide': __WEBPACK_IMPORTED_MODULE_3_vue_carousel_3d__["Slide"]
    },
    mounted: function mounted() {
        // heightToggle('.js-ht', {
        //     bindCloseEvents: true
        // });
    }
});

/***/ }),

/***/ "./src/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
window._ = __webpack_require__("./node_modules/lodash/lodash.js");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
} catch (e) {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/components/accordion.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bc4f64c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/accordion.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/accordion.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7bc4f64c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/accordion.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bc4f64c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/accordion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bc4f64c", Component.options)
  } else {
    hotAPI.reload("data-v-7bc4f64c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/js/components/youtube.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a1ea1a7\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/youtube.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/youtube.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2a1ea1a7\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/youtube.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a1ea1a7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/youtube.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a1ea1a7", Component.options)
  } else {
    hotAPI.reload("data-v-2a1ea1a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./src/scss/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/js/app.js");
module.exports = __webpack_require__("./src/scss/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=app.js.map