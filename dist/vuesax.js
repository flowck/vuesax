(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Vuesax", [], factory);
	else if(typeof exports === 'object')
		exports["Vuesax"] = factory();
	else
		root["Vuesax"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "54gY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5olQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5xWW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Dqm4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./css/index.css
var css = __webpack_require__("SZiR");
var css_default = /*#__PURE__*/__webpack_require__.n(css);

// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/babel-loader/lib!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/vsButton.vue
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


/* harmony default export */ var vsButton = ({
  name: 'vs-button',
  props: ['vsType'],
  data: function data() {
    return {
      clasex: 'vs-button-' + this.vsType
    };
  },
  mounted: function mounted() {
    var el = this.$el;
    el.addEventListener('click', function (event) {
      // console.log(event);
      var elSpan = document.createElement("span");
      elSpan.className = 'relleno';
      el.appendChild(elSpan);
      var x = event.offsetX;
      var y = event.offsetY;
      var spanx = this.querySelector('.relleno');
      // if(!this.classList.contains('activo')){
      var time = 0.7;
      if (this.classList.contains('filled') || event.target.clientWidth > 100) {
        var s = event.target.clientWidth - 10;
        time = event.target.clientWidth / s;
      }
      // console.log(time);
      spanx.style.transition = 'width ' + time + 's ease,height ' + time + 's ease,opacity ' + time / 1.5 + 's ease';
      spanx.style.left = x + 'px';
      spanx.style.top = y + 'px';
      spanx.style.width = event.target.clientWidth * 3 + 'px';
      spanx.style.height = event.target.clientWidth * 3 + 'px';
      spanx.style.opacity = '1';
      // spanx.style.borderRadius = '0px'
      this.classList.add('activo');
      // }
      if (this.classList.contains('filled')) {
        setTimeout(function () {
          spanx.style.left = x + 'px';
          spanx.style.top = y + 'px';
          spanx.style.width = '0px';
          spanx.style.height = '0px';
          spanx.remove();
        }, time * 1000);
      }
    });
  },

  methods: {
    btnBlur: function btnBlur(evt) {
      // console.log(evt);
      if (!evt.target.classList.contains('filled')) {
        evt.target.classList.remove('activo');
        var spanx = evt.target.querySelector('.relleno');
        spanx.style.opacity = '0';
        setTimeout(function () {
          spanx.style.width = '0px';
          spanx.style.height = '0px';
          spanx.remove();
        }, 300);
      }
    }
  }
});
// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ae913800","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/vsButton.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[_vm.vsType?_vm.clasex:'vs-button-primary-filled',{'filled':_vm.vsType?_vm.vsType.search('filled')!=-1:false,'border':_vm.vsType?_vm.vsType.search('border')!=-1:false}],attrs:{"type":"button","name":"button"},on:{"click":function($event){_vm.$emit('click')},"blur":function($event){_vm.btnBlur($event)}}},[_c('span',{staticClass:"text"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_components_vsButton = (esExports);
// CONCATENATED MODULE: ./components/vsButton.vue
function injectStyle (ssrContext) {
  __webpack_require__("5xWW")
}
var normalizeComponent = __webpack_require__("mUJo")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  vsButton,
  selectortype_template_index_0_components_vsButton,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_vsButton = (Component.exports);

// EXTERNAL MODULE: ./css/iconfont/material-icons.css
var material_icons = __webpack_require__("tQxq");
var material_icons_default = /*#__PURE__*/__webpack_require__.n(material_icons);

// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/babel-loader/lib!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/vsSelect.vue
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


/* harmony default export */ var vsSelect = ({
  name: 'vs-select',
  props: ['label', 'options', 'value', 'disabled'],
  data: function data() {
    return {
      scroll: false,
      visible: false,
      topx: 0,
      leftx: 0,
      widthx: 0
    };
  },

  watch: {
    visible: function visible() {
      var _this = this;

      if (this.visible) {
        setTimeout(function () {

          var selects = document.querySelectorAll('.con-ul-select');
          if (selects.length == 1) {
            console.log("paso en 1");
            if (document.querySelector('.con-ul-select').clientHeight >= 300) {
              _this.scroll = true;
            }
          } else {
            console.log("paso en 2", selects);
            if (selects[1].clientHeight >= 300) {
              _this.scroll = true;
            }
          }
        }, 400);
        setTimeout(function () {
          console.log();
          var elx = _this.$el.querySelector('.con-ul-select');
          var elx2 = document.querySelectorAll('.con-ul-select');
          var elxUl = document.querySelector('.con-ul-select ul');
          for (var i = 0; i < elx2.length; i++) {
            mousewheelx(elx2[i]);
          }
          function mousewheelx(el) {
            console.log();
            el.querySelector('.con-ul-select ul').scrollTop = el.querySelector('.con-ul-select ul .activo').offsetTop;
            if (el.clientHeight >= 300) {
              el.addEventListener('mousewheel', function (e) {
                // console.log($(".con-codes").scrollTop());
                if (e.wheelDelta / 120 > 0) {
                  // console.log('scrolling up !');
                  if (el.querySelector('.con-ul-select ul').scrollTop == 0) {
                    el.querySelector('.con-ul-select ul').style.paddingTop = '25px';
                    setTimeout(function () {
                      el.querySelector('.con-ul-select ul').style.paddingTop = '0px';
                    }, 300);
                  }
                } else {
                  if (el.querySelector('.con-ul-select ul').scrollHeight - el.querySelector('.con-ul-select ul').scrollTop === el.querySelector('.con-ul-select ul').clientHeight) {
                    el.querySelector('.con-ul-select ul').style.paddingBottom = '30px';
                    setTimeout(function () {
                      el.querySelector('.con-ul-select ul').style.paddingBottom = '0px';
                    }, 300);
                  }
                  // console.log('scrolling down !');
                }
              });
            }

            if (elx) {

              document.body.insertBefore(elx, document.body.firstChild);
              elx.scrollIntoView();
            }
          }
        }, 1);
      } else {
        this.scroll = false;
      }
    }
  },
  methods: {
    clickSelect: function clickSelect() {
      if (!this.disabled) {
        this.$refs.inputHidden.focus();
      }
    },
    blurx: function blurx() {
      this.visible = false;
    },
    clickOption: function clickOption(evt) {
      this.visible = false;
      this.$emit('input', evt.target.dataset.value);
      this.$emit('change', evt.target.dataset.value);
    },
    clickInputSelect: function clickInputSelect() {
      this.topx = this.$refs.vsSelect.querySelector('.con-input-select').getBoundingClientRect().top;
      this.leftx = this.$refs.vsSelect.querySelector('.con-input-select').getBoundingClientRect().left;
      this.widthx = this.$refs.vsSelect.querySelector('.con-input-select').offsetWidth;
    }
  },
  computed: {
    seleccionado: function seleccionado() {
      var _this2 = this;

      var seleccionadox = this.options.filter(function (item) {
        return item.value == _this2.value;
      });
      return seleccionadox[0].text;
    },
    seleccionadoValue: function seleccionadoValue() {
      var _this3 = this;

      var seleccionadox = this.options.filter(function (item) {
        return item.value == _this3.value;
      });
      return seleccionadox[0].value;
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    function getParents(e) {
      var result = [];
      for (var p = e && e.parentElement; p; p = p.parentElement) {
        result.push(p);
      }
      return result;
    }
    window.addEventListener('mousewheel', function (e) {
      var parents = getParents(e.toElement);
      parents = parents.filter(function (item) {
        return item.className.search('con-ul-select') != -1;
      });
      if (parents.length == 0) {
        _this4.visible = false;
      }
    });
  }
});
// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-740e7b9c","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/vsSelect.vue
var vsSelect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vsSelect",staticClass:"vs-select",class:{'abierto':_vm.visible,'disabledx':_vm.disabled},on:{"click":_vm.clickSelect}},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('div',{staticClass:"con-input-select",attrs:{"title":_vm.seleccionado}},[_c('span',[_vm._v(_vm._s(_vm.seleccionado))]),_vm._v(" "),_c('i',{staticClass:"i-icon material-icons"},[_vm._v("expand_more")]),_vm._v(" "),_c('input',{ref:"inputHidden",staticClass:"input-hidden",attrs:{"type":"text","name":"","value":""},on:{"blur":function($event){_vm.blurx()},"focus":function($event){_vm.visible=true,_vm.clickInputSelect()}}})]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.visible)?_c('div',{ref:"conUlSelect",staticClass:"con-ul-select",class:{'visiblex':_vm.visible},style:({'top':_vm.topx+'px','left':_vm.leftx+'px','width':_vm.widthx+'px'})},[_c('ul',{class:{'scrollx':_vm.scroll}},_vm._l((_vm.options),function(option,index){return _c('li',{class:{'activo':_vm.seleccionadoValue==option.value},style:({'transition':'transform .2s ease '+index/30+'s , background .2s ease,opacity .2s ease '+index/30+'s'}),attrs:{"data-value":option.value},on:{"click":function($event){_vm.clickOption($event)}}},[_vm._v(_vm._s(option.text))])}))]):_vm._e()])],1)}
var vsSelect_staticRenderFns = []
var vsSelect_esExports = { render: vsSelect_render, staticRenderFns: vsSelect_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_components_vsSelect = (vsSelect_esExports);
// CONCATENATED MODULE: ./components/vsSelect.vue
function vsSelect_injectStyle (ssrContext) {
  __webpack_require__("54gY")
}
var vsSelect_normalizeComponent = __webpack_require__("mUJo")
/* script */


/* template */

/* template functional */
var vsSelect___vue_template_functional__ = false
/* styles */
var vsSelect___vue_styles__ = vsSelect_injectStyle
/* scopeId */
var vsSelect___vue_scopeId__ = "data-v-740e7b9c"
/* moduleIdentifier (server only) */
var vsSelect___vue_module_identifier__ = null
var vsSelect_Component = vsSelect_normalizeComponent(
  vsSelect,
  selectortype_template_index_0_components_vsSelect,
  vsSelect___vue_template_functional__,
  vsSelect___vue_styles__,
  vsSelect___vue_scopeId__,
  vsSelect___vue_module_identifier__
)

/* harmony default export */ var components_vsSelect = (vsSelect_Component.exports);

// EXTERNAL MODULE: ./components/vsNoti/vsNoti.css
var vsNoti = __webpack_require__("Dqm4");
var vsNoti_default = /*#__PURE__*/__webpack_require__.n(vsNoti);

// CONCATENATED MODULE: ./components/vsNoti/vsNoti.js

/* harmony default export */ var vsNoti_vsNoti = (function(text,type='white',position='bottom-right',icon,functiox,fixed){
  if(text==null){
    console.warn('vsNoti not parameters text');
    text = 'vsNoti not parameters text'
    icon = 'warning'
    type = 'warning'
  }
  if(type==null){
    type = 'white'
  }
  if(position==null){
    position = 'bottom-right'
  }

  let conNotix = document.createElement('div')
  conNotix.classList.add('vs-noti-contenedor')
  conNotix.classList.add('vs-'+type);
  conNotix.classList.add('vs-'+position);

  let arrayPosition = position.split('-')

if(position.search('center')==-1){
  conNotix.style[arrayPosition[0]] = '15px';
  conNotix.style[arrayPosition[1]] = '15px';
}
if(position.search('top-center')!=-1){
    conNotix.style.left = `50%`
    conNotix.style.top = `15px`
    conNotix.style.transform = `translate(-50%)`
}
if(position.search('bottom-center')!=-1){
    conNotix.style.left = `50%`
    conNotix.style.bottom = `15px`
    conNotix.style.transform = `translate(-50%)`
}

  document.body.insertBefore(conNotix, document.body.firstChild);

  let rellenox = document.createElement('span')
  rellenox.classList.add('rellenox')
  if(/[#()]/i.test(type)){
    rellenox.style.background = type
  } else {
    rellenox.style.background = `rgb(var(--${type}))`
  }
  if(position.search('center')==-1){
    rellenox.style[arrayPosition[0]] = '50%';
    rellenox.style[arrayPosition[1]] = '0px';
  }
  if (position.search('bottom-center')!=-1){
    rellenox.style.left = '50%'
    rellenox.style.top = '100%'
  }
  if (position.search('top-center')!=-1){
    rellenox.style.left = '50%'
    rellenox.style.top = '0%'
  }
  conNotix.appendChild(rellenox)
  setTimeout(function () {
    if(position.search('left')!=-1){
      rellenox.style.left = '50%'
    } else if (position.search('right')!=-1) {
      rellenox.style.right = '-50%'
      rellenox.style.transform = 'translate(50%,-50%)'
    }
    // else if (position.search('center')!=-1){
    //   rellenox.style.left = '50%'
    //   rellenox.style.top = '100%'
    // }
    rellenox.style.top = '50%'
    rellenox.style.width = conNotix.offsetWidth*3 + 'px'
    rellenox.style.height = conNotix.offsetWidth*3 + 'px'
    moverNotis(position)
  }, 100);

  let notix = document.createElement('div')
  conNotix.appendChild(notix)
  notix.innerHTML = text
  notix.classList.add('vs-noti')



  if(icon){
    conNotix.classList.add('con-icon')
    let iconx = document.createElement('span')
    iconx.classList.add('icon-noti')
    iconx.innerHTML=`<i class="material-icons">${icon}</i>`
    conNotix.appendChild(iconx)
  }

  setTimeout(function () {
    conNotix.classList.add('vs-noti-listo')
  }, 300);

  conNotix.addEventListener('click',function(e){
    if(functiox){
      functiox()
    }
    eliminarx(conNotix,position,conNotix,fluent)
  })

  let conFluent = document.createElement('div')
  conFluent.classList.add('vs-con-fluent')

  let fluent = document.createElement('div')
  fluent.classList.add('vs-fluent')
  fluent.style.height = conNotix.offsetHeight*2+'px'
  fluent.style.width = conNotix.offsetHeight*2+'px'
  conFluent.appendChild(fluent)

  conNotix.appendChild(conFluent)

  conNotix.addEventListener('mousemove',function(e){
    // console.log(e);
    let x = e.pageX
    let y = e.pageY
    fluent.style.left = x - conNotix.getBoundingClientRect().left+'px'
    fluent.style.top = y - conNotix.getBoundingClientRect().top+'px'
    fluent.style.opacity = '1'
    fluent.style.height = conNotix.offsetHeight*2+'px'
    fluent.style.width = conNotix.offsetHeight*2+'px'
  })
  conNotix.addEventListener('mouseleave',function(e){
    fluent.style.opacity = '0'
    fluent.style.height = conNotix.offsetHeight*4+'px'
    fluent.style.width = conNotix.offsetHeight*4+'px'
  })

setTimeout(function () {
  if(!fixed){
    eliminarx(conNotix,position,conNotix,fluent)
  }
}, 2000);
});

function eliminarx(contenedor,position,conNotix,fluent){
  fluent.style.filter = 'blur(10px)'
  fluent.style.opacity = '0'
  fluent.style.height = conNotix.offsetHeight*5+'px'
  fluent.style.width = conNotix.offsetHeight*5+'px'
  if (position.search('top-center')!=-1) {
    contenedor.style.opacity = 0
    contenedor.style.top = '-20px'
  }
  if (position.search('bottom-center')!=-1) {
    contenedor.style.opacity = 0
    contenedor.style.bottom = '-20px'
  }
  setTimeout(function () {
    if(position.search('left')!=-1){
      contenedor.style.left = '-300px'
      contenedor.style.opacity = 0
    } else if (position.search('right')!=-1){
      contenedor.style.right = '-300px'
      contenedor.style.opacity = 0
    }
  }, 200);
    setTimeout(function () {
      contenedor.remove()
      moverNotis(position)
    }, 300);
}

function moverNotis(position){
  // console.log("paso en posision");
  let notisx = document.querySelectorAll('.vs-'+position);
  for (var i = 0; i < notisx.length; i++) {
    let hx = 0
    for (var i2 = 0; i2 < i; i2++) {
      hx += notisx[i2].offsetHeight + 10
    }
    if(position.search('center')==-1){
      if(position.search('top')!=-1){
        notisx[i].style.transform = `translatey(${hx}px)`
      } else if (position.search('bottom')!=-1) {
        notisx[i].style.transform = `translatey(-${hx}px)`
      }
    }

     if (position.search('top-center')!=-1) {
      notisx[i].style.transform = `translate(-50%,${hx}px)`
      notisx[i].style.zIndex = 10000-i
    }
     if (position.search('bottom-center')!=-1) {
      notisx[i].style.transform = `translate(-50%,-${hx}px)`
      notisx[i].style.zIndex = 10000-i
    }
  }
  // console.log(hx);
}

// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/babel-loader/lib!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/vsSwitch.vue
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

/* harmony default export */ var vsSwitch = ({
  name: 'vs-switch',
  props: ['value', 'vsType', 'vsIcon'],
  methods: {
    backgroundx: function backgroundx() {
      if (this.value) {
        if (/[#()]/i.test(this.vsType)) {
          return this.vsType;
        } else {
          return 'rgb(var(--' + this.vsType + '))';
        }
      }
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1aedea6f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!C:/Users/pc 01/Documents/vuesax/node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/vsSwitch.vue
var vsSwitch_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"switchx",staticClass:"con-switch",class:[{'switch-activo':_vm.value}],style:({'background':_vm.backgroundx()}),on:{"click":function($event){_vm.$emit('input',!_vm.value),_vm.$emit('change',!_vm.value)}}},[_c('span',{staticClass:"switch-circle"}),_vm._v(" "),_c('i',{staticClass:"material-icons"},[_vm._v(_vm._s(_vm.vsIcon))])])}
var vsSwitch_staticRenderFns = []
var vsSwitch_esExports = { render: vsSwitch_render, staticRenderFns: vsSwitch_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_components_vsSwitch = (vsSwitch_esExports);
// CONCATENATED MODULE: ./components/vsSwitch.vue
function vsSwitch_injectStyle (ssrContext) {
  __webpack_require__("5olQ")
}
var vsSwitch_normalizeComponent = __webpack_require__("mUJo")
/* script */


/* template */

/* template functional */
var vsSwitch___vue_template_functional__ = false
/* styles */
var vsSwitch___vue_styles__ = vsSwitch_injectStyle
/* scopeId */
var vsSwitch___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var vsSwitch___vue_module_identifier__ = null
var vsSwitch_Component = vsSwitch_normalizeComponent(
  vsSwitch,
  selectortype_template_index_0_components_vsSwitch,
  vsSwitch___vue_template_functional__,
  vsSwitch___vue_styles__,
  vsSwitch___vue_scopeId__,
  vsSwitch___vue_module_identifier__
)

/* harmony default export */ var components_vsSwitch = (vsSwitch_Component.exports);

// CONCATENATED MODULE: ./index.js
// import Vue from 'vue'




// import './css/index.css'
const Vuesax = {
  install(Vue, options) {
    //buttons
    Vue.component(components_vsButton.name,components_vsButton)
    //selects
    Vue.component(components_vsSelect.name,components_vsSelect)
    //switch
    Vue.component(components_vsSwitch.name,components_vsSwitch)
  	Vue.mixin({
      methods:{
        vsNoti: vsNoti_vsNoti
      }
    });

  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax)
}

// export default Vuesax;



// import * as vsComponents from './components'
//
// let vuesax = Vue => {
//   Object.values(vsComponents).forEach((vsComponent) => {
//     Vue.use(vsComponent)
//   })
// }

// Vuesax.version = '__VERSION__'
/* harmony default export */ var index = __webpack_exports__["default"] = (Vuesax);


/***/ }),

/***/ "SZiR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mUJo":
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

/***/ "tQxq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
});