webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 150;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(170);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiAutoCompleteDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * display auto-complete section with input and dropdown list when it is clicked
 */
var NguiAutoCompleteDirective = (function () {
    function NguiAutoCompleteDirective(resolver, renderer, viewContainerRef, parentForm) {
        var _this = this;
        this.resolver = resolver;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.parentForm = parentForm;
        this.loadingText = "Loading";
        this.tabToSelect = true;
        this.matchFormatted = false;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.valueChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        //show auto-complete list below the current element
        this.showAutoCompleteDropdown = function (event) {
            var factory = _this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__auto_complete_component__["a" /* NguiAutoCompleteComponent */]);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            var component = _this.componentRef.instance;
            component.showInputTag = false; //Do NOT display autocomplete input tag separately
            component.pathToData = _this.pathToData;
            component.minChars = _this.minChars;
            component.source = _this.source;
            component.placeholder = _this.autoCompletePlaceholder;
            component.acceptUserInput = _this.acceptUserInput;
            component.maxNumList = parseInt(_this.maxNumList, 10);
            component.loadingText = _this.loadingText;
            component.listFormatter = _this.listFormatter;
            component.blankOptionText = _this.blankOptionText;
            component.noMatchFoundText = _this.noMatchFoundText;
            component.tabToSelect = _this.tabToSelect;
            component.matchFormatted = _this.matchFormatted;
            component.valueSelected.subscribe(_this.selectNewValue);
            _this.acDropdownEl = _this.componentRef.location.nativeElement;
            _this.acDropdownEl.style.display = "none";
            // if this element is not an input tag, move dropdown after input tag
            // so that it displays correctly
            if (_this.el.tagName !== "INPUT" && _this.acDropdownEl) {
                _this.inputEl.parentElement.insertBefore(_this.acDropdownEl, _this.inputEl.nextSibling);
            }
            _this.revertValue = typeof _this.ngModel !== "undefined" ? _this.ngModel : _this.inputEl.value;
            setTimeout(function () {
                component.reloadList(_this.inputEl.value);
                _this.styleAutoCompleteDropdown();
                component.dropdownVisible = true;
            });
        };
        this.hideAutoCompleteDropdown = function (event) {
            if (_this.componentRef) {
                var currentItem = void 0;
                var hasRevertValue = (typeof _this.revertValue !== "undefined");
                if (_this.inputEl && hasRevertValue && _this.acceptUserInput === false) {
                    currentItem = _this.componentRef.instance.findItemFromSelectValue(_this.inputEl.value);
                }
                _this.componentRef.destroy();
                _this.componentRef = undefined;
                if (_this.inputEl &&
                    hasRevertValue &&
                    _this.acceptUserInput === false &&
                    currentItem === null) {
                    _this.selectNewValue(_this.revertValue);
                }
            }
        };
        this.styleAutoCompleteDropdown = function () {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                /* setting width/height auto complete */
                var thisElBCR = _this.el.getBoundingClientRect();
                var thisInputElBCR = _this.inputEl.getBoundingClientRect();
                var closeToBottom = thisInputElBCR.bottom + 100 > window.innerHeight;
                _this.acDropdownEl.style.width = thisInputElBCR.width + "px";
                _this.acDropdownEl.style.position = "absolute";
                _this.acDropdownEl.style.zIndex = "1";
                _this.acDropdownEl.style.left = "0";
                _this.acDropdownEl.style.display = "inline-block";
                if (closeToBottom) {
                    _this.acDropdownEl.style.bottom = thisInputElBCR.height + "px";
                }
                else {
                    _this.acDropdownEl.style.top = thisInputElBCR.height + "px";
                }
            }
        };
        this.selectNewValue = function (item) {
            // make displayable value
            if (item && typeof item === "object") {
                item = _this.setToStringFunction(item);
            }
            _this.inputEl && (_this.inputEl.value = '' + item);
            // make return value
            var val = item;
            if (_this.selectValueOf && item[_this.selectValueOf]) {
                val = item[_this.selectValueOf];
            }
            if ((_this.parentForm && _this.formControlName) || _this.extFormControl) {
                if (!!val) {
                    _this.formControl.patchValue(val);
                }
            }
            (val !== _this.ngModel) && _this.ngModelChange.emit(val);
            _this.valueChanged.emit(val);
            _this.hideAutoCompleteDropdown();
        };
        this.keydownEventHandler = function (evt) {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                component.inputElKeyHandler(evt);
            }
        };
        this.inputEventHandler = function (evt) {
            if (_this.componentRef) {
                var component = _this.componentRef.instance;
                component.dropdownVisible = true;
                component.reloadListInDelay(evt);
            }
            else {
                _this.showAutoCompleteDropdown();
            }
        };
        this.el = this.viewContainerRef.element.nativeElement;
    }
    NguiAutoCompleteDirective.prototype.ngOnInit = function () {
        // wrap this element with <div class="ngui-auto-complete">
        this.wrapperEl = document.createElement("div");
        this.wrapperEl.className = "ngui-auto-complete-wrapper";
        this.wrapperEl.style.position = "relative";
        this.el.parentElement.insertBefore(this.wrapperEl, this.el.nextSibling);
        this.wrapperEl.appendChild(this.el);
        //Check if we were supplied with a [formControlName] and it is inside a [form]
        //else check if we are supplied with a [FormControl] regardless if it is inside a [form] tag
        if (this.parentForm && this.formControlName) {
            if (this.parentForm['form']) {
                this.formControl = this.parentForm['form'].get(this.formControlName);
            }
            else if (this.parentForm instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroupName */]) {
                this.formControl = this.parentForm.control.controls[this.formControlName];
            }
        }
        else if (this.extFormControl) {
            this.formControl = this.extFormControl;
        }
        // apply toString() method for the object
        if (!!this.ngModel) {
            this.selectNewValue(this.ngModel);
        }
        else if (!!this.formControl && this.formControl.value) {
            this.selectNewValue(this.formControl.value[this.displayPropertyName]);
        }
    };
    NguiAutoCompleteDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // if this element is not an input tag, move dropdown after input tag
        // so that it displays correctly
        this.inputEl = this.el.tagName === "INPUT" ?
            this.el : this.el.querySelector("input");
        this.inputEl.addEventListener('focus', function (e) { return _this.showAutoCompleteDropdown(e); });
        this.inputEl.addEventListener('blur', function (e) { return _this.hideAutoCompleteDropdown(e); });
        this.inputEl.addEventListener('keydown', function (e) { return _this.keydownEventHandler(e); });
        this.inputEl.addEventListener('input', function (e) { return _this.inputEventHandler(e); });
    };
    NguiAutoCompleteDirective.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.instance.valueSelected.unsubscribe();
        }
    };
    NguiAutoCompleteDirective.prototype.ngOnChanges = function (changes) {
        if (changes['ngModel']) {
            this.ngModel = this.setToStringFunction(changes['ngModel'].currentValue);
        }
    };
    NguiAutoCompleteDirective.prototype.setToStringFunction = function (item) {
        if (item && typeof item === "object") {
            var displayVal_1;
            if (typeof this.valueFormatter === 'string') {
                var matches = this.valueFormatter.match(/[a-zA-Z0-9_\$]+/g);
                var formatted_1 = this.valueFormatter;
                if (matches && typeof item !== 'string') {
                    matches.forEach(function (key) {
                        formatted_1 = formatted_1.replace(key, item[key]);
                    });
                }
                displayVal_1 = formatted_1;
            }
            else if (typeof this.valueFormatter === 'function') {
                displayVal_1 = this.valueFormatter(item);
            }
            else if (this.displayPropertyName) {
                displayVal_1 = item[this.displayPropertyName];
            }
            else if (typeof this.listFormatter === 'string' && this.listFormatter.match(/^\w+$/)) {
                displayVal_1 = item[this.listFormatter];
            }
            else {
                displayVal_1 = item.value;
            }
            item.toString = function () {
                return displayVal_1;
            };
        }
        return item;
    };
    return NguiAutoCompleteDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("auto-complete-placeholder"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "autoCompletePlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("source"),
    __metadata("design:type", Object)
], NguiAutoCompleteDirective.prototype, "source", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("path-to-data"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "pathToData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("min-chars"),
    __metadata("design:type", Number)
], NguiAutoCompleteDirective.prototype, "minChars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("display-property-name"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "displayPropertyName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("accept-user-input"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteDirective.prototype, "acceptUserInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("max-num-list"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "maxNumList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("select-value-of"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "selectValueOf", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("list-formatter"),
    __metadata("design:type", Object)
], NguiAutoCompleteDirective.prototype, "listFormatter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("loading-text"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "loadingText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("blank-option-text"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "blankOptionText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("no-match-found-text"),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "noMatchFoundText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("value-formatter"),
    __metadata("design:type", Object)
], NguiAutoCompleteDirective.prototype, "valueFormatter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("tab-to-select"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteDirective.prototype, "tabToSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("match-formatted"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteDirective.prototype, "matchFormatted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], NguiAutoCompleteDirective.prototype, "ngModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])('formControlName'),
    __metadata("design:type", String)
], NguiAutoCompleteDirective.prototype, "formControlName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])('formControl'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]) === "function" && _a || Object)
], NguiAutoCompleteDirective.prototype, "extFormControl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", Object)
], NguiAutoCompleteDirective.prototype, "ngModelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", Object)
], NguiAutoCompleteDirective.prototype, "valueChanged", void 0);
NguiAutoCompleteDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: "[auto-complete], [ngui-auto-complete]"
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Optional */])()), __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Host */])()), __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* SkipSelf */])()),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Renderer */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ViewContainerRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ControlContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ControlContainer */]) === "function" && _e || Object])
], NguiAutoCompleteDirective);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auto-complete.directive.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auto_complete_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auto_complete_directive__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auto_complete__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiAutoCompleteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NguiAutoCompleteModule = NguiAutoCompleteModule_1 = (function () {
    function NguiAutoCompleteModule() {
    }
    NguiAutoCompleteModule.forRoot = function () {
        return {
            ngModule: NguiAutoCompleteModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__auto_complete__["a" /* NguiAutoComplete */]]
        };
    };
    return NguiAutoCompleteModule;
}());
NguiAutoCompleteModule = NguiAutoCompleteModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__auto_complete_component__["a" /* NguiAutoCompleteComponent */], __WEBPACK_IMPORTED_MODULE_4__auto_complete_directive__["a" /* NguiAutoCompleteDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__auto_complete_component__["a" /* NguiAutoCompleteComponent */], __WEBPACK_IMPORTED_MODULE_4__auto_complete_directive__["a" /* NguiAutoCompleteDirective */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__auto_complete_component__["a" /* NguiAutoCompleteComponent */]]
    })
], NguiAutoCompleteModule);

var NguiAutoCompleteModule_1;
//# sourceMappingURL=auto-complete.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiUtilsDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NguiUtilsDirective = (function () {
    function NguiUtilsDirective() {
    }
    return NguiUtilsDirective;
}()); // dummy directive to allow non-standard tags
NguiUtilsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: 'ngui-utils-1, ngui-utils-2, ngui-utils-3, ngui-utils-4, ngui-utils-5,' +
            'ngui-utils-6, ngui-utils-7, ngui-utils-8, ngui-utils-9, ngui-utils-10,' +
            'ngui-utils-11, ngui-utils-12, ngui-utils-13, ngui-utils-14, ngui-utils-15,' +
            'ngui-utils-16, ngui-utils-17, ngui-utils-18, ngui-utils-19, ngui-utils-20'
    })
], NguiUtilsDirective);

//# sourceMappingURL=utils.directive.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlCodePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HtmlCodePipe = (function () {
    function HtmlCodePipe() {
    }
    HtmlCodePipe.prototype.transform = function (html, tagsIncludeExclude) {
        var ret;
        var tagsInclude = [];
        var tagsExclude = [];
        (tagsIncludeExclude || '').split(',').forEach(function (tag) {
            if (tag.match(/^-/)) {
                tag = tag.replace(/^-/, '');
                tagsExclude.push(tag);
            }
            else if (tag !== '') {
                tagsInclude.push(tag);
            }
        });
        ret = tagsInclude.length > 0 ? '' : html;
        if (tagsInclude.length > 0) {
            tagsInclude.forEach(function (tag) {
                var regEx = new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">");
                var matches = html.match(regEx);
                var output = matches[0].replace(/<\/?ngui-utils-[0-9]+>\s*/g, ''); //remove <ngui-utils-xxx> and </ngui-utils-xxx>
                ret = ret + output;
            });
        }
        if (tagsExclude.length > 0) {
            tagsExclude.forEach(function (tag) {
                var regEx = new RegExp("<" + tag + ">([\\s\\S]*?)</" + tag + ">");
                ret = ret.replace(regEx, '');
            });
        }
        return ret;
    };
    return HtmlCodePipe;
}());
HtmlCodePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'htmlCode' })
], HtmlCodePipe);

//# sourceMappingURL=html-code.pipe.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_beautify_js__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_beautify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_beautify_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JavascriptCodePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JavascriptCodePipe = (function () {
    function JavascriptCodePipe() {
    }
    JavascriptCodePipe.prototype.transform = function (value) {
        value = value.toString();
        var ret = value;
        return __WEBPACK_IMPORTED_MODULE_1_js_beautify_js__(value);
    };
    return JavascriptCodePipe;
}());
JavascriptCodePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'jsCode' })
], JavascriptCodePipe);

//# sourceMappingURL=javascript-code.pipe.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memory_storage__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Storage = (function () {
    function Storage() {
        // preference && (this.preference = preference);   //'localStorage' or 'sessionStorage'
        this.preference = 'sessionStorage';
        if (this.preference == 'localStorage' && this.hasStorage('localStorage')) {
            this.storage = window.localStorage;
        }
        else if (this.preference == 'sessionStorage' && this.hasStorage('sessionStorage')) {
            this.storage = window.sessionStorage;
        }
        else {
            this.storage = new __WEBPACK_IMPORTED_MODULE_1__memory_storage__["a" /* MemoryStorage */]();
        }
    }
    Object.defineProperty(Storage.prototype, "length", {
        get: function () { return this.storage.length; },
        enumerable: true,
        configurable: true
    });
    Storage.prototype.getItem = function (key) {
        var strValue = this.storage.getItem(key);
        try {
            return JSON.parse(strValue);
        }
        catch (e) {
            return strValue;
        }
    };
    Storage.prototype.setItem = function (key, value) {
        var strValue = typeof value === 'object' ? JSON.stringify(value) : value.toString();
        this.storage.setItem(key, strValue);
    };
    Storage.prototype.removeItem = function (key) { this.storage.removeItem(key); };
    Storage.prototype.clear = function () { this.storage.clear(); };
    Storage.prototype.hasStorage = function (name) {
        try {
            window[name].setItem('test', '1');
            window[name].removeItem('test');
            return true;
        }
        catch (e) {
            return false;
        }
    };
    return Storage;
}());
Storage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], Storage);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_html_code_pipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_javascript_code_pipe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_utils_directive__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_memory_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiUtilsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* services */


var NguiUtilsModule = (function () {
    function NguiUtilsModule() {
    }
    return NguiUtilsModule;
}());
NguiUtilsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_memory_storage__["a" /* MemoryStorage */],
            __WEBPACK_IMPORTED_MODULE_5__services_storage__["a" /* Storage */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__pipes_html_code_pipe__["a" /* HtmlCodePipe */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_javascript_code_pipe__["a" /* JavascriptCodePipe */],
            __WEBPACK_IMPORTED_MODULE_3__directives_utils_directive__["a" /* NguiUtilsDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__pipes_html_code_pipe__["a" /* HtmlCodePipe */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_javascript_code_pipe__["a" /* JavascriptCodePipe */],
            __WEBPACK_IMPORTED_MODULE_3__directives_utils_directive__["a" /* NguiUtilsDirective */]
        ]
    })
], NguiUtilsModule);

//# sourceMappingURL=utils.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(232),
        styles: [__webpack_require__(225)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_customerlist_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Shared_utils_utils_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Shared_autocomplete_auto_complete_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_customeredit_customeredit_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__customer_customerlist_component__["a" /* CustomerlistComponent */],
            __WEBPACK_IMPORTED_MODULE_12__customer_customeredit_customeredit_component__["a" /* CustomereditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_6__customer_customer_component__["a" /* CustomerComponent */] },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            __WEBPACK_IMPORTED_MODULE_9__product_product_module__["a" /* ProductModule */],
            __WEBPACK_IMPORTED_MODULE_10__Shared_utils_utils_module__["a" /* NguiUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_11__Shared_autocomplete_auto_complete_module__["a" /* NguiAutoCompleteModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
let templateStr: string = `
      
  <fieldset><legend><h2>Source as HTTP URI String</h2></legend>
    <ngui-utils-4>
      <input  ngui-auto-complete
        id="model4"
        [(ngModel)]="model4"
        placeholder="Enter Address(min. 2 chars)"
        [source]="googleGeoCode"
        no-match-found-text="No Match Found"
        list-formatter="formatted_address"
        path-to-data="results"
        loading-text="Google Is Thinking..."
        max-num-list="5"
        min-chars="2" />
      <br/>selected model4: {{model4 | json}}<br/><br/>
    </ngui-utils-4>
    <pre>{{templateStr | htmlCode:'ngui-utils-4'}}</pre>
    <pre> source: {{googleGeoCode}}</pre>
  </fieldset>
 `;
 */
var CustomerComponent = (function () {
    function CustomerComponent(http, productService, _sanitizer) {
        this.http = http;
        this.productService = productService;
        this._sanitizer = _sanitizer;
        //templateStr: any = templateStr;
        //googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:my_own_keyword";
        this.googleGeoCode = "/sites/TestDev1/_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.clientPeoplePickerSearchUser";
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__customer__["a" /* Customer */]();
    }
    CustomerComponent.prototype.save = function (customerForm) {
        var _this = this;
        var formdata = customerForm.value;
        this.productService.updatePeoplePickerFields(formdata).then(function (response) {
            console.log("end - updatePeoplePickerFields");
            console.log(formdata);
            console.log("done - updatePeoplePickerFields");
            var json_string = JSON.stringify(customerForm.value);
            var json_obj = JSON.parse(json_string);
            json_obj['__metadata'] = { "type": "SP.Data.HelloListListItem" };
            json_string = JSON.stringify(json_obj);
            console.log(json_string);
            _this.productService.createCustomer(json_string)
                .subscribe(function (products) { return _this.productService.getCustomers(); }, function (error) { return console.log('testing error createCustomers: '); });
        });
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'my-signup',
        // template: templateStr,
        template: __webpack_require__(233)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], CustomerComponent);

var _a, _b, _c;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer(FirstName, LastName, Email, ID, UserNameId, UserName01Id, UserName02Id, 
        // public sendCatalog = false,
        addressType, street1, street2, city, state, zip) {
        if (FirstName === void 0) { FirstName = ''; }
        if (LastName === void 0) { LastName = ''; }
        if (Email === void 0) { Email = ''; }
        if (addressType === void 0) { addressType = 'home'; }
        if (state === void 0) { state = ''; }
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.ID = ID;
        this.UserNameId = UserNameId;
        this.UserName01Id = UserName01Id;
        this.UserName02Id = UserName02Id;
        this.addressType = addressType;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return Customer;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customerlist_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customeredit_customeredit_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__customer_customerlist_component__["a" /* CustomerlistComponent */] },
                { path: 'customeredit/:id', component: __WEBPACK_IMPORTED_MODULE_3__customer_customeredit_customeredit_component__["a" /* CustomereditComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProductRoutingModule);

//# sourceMappingURL=product-routing.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_routing_module__ = __webpack_require__(168);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CustomerlistComponent } from '../customer/customerlist.component';
//import { ProductService } from '../product.service';
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__product_routing_module__["a" /* ProductRoutingModule */]
        ],
        declarations: [],
        providers: []
    })
], ProductModule);

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                    <li><a [routerLink]=\"['/productEdit/0']\">Add Product</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        Sign Up!\n    </div>\n    <!-- start \n     <fieldset><legend><h2>Source as HTTP URI String</h2></legend>\n    <ngui-utils-4>\n      <input  ngui-auto-complete\n        id=\"model4\"\n        [(ngModel)]=\"model4\"\n        placeholder=\"Enter Address(min. 2 chars)\"\n        [source]=\"googleGeoCode\" \n        no-match-found-text=\"No Match Found\"\n        list-formatter=\"formatted_address\"\n        path-to-data=\"results\"\n        loading-text=\"Google Is Thinking...\"\n        max-num-list=\"5\"\n        min-chars=\"2\" />\n    <!--  <br/>selected model4: {{model4 | json}}<br/><br/>\n    </ngui-utils-4>\n    <pre>{{templateStr | htmlCode:'ngui-utils-4'}}</pre>\n    <pre> source: {{googleGeoCode}}</pre>\n  </fieldset>-->\n<!-- end -->\n    <div class=\"panel-body\">\n        <form class=\"form-horizontal\"\n              novalidate\n              (ngSubmit)=\"save(signupForm)\"\n              #signupForm=\"ngForm\">\n            <fieldset>\n                <div class=\"form-group\"\n                    [ngClass]=\"{'has-error': (firstNameVar.touched || firstNameVar.dirty) && !firstNameVar.valid }\">\n                    <label class=\"col-md-2 control-label\" \n                           for=\"firstNameId\">First Name</label>\n\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" \n                               id=\"firstNameId\" \n                               type=\"text\" \n                               placeholder=\"First Name (required)\" \n                               required \n                               minlength=\"3\"\n                               [(ngModel)]=customer.FirstName\n                               name=\"FirstName\"\n                               #firstNameVar=\"ngModel\" />\n                        <span class=\"help-block\" *ngIf=\"(firstNameVar.touched || firstNameVar.dirty) && firstNameVar.errors\">\n                            <span *ngIf=\"firstNameVar.errors.required\">\n                                Please enter your first name.\n                            </span>\n                            <span *ngIf=\"firstNameVar.errors.minlength\">\n                                The first name must be longer than 3 characters.\n                            </span>\n                        </span>\n                    </div>\n                </div>\n\n <div class=\"form-group\"\n                    [ngClass]=\"{'has-error': (UserNameVar.touched || UserNameVar.dirty) && !UserNameVar.valid }\">\n                    <label class=\"col-md-2 control-label\" \n                           for=\"UserNameId\">User Name</label>\n                   <div class=\"col-md-8\">\n                        <ngui-utils-4>\n                            <input  ngui-auto-complete\n                                id=\"UserNameId\"\n                                [(ngModel)]=\"customer.UserNameId\"\n                                placeholder=\"Enter Address(min. 2 chars)\"\n                                [source]=\"googleGeoCode\" \n                                no-match-found-text=\"No Match Found\"\n                                list-formatter=\"DisplayText\"\n                                path-to-data=\"results\"\n                                loading-text=\"Google Is Thinking...\"\n                                minlength=\"2\"\n                                max-num-list=\"5\"\n                                name=\"UserNameId\"\n                                #UserNameVar=\"ngModel\"\n                                min-chars=\"2\" />\n                                <br/>selected model4: {{customer.UserNameId | json}}<br/><br/>\n                                </ngui-utils-4>\n                                  <pre> source: {{googleGeoCode}}</pre>\n                                 <span class=\"help-block\" *ngIf=\"(UserNameVar.touched || UserNameVar.dirty) && UserNameVar.errors\">\n                            <span *ngIf=\"UserNameVar.errors.required\">\n                                Please select user name.\n                            </span>\n                            <span *ngIf=\"UserNameVar.errors.minlength\">\n                                Please enter atleast 2 characters to search for user.\n                            </span>\n                            \n                        </span>\n                    </div>\n                </div>\n                <!-- test-->\n<div class=\"form-group\"\n                    [ngClass]=\"{'has-error': (UserName01Var.touched || UserName01Var.dirty) && !UserName01Var.valid }\">\n                    <label class=\"col-md-2 control-label\" \n                           for=\"UserName01Id\">User Name 01</label>\n                   <div class=\"col-md-8\">\n                        <ngui-utils-4>\n                            <input  ngui-auto-complete\n                                id=\"UserName01Id\"\n                                [(ngModel)]=\"customer.UserName01Id\"\n                                placeholder=\"Enter Address(min. 2 chars)\"\n                                [source]=\"googleGeoCode\" \n                                no-match-found-text=\"No Match Found\"\n                                list-formatter=\"DisplayText\"\n                                path-to-data=\"results\"\n                                loading-text=\"Google Is Thinking...\"\n                                minlength=\"2\"\n                                max-num-list=\"5\"\n                                name=\"UserName01Id\"\n                                #UserName01Var=\"ngModel\"\n                                min-chars=\"2\" />\n                                <br/>selected model4: {{customer.UserName01Id | json}}<br/><br/>\n                                </ngui-utils-4>\n                                <span class=\"help-block\" *ngIf=\"(UserName01Var.touched || UserName01Var.dirty) && UserName01Var.errors\">\n                            <span *ngIf=\"UserName01Var.errors.required\">\n                                Please select user name 01.\n                            </span>\n                            <span *ngIf=\"UserName01Var.errors.minlength\">\n                                Please enter atleast 2 characters to search for user.\n                            </span>\n                            \n                        </span>\n                    </div>\n                </div>\n \n\n <div class=\"form-group\"\n                    [ngClass]=\"{'has-error': (UserName02Var.touched || UserName02Var.dirty) && !UserName02Var.valid }\">\n                    <label class=\"col-md-2 control-label\" \n                           for=\"UserName02Id\">User Name 02</label>\n                   <div class=\"col-md-8\">\n                        <ngui-utils-4>\n                            <input  ngui-auto-complete\n                                id=\"UserName02Id\"\n                                [(ngModel)]=\"customer.UserName02Id\"\n                                placeholder=\"Enter Address(min. 2 chars)\"\n                                [source]=\"googleGeoCode\" \n                                no-match-found-text=\"No Match Found\"\n                                list-formatter=\"DisplayText\"\n                                path-to-data=\"results\"\n                                loading-text=\"Google Is Thinking...\"\n                                minlength=\"2\"\n                                max-num-list=\"5\"\n                                name=\"UserName02Id\"\n                                #UserName02Var=\"ngModel\"\n                                min-chars=\"2\" />\n                                <br/>selected model4: {{customer.UserName02Id | json}}<br/><br/>\n                                </ngui-utils-4>\n                                <span class=\"help-block\" *ngIf=\"(UserName02Var.touched || UserName02Var.dirty) && UserName02Var.errors\">\n                            <span *ngIf=\"UserName02Var.errors.required\">\n                                Please select user name 01.\n                            </span>\n                            <span *ngIf=\"UserName02Var.errors.minlength\">\n                                Please enter atleast 2 characters to search for user.\n                            </span>\n                            \n                        </span>\n                    </div>\n                </div>\n \n                <!--test-->\n                <div class=\"form-group\"\n                    [ngClass]=\"{'has-error': (lastNameVar.touched || lastNameVar.dirty) && !lastNameVar.valid }\">\n                    <label class=\"col-md-2 control-label\" \n                        for=\"lastNameId\">Last Name</label>\n\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" \n                               id=\"lastNameId\" \n                               type=\"text\" \n                               placeholder=\"Last Name (required)\" \n                               required \n                               maxlength=\"50\"\n                               [(ngModel)]=\"customer.LastName\"\n                               name=\"LastName\"\n                               #lastNameVar=\"ngModel\" />\n                        <span class=\"help-block\" *ngIf=\"(lastNameVar.touched || lastNameVar.dirty) && lastNameVar.errors\">\n                            <span *ngIf=\"lastNameVar.errors.required\">\n                                Please enter your last name.\n                            </span>\n                        </span>\n                    </div>\n                </div>\n               <div class=\"form-group\"\n                    [ngClass]=\"{'has-error': (emailVar.touched || emailVar.dirty) && !emailVar.valid }\">\n                    <label class=\"col-md-2 control-label\" \n                        for=\"emailId\">Email</label>\n\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" \n                               id=\"emailId\" \n                               type=\"text\" \n                               placeholder=\"Email (required)\" \n                               required\n                               pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\"\n                               [(ngModel)]=\"customer.Email\"\n                               name=\"Email\"\n                               #emailVar=\"ngModel\" />\n                        <span class=\"help-block\" *ngIf=\"(emailVar.touched || emailVar.dirty) && emailVar.errors\">\n                            <span *ngIf=\"emailVar.errors.required\">\n                                Please enter your email address.\n                            </span>\n                            <span *ngIf=\"emailVar.errors.pattern\">\n                                Please enter a valid email address.\n                            </span>\n\n                            <!-- This one does not work -->\n                            <span *ngIf=\"emailVar.errors.email\">\n                                Please enter a valid email address.\n                            </span>\n                        </span>\n                    </div>\n                </div>\n               \n                <!--\n                <div class=\"form-group\">\n                    <div class=\"col-md-offset-1 col-md-8 checkbox\" >\n                        <label>\n                            <input id=\"sendCatalogId\"\n                                   type=\"checkbox\"\n                                   [(ngModel)]=\"customer.sendCatalog\"\n                                   name=\"sendCatalog\" >\n                            Send me your catalog\n                        </label>\n                    </div>\n                </div>\n                \n                <div *ngIf=\"customer.sendCatalog\">\n                    <div class=\"form-group\" >\n                        <label class=\"col-md-2 control-label\">Address Type</label>\n                        <div class=\"col-md-8\">\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"addressType1Id\" value=\"home\"\n                                           [(ngModel)]=\"customer.addressType\"\n                                           name=\"addressType\">Home\n                                </label>\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"addressType1Id\" value=\"work\"\n                                           [(ngModel)]=\"customer.addressType\"\n                                           name=\"addressType\">Work\n                                </label>\n                                <label class=\"radio-inline\">\n                                    <input type=\"radio\" id=\"addressType1Id\" value=\"other\"\n                                           [(ngModel)]=\"customer.addressType\"\n                                           name=\"addressType\">Other\n                                </label>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label class=\"col-md-2 control-label\" \n                            for=\"street1Id\">Street Address 1</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" \n                                   class=\"form-control\" \n                                   id=\"street1Id\" \n                                   placeholder=\"Street address\"\n                                   [(ngModel)]=\"customer.street1\"\n                                   name=\"street1\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label class=\"col-md-2 control-label\" \n                            for=\"street2Id\">Street Address 2</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" \n                                   class=\"form-control\" \n                                   id=\"street2Id\"\n                                   placeholder=\"Street address (second line)\"\n                                   [(ngModel)]=\"customer.street2\"\n                                   name=\"street2\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label class=\"col-md-2 control-label\" \n                            for=\"cityId\">City, State, Zip Code</label>\n                        <div class=\"col-md-3\">\n                            <input type=\"text\" \n                                   class=\"form-control\" \n                                   id=\"cityId\" \n                                   placeholder=\"City\"\n                                   [(ngModel)]=\"customer.city\"\n                                   name=\"city\">\n                        </div>\n                        <div class=\"col-md-3\">\n                            <select class=\"form-control\"\n                                    id=\"stateId\"\n                                    [(ngModel)]=\"customer.state\"\n                                    name=\"state\">\n                                <option value=\"\" disabled selected hidden>Select a State...</option>\n                                <option value=\"AL\">Alabama</option>\n                                <option value=\"AK\">Alaska</option>\n                                <option value=\"AZ\">Arizona</option>\n                                <option value=\"AR\">Arkansas</option>\n                                <option value=\"CA\">California</option>\n                                <option value=\"CO\">Colorado</option>\n                                <option value=\"WI\">Wisconsin</option>\n                                <option value=\"WY\">Wyoming</option>\n                            </select>\n                        </div>\n                        <div class=\"col-md-2\">\n                        <input type=\"number\"\n                                   class=\"form-control\" \n                                   id=\"zipId\" \n                                   placeholder=\"Zip Code\"\n                                   [(ngModel)]=\"customer.zip\"\n                                   name=\"zip\">\n                        </div>\n                    </div>\n                </div>\n-->\n                <div class=\"form-group\">\n                    <div class=\"col-md-4 col-md-offset-2\">\n                        <span>\n                            <button class=\"btn btn-primary\"\n                                    type=\"submit\"\n                                    [disabled]=\"!signupForm.valid\">\n                                Save\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </fieldset>\n        </form>\n    </div>\n</div>\n<br>Dirty: {{ signupForm.dirty }} \n<br>Touched: {{ signupForm.touched }}\n<br>Valid: {{ signupForm.valid }}\n<br>Value: {{ signupForm.value | json }}"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "\n  <div>\n      \n    </div>\n<h3><i>Showing product details for product: {{id}}</i></h3>\n<form [formGroup]=\"heroForm\" (ngSubmit)=\"onSubmit($event)\" novalidate>\n   <div style=\"margin-bottom: 1em\">\n    <button type=\"submit\"\n            [disabled]=\"heroForm.pristine\" class=\"btn btn-success\">Save</button> &nbsp;\n    <button type=\"reset\" (click)=\"revert()\"\n            [disabled]=\"heroForm.pristine\" class=\"btn btn-danger\">Revert</button>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"center-block\">First Name:\n      <input class=\"form-control\" formControlName=\"FirstName\">\n    </label>\n    <label class=\"center-block\">Last Name:\n      <input class=\"form-control\" formControlName=\"LastName\">\n    </label>\n    <label class=\"center-block\">Email:\n      <input class=\"form-control\" formControlName=\"Email\">\n    </label>\n    <label class=\"center-block\">UserName:\n      <input class=\"form-control\" formControlName=\"UserNameId\">\n    </label>\n    <label class=\"center-block\">UserName01:\n      <input class=\"form-control\" formControlName=\"UserName01Id\">\n    </label>\n    <label class=\"center-block\">UserName02:\n      <input class=\"form-control\" formControlName=\"UserName02Id\">\n    </label>\n  </div>\n</form>\n<p>Form value: {{ heroForm.value | json }}</p>\n<p>Form status: {{ heroForm.status | json }}</p>\n\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<p>\n  customerlist works!\n</p>\n<div class='panel panel-primary'>\n    <div class='panel-heading'>\n        {{pageTitle}}\n    </div>\n    <!-- Filter the Products   -->\n    <div class='panel-body'>\n      <!--\n        <div class='row'>\n            <div class='col-md-2'>Filter by:</div>\n            <div class='col-md-4'>\n                <input type='text' [(ngModel)]='listFilter' />\n            </div>\n        </div>\n        <div class='row' *ngIf='listFilter'>\n            <div class='col-md-6'>\n                <h3>Filtered by: {{listFilter}} </h3>\n            </div>\n        </div>\n\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\n-->\n        <div class='table-responsive'>\n            <table class='table'\n                   *ngIf='products && products.length'>\n                <thead>\n                    <tr>\n                        <th>Edit</th>\n                        <th>FirstName</th>\n                        <th>LastName</th>\n                        <th>UserName</th>\n                        <th>UserName01</th>\n                        <th>UserName02</th>\n                        <th>Email</th>\n                       </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let product of products'>\n                        <td><a [routerLink]=\"['/customeredit', product.ID]\"> {{ product.ID }}</a></td>\n                        <td>{{product.FirstName}}</td>\n                        <td>{{ product.LastName }}</td>\n                        <td>{{ product.UserNameId }}</td>\n                        <td>{{ product.UserName01Id }}</td>\n                        <td>{{ product.UserName02Id }}</td>\n                        <td>{{ product.Email }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.customerUrl = '/sites/TestDev1/_api/web/lists/GetByTitle(' + "'HelloList'" + ')/items';
        this.BAR = JSON.stringify({ "FirstName": "test1", "LastName": "test1", "Email": "test1@test.com", "__metadata": { "type": "SP.Data.HelloListListItem" } });
    }
    ProductService.prototype.updateCustomer = function (customerInfo, ID) {
        var itemURL = this.customerUrl + "(" + ID + ")";
        console.log(itemURL);
        console.log(customerInfo);
        console.log(ID);
        var currentrequestdigest = document.getElementById('__REQUESTDIGEST').value;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": currentrequestdigest,
            "content-Type": "application/json;odata=verbose",
            "If-Match": "*"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.patch(itemURL, customerInfo, options)
            .map(this.extractData)
            .do(function (data) { return console.log("Item Updated!!"); })
            .catch(this.handleError);
    };
    ProductService.prototype.getCustomers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json;odata=verbose' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.customerUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getCustomerbyId = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json;odata=verbose' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var itemURL = this.customerUrl + "(" + id + ")";
        return this.http.get(itemURL, options)
            .toPromise()
            .then(this.extractEditItemData)
            .catch(this.handleError);
    };
    ProductService.prototype.extractEditItemData = function (response) {
        console.log(response.json());
        var data = response.json();
        return data.d || {};
    };
    ProductService.prototype.updatePeoplePickerFields = function (formData) {
        var promises_array = [];
        var listOfPeoplPckrFields = ["UserNameId", "UserName01Id", "UserName02Id"];
        var keys = Object.keys(formData);
        for (var i = 0; i < keys.length; i++) {
            if (listOfPeoplPckrFields.includes(keys[i])) {
                var prop = keys[i];
                var val = formData[keys[i]];
                var p1 = this.GetUserId(formData, prop, formData[keys[i]]);
                promises_array.push(p1);
            }
        }
        return Promise.all(promises_array);
    };
    ProductService.prototype.GetUserId = function (form, property, userid) {
        var formData = form;
        var formproperty = property;
        var siteUrl = "/sites/TestDev1";
        var accountName = userid;
        accountName = encodeURIComponent(accountName);
        var userUrl = siteUrl + "/_api/web/siteusers?$select=Id,Title,LoginName,Email&$filter=Title eq '" + accountName + "'";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json;odata=verbose' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(userUrl, options)
            .toPromise()
            .then(function (response) {
            var data = response.json();
            console.log(data);
            formData[formproperty] = Number(data.d.results[0].Id);
            return Promise.resolve(formData);
        })
            .catch(this.handleError);
    };
    ProductService.prototype.extractUserId = function (response) {
        var data = response.json();
        return Promise.resolve();
    };
    ProductService.prototype.createCustomer = function (customerInfo) {
        var _this = this;
        var currentrequestdigest = document.getElementById('__REQUESTDIGEST').value;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "accept": "application/json;odata=verbose",
            "X-RequestDigest": currentrequestdigest,
            "content-Type": "application/json;odata=verbose",
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.customerUrl, customerInfo, options)
            .map(this.extractData)
            .do(function (data) { return _this.getCustomers(); })
            .catch(this.handleError);
    };
    ProductService.prototype.extractData = function (response) {
        console.log(response.json());
        var data = response.json();
        return data.d.results || {};
    };
    ProductService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_complete__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiAutoCompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * show a selected date in monthly calendar
 * Each filteredList item has the following property in addition to data itself
 *   1. displayValue as string e.g. Allen Kim
 *   2. dataValue as any e.g.
 */
var NguiAutoCompleteComponent = (function () {
    /**
     * constructor
     */
    function NguiAutoCompleteComponent(elementRef, autoComplete) {
        var _this = this;
        this.autoComplete = autoComplete;
        this.minChars = 0;
        this.loadingText = "Loading";
        this.showInputTag = true;
        this.showDropdownOnInit = false;
        this.tabToSelect = true;
        this.matchFormatted = false;
        this.valueSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.dropdownVisible = false;
        this.isLoading = false;
        this.filteredList = [];
        this.minCharsEntered = false;
        this.itemIndex = 0;
        this.reloadListInDelay = function (evt) {
            var delayMs = _this.isSrcArr() ? 10 : 500;
            var keyword = evt.target.value;
            _this.delay(function () { return _this.reloadList(keyword); }, delayMs);
        };
        this.inputElKeyHandler = function (evt) {
            var totalNumItem = _this.filteredList.length;
            switch (evt.keyCode) {
                case 27:
                    break;
                case 38:
                    _this.itemIndex = (totalNumItem + _this.itemIndex - 1) % totalNumItem;
                    _this.scrollToView(_this.itemIndex);
                    break;
                case 40:
                    _this.dropdownVisible = true;
                    _this.itemIndex = (totalNumItem + _this.itemIndex + 1) % totalNumItem;
                    _this.scrollToView(_this.itemIndex);
                    break;
                case 13:
                    if (_this.filteredList.length > 0) {
                        _this.selectOne(_this.filteredList[_this.itemIndex]);
                    }
                    evt.preventDefault();
                    break;
                case 9:
                    if (_this.tabToSelect && _this.filteredList.length > 0) {
                        _this.selectOne(_this.filteredList[_this.itemIndex]);
                    }
                    break;
            }
        };
        this.delay = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();
        this.el = elementRef.nativeElement;
    }
    NguiAutoCompleteComponent.prototype.isSrcArr = function () {
        return (this.source.constructor.name === "Array");
    };
    /**
     * user enters into input el, shows list to select, then select one
     */
    NguiAutoCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autoComplete.source = this.source;
        this.autoComplete.pathToData = this.pathToData;
        this.autoComplete.listFormatter = this.listFormatter;
        setTimeout(function () {
            if (_this.autoCompleteInput) {
                _this.autoCompleteInput.nativeElement.focus();
            }
            if (_this.showDropdownOnInit) {
                _this.showDropdownList({ target: { value: '' } });
            }
        });
    };
    NguiAutoCompleteComponent.prototype.showDropdownList = function (event) {
        this.dropdownVisible = true;
        this.reloadList(event.target.value);
    };
    NguiAutoCompleteComponent.prototype.hideDropdownList = function () {
        this.dropdownVisible = false;
    };
    NguiAutoCompleteComponent.prototype.findItemFromSelectValue = function (selectText) {
        var matchingItems = this.filteredList
            .filter(function (item) { return ('' + item) === selectText; });
        return matchingItems.length ? matchingItems[0] : null;
    };
    NguiAutoCompleteComponent.prototype.reloadList = function (keyword) {
        var _this = this;
        this.filteredList = [];
        if (keyword.length < (this.minChars || 0)) {
            this.minCharsEntered = false;
            return;
        }
        else {
            this.minCharsEntered = true;
        }
        if (this.isSrcArr()) {
            this.isLoading = false;
            this.filteredList = this.autoComplete.filter(this.source, keyword, this.matchFormatted);
            if (this.maxNumList) {
                this.filteredList = this.filteredList.slice(0, this.maxNumList);
            }
        }
        else {
            // remote source
            this.isLoading = true;
            if (typeof this.source === "function") {
                // custom function that returns observable
                this.source(keyword).subscribe(function (resp) {
                    if (_this.pathToData) {
                        var paths = _this.pathToData.split(".");
                        paths.forEach(function (prop) { return resp = resp[prop]; });
                    }
                    _this.filteredList = resp;
                    if (_this.maxNumList) {
                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
                    }
                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
                );
            }
            else {
                // remote source
                this.autoComplete.getRemoteData(keyword).subscribe(function (resp) {
                    _this.filteredList = resp;
                    if (_this.maxNumList) {
                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
                    }
                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
                );
            }
        }
    };
    NguiAutoCompleteComponent.prototype.selectOne = function (data) {
        console.log('selectOne');
        console.log(data);
        /* this.autoComplete.GetUserId(data.Key)
             .subscribe(users =>  console.log("subscribe users"),
                                error => console.log('testing users error '));
                                
         this.autoComplete.GetUserId(data.DisplayText)
             .subscribe(userID =>  this.valueSelected.emit(userID),
                                error => console.log('testing users error '));
                                */
        // this.autoComplete.GetUserId(data.Key);
        //  console.log(data.key);
        //  console.log(userID);
        // this.autoComplete.GetUserId(data.DisplayText);
        //this.valueSelected.emit(data);
        this.valueSelected.emit(data.DisplayText);
    };
    ;
    NguiAutoCompleteComponent.prototype.scrollToView = function (index) {
        var container = this.autoCompleteContainer.nativeElement;
        var ul = container.querySelector('ul');
        var li = ul.querySelector('li'); //just sample the first li to get height
        var liHeight = li.offsetHeight;
        var scrollTop = ul.scrollTop;
        var viewport = scrollTop + ul.offsetHeight;
        var scrollOffset = liHeight * index;
        if (scrollOffset < scrollTop || (scrollOffset + liHeight) > viewport) {
            ul.scrollTop = scrollOffset;
        }
    };
    Object.defineProperty(NguiAutoCompleteComponent.prototype, "emptyList", {
        get: function () {
            return !(this.isLoading ||
                (this.minCharsEntered && !this.isLoading && !this.filteredList.length) ||
                (this.filteredList.length));
        },
        enumerable: true,
        configurable: true
    });
    return NguiAutoCompleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("list-formatter"),
    __metadata("design:type", Function)
], NguiAutoCompleteComponent.prototype, "listFormatter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("source"),
    __metadata("design:type", Object)
], NguiAutoCompleteComponent.prototype, "source", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("path-to-data"),
    __metadata("design:type", String)
], NguiAutoCompleteComponent.prototype, "pathToData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("min-chars"),
    __metadata("design:type", Number)
], NguiAutoCompleteComponent.prototype, "minChars", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("placeholder"),
    __metadata("design:type", String)
], NguiAutoCompleteComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("blank-option-text"),
    __metadata("design:type", String)
], NguiAutoCompleteComponent.prototype, "blankOptionText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("no-match-found-text"),
    __metadata("design:type", String)
], NguiAutoCompleteComponent.prototype, "noMatchFoundText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("accept-user-input"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteComponent.prototype, "acceptUserInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("loading-text"),
    __metadata("design:type", String)
], NguiAutoCompleteComponent.prototype, "loadingText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("max-num-list"),
    __metadata("design:type", Number)
], NguiAutoCompleteComponent.prototype, "maxNumList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("show-input-tag"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteComponent.prototype, "showInputTag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("show-dropdown-on-init"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteComponent.prototype, "showDropdownOnInit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("tab-to-select"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteComponent.prototype, "tabToSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("match-formatted"),
    __metadata("design:type", Boolean)
], NguiAutoCompleteComponent.prototype, "matchFormatted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", Object)
], NguiAutoCompleteComponent.prototype, "valueSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('autoCompleteInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], NguiAutoCompleteComponent.prototype, "autoCompleteInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('autoCompleteContainer'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _b || Object)
], NguiAutoCompleteComponent.prototype, "autoCompleteContainer", void 0);
NguiAutoCompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: "ngui-auto-complete",
        template: "\n  <div #autoCompleteContainer class=\"ngui-auto-complete\">\n    <!-- keyword input -->\n    <input *ngIf=\"showInputTag\"\n           #autoCompleteInput class=\"keyword\"\n           placeholder=\"{{placeholder}}\"\n           (focus)=\"showDropdownList($event)\"\n           (blur)=\"hideDropdownList()\"\n           (keydown)=\"inputElKeyHandler($event)\"\n           (input)=\"reloadListInDelay($event)\"\n           [(ngModel)]=\"keyword\" />\n\n    <!-- dropdown that user can select -->\n    <ul *ngIf=\"dropdownVisible\" [class.empty]=\"emptyList\">\n      <li *ngIf=\"isLoading\" class=\"loading\">{{loadingText}}</li>\n      <li *ngIf=\"minCharsEntered && !isLoading && !filteredList.length\"\n           (mousedown)=\"selectOne('')\"\n           class=\"no-match-found\">{{noMatchFoundText || 'No Result Found'}}</li>\n      <li *ngIf=\"blankOptionText && filteredList.length\"\n          (mousedown)=\"selectOne('')\"\n          class=\"blank-item\">{{blankOptionText}}</li>\n      <li class=\"item\"\n          *ngFor=\"let item of filteredList; let i=index\"\n          (mousedown)=\"selectOne(item)\"\n          [ngClass]=\"{selected: i === itemIndex}\"\n          [innerHtml]=\"autoComplete.getFormattedListItem(item)\">\n      </li>\n    </ul>\n\n  </div>",
        providers: [__WEBPACK_IMPORTED_MODULE_1__auto_complete__["a" /* NguiAutoComplete */]],
        styles: ["\n  @keyframes slideDown {\n    0% {\n      transform:  translateY(-10px);\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  }\n  .ngui-auto-complete {\n    background-color: transparent;\n  }\n  .ngui-auto-complete > input {\n    outline: none;\n    border: 0;\n    padding: 2px; \n    box-sizing: border-box;\n    background-clip: content-box;\n  }\n\n  .ngui-auto-complete > ul {\n    background-color: #fff;\n    margin: 0;\n    width : 100%;\n    overflow-y: auto;\n    list-style-type: none;\n    padding: 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    animation: slideDown 0.1s;\n  }\n  .ngui-auto-complete > ul.empty {\n    display: none;\n  }\n\n  .ngui-auto-complete > ul li {\n    padding: 2px 5px;\n    border-bottom: 1px solid #eee;\n  }\n\n  .ngui-auto-complete > ul li.selected {\n    background-color: #ccc;\n  }\n\n  .ngui-auto-complete > ul li:last-child {\n    border-bottom: none;\n  }\n\n  .ngui-auto-complete > ul li:hover {\n    background-color: #ccc;\n  }"
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__auto_complete__["a" /* NguiAutoComplete */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auto_complete__["a" /* NguiAutoComplete */]) === "function" && _d || Object])
], NguiAutoCompleteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auto-complete.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiAutoComplete; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * provides auto-complete related utility functions
 */
var NguiAutoComplete = (function () {
    function NguiAutoComplete(http) {
        this.http = http;
        // ...
    }
    NguiAutoComplete.prototype.filter = function (list, keyword, matchFormatted) {
        var _this = this;
        return list.filter(function (el) {
            var objStr = matchFormatted ? _this.getFormattedListItem(el).toLowerCase() : JSON.stringify(el).toLowerCase();
            keyword = keyword.toLowerCase();
            return objStr.indexOf(keyword) !== -1;
        });
    };
    NguiAutoComplete.prototype.GetUserId = function (data) {
        console.log("GetUserId");
        console.log(data);
        /// change this prefix according to the environment. 
        /// In below sample, windows authentication is considered.
        var prefix = "i: 0#.f|membership|";
        /// get the site url
        var siteUrl = "/sites/TestDev1";
        /// add prefix, this needs to be changed based on scenario
        //let accountName = prefix + data;
        var accountName = data;
        console.log(accountName);
        accountName = encodeURIComponent(accountName);
        console.log(accountName);
        console.log("data");
        // let userUrl = siteUrl+"/_api/web/siteusers(@v)?@v='"+ accountName +"'";
        var userUrl = siteUrl + "/_api/web/siteusers?$select=Id,Title,LoginName,Email&$filter=Title eq '" + accountName + "'";
        console.log(userUrl);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json;odata=verbose' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(userUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NguiAutoComplete.prototype.extractData = function (response) {
        console.log(response);
        var data = response.json();
        console.log("Body");
        console.log(data);
        console.log(data.d.results[0].Id);
        return data.d.results[0].Id || {};
    };
    NguiAutoComplete.prototype.handleError = function (error) {
        console.log("error");
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error');
    };
    NguiAutoComplete.prototype.getFormattedListItem = function (data) {
        var formatted;
        var formatter = this.listFormatter || '(id) value';
        if (typeof formatter === 'function') {
            formatted = formatter.apply(this, [data]);
        }
        else if (typeof data !== 'object') {
            formatted = data;
        }
        else if (typeof formatter === 'string') {
            formatted = formatter;
            var matches = formatter.match(/[a-zA-Z0-9_\$]+/g);
            if (matches && typeof data !== 'string') {
                matches.forEach(function (key) {
                    formatted = formatted.replace(key, data[key]);
                });
            }
        }
        return formatted;
    };
    /**
     * return remote data from the given source and options, and data path
     */
    NguiAutoComplete.prototype.getRemoteData = function (keyword) {
        if (typeof this.source !== 'string') {
            throw "Invalid type of source, must be a string. e.g. http://www.google.com?q=:my_keyword";
        }
        else if (!this.http) {
            throw "Http is required.";
        }
        /*
        let matches = this.source.match(/:[a-zA-Z_]+/);
        if (matches === null) {
          throw "Replacement word is missing.";
        }
    
        let replacementWord = matches[0];
        let url = this.source.replace(replacementWord, keyword);
        return this.http.get(url)
          .map(resp => resp.json())
          .map(resp => {
            let list = resp.data || resp;
            console.log(resp);
            if (this.pathToData) {
              let paths = this.pathToData.split(".");
              paths.forEach(prop => list = list[prop]);
            }
    
            return list;
          });
          
         */
        var url = this.source;
        var currentrequestdigest = document.getElementById('__REQUESTDIGEST').value;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "accept": "application/json;odata=verbose",
            "X-RequestDigest": currentrequestdigest,
            "content-Type": "application/json;odata=verbose",
        });
        var data = JSON.stringify({
            'queryParams': {
                '__metadata': {
                    'type': 'SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters'
                },
                'AllowEmailAddresses': true,
                'AllowMultipleEntities': false,
                'AllUrlZones': false,
                'MaximumEntitySuggestions': 50,
                'PrincipalSource': 15,
                'PrincipalType': 15,
                'QueryString': keyword
                //'Required':false,
                //'SharePointGroupID':null,
                //'UrlZone':null,
                //'UrlZoneSpecified':false,
                //'Web':null,
                //'WebApplicationID':null
            }
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (resp) { return resp.json(); })
            .map(function (resp) {
            var list = JSON.parse(resp.d.ClientPeoplePickerSearchUser) || resp;
            console.log(resp);
            /*
            console.log(this.pathToData);
            if(this.pathToData) {
              let paths = this.pathToData.split(".");
               console.log(paths);
              paths.forEach(prop => list = list[prop]);
            }
           */
            console.log(list);
            return list;
        });
        /* end */
    };
    return NguiAutoComplete;
}());
NguiAutoComplete = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], NguiAutoComplete);

var _a;
//# sourceMappingURL=auto-complete.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryStorage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MemoryStorage = (function () {
    function MemoryStorage() {
        this.data = {};
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () { return Object.keys(this.data).length; },
        enumerable: true,
        configurable: true
    });
    MemoryStorage.prototype.getItem = function (key) { return this.data[key]; };
    MemoryStorage.prototype.setItem = function (key, value) { this.data[key] = value; };
    MemoryStorage.prototype.removeItem = function (key) { delete this.data[key]; };
    MemoryStorage.prototype.clear = function () { this.data = {}; };
    MemoryStorage.prototype.key = function (num) { return Object.keys(this.data)[num]; };
    return MemoryStorage;
}());
MemoryStorage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], MemoryStorage);

//# sourceMappingURL=memory-storage.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomereditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomereditComponent = (function () {
    function CustomereditComponent(route, productService, fb) {
        this.route = route;
        this.productService = productService;
        this.fb = fb;
        this.createForm();
    }
    CustomereditComponent.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            FirstName: [''],
            LastName: [''],
            Email: [''],
            UserNameId: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].nullValidator],
            UserName01Id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].nullValidator],
            UserName02Id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].nullValidator]
        });
    };
    CustomereditComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        var formModel = this.heroForm.value;
        console.log(formModel);
        var json_string = JSON.stringify(formModel);
        var json_obj = JSON.parse(json_string);
        json_obj['__metadata'] = { "type": "SP.Data.HelloListListItem" };
        json_string = JSON.stringify(json_obj);
        console.log(json_string);
        this.productService.updateCustomer(json_string, this.id)
            .subscribe(function (products) { return console.log("completed"); }, function (error) { return console.log('testing error updateCustomers'); });
    };
    CustomereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            console.log("customer list ngonit");
            _this.productService.getCustomerbyId(_this.id)
                .then(function (product) {
                console.log(product);
                _this.product = product;
                console.log(product.ID);
                console.log(product.FirstName);
                console.log(_this.product);
                _this.heroForm.patchValue({
                    FirstName: product.FirstName,
                    LastName: product.LastName,
                    Email: product.Email,
                    UserNameId: product.UserNameId,
                    UserName01Id: product.UserName01Id,
                    UserName02Id: product.UserName02Id
                });
            }, function (error) { return _this.errorMessage = error; });
            // In a real app: dispatch action to load the details here.
        });
    };
    CustomereditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return CustomereditComponent;
}());
CustomereditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-customeredit',
        template: __webpack_require__(234),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* FormBuilder */]) === "function" && _c || Object])
], CustomereditComponent);

var _a, _b, _c;
//# sourceMappingURL=customeredit.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerlistComponent = (function () {
    function CustomerlistComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    CustomerlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("customer list ngonit");
        this.productService.getCustomers()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    return CustomerlistComponent;
}());
CustomerlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-customerlist',
        template: __webpack_require__(235),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CustomerlistComponent);

var _a, _b;
//# sourceMappingURL=customerlist.component.js.map

/***/ })

},[498]);
//# sourceMappingURL=main.bundle.js.map