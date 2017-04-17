webpackJsonp([1,4],{

/***/ 100:
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                    <li><a [routerLink]=\"['/productEdit/0']\">Add Product</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        Sign Up!\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\"\r\n              novalidate\r\n              (ngSubmit)=\"save(signupForm)\"\r\n              #signupForm=\"ngForm\">\r\n            <fieldset>\r\n                <div class=\"form-group\"\r\n                    [ngClass]=\"{'has-error': (firstNameVar.touched || firstNameVar.dirty) && !firstNameVar.valid }\">\r\n                    <label class=\"col-md-2 control-label\" \r\n                           for=\"firstNameId\">First Name</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" \r\n                               id=\"firstNameId\" \r\n                               type=\"text\" \r\n                               placeholder=\"First Name (required)\" \r\n                               required \r\n                               minlength=\"3\"\r\n                               [(ngModel)]=customer.FirstName\r\n                               name=\"FirstName\"\r\n                               #firstNameVar=\"ngModel\" />\r\n                        <span class=\"help-block\" *ngIf=\"(firstNameVar.touched || firstNameVar.dirty) && firstNameVar.errors\">\r\n                            <span *ngIf=\"firstNameVar.errors.required\">\r\n                                Please enter your first name.\r\n                            </span>\r\n                            <span *ngIf=\"firstNameVar.errors.minlength\">\r\n                                The first name must be longer than 3 characters.\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\"\r\n                    [ngClass]=\"{'has-error': (lastNameVar.touched || lastNameVar.dirty) && !lastNameVar.valid }\">\r\n                    <label class=\"col-md-2 control-label\" \r\n                        for=\"lastNameId\">Last Name</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" \r\n                               id=\"lastNameId\" \r\n                               type=\"text\" \r\n                               placeholder=\"Last Name (required)\" \r\n                               required \r\n                               maxlength=\"50\"\r\n                               [(ngModel)]=\"customer.LastName\"\r\n                               name=\"LastName\"\r\n                               #lastNameVar=\"ngModel\" />\r\n                        <span class=\"help-block\" *ngIf=\"(lastNameVar.touched || lastNameVar.dirty) && lastNameVar.errors\">\r\n                            <span *ngIf=\"lastNameVar.errors.required\">\r\n                                Please enter your last name.\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n               <div class=\"form-group\"\r\n                    [ngClass]=\"{'has-error': (emailVar.touched || emailVar.dirty) && !emailVar.valid }\">\r\n                    <label class=\"col-md-2 control-label\" \r\n                        for=\"emailId\">Email</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" \r\n                               id=\"emailId\" \r\n                               type=\"text\" \r\n                               placeholder=\"Email (required)\" \r\n                               required\r\n                               pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\"\r\n                               [(ngModel)]=\"customer.Email\"\r\n                               name=\"Email\"\r\n                               #emailVar=\"ngModel\" />\r\n                        <span class=\"help-block\" *ngIf=\"(emailVar.touched || emailVar.dirty) && emailVar.errors\">\r\n                            <span *ngIf=\"emailVar.errors.required\">\r\n                                Please enter your email address.\r\n                            </span>\r\n                            <span *ngIf=\"emailVar.errors.pattern\">\r\n                                Please enter a valid email address.\r\n                            </span>\r\n\r\n                            <!-- This one does not work -->\r\n                            <span *ngIf=\"emailVar.errors.email\">\r\n                                Please enter a valid email address.\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n               \r\n                <!--\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-1 col-md-8 checkbox\" >\r\n                        <label>\r\n                            <input id=\"sendCatalogId\"\r\n                                   type=\"checkbox\"\r\n                                   [(ngModel)]=\"customer.sendCatalog\"\r\n                                   name=\"sendCatalog\" >\r\n                            Send me your catalog\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"customer.sendCatalog\">\r\n                    <div class=\"form-group\" >\r\n                        <label class=\"col-md-2 control-label\">Address Type</label>\r\n                        <div class=\"col-md-8\">\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" id=\"addressType1Id\" value=\"home\"\r\n                                           [(ngModel)]=\"customer.addressType\"\r\n                                           name=\"addressType\">Home\r\n                                </label>\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" id=\"addressType1Id\" value=\"work\"\r\n                                           [(ngModel)]=\"customer.addressType\"\r\n                                           name=\"addressType\">Work\r\n                                </label>\r\n                                <label class=\"radio-inline\">\r\n                                    <input type=\"radio\" id=\"addressType1Id\" value=\"other\"\r\n                                           [(ngModel)]=\"customer.addressType\"\r\n                                           name=\"addressType\">Other\r\n                                </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-2 control-label\" \r\n                            for=\"street1Id\">Street Address 1</label>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" \r\n                                   class=\"form-control\" \r\n                                   id=\"street1Id\" \r\n                                   placeholder=\"Street address\"\r\n                                   [(ngModel)]=\"customer.street1\"\r\n                                   name=\"street1\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-2 control-label\" \r\n                            for=\"street2Id\">Street Address 2</label>\r\n                        <div class=\"col-md-8\">\r\n                            <input type=\"text\" \r\n                                   class=\"form-control\" \r\n                                   id=\"street2Id\"\r\n                                   placeholder=\"Street address (second line)\"\r\n                                   [(ngModel)]=\"customer.street2\"\r\n                                   name=\"street2\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-2 control-label\" \r\n                            for=\"cityId\">City, State, Zip Code</label>\r\n                        <div class=\"col-md-3\">\r\n                            <input type=\"text\" \r\n                                   class=\"form-control\" \r\n                                   id=\"cityId\" \r\n                                   placeholder=\"City\"\r\n                                   [(ngModel)]=\"customer.city\"\r\n                                   name=\"city\">\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <select class=\"form-control\"\r\n                                    id=\"stateId\"\r\n                                    [(ngModel)]=\"customer.state\"\r\n                                    name=\"state\">\r\n                                <option value=\"\" disabled selected hidden>Select a State...</option>\r\n                                <option value=\"AL\">Alabama</option>\r\n                                <option value=\"AK\">Alaska</option>\r\n                                <option value=\"AZ\">Arizona</option>\r\n                                <option value=\"AR\">Arkansas</option>\r\n                                <option value=\"CA\">California</option>\r\n                                <option value=\"CO\">Colorado</option>\r\n                                <option value=\"WI\">Wisconsin</option>\r\n                                <option value=\"WY\">Wyoming</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                        <input type=\"number\"\r\n                                   class=\"form-control\" \r\n                                   id=\"zipId\" \r\n                                   placeholder=\"Zip Code\"\r\n                                   [(ngModel)]=\"customer.zip\"\r\n                                   name=\"zip\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n-->\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-4 col-md-offset-2\">\r\n                        <span>\r\n                            <button class=\"btn btn-primary\"\r\n                                    type=\"submit\"\r\n                                    [disabled]=\"!signupForm.valid\">\r\n                                Save\r\n                            </button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>\r\n<br>Dirty: {{ signupForm.dirty }} \r\n<br>Touched: {{ signupForm.touched }}\r\n<br>Valid: {{ signupForm.valid }}\r\n<br>Value: {{ signupForm.value | json }}"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<p>\n  customerlist works!\n</p>\n<div class='panel panel-primary'>\n    <div class='panel-heading'>\n        {{pageTitle}}\n    </div>\n    <!-- Filter the Products   -->\n    <div class='panel-body'>\n      <!--\n        <div class='row'>\n            <div class='col-md-2'>Filter by:</div>\n            <div class='col-md-4'>\n                <input type='text' [(ngModel)]='listFilter' />\n            </div>\n        </div>\n        <div class='row' *ngIf='listFilter'>\n            <div class='col-md-6'>\n                <h3>Filtered by: {{listFilter}} </h3>\n            </div>\n        </div>\n\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\n-->\n        <div class='table-responsive'>\n            <table class='table'\n                   *ngIf='products && products.length'>\n                <thead>\n                    <tr>\n                        <th>FirstName</th>\n                        <th>LastName</th>\n                        <th>Email</th>\n                       </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor='let product of products'>\n                        <td>{{product.FirstName}}</td>\n                        <td>{{ product.LastName }}</td>\n                        <td>{{ product.Email }}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
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
    ProductService.prototype.getCustomers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json;odata=verbose' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.customerUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
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
        var data = response.json();
        console.log("Body");
        console.log(data);
        return data.d.results || {};
    };
    ProductService.prototype.handleError = function (error) {
        console.log("error");
        console.error(error);
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__(33);
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
    function CustomerlistComponent(productService) {
        this.productService = productService;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-customerlist',
        template: __webpack_require__(159),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], CustomerlistComponent);

var _a;
//# sourceMappingURL=customerlist.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(157),
        styles: [__webpack_require__(154)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customer_customerlist_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_module__ = __webpack_require__(99);
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
            __WEBPACK_IMPORTED_MODULE_8__customer_customerlist_component__["a" /* CustomerlistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_6__customer_customer_component__["a" /* CustomerComponent */] },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            __WEBPACK_IMPORTED_MODULE_9__product_product_module__["a" /* ProductModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(33);
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



var CustomerComponent = (function () {
    function CustomerComponent(productService) {
        this.productService = productService;
        this.customer = new __WEBPACK_IMPORTED_MODULE_1__customer__["a" /* Customer */]();
    }
    CustomerComponent.prototype.ngOnInit = function () {
        /*
       this.productService.getCustomers()
                .subscribe(products => console.log('testing getCustomers:'),
                           error => console.log('testing error getCustomers: '));
                           */
    };
    CustomerComponent.prototype.save = function (customerForm) {
        var _this = this;
        var json_string = JSON.stringify(customerForm.value);
        var json_obj = JSON.parse(json_string);
        json_obj['__metadata'] = { "type": "SP.Data.HelloListListItem" };
        json_string = JSON.stringify(json_obj);
        console.log(json_string);
        this.productService.createCustomer(json_string)
            .subscribe(function (products) { return _this.productService.getCustomers(); }, function (error) { return console.log('testing error createCustomers: '); });
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-signup',
        template: __webpack_require__(158)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], CustomerComponent);

var _a;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer(FirstName, LastName, Email, 
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customerlist_component__ = __webpack_require__(61);
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
                { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__customer_customerlist_component__["a" /* CustomerlistComponent */] }
                // { path: 'product',component: CustomerComponent},
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProductRoutingModule);

//# sourceMappingURL=product-routing.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_routing_module__ = __webpack_require__(98);
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

/***/ })

},[196]);
//# sourceMappingURL=main.bundle.js.map