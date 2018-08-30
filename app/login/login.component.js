System.register(['angular2/core', './login.service', '../questions/questions.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_service_1, questions_component_1;
    var loginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (questions_component_1_1) {
                questions_component_1 = questions_component_1_1;
            }],
        execute: function() {
            loginComponent = (function () {
                function loginComponent(_loginService) {
                    this._loginService = _loginService;
                    this.validate = true;
                }
                loginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._loginService.getLogins().subscribe(function (login) { return _this.logins = login; }, function (error) { return _this.errorMessage = error; });
                };
                loginComponent.prototype.onLogin = function () {
                    for (var i = 0; i < this.logins.length; i++) {
                        if ((this.username == this.logins[i].username) && (this.password == this.logins[i].password)) {
                            console.log(this.username);
                            this.validate = !this.validate;
                            console.log(this.validate);
                        }
                    }
                };
                loginComponent = __decorate([
                    core_1.Component({
                        selector: 'app-login',
                        templateUrl: 'app/login/login.component.html',
                        directives: [questions_component_1.questionComponent]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.loginService])
                ], loginComponent);
                return loginComponent;
            }());
            exports_1("loginComponent", loginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map