System.register(['angular2/core', './question.service', '../calculator/calculator.component'], function(exports_1, context_1) {
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
    var core_1, question_service_1, calculator_component_1;
    var questionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (question_service_1_1) {
                question_service_1 = question_service_1_1;
            },
            function (calculator_component_1_1) {
                calculator_component_1 = calculator_component_1_1;
            }],
        execute: function() {
            questionComponent = (function () {
                function questionComponent(_questionService) {
                    this._questionService = _questionService;
                    this.ques = "";
                    this.answer = [];
                    this.booleanSample = false;
                }
                questionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    alert("Welcome");
                    this._questionService.getQuestions("Types").subscribe(function (options) { return _this.options = options[0].options; }, function (error) { return _this.booleanSample = true; });
                    this._questionService.getQuestions("Types").subscribe(function (question) { return _this.ques = question[0].ques; }, function (error) { return _this.booleanSample = true; });
                };
                questionComponent.prototype.onChange = function (filename) {
                    var _this = this;
                    this.answer.push(filename);
                    this._questionService.getQuestions(filename).subscribe(function (options) { _this.options = options[0].options; _this.ques = options[0].ques; }, function (error) { return _this.algorithm(); });
                };
                questionComponent.prototype.algorithm = function () {
                    if (this.answer[2] == "SUV") {
                        this.mul = 2;
                    }
                    else {
                        this.mul = 5;
                    }
                    this.ans = (1000 * 2 * this.mul);
                    this.booleanSample = true;
                };
                questionComponent = __decorate([
                    core_1.Component({
                        selector: 'app-ques',
                        templateUrl: 'app/questions/questions.component.html',
                        directives: [calculator_component_1.calculatorComponent]
                    }), 
                    __metadata('design:paramtypes', [question_service_1.questionService])
                ], questionComponent);
                return questionComponent;
            }());
            exports_1("questionComponent", questionComponent);
        }
    }
});
//# sourceMappingURL=questions.component.js.map