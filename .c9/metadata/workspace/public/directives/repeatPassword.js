{"filter":false,"title":"repeatPassword.js","tooltip":"/public/directives/repeatPassword.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":21,"column":5},"action":"insert","lines":["angular.module('MyApp')","  .directive('repeatPassword', function() {","    return {","      require: 'ngModel',","      link: function(scope, elem, attrs, ctrl) {","        var otherInput = elem.inheritedData(\"$formController\")[attrs.repeatPassword];","","        ctrl.$parsers.push(function(value) {","          if (value === otherInput.$viewValue) {","            ctrl.$setValidity('repeat', true);","            return value;","          }","          ctrl.$setValidity('repeat', false);","        });","","        otherInput.$parsers.push(function(value) {","          ctrl.$setValidity('repeat', value === ctrl.$viewValue);","          return value;","        });","      }","    };","  });"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":5},"end":{"row":21,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":24,"mode":"ace/mode/javascript"}},"timestamp":1427660945318,"hash":"68e232b633f3f5118ba9f94ae2f93257192f0e39"}