var app = angular.module('simpleSignupFormDirective', [])
    .directive('optIn', function(){
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: '/templates/opt-in.html'
        }
    });