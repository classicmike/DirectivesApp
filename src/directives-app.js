var app = angular.module('myApp', [])
    .directive('yoYo', function(){
        return {
            restrict: 'E',
            //transclude puts the text inside the directive and inserts it in the rendered ng-transclude tag of the template.
            transclude: true,
            template: '<div class="yo-yo">Yo <span ng-transclude></span>!</div>',
            replace: true
        }
    });