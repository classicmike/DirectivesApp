angular.module('editableFormApp', [])
    .directive('makeEditable', function(){
        return {
            restrict: "E",
            templateUrl: 'editable-form.html',
            scope: true,
            transclude: true,
            link: function(scope, element, attrs){

                //editable text
                scope.editable= attrs['rendereditable'];

                scope.toggleEditable = function(){
                    scope.editable = scope.editable ? false : true;
                }

            }
        };
    });