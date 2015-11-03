angular.module('myApp', [])
    .run(function($rootScope){
        $rootScope.alert = function(){
            alert("You've been alerted!");
        }
    })
    .directive('myClick', function(){
        return function($scope, element, attrs){
            element.on('click', function(){
                $scope.$apply(function(){
                    //fire the onClick function
                    $scope.$eval(attrs.myClick);
                });
            });
        }
    });