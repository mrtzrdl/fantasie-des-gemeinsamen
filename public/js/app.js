var app = angular.module('FantasieApp', ['ngResource']);

app.controller('MainCtrl', function(  $scope,
                                      $location,
                                      SnippetService){




  $scope.admin = false;
  $scope.resolved = false;
  $scope.limit = -1;
  $scope.snippets = SnippetService.query();

  $scope.snippet  = new SnippetService();


  $scope.addSnippet = function(){
    $scope.snippet.$save(function(){
      $scope.snippets.push($scope.snippet);
      $scope.resolved = true;
      $scope.limit = -10000;
    });
  }

  $scope.login = function(){
    $scope.admin = true;
    $scope.limit = -1000;
  }

  $scope.removeSnippet = function(snippet){
    //$scope.snippets[i].delete();
    console.log(snippet);

    //snippet.$delete();
    SnippetService.delete(snippet);

    //SnippetService.$delete({ id: $scope.snippets[i]._id });

    //$scope.snippets.splice(i,1);
  }

});
