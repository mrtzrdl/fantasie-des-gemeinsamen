(function () {
    'use strict';

    angular
        .module('FantasieApp')
        .factory('SnippetService', function($resource){

          return $resource('http://localhost:8080/api/snippets/:id',
            {id:'@_id'},
            {
              update: {
                method: 'PUT'
            }
          });

        });
})();
