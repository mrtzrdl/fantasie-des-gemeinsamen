(function () {
    'use strict';

    angular
        .module('FantasieApp')
        .factory('SnippetService', function($resource){

          return $resource('http://fantasie-des-gemeinsamen.de/api/snippets/:id',
            {id:'@_id'},
            {
              update: {
                method: 'PUT'
            }
          });

        });
})();
