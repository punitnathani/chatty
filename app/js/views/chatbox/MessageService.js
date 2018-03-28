(function(){
'use strict';
angular.module('chitchat.chatbox')
    .factory('MessageService', [ '$q', '$http',
    function($q, $http){

        var getMessages = function() {
            var defer = $q.defer();
            $http.get('assets/messages.json')
                .then(function(response){
                    console.log('Success!');
                    defer.resolve(response.data);
                }, function(error){
                    console.log('Error');
                    defer.reject(error);
                })
            return defer.promise;
        }

        return {
            getMessages : getMessages
        }
    }]);
})();