(function(){
'use strict';

angular.module('chitchat.chatbox', [])
    .controller('ChatboxController', ['MessageService',
    function(MessageService){
        var vm = this;
        vm.conversation = "Loading...";

        MessageService.getMessages()
            .then(function(data){
                vm.conversation = data;
            }, function(error){
                vm.conversation = error;
            })
    }])
    .component('chatbox', {
        templateUrl : 'js/views/chatbox/chatbox.html',
        controller  : 'ChatboxController as chatboxCtrl'
    })
})();