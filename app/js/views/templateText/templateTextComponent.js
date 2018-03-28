(function(){
'use strict';

angular.module('chitchat.chatbox')
    .controller('TextTemplateController', [
    function(){
        
    }])
    .component('templateText', {
        templateUrl : 'js/views/templateText/templateText.html',
        controller  : 'TextTemplateController as textCtrl',
        bindings: {
            messageData: '<'
        }
    })
})();