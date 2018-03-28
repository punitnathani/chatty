(function(){
'use strict';

angular.module('chitchat.chatbox')
    .controller('ButtonTemplateController', [
    function(){
        
    }])
    .component('templateButton', {
        templateUrl : 'js/views/templateButton/templateButton.html',
        controller  : 'ButtonTemplateController as buttonCtrl',
        bindings: {
            messageData: '<'
        }
    })
})();