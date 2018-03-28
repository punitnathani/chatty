(function(){
'use strict';

angular.module('chitchat.chatbox')
    .controller('ImageTemplateController', [
    function(){
        
    }])
    .component('templateImage', {
        templateUrl : 'js/views/templateImage/templateImage.html',
        controller  : 'ImageTemplateController as imageCtrl',
        bindings: {
            messageData: '<'
        }
    })
})();