(function(){
'use strict';

angular.module('chitchat.chatbox')
    .controller('GenericTemplateController', [
    function(){
        
    }])
    .component('templateGeneric', {
        templateUrl : 'js/views/templateGeneric/templateGeneric.html',
        controller  : 'GenericTemplateController as genericCtrl',
        bindings: {
            messageData: '<'
        }
    })
})();