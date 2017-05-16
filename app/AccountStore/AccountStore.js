'use strict';

angular
    .module('myApp')
    .factory('AccountStore', function() {

        let account = {};
        return {
            getAccount()  {
                return account;
            },
            saveAccount(item) {
                account = item;
                return true;
            },
            removeAccount() {
                account = {};
                return true;
            }
        };
})