'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function(AccountStore) {

    var vm = this;
    vm.account = AccountStore.getAccount();

    vm.saveAccount = function(account) {
        AccountStore.saveAccount(account);
		console.log(account);
    };
	
    vm.reset = function () {
        if (AccountStore.removeAccount()){
            vm.account = {};       
        }
	}
	
	vm.isSave = function(){
		let account = AccountStore.getAccount();
		return Object.keys(account).length != 0;
	}

});
