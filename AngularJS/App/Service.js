customerApp.service('customerService', function ($http) {

    var urlBase = "http://localhost:0000/api";

    this.getAllCustomers = function () {
        return $http.get(urlBase + "/Customer/GetAllCustomers");
    }

    this.addCustomer = function (customer) {
        var request = $http({
            method: 'post',
            url: urlBase + '/Customer/Add',
            data: customer
        });

        return request;
    }

    this.updateCustomer = function (customer) {
        var request = $http({
            method: 'post',
            url: urlBase + '/Customer/Update',
            data: customer
        });

        return request;
    }

    this.deleteCustomer = function (customerId) {
        return $http.post(urlBase + '/Customer/Delete/' + customerId)
    }
});