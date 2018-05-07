customerApp.service('customerService', function ($http) {

    var urlBase = "http://localhost:58535/api/";

    this.getAllCustomers = function () {
        return $http.get(urlBase + "Customers");
    }

    this.getAllOccupations = function () {
        return $http.get(urlBase + "Occupations");
    }

    this.getCustomer = function (customerId) {
        return $http.get(urlBase + "Customers/" + customerId);
    }

    this.addCustomer = function (customer) {
        var request = $http({
            method: 'post',
            url: urlBase + 'Customers/Add',
            data: customer
        });

        return request;
    }

    this.updateCustomer = function (customer) {
        var request = $http({
            method: 'put',
            url: urlBase + 'Customers/' + customer.Id,
            data: customer
        });

        return request;
    }

    this.deleteCustomer = function (customerId) {
        return $http.delete(urlBase + 'Customers/' + customerId)
    }
});