customerApp.controller('CustomerController', function ($scope, customerService) {
    
    loadCustomers();
    loadOccupations();

    function loadCustomers() {
        var listCustomers = customerService.getAllCustomers();

        listCustomers.then(function (d) {
            $scope.Customers = d.data;
        });
    }

    function loadOccupations() {
        var listOccupations = customerService.getAllOccupations();

        listOccupations.then(function (d) {
            $scope.Occupations = d.data;
        });
    }

    $scope.addCustomer = function () {
        var customer = {
            id: $scope.id,
            name: $scope.name,
            lastName: $scope.lastName,
            cpf: $scope.cpf,
            birthday: $scope.birthday,
            age: $scope.age,
            occupationId: $scope.selectedOption.Id
        };

        var addInfos = customerService.addCustomer(customer);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                alert("Cliente cadastrado com sucesso");

                $scope.clearData();
            }

            loadCustomers();
        });
    }

    $scope.clearData = function () {
        $scope.id = '';
        $scope.name = '';
        $scope.lastName = '';
        $scope.cpf = '';
        $scope.birthday = '';
        $scope.age = '';
        $scope.occupationId = '';
    };

    $scope.updateCustomerById = function (customer) {
        $scope.UpdatedId = customer.Id;
        $scope.UpdatedName = customer.Name;
        $scope.UpdatedLastName = customer.LastName;
        $scope.UpdatedCPF = customer.CPF;
        $scope.UpdatedBirthday = customer.Birthday;
        $scope.UpdatedAge = customer.Age;
        $scope.UpdatedOccupationId = customer.OccupationId;
    }

    $scope.updateCustomer = function () {
        var customer = {
            Id: $scope.UpdatedId,
            Name: $scope.UpdatedName,
            LastName: $scope.UpdatedLastName,
            CPF: $scope.UpdatedCPF,
            Birthday: $scope.UpdatedBirthday,
            Age: $scope.UpdatedAge,
            OccupationId: $scope.selectedOption.Id
        };

        var updateInfos = customerService.updateCustomer(customer);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                alert("Cliente atualizado com sucesso");
                $scope.clearUpdatedData();
            }

            loadCustomers();
        });

    }

    $scope.clearUpdatedData = function () {
        $scope.UpdatedId = '';
        $scope.UpdatedName = '';
        $scope.UpdatedLastName = '';
        $scope.UpdatedCPF = '';
        $scope.UpdatedBirthday = '';
        $scope.UpdatedAge = '';
        $scope.UpdatedOccupationId = '';
    }

    $scope.deleteCustomer = function () {
        var deleteInfos = customerService.deleteCustomer($scope.UpdatedId);
        deleteInfos.then(function (d) {
            if (d.data.success === true) {
                alert("Cliente excluído com sucesso");
            }

            loadCustomers();
        });
    }

    $scope.deleteCustomerById = function (customer) {
        $scope.UpdatedId = customer.Id;
        $scope.UpdatedName = customer.Name;
        $scope.UpdatedLastName = customer.LastName;
    }
});

customerApp.controller('CustomerDetailsController', function ($scope, customerService, $routeParams) {
    loadCustomer();

    function loadCustomer() {
        var customer = customerService.getCustomer($routeParams.id);

        customer.then(function (d) {
            $scope.Customer = d.data;
        });
    }
});