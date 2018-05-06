customerApp.controller('CustomerController', function ($scope, customerService) {
    
    loadCustomers();

    function loadCustomers() {
        var listCustomers = customerService.getAllCustomers();

        listCustomers.then(function (d) {
            $scope.Customers = d.data;
        },
            function () {
                alert("Ocorreu um erro ao tentar listar todos os Clientes");
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
            occupation: $scope.occupation
        };

        var addInfos = customerService.addCustomer(customer);

        addInfos.then(function (d) {
            if (d.data.success === true) {
                alert("Cliente cadastrado com sucesso");

                $scope.clearData();

            } else {
                alert("Ocorreu um erro. Cliente não cadastrado");
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
        $scope.occupation = '';
    };

    $scope.updateCustomerById = function (customer) {
        $scope.UpdatedId = customer.Id;
        $scope.UpdatedName = customer.Name;
        $scope.UpdatedLastName = customer.LastName;
        $scope.UpdatedCPF = customer.CPF;
        $scope.UpdatedBirthday = customer.Birthday;
        $scope.UpdatedAge = customer.Age;
        $scope.UpdatedOccupation = customer.Occupation;
    }

    $scope.updateCustomer = function () {
        var customer = {
            Id: $scope.UpdatedId,
            Name: $scope.UpdatedName,
            LastName: $scope.UpdatedLastName,
            CPF: $scope.UpdatedCPF,
            Birthday: $scope.UpdatedBirthday,
            Age: $scope.UpdatedAge,
            Occupation: $scope.UpdatedOccupation
        };

        var updateInfos = customerService.updateCustomer(customer);
        updateInfos.then(function (d) {
            if (d.data.success === true) {
                alert("Cliente atualizado com sucesso");
                $scope.clearUpdatedData();
            } else {
                alert("Ocorreu um erro. Cliente não atualizado");
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
        $scope.UpdatedOccupation = '';
    }

    $scope.deleteCustomer = function () {
        var deleteInfos = customerService.deleteCustomer($scope.UpdatedId);
        deleteInfos.then(function (d) {
            if (d.data.success === true) {
                alert("Cliente excluído com sucesso");
            } else {
                alert("Ocorreu um erro. Cliente não excluído")
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

