function GroceryListController($scope) {

    $scope.items = [
        {
            name: "Creamer",
            done: false
        },
        {
            name: "Milk",
            done: false
        }
    ];

    $scope.addItem = function(item) {
        if($scope.itemText != "") {
            $scope.items.push({name: $scope.itemText, done: false});
            $scope.itemText = "";
        }
    }
}