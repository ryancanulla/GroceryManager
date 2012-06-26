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


    $scope.getTotalItems = function() {
        console.log("items" + $scope.items.length);
        return $scope.items.length;
    }

    $scope.addItem = function(item) {
        $scope.items.push({name: $scope.itemText, done: false});
        $scope.itemText = "";
    }
}