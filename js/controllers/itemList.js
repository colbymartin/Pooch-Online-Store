module.exports = {
    name: "ItemListController",
    func: function ($scope, ProductService) {
        $scope.items = ProductService.getItems();
    }
} 