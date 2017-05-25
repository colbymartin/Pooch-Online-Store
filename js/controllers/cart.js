module.exports={
    name:"CartListController",
    func: function($scope, ProductService){
        $scope.items= ProductService.getCarts();
    }
}