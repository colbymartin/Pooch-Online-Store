module.exports={
    name:"CartController",
    func: function($scope, ProductService){
        $scope.items= ProductService.getCarts();
    }
}