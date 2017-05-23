module.exports = {
  name: "SearchController",
  func: function ($scope, ProductService) {
    $scope.items = ProductService.search(product_name);
  }
}