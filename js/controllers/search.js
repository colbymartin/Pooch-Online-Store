module.exports = {
  name: "SearchController",
  func: function ($scope, ProductService) {
    $scope.items = ProductService.search(item.name);
  }
} 