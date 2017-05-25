module.exports = {
  name: "SearchController",
  func: function ($scope, ProductService) {
    $scope.searchInput = '';
    $scope.search = function () {
      ProductService.search($scope.searchInput);
    }
  }
} 