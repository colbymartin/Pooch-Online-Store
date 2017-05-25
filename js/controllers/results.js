module.exports = {
    name: "SearchResultsController",
    func: function ($scope, ProductService, $stateParams) {
      // need to pass in parameter from search function in the service
        $scope.items = ProductService.search($stateParams.searchstring);
        console.log('run controller/results.js');
    }
}