module.exports = {
  name: 'ProductService',
  func: function ($http) {
    let items = [];
    let searchResults = [];
    let carts = [];

    $http.get('https://tiy-28202.herokuapp.com/shop/items').then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        //console.log("hi");
        items.push({
          name: response.data[i].name,
          pic: response.data[i].image,
          brand: response.data[i].brand,
          price: response.data[i].price,
        })
      }
    });

    return {
      getItems: function () {
        return items;
      },
      getCarts: function () {
        return carts;
      },

      search: function (search) {
        $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + search).then(function (response) {
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            searchResults.push({
              name: response.data[i].name,
              pic: response.data[i].image,
              brand: response.data[i].brand,
              price: response.data[i].price,
            })
          }

        });
        return searchResults;
        // this return statement was too nested and not returning properly
      },
    }

  },
}