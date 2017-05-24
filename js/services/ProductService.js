module.exports = {
  name: 'ProductService',
  func: function ($http) {
    let items = [];

    $http.get('https://tiy-28202.herokuapp.com/shop/items').then(function (response) {
      for (let i =0; i < response.length; i++) {
        items.push({
          name: response[i].name,
          pic: response[i].pic,
          brand: response[i].brand,
          price: response[i].price,
        })
      }
    });

    return {
      getItems: function () {
          return items;
      },
      search: function () {
        $http.get('https://shop/search?q=' + product_name + '/').then(function (response) {
          console.log(response.data);
//          friend.username = response.data.login;
//          friend.pic = response.data.avatar_url;
        });

      },
    }

  },
}