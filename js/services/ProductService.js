module.exports = {
  name: 'ProductService',
  func: function ($http) {
    let items = [
            {name: "Kibbles", description: 'yummy', price: 8},
            {name: "Bits", description: 'goes with kibbles', price: 23},
            {name: "Bone", description: 'from a cow', price: 6},
            {name: "Bowl", description: 'hold water', price: 14},
            {name: "Leash", description: 'keep pooch in check', price: 22},
        ];

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