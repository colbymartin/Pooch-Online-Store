module.exports = {
  name: 'ProductService',
  func: function ($http) {
    let items = [];

    return {
      getItems: function () {

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