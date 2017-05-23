const app = angular.module('PetShopApp', []);

// require service
const services = [
    require('/services/ProductService')
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
  require('./controllers/itemList'),
  require('./controllers/search')
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
  app.controller(controllers[i].name, controllers[i].func);
}