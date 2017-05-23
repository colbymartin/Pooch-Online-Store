const app = angular.module('PetShopApp', []);

const services = [
    require('/services/ProductService')
];

for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};