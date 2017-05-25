const app = angular.module('PetShopApp', ['ui.router']);

// require service
const services = [
    require('./services/ProductService')
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/itemList'),
    require('./controllers/search'),
    require('./controllers/results'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/item'),
    require('./components/search'),
    require('./components/opening'),
    require('./components/results'),
]

// loop all components
for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].array);
}

app.config( function ($stateProvider) {
    
    $stateProvider.state({
        name: "front_page",
        url: '/front_page',
        component: "opening"
    });

    $stateProvider.state({
        name: 'results',
        url: '/results/:searchstring',
        component: 'results',
    });

})

