"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bakeryVan = {
    destination: 'bakery',
    cargo: 5
};
const schoolVan = {
    destination: 'school',
    cargo: ['Dorothy', 'Zelda', 'Tallulah']
};
function deliver(van) {
    console.log('Delivery arrived at', van.destination);
    return van.cargo;
}
function receiveBags(bags) {
    console.log(bags, 'bags received');
}
function receivePassengers(passengers) {
    const joined = passengers.join(', ');
    console.log('Passengers received:', joined);
}
const bakeryDelivery = deliver(bakeryVan);
receiveBags(bakeryDelivery);
const schoolDelivery = deliver(schoolVan);
receivePassengers(schoolDelivery);
//# sourceMappingURL=recreate.js.map