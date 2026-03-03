"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deliver(van) {
    console.log('Delivery arrived at', van.destination);
    return van.cargo;
}
const bakeryVan = {
    destination: 'bakery',
    cargo: 5
};
deliver(bakeryVan);
//# sourceMappingURL=recreate.js.map