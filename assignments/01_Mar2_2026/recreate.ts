interface Van <T> {
  destination: string,
  cargo: T
}

function deliver <T> (van: Van<T>) {
  console.log('Delivery arrived at', van.destination)
  return van.cargo
}

const bakeryVan = {
  destination: 'bakery',
  cargo: 5
}

deliver(bakeryVan)