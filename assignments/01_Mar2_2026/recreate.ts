const bakeryVan = {
  destination: 'bakery',
  cargo: 5
}

const schoolVan = {
  destination: 'school',
  cargo: ['Dorothy', 'Zelda', 'Tallulah']
}

interface Van <T> {
  destination: string,
  cargo: T
}

// type Bags = number;

// type Passengers = string[];

function deliver <T> (van: Van<T>) {
  console.log('Delivery arrived at', van.destination)
  return van.cargo
}

function receiveBags (bags: number) {
  console.log(bags, 'bags received')
}

function receivePassengers (passengers: string[]) {
  const joined = passengers.join(', ')
  console.log('Passengers received:', joined)
}


const bakeryDelivery = deliver(bakeryVan)
receiveBags(bakeryDelivery)

const schoolDelivery = deliver(schoolVan)
receivePassengers(schoolDelivery)