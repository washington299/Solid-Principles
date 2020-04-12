{
  // Wrong ✖
  interface Vehicles {
    setLocation(lat: number, lng: number): any;
    setAltitude(alt: number): any;
    setVelocity(vel: number): any;
  }

  class Airplane implements Vehicles {
    setLocation(lat: number, lng: number): any {}
    setAltitude(alt: number): any {}
    setVelocity(vel: number): any {}
  }

  class Helicopter implements Vehicles {
    setLocation(lat: number, lng: number): any {}
    setAltitude(alt: number): any {}
    setVelocity(vel: number): any {}
  }

  class Car implements Vehicles {
    setLocation(lat: number, lng: number): any {}
    setAltitude(alt: number): any {} // Car is a different vehicle then it won't have an altitude method.
    setVelocity(vel: number): any {}
  }
}

// -------------------------------------------------------------------- //
{
  // Right ✔
  interface Vehicles {
    setLocation(lat: number, lng: number): any;
    setVelocity(vel: number): any;
  }

  interface AirVehicles extends Vehicles { // all the air vehicles will use this interface.
    setAltitude(alt: number): any;
  }

  class Airplane implements AirVehicles {
    setLocation(lat: number, lng: number): any {}
    setAltitude(alt: number): any {}
    setVelocity(vel: number): any {}
  }

  class Helicopter implements AirVehicles {
    setLocation(lat: number, lng: number): any {}
    setAltitude(alt: number): any {}
    setVelocity(vel: number): any {}
  }

  class Oi implements Vehicles {
    setLocation(lat: number, lng: number): any {}
    setVelocity(vel: number): any {}
  }
}