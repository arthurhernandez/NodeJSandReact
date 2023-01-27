import React, { useState } from 'react';
import { units } from 'astropy/units';
import { constants } from 'scipy/constants';

function AstrophysicsCalculator() {
  const [mass, setMass] = useState(1);
  const [distance, setDistance] = useState(1);

  function calculateGravitationalForce() {
    const m1 = units.kg.to(mass, units.M_sun);
    const m2 = units.kg.to(mass, units.M_sun);
    const r = units.m.to(distance, units.AU);
    const force = constants.G * m1 * m2 / r ** 2;
    console.log(force);
    return force;
  }
  function calculateEventHorizon(mass) {
    const m = units.kg.to(mass, units.M_sun);
    const r = 2 * constants.G * m / constants.c ** 2;
    return units.m.to(r, units.km);
  }
  function calculateOrbitalPeriod(mass, distance) {
    const m1 = units.kg.to(mass, units.M_sun);
    const r = units.m.to(distance, units.AU);
    const period = 2 * Math.PI * (r ** 3 / (constants.G * m1)) ** 0.5;
    return units.s.to(period, units.year);
  }
  function calculateSpeedOfSound(temperature, mean_molecular_weight) {
    const temp = units.K.to(temperature, units.K);
    const mmw = mean_molecular_weight;
    const speed = (constants.k * temp / mmw) ** 0.5;
    return units.m_s.to(speed, units.km_s);
  }
  function calculateGravitationalRedshift(mass, distance) {
    const m = units.kg.to(mass, units.M_sun);
    const r = units.m.to(distance, units.km);
    const z = 1 - (3 * constants.G * m / (r * constants.c ** 2));
    return z;
  }
  function calculateBolometricLuminosity(temperature, radius) {
    const temp = units.K.to(temperature, units.K);
    const r = units.m.to(radius, units.R_sun);
    const luminosity = 4 * Math.PI * constants.sigma * temp ** 4 * r ** 2;
    return units.W.to(luminosity, units.L_sun);
  }
  function calculateEscapeVelocity(mass, distance) {
    const m = units.kg.to(mass, units.M_sun);
    const r = units.m.to(distance, units.AU);
    const velocity = Math.sqrt(2 * constants.G * m / r);
    return units.m_s.to(velocity, units.km_s);
  }

  return (
    <div>
      <label>
        Mass 1 (in kg):
        <input
          type="number"
          value={mass}
          onChange={e => setMass(e.target.value)}
        />
      </label>
      <br />
      <label>
        Distance (in meters):
        <input
          type="number"
          value={distance}
          onChange={e => setDistance(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateGravitationalForce}>
        Calculate Gravitational Force
      </button>
    </div>
  );
}

export default AstrophysicsCalculator;
