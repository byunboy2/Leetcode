function carFleet(target, position, speed) {
  const cars = [];
  for (let i = 0; i < position.length; i++) {
    cars.push({ position: position[i], speed: speed[i] });
  }

  cars.sort((a, b) => b.position - a.position);

  let count = 0;
  let maxTime = 0;

  for (const car of cars) {
    const time = (target - car.position) / car.speed;
    if (time > maxTime) {
      count++;
      maxTime = time;
    }
  }

  return count;
}
