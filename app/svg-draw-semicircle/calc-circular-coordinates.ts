interface Coordinate {
  x: number,
  y: number,
}

export function calcCircularCoordinates (
  percent : number,
  radius : number,
  center : Coordinate
) : Coordinate {
  percent = percent - 25 // Move zero point from 3 o'clock to 12 o'clock.
  const angle = (percent - 0) * (360 - 0) / (100 - 0) + 0
  const radians = (Math.PI / 180) * angle;
  const coords = {
    x: center.x + radius * Math.cos(radians),
    y: center.y + radius * Math.sin(radians),
  }
  return coords
}
