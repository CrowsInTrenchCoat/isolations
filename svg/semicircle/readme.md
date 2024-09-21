# SVG Semicircle

A React component that renders an SVG [`<path>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) in the shape of a semicircle.

This component is intended to be used to draw an individual slice of a pie chart.

## Props

Name     | Type     | Description
-------- | -------- | ------------
`cx`     | `number` | The `x` axis coordinate of the center of the semicircle.
`cy`     | `number` | The `y` axis coordinate of the center of the semicircle.
`r`      | `number` | The radius of the semicircle.
`start`  | `number` | The percentage of the circumference at which the semicircle begins. May be any value from zero to one hundred.
`stop`   | `number` | The percentage of the circumference at which the semicircle ends. May be any value from zero to one hundred. The behavior of this coponent is undefined when this value is less than `start`.

This component will also accept all props allowed by `SVGProps<SVGPathElement>`

## Coordinates

This component understands percentages as they exist on a twelve-hour circluar clockface. An increase in percentage indicates clockwise motion.

 %  | Hour
--: | -----
  0 | 12 o'clock
 25 |  3 o'clock
 50 |  6 o'clock
 75 |  9 o'clock
100 | 12 o'clock

## Drawing Strategy

- Move to `center` point.
- Line to the point on the circumference indicated by `range[0]`.
- Arc to the circumference indicated by `range[1]`.
- Close the path at the center point.
