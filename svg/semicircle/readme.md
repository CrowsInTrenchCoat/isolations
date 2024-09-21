# SVG Semicircle

A React component that renders an SVG [`<path>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) in the shape of a semicircle.

This component is intended to be used to draw an individual slice of a pie chart.

## Custom Props

Name     | Type     | Description
-------- | -------- | ------------
`center` | `Object` | Two dimensional coordinates indicating to point from which the semicircle originates. This prop uses the following interface: `{ x: number, y: number }`
`range`  | `Array`  | The percentages


center : Coordinate,
range : [ number, number ],
radius : number,

## Drawing Strategy

- Move to `center` point.
- Line to the point on the circumference indicated by `range[0]`.
- Arc to the circumference indicated by `range[1]`.
- Close the path at the center point.
