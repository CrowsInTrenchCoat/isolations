document.addEventListener('DOMContentLoaded', function () {
  // Configuration
  const diameter = 300
  const padding = 20

  // Dynamic
  const d = diameter
  const r = (d / 2) - padding
  const center = { x: 0, y: 0 }

  const calcPoint = calc(r, center)

  // Mutable state
  let percent = 0

  const svg = document.getElementById('circle')
  if (!svg) {
    return
  }

  const path = semiCircle({
    length: [0, percent],
    center,
    radius: r,
    className: 'blue'
  })

  svg.setAttribute('width', String(d))
  svg.setAttribute('height', String(d))
  svg.setAttribute('viewBox', `${d/2 * -1} ${d/2 * -1} ${d} ${d}`)
  svg.append(path)

  const subdivisions = 50
  const dots : SVGCircleElement[] = []
  for (let i = 0; i < subdivisions; i++) {
    const percent = i * (100 / subdivisions)
    dots.push(dot(calcPoint(percent), '#999'))
  }
  svg.append(...dots)

  const numberInput = document.getElementById('percent') as HTMLInputElement
  if (numberInput) {
    numberInput.value = String(percent)
    document.addEventListener('change', handleChangePercent)
  }

  const rangeInput = document.getElementById('range') as HTMLInputElement
  if (rangeInput) {
    rangeInput.value = String(percent)
    document.addEventListener('input', handleChangePercent)
  }

  function handleChangePercent (event : Event) {
    const target = event.currentTarget
    if (!target || !(target instanceof HTMLInputElement)) {
      return
    }

    const percent = target.value

    if (rangeInput) {
      rangeInput.value = String(percent)
    }
    if (numberInput) {
      numberInput.value = String(percent)
    }
    if (!svg) {
      return
    }

    const path = svg.querySelector('.semi-circle')
    if (!path) {
      return
    }

    const nextPath = semiCircle({
      length: [ 0, parseFloat(percent) ],
      center,
      radius: r,
      className: 'blue'
    })

    svg.replaceChild(nextPath, path)
  }

  function calc (radius : number, center : { x : number, y : number }) {
    return (percent : number) => {
      percent = percent - 25 // Reset zero point to 12 o'clock.
      const angle = (percent - 0) * (360 - 0) / (100 - 0) + 0
      const radians = (Math.PI / 180) * angle;
      return {
        x: center.x + radius * Math.cos(radians),
        y: center.y + radius * Math.sin(radians),
      }
    }
  }

  interface SemicircleProps {
    className : string,
    radius : number,
    center : { x : number, y : number },
    length : [ number, number ]
  }
  function semiCircle (props : SemicircleProps) {
    const { className, radius: r, center, length } = props

    const getCoords = calc(r, center)
    const percent = length[1] - length[0]
    const start = getCoords(length[0])
    const end = getCoords(length[1])

    const el = percent === 100
      ? document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      : document.createElementNS('http://www.w3.org/2000/svg', 'path')

    el.setAttribute('data-percent', String(percent))
    el.classList.add('semi-circle')
    el.classList.add(className)

    if (el.tagName === 'circle') {
      el.setAttribute('cx', String(center.x))
      el.setAttribute('cy', String(center.y))
      el.setAttribute('r', String(r))
      return el
    } else {
      const largeArc = percent > 50 ? 1 : 0
      const sweep = 1
      const rotation = 0
      el.setAttribute('d', ''
        + `M ${center.x} ${center.y} `
        + `L ${start.x} ${start.y} `
        + `A ${r} ${r} ${rotation} ${largeArc} ${sweep} ${end.x} ${end.y} `
        + 'Z'
      )
    }

    return el
  }

  function dot (coords : { x : number, y : number }, fill : string) {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    c.setAttribute('fill', fill || '#333')
    c.setAttribute('cx', String(coords.x))
    c.setAttribute('cy', String(coords.y))
    c.setAttribute('r', '2')
    return c
  }
})
