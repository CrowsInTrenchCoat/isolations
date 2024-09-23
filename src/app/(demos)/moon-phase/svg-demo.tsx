'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
import { ClosedInterval, OpenInterval } from '@/lib/interval'
import { NumberRangeInput } from '@/form/number-range-input'
import { SvgMoonCircle } from '@/svg/moon-circle/moon-circle'
import { colors } from '@/colors'

interface SvgDemoProps {
  diameter: number
}

export function SvgDemo (props : SvgDemoProps) {
  const { diameter } = props
  const [ squishLeft, setSquishLeft ] = useState<number>(100)
  const [ squishRight, setSquishRight ] = useState<number>(0)
  const [ moonPhase, setMoonPhase ] = useState<number>(0)
  const [ moonPhaseName, setMoonPhaseName ] = useState<string>('New')

  const handleChangeMoonPhase = (event : ChangeEvent<HTMLInputElement>) => {
    const phase = parseFloat(event.currentTarget.value)
    setMoonPhase(phase)
    if (phase === 0) {
      // New Moon (type 1)
      setSquishLeft(100)
      setSquishRight(0)
    } else if (phase === 1) {
      // New Moon (type 2)
      setSquishLeft(0)
      setSquishRight(100)
    } else if (phase > 0 && phase < 0.5) {
      // Squish Left
      const cents = new ClosedInterval(0, 100)
      const value = (new ClosedInterval(0, 0.5)).translate(phase, cents)
      const nextSquishLeft = cents.reflect(value)
      setSquishLeft(nextSquishLeft)
      setSquishRight(0)
    } else if (phase > 0.5 && phase < 1) {
      // Squish Right
      const cents = new ClosedInterval(0, 100)
      const nextSquishRight = (new ClosedInterval(0.51, 1)).translate(phase, cents)
      setSquishLeft(0)
      setSquishRight(nextSquishRight)
    } else {
      // Full Moon
      setSquishLeft(0)
      setSquishRight(0)
    }
  }

  useEffect(() => {
    const interval = (new ClosedInterval(0, 1))
      .withLabel('New Moon', new ClosedInterval(0))
      .withLabel('Waxing Crescent', new OpenInterval(0, 0.25))
      .withLabel('First Quarter', new ClosedInterval(0.25))
      .withLabel('Waxing Gibbous', new OpenInterval(0.25, 0.50))
      .withLabel('Full Moon', new ClosedInterval(0.50))
      .withLabel('Waning Gibbous', new OpenInterval(0.50, 0.75))
      .withLabel('Last Quarter', new ClosedInterval(0.75))
      .withLabel('Waning Crescent', new OpenInterval(0.75, 1))
      .withLabel('New Moon', new ClosedInterval(1))

    setMoonPhaseName(interval.label(moonPhase))
  }, [moonPhase])

  return (
    <div className="figure">
      <div className="figure-subject">
        <svg
          width={diameter}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SvgMoonCircle size={diameter} fill="black" />
          <SvgMoonCircle
            inset={3}
            size={diameter}
            squishLeft={squishLeft}
            squishRight={squishRight}
            fill={colors.hotpink}
          />
        </svg>
        <div className="box-preview-label">{moonPhaseName}</div>
      </div>
      <div className="figure-actions">
        <NumberRangeInput
          label="Moon Phase"
          min={0}
          max={1}
          onChange={handleChangeMoonPhase}
          step={0.01}
          value={moonPhase}
        />
        <NumberRangeInput
          label="Squish Left"
          min={0}
          max={100}
          step={1}
          value={squishLeft}
          disabled
        />
        <NumberRangeInput
          label="Squish Right"
          min={0}
          max={100}
          step={1}
          value={squishRight}
          disabled
        />
      </div>
    </div>
  )
}
