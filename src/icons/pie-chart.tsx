import { PieChart, Slice } from '@/svg/pie-chart'

interface IconPieChartProps {
  size : number,
  inset? : 1.5,
}

export function IconPieChart (props : IconPieChartProps) {
  const { size, inset : _inset } = props
  const inset = _inset && _inset > 0 ? _inset : 0
  return (
    <PieChart diameter={size} inset={inset}>
      <Slice value={1} fill="black" />
      <Slice value={1} fill="hotpink" />
      <Slice value={1} fill="black" />
      <Slice value={1} fill="hotpink" />
    </PieChart>
  )
}
