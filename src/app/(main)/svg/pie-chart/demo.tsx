import { Figure } from '@/components/figure'
import { PieChart } from '@/components/svg-pie-chart'
import { readWholeNumber } from '@/lib/read/whole-number'

interface DemoProps {
  diameter: number
}

export function Demo (props : DemoProps) {
  const diameter = readWholeNumber(props.diameter) || 300
  return (
    <>
      <Figure type="demo">
        <Figure.Head><h2>Pie Chart Demo</h2></Figure.Head>
        <Figure.Body>
          <PieChart diameter={diameter} data={[
            { value: 1, fill: 'black' },
            { value: 1, fill: 'hotpink' },
            { value: 1, fill: 'black' },
            { value: 1, fill: 'hotpink' },
            { value: 1, fill: 'black' },
            { value: 1, fill: 'hotpink' },
          ]} />
        </Figure.Body>
        <Figure.Foot>
          <button>Add slice</button>
        </Figure.Foot>
      </Figure>
    </>
  )
}
