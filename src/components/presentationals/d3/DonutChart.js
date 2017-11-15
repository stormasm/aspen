import {pie} from 'd3-shape'
import React from 'react'
import PropTypes from 'prop-types'

import DonutChartPath from './DonutChartPath'
import DonutChartLegend from './DonutChartLegend'

const DonutChart = ({ chartId, width, height, data }) => {
  const dcpie = pie()
    .value(d => d.count)
    .padAngle(0.04)
    .sort(null)

  return (
    <div>
      <svg
        id={chartId}
        width={width}
        height={height}
        className="shadow">
        <DonutChartPath
          width={width}
          height={height}
          pie={dcpie}
          data={data}/>
        <DonutChartLegend
          pie={dcpie}
          data={data}
          width={width}
          height={height}/>
      </svg>
    </div>
  )
}

DonutChart.propTypes = {
  chartId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
}

export default DonutChart
