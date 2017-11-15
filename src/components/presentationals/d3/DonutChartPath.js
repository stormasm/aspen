import {interpolate} from 'd3-interpolate'
import {select} from 'd3-selection'
import {arc} from 'd3-shape'
import React from 'react'
import PropTypes from 'prop-types'

class DonutChartPath extends React.Component {
  constructor() {
    super()

    this.currentData = {}
  }
  componentDidUpdate() {
    const { width, height, pie, data } = this.props

    const outerRadius = height / 2
    const innerRadius = height / 3.3
    const legendDisplayed = (width <= (height + 180)) ? 0 : width / 5
    const transform = 'translate(' + ((width / 2) - legendDisplayed) + ',' + (height / 2) + ')'

    const dcparc = arc().outerRadius(outerRadius).innerRadius(innerRadius)

    let layout = select(this.refs.DonutChartPath)
      .attr('transform', transform)

    let path = layout.selectAll('path').data(pie(data))

    path.exit().remove()

    path.enter().append('path')
      .attr('fill', d => d.data.color)
      .attr('key', (d, i) => i)
      .each(d => this.currentData[d.data.name] = { startAngle: d.startAngle, endAngle: d.startAngle })
      .merge(path)
        .transition().duration(2000)
          .attrTween('d', d => {
            let dcpinterpolate = interpolate(this.currentData[d.data.name], d)
            this.currentData[d.data.name] = d
            return function (t) {
              return dcparc(dcpinterpolate(t))
            }
          })
  }

  render() {
    return <g ref="DonutChartPath"/>
  }
}

DonutChartPath.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  pie: PropTypes.func.isRequired
}

export default DonutChartPath
