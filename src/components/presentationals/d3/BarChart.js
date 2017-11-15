import {scaleBand, scaleLinear} from 'd3-scale'
import {select} from 'd3-selection'
import React from 'react'
import PropTypes from 'prop-types'

class BarChart extends React.Component {
  componentDidUpdate() {
    const { width, height, data } = this.props

    const margin = { top: 5, right: 5, bottom: 5, left: 5 },
      h = height - (margin.top + margin.bottom)
    const transform = 'translate(' + margin.left + ',' + margin.top + ')'

    const x = scaleBand()
      .domain(data.map(d => {
        return d.month
      }))
      .rangeRound([0, width])
      .padding(0.5)
    const y = scaleLinear()
      .domain([0, 100])
      .rangeRound([height, 0])

    // Select main SVG
    let svg = select(this.refs.BarChart)

    let layout = svg
      .select('g')
      .attr('transform', transform)

    let rect1 = layout.selectAll('rect.behind').data(data)
    let rect2 = layout.selectAll('rect.shadow').data(data)

    rect1.exit().remove()
    rect2.exit().remove()

    rect1.enter().append('rect')
      .attr('fill', '#58657f')
      .attr('rx', '3')
      .attr('ry', '3')
      .attr('class', 'behind')
      .attr('key', (d, i) => 'behind-' + i)
      .attr('y', (margin.top - margin.bottom))
      .attr('height', h)
      .merge(rect1)
        .attr('x', d => x(d.month))
        .attr('width', x.bandwidth())

    rect2.enter().append('rect')
      .attr('fill', '#74d3eb')
      .attr('rx', '3')
      .attr('ry', '3')
      .attr('class', 'shadow')
      .attr('key', (d, i) => 'shadow-' + i)
      .attr('y', d => y(d.value) + (h - y(d.value)))
      .attr('height', 0)
      .merge(rect2)
        .attr('x', d => x(d.month))
        .attr('width', x.bandwidth())
        .transition().duration(2000)
          .attr('height', d => (h - y(d.value)))
          .attr('y', d => y(d.value))
  }

  render() {
    const { chartId, width, height } = this.props

    return (
      <svg ref="BarChart" id={chartId} width={width} height={height}>
        <g/>
      </svg>
    )
  }
}

BarChart.propTypes = {
  chartId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
}

export default BarChart
