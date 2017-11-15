import React from 'react'
import PropTypes from 'prop-types'
import {select} from 'd3-selection'

class Grid extends React.Component {
  constructor() {
    super()

    this.renderGrid = this.renderGrid.bind(this)
  }
  componentDidMount() {
    this.renderGrid()
  }
  componentDidUpdate() {
    this.renderGrid()
  }

  renderGrid() {
    const { grid } = this.props

    let node = this.refs.grid
    select(node).call(grid)
  }

  render() {
    return (
      <g ref="grid" className="y-grid"/>
    )
  }
}

Grid.propTypes = {
  grid: PropTypes.func.isRequired
}

export default Grid
