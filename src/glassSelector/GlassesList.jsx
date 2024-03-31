import React, { Component } from 'react'
import Glass from './Glass'
export default class GlassesList extends Component {
  renderListGlass = () => {
    return this.props.listGlasses.map((glass) => {
      return <Glass key={glass.id} glass={glass} selectedGlass={this.props.selectedGlass} />
    })
  }
  render() {
    return (
      <div className="glasses-grid">
        {this.renderListGlass()}
      </div>
    )
  }
}
