import React, { Component } from 'react'

export default class Glass extends Component {
    wearGlass = (glass) => {
        this.props.selectedGlass(glass);
    }

    render() {
        return (
            <div className="glasses-item"><img src={this.props.glass.image} onClick={() => this.wearGlass(this.props.glass)} alt="Glasses 1" /></div>
        )
    }
}
