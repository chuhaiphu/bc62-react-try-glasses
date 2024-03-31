import React, { Component } from 'react'

export default class ModelFace extends Component {
    render() {
        return (
            <div className='container model-face-grid'>
                <div className='model'>
                    <div className="image-container">
                        <img src="./glassesImage/model.jpg" alt="" />
                        <div className="glass-details">
                            <div className="glass-name">
                                GUCCI G8850U
                            </div>
                            <div className="glass-description">
                                Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
                            </div>
                        </div>
                    </div>
                    <div className="selected-glass">
                        <img className="selected-glass" src="./glassesImage/v1.png" alt="" />
                    </div>
                </div>
                <div className='model'>
                    <div className="image-container">
                        <img src="./glassesImage/model.jpg" alt="" />
                        <div className="glass-details">
                            <div className="glass-name">
                                {this.props.wearingGlass.name}
                            </div>
                            <div className="glass-description">
                                {this.props.wearingGlass.desc}
                            </div>
                        </div>
                    </div>
                    <div className="selected-glass">
                        <img className="selected-glass" src={this.props.wearingGlass.url} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
