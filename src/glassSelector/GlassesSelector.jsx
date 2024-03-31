import React, { Component } from 'react'
import data from './dataGlasses.json'
import GlassesList from './GlassesList'
import ModelFace from './ModelFace';
import './GlassesSelector.css';

export default class GlassesSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGlasses: data,
            selectedGlass: null
        }
    }

    selectGlass = (selectedGlass) => {
        this.setState({ selectedGlass });
    }

    renderModelFace = () => {
        if (this.state.selectedGlass == null) {
            return <ModelFace wearingGlass={{}} />
        }
        return <ModelFace wearingGlass={this.state.selectedGlass} />
    }

    render() {
        const backgroundStyle = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./glassesImage/background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',

        };

        return (
            <div>
                <header className="header">
                    <h1>THE GLASS SELECTOR APP</h1>
                </header>
                <div style={backgroundStyle}>
                    <div className="model-faces">
                        <div className="model-faces">
                            {this.renderModelFace()}
                        </div>
                    </div>
                    <div className='list-glasses'>
                        <GlassesList listGlasses={this.state.listGlasses} selectedGlass={this.selectGlass} />
                    </div>
                </div>
            </div>
        )
    }
}
