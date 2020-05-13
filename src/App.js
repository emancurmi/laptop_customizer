import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import Summary from './Summary/Summary';
import Features from './Features/Features';

import FEATURES from './Store.js';


class App extends Component {
    state = {
        selected: {
            Processor: {
                name: '17th Generation Intel Core HB (7 Core with donut spare)',
                cost: 700
            },
            'Operating System': {
                name: 'Ubuntu Linux 16.04',
                cost: 200
            },
            'Video Card': {
                name: 'Toyota Corolla 1.5v',
                cost: 1150.98
            },
            Display: {
                name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                cost: 1500
            }
        },

        USCurrencyFormat: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }),

        store: FEATURES
    };

    updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
            selected
        });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1>ELF Computing | Laptops</h1>
                </header>
                <main>
                    <Features features={this.state.store} updateFeature={this.updateFeature} selected={this.state.selected}  USCurrencyFormat={this.state.USCurrencyFormat} />
                    <Summary selected={this.state.selected} USCurrencyFormat={this.state.USCurrencyFormat} />
                </main>
            </div>
        );
    }
}

export default App;
