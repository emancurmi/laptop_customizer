import React, { Component } from 'react';
import Option from '../Option/Option';
import Total from '../Total/Total';


export default class Summary extends Component {

    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {

            const featureHash = feature + '-' + idx;
            return (
                <Option featureHash={featureHash} feature={feature} selectedOption={this.props.selected[feature]} USCurrencyFormat={this.props.USCurrencyFormat} />
            );
        });

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total total={total} USCurrencyFormat={this.props.USCurrencyFormat} />
            </section>
        )
    }
}