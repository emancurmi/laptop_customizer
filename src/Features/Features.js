import React, { Component } from 'react';
import slugify from 'slugify';
import Feature from '../Feature/Feature';
import Item from '../Item/Item';

export default class Features extends Component {
    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Feature updateFeature={this.props.updateFeature} itemHash={itemHash} feature={feature} item={item} selected={this.props.selected} USCurrencyFormat={this.props.USCurrencyFormat} />
                );
            });

            return (
                <Item featureHash={featureHash} feature={feature} options={options} />
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}