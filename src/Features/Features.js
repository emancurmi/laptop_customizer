import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import Options from '../Options/Options';

import slugify from 'slugify';

export default class Features extends Component {
    render() {
        Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));

                return (
                    //feature
                    <Feature updateFeature={this.updateFeature} itemHash={itemHash} feature={feature} item={item} selected={this.state.selected} USCurrencyFormat={this.state.USCurrencyFormat} />
                );
            });

            return (
                //option
                <Options featureHash={featureHash} feature={feature} options={options} />
            );
        });
    }
}