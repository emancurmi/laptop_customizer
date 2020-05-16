import React, { Component } from 'react';

import slugify from 'slugify';

export default class Feature extends Component {

    clickHandler = () => {
        console.log('Click handler');
        this.props.updateFeature(this.props.feature, this.props.item);
    }

    render() {
        return (
            <div key={this.props.itemHash} className="feature__item" onClick={this.clickHandler}>
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                    checked={this.props.item.name === this.props.selected[this.props.feature].name}
                />
                <label htmlFor={this.propsitemHash} className="feature__label">
                    {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
            </label>
            </div>
        )
    }
}