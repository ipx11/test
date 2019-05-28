import React, {Component} from 'react';

export default class CardInput extends Component {
    render() {
        return (
            <fieldset>
                <input
                name={this.props.name}
                id={this.props.id}
                type={this.props.type || 'text'}
                placeholder={this.props.placeholder}
                required
                />
            </fieldset>
        )
    }
}