import React from 'react';
import ActionCreator from '../ActionCreator';

export default class World extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpdate() {
        this.props.dispatch(ActionCreator.updateData(this.refs, this.props.model));
    }

    handleDelete() {
        this.props.dispatch(ActionCreator.deleteData(this.refs, this.props.model));
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.props.model.name}
                       onChange={this.handleUpdate}
                       ref="name"/>
                <input type="text"
                       value={this.props.model.age}
                       onChange={this.handleUpdate}
                       ref="age"/>
                <input type="text"
                       value={this.props.model.sex}
                       onChange={this.handleUpdate}
                       ref="sex"/>
                <div>
                    Hello {this.props.model.name}, {this.props.model.age}, {this.props.model.sex}
                </div>
                <div onClick={this.handleDelete}>Clear fields</div>
            </div>
        );
    }
}