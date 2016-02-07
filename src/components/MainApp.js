import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, age, sex, actions} = this.props;
        let input;
        return (<div>
            <p>Hello {name}! - You are {age} old, and you are {sex === 'male' ? 'boy' : 'girl'}</p>
            <input onChange={() => actions.updateData(input.value)}
                   placeholder="Name"
                   ref={(node) => input = node}/>
            <div onClick={actions.deleteData}>clear</div>
        </div>);
    }
}

MainApp.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};
