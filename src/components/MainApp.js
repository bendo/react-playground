import './MainApp.styl';
import React, {PropTypes} from 'react';
import Component from 'react-pure-render/component';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, age, sex, actions} = this.props;
        const {updateData, deleteData} = actions;
        let input;
        return (<div className="hello">
            <p>Hello {name}! - You are {age} old, and you are {sex === 'male' ? 'boy' : 'girl'}</p>
            <input onChange={(e) => updateData(e.target.value)} placeholder="Name"/>
            <div onClick={deleteData}>clear</div>
        </div>);
    }
}

MainApp.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};
