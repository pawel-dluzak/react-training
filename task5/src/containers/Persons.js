import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.person.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    onAddPerson: (name, age) => dispatch({type: 'ADD',personData: {name:name,age:age}}),
    onDeletePerson: (id) => dispatch({type: 'DELETE', personId:id}),
    };
}

const mapStateToProps = state => {
    return {
        person: state.person
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);