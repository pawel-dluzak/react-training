import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Gnuj",
                address: {
                    street: 'Test1',
                    zipCode: '11111',
                    country: 'Uganda'
                },
                email: 'gnuj@gnuj.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading:false});
        });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type='text' name="name" placeholder="your name" />
                <input className={classes.Input} type='email' name="email" placeholder="your email" />
                <input className={classes.Input} type='text' name="street" placeholder="your street" />
                <input className={classes.Input} type='text' name="postal" placeholder="your postal" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return(<div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
        </div>);
    }
}

export default withRouter(ContactData);