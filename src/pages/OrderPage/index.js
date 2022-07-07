import React from "react";
import Spinner from "../../components/General/Spinner";
import axios from "../../axios-orders";
import css from './style.module.css';
import Order from "../../components/Order";
class OrderPage extends React.Component {
    state = {
        orders: [],
        loading: false,
    };
    componentDidMount() {
        // this.state({ loading: true });
        axios
            .get('/orders.json')
            .then(res => {
                this.setState({ orders: Object.entries(res.data).reverse()});
            })
            .catch(err => console.log(err))
            .finally(() => {
                this.setState({ loading: false })
            });
    }
    render() {
        console.log(this.state.orders);
        return <div>
            {this.state.loading ? (<Spinner/> ):( this.state.orders.map(x => (
                <Order key={x[0]} order={x[1]}/>
            )))}
        </div>;
    }
}
export default OrderPage;