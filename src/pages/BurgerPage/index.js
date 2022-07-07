import React, { Component } from "react";
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/General/Spinner";
const ingredientsPrice = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const ingredientsNames = {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Мах",
    salad: "Салад"
};

class BurgerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                cheese: 0,
                bacon: 0,
                meat: 0
            },
            totalPrice: 1000,
            purchasing: false,
            confirmOrder: false,
        };
    }


    ortsNemeh = type => {

        const newIngredients = { ...this.state.ingredients };

        newIngredients[type]++;

        const newPrice = this.state.totalPrice + ingredientsPrice[type];

        this.setState({ purchasing: true, totalPrice: newPrice, ingredients: newIngredients });
    }
    ortsHasah = type => {
        if (this.state.ingredients[type] > 0) {
            const newIngredients = { ...this.state.ingredients };

            newIngredients[type]--;

            const newPrice = this.state.totalPrice - ingredientsPrice[type];

            this.setState({ purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients });
        }

    }

    showConfirmModal = () => {
        this.setState({ confirmOrder: true });
    }
    closeConfirmModal = () => {
        this.setState({ confirmOrder: false });
    }
    componentDidMount = () => {
    };

    continueOrder = () => {
        const order = {
            orts: this.state.ingredients,
            dun: this.state.totalPrice,
            hayag: {
                name: 'sar',
                city: 'ub',
                street: '10r'
            }
        }
        this.setState({ loading: true });
        axios.post('/orders.json', order).then(response => {
            alert('amjilttai');
            this.setState({ loading: false });
        });
    }

    render() {
        const disabledIngredients = { ...this.state.ingredients };
        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }
        return (
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} show={this.state.confirmOrder}>
                    {
                        this.state.loading ? (<Spinner />) : (<OrderSummary
                            onCancel={this.closeConfirmModal}
                            onContinue={this.continueOrder}
                            totalPrice={this.state.totalPrice}
                            ingredientsNames={ingredientsNames}
                            ingredients={this.state.ingredients} />)
                    }

                </Modal>
                
                <Burger orts={this.state.ingredients} />
                <BuildControls
                    showConfirmModal={this.showConfirmModal}
                    ingredientsNames={ingredientsNames}
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice}
                    disabledIngredients={disabledIngredients}
                    ortsNemeh={this.ortsNemeh}
                    ortsHasah={this.ortsHasah} />
            </div>
        );
    }
}
export default BurgerPage;