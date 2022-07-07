import React from 'react'
import Button from '../General/Button';

const OrderSummary = (props) => {
    return (
        <div>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд:</p>
            <ul>
                {Object.keys(props.ingredients).map(x => (
                    <li key={x}>{props.ingredientsNames[x]}: {props.ingredients[x]}</li>
                ))}
            </ul>
            <p><strong>Захиалгын дүн: {props.totalPrice}₮</strong></p>
            <p>Цааш нь үргэлжлүүлэх үү?</p>
            <Button clicked = {props.onCancel} btnType='Danger' text="ТАТГАЛЗАХ"/>
            <Button clicked = {props.onContinue} btnType='Success' text="ҮРГЭЛЖЛҮҮЛЭХ"/>
        </div>
    )
};
export default OrderSummary