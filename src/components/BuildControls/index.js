import React from 'react';
import BuildControl from "../BuildControl"
import css from "./style.module.css";
import background from "../../assets/images/background.jpg";
const BuildControls = props => {
    return (
        <div className={css.BuildControls}  style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <p style={{color: 'white'}}>Бургерийн үнэ: <strong>{props.price}</strong></p>
            {
                Object.keys(props.ingredientsNames).map(el => (
                    <BuildControl
                        key={el}
                        disabled={props.disabledIngredients}
                        ortsNemeh={props.ortsNemeh}
                        ortsHasah={props.ortsHasah}
                        type={el}
                        orts={props.ingredientsNames[el]}
                    />
                ))
            }
            <button onClick={props.showConfirmModal} disabled={props.disabled} className={css.OrderButton}>Захиалах</button>

        </div>
    )
}

export default BuildControls;