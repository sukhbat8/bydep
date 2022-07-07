import React from 'react'
import Shadow from '../Shadow';
import css from "./style.module.css";

const modal = props => (
    <div>
        <Shadow onClicked={props.closeConfirmModal} show={props.show}/>
        <div
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0"
            }}
            className={css.modal}
        >{props.children}</div>
    </div>
);

export default modal;