import React from 'react'
import { Link } from 'react-router-dom';
import css from './style.module.css';
const MenuItem = (props) => (
    <div>
        <li className={css.MenuItem}>
            <Link exact={props.exact} className={css.active? css.active: null} to={props.link}>{props.children}</Link>
        </li>
    </div>
  )


export default MenuItem