import React from "react";
import { NavLink } from "react-router-dom";
import { translate } from "react-i18next";

const Menu = ({ t }) => {
    return (
        <div>
            <h2>{t('page.menu')}</h2>
            <ul>
                <li>
                    <NavLink className="nav-link" exact activeClassName="active" to="/">{t('menu.home')}</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" to="/about">{t('menu.about')}</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" activeClassName="active" to="/contact">{t('menu.contact')}</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default translate()(Menu);