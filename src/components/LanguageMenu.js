import React from "react";
import { translate } from "react-i18next";

const LanguageMenu = ({ i18n }) => {
    const languages = ['en', 'pl'];
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className="align-self-start secondary-menu">
            {languages.map(l => {
                return <button key={l} onClick={() => changeLanguage(l)}
                    className={"btn btn-link btn-sm py-0 " + (i18n.language === l ? 'active' : '')}>{l}</button>;
            })}
        </div>
    );
}
export default translate()(LanguageMenu);