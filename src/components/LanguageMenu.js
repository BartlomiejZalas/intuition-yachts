import React from "react";
import { translate } from "react-i18next";

const LanguageMenu = ({ i18n }) => {
    const languages = ['en', 'pl', 'it'];
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className="btn-group">
            {languages.map(l => {
                return <button key={l} type="button" onClick={() => changeLanguage(l)}
                    className={"btn btn-outline-primary " + (i18n.language === l ? 'active' : '')}>{l}</button>;
            })}
        </div>
    );
}
export default translate()(LanguageMenu);