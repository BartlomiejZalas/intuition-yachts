import React from "react";
import { translate } from "react-i18next";
import SocialIcons from "./SocialIcons/SocialIcons";

const LanguageMenu = ({ i18n, className, closeMenu }) => {
    const languages = ['en', 'pl'];

    const changeLanguageHandler = l => {
        i18n.changeLanguage(l);
        closeMenu();
    };

    return (
        <div className={"align-self-start secondary-menu " + className}>
            <div>
                {languages.map(l => {
                    return <button key={l} onClick={changeLanguageHandler.bind(this, l)}
                        className={"btn btn-link btn-sm py-0 " + (i18n.language === l ? 'active' : '')}>{l}</button>;
                })}
            </div>
            <div>
                <SocialIcons />
            </div>
        </div>
    );
}
export default translate()(LanguageMenu);