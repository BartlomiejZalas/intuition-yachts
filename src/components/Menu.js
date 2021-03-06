import React from "react";
import { NavLink } from "react-router-dom";
import { translate } from "react-i18next";
import LanguageMenu from './LanguageMenu';
import "./Menu.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    // Dropdown,
    // DropdownToggle,
    // DropdownMenu
} from 'reactstrap';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            submenuOpen: false
        };      
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    close = () => {
        this.setState({
            isOpen: false,
            submenuOpen: false
        });
        window.scrollTo(0, 0);
    }

    toggleSubmenu = () => {
        this.setState({
            submenuOpen: !this.state.submenuOpen
        });
    }

    render() {
        const { t } = this.props;
        return (
            <div className="nav-bar fixed-top">
                <div className="container">
                    <Navbar color="light" light expand="xl" className="d-flex justify-content-between p-0">
                        <NavLink className="logo-link" to="/">
                            <div className="logo">
                                <div className="lead">Intuition Yachts</div>
                                <div className="secondary">Design Studio</div>
                            </div>
                        </NavLink>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar className="flex-grow-0">
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.close} to="/about">{t('menu.about')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.close} to="/projects">{t('menu.projects')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.close} to="/services">{t('menu.services')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.close} to="/partners">{t('menu.partners')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.close} to="/contact">{t('menu.contact')}</NavLink>
                                </NavItem>
                            </Nav>
                            <LanguageMenu className="collapsed" closeMenu={this.close}/>
                        </Collapse>
                        <LanguageMenu className="full-width" closeMenu={this.close}/>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default translate()(Menu);