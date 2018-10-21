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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
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
                                    <NavLink className="nav-link" activeClassName="active" to="/about">{t('menu.about')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/projects">{t('menu.projects')}</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {t('menu.services.services')}
                                    </DropdownToggle>
                                    <DropdownMenu left="true">
                                        <DropdownItem>
                                            <NavLink className="nav-link" activeClassName="active" to="/services/yachts">{t('menu.services.yachts')}</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" activeClassName="active" to="/services/interior-design">{t('menu.services.inside')}</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" activeClassName="active" to="/services/models-3d">{t('menu.services.models3d')}</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" activeClassName="active" to="/services/technical-drawings">{t('menu.services.technicaldrawings')}</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/partners">{t('menu.partners')}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" activeClassName="active" to="/contact">{t('menu.contact')}</NavLink>
                                </NavItem>
                            </Nav>
                            <LanguageMenu className="collapsed"/>
                        </Collapse>
                        <LanguageMenu className="full-width"/>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default translate()(Menu);