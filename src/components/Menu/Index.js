import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

export default class Index extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <NavLink exact activeClassName="active" to="/">
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    onClick={this.handleItemClick}
                >

                        О нас

                </Menu.Item>
                </NavLink>
                <NavLink activeClassName="active" to="/skills">
                <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>

                        С чем работаем

                </Menu.Item>
                </NavLink>
                <NavLink activeClassName="active" to="/contact">
                <Menu.Item
                    name='upcoming  Events'
                    active={activeItem === 'upcomingEvents'}
                    onClick={this.handleItemClick}
                >

                        Контакт

                </Menu.Item>
                </NavLink>
            </Menu>
        )
    }
}