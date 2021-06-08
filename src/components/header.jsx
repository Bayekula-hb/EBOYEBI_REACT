import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Menu position="left">
            <Menu.Item
              name="Eboyebi"
              active={activeItem === "Eboyebi"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>

          <Menu.Menu position="center">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="cours"
              active={activeItem === "cours"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
