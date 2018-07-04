import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "roomSeek" };

  render() {
    const { activeItem } = this.state;
    return (
      <div classNameName="app-header">
          <Menu inverted>
            <Menu.Item
              name="roomSeek"
              active={activeItem === "roomSeek"}
              onClick={this.handleItemClick}
            />
          </Menu>
      </div>
    );
  }
}

export default Header;
