import React from 'react';
import './NavButton.css';

class NavButton extends React.Component {
  render() {
    return (
      <div className="menu_button_container">
        <div className="menu_button_top"/>
        <div className="menu_button_center"/>
        <div className="menu_button_bottom"/>
      </div>
    )
  }
}

export default NavButton;
