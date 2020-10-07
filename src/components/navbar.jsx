import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar render!");
    // return <div>Habit Tracker</div>;
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        {/* this.props.totalCount를 이용하여 부모(app)의 totalCount 데이터를 뿌려줌 */}
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
