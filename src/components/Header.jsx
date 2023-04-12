import React from "react";

function Header() {
  const headerStyle = {
    backgroundColor: "rgba(0,0,0,0.4)",
    color: "#ff6a95",
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>FeedBack UI</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {};

export default Header;
