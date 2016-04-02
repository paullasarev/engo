import React from 'react';
import styles from "../style/header.css";

const Header = React.createClass({
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}/>
        header
      </div>
    );
  }

});

export default Header;