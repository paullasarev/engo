import React from 'react';
import styles from "../style/layout.css";
import Header from './header';

const Layout = React.createClass({
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <Header/>
        </div>
      </div>
    );
  }

});

export default Layout;