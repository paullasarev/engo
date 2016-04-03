import React from 'react';
import styles from "../style/header.css";

const Header = React.createClass({

  getInitialState() {
      return {
          value: "",  
      };
  },

  onSearch() {

  },

  onChange(ev) {
    this.setState({value: ev.target.value})
  },

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}/>
        <div className={styles.search}>
          <input 
            className={styles.searchInput}
            placeholder="type to search"
            value={this.state.value}
            onChange={this.onChange}/>
          <div className={styles.searchButton} onClick={this.onSearch}/>
        </div>
      </div>
    );
  }

});

export default Header;