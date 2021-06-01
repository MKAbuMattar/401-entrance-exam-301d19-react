import React, { Component, Fragment } from 'react';

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <nav>
            <ul>
              <li><a href="/">Homepage</a></li>
              <li><a href="/favorite">favorite</a></li>
            </ul>
          </nav>
        </header>
      </Fragment>
    )
  }
}

export default Header;
