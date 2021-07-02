import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderComponet extends Component {
    render() {
        return (
            <div>
              <header>
                  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand" text-center>Employee Management app</div>
                  </nav>
                      </header>  
            </div>
        );
    }
}

HeaderComponet.propTypes = {

};

export default HeaderComponet;