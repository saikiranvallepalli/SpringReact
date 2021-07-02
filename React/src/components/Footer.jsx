import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    < nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <span className="text" >All Rights Reserved--Sai kiran@vsk</span>
                    </nav>
                </footer>
            </div>
        );
    }
}

Footer.propTypes = {

};

export default Footer;