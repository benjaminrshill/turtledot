import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <Link to='/Items' className={'menu-item ' + (this.props.location.pathname === '/Items' ? 'here' : '')}>
                    <div className='menu-icon'>
                        +
                    </div>
                    <div className='menu-text'>
                        Items
                    </div>
                </Link>
                <Link to='/Arrange' className={'menu-item ' + (this.props.location.pathname === '/Arrange' ? 'here' : '')}>
                    <div className='menu-icon'>
                        <span></span>
                    </div>
                    <div className='menu-text'>
                        Arrange
                    </div>
                </Link>
                <Link to='/Week' className={'menu-item ' + (this.props.location.pathname === '/Week' ? 'here' : '')}>
                    <div className='menu-icon'>
                        <span className='done'></span>
                    </div>
                    <div className='menu-text'>
                        This week
                    </div>
                </Link>
                <Link to='/History' className={'menu-item ' + (this.props.location.pathname === '/History' ? 'here' : '')}>
                    <div className='menu-icon'>
                        &#8592;
                    </div>
                    <div className='menu-text'>
                        History
                    </div>
                </Link>
            </nav>
        );
    }
}

export default withRouter(Nav);
