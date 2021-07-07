import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import '../index.min.css';

export default class Header extends Component {
    render () {
        return (
           <div>
                <div className="header">
                    <Link to='/welcome' className="header-name">Absolute mega perfect backgrounds!</Link>
                    <div className="header-menu">
                        <Link to='/randomBg' className="header-menu-link">Random background</Link>
                        <Link to='/galleryBg' className="header-menu-link">Gallery</Link>
                        <Link to='/ratingBg' className="header-menu-link">Rating background</Link>
                    </div>
                </div>
                
                
            </div>
        )
    }
}