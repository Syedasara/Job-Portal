import React from 'react';
 import "./header.css"
class Header extends React.Component{
    render(){
        return(
            <div id="head">
            {/* <img src={require('../../pics/logo1.jpg')} /> */}
                <p id="logo">KAMAOO.PK</p>
            </div>
        )
    }
}
export default Header