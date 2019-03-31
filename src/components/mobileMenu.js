import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class MobileMenu extends Component {
  constructor(props ) {
    super(props);
    this.state = {menuOpen: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }
render() {
  return <div className="d-block d-md-none">
                <nav className="navbar navbar-light">
                  <div className="container-fluid">
                    <div id="BtnMobilMenu" className="text-center">
                    <h3 style={{display:'inline-block'}}>Dave Luke</h3>
                        <button type="button" className="navbar-toggler" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </div>
                    <div className={"navbar-collapse collapse "+(this.state.menuOpen?'show animated fadeIn':'')} id="bs-example-navbar-collapse-1" style={{}}>
                      <ul className="navbar-nav js-filters-juicy-projects">
                        <li className="cbp-singlePage list-group-item text-center hvr-underline-from-center text-uppercase"><Link to={'/about-dave'} className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">About Dave</Link></li>
                    <li className="cbp-singlePage list-group-item text-center hvr-underline-from-center text-uppercase"><Link to="/interests/pets" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Meet the Pets</Link></li>
                    <li className="cbp-singlePage list-group-item text-center hvr-underline-from-center text-uppercase"><Link to="/interests/interests" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Interests</Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
}
}

MobileMenu.propTypes = {
}

export default MobileMenu
