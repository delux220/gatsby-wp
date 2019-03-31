/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import MobileMenu from './mobileMenu';

import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container-fluid">

          <div className="d-none d-md-block menu">
            <div className="list-group cbp-l-filters-button js-filters-juicy-projects">
                <div data-filter="*" className="cbp-filter-item list-group-item logo">
                    <Link to={'/'}><img src="//res.cloudinary.com/meshed-nyc/w_520,c_fill/logo_ybsyp0.png" style={{maxWidth:'100%'}}/></Link>
                </div>
                <div id="menu-links">

                    <Link to={'/about-dave'} className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">About Dave</Link>
                    <Link to="/interests/pets" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Meet the Pets</Link>
                    <Link to="/interests/interests" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Interests</Link>

                </div>
                <div className="list-group-item">
                    <address>
                        Queens, NY 11375<br/>
                    </address>
                    <address>
                        <a href="mailto:dave.luke@gmail.com">dave.luke@gmail.com</a>
                    </address>
                </div>
            </div>
          </div>
          <MobileMenu/>

        </div>
          <div className="container-fluid" style={{maxWidth:'1400px'}}>
          {children}
         </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout

