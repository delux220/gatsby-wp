/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

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
                    <h3>Dave Luke</h3>
                </div>
                <div id="menu-links">

                    <Link to={'/about-dave'} className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">About Dave</Link>
                    <Link to="/pets" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Meet the Pets</Link>

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

