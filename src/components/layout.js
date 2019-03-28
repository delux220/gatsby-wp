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

                    <Link to="/bagel" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Bagel</Link>
                    <Link to="/vivariums" className="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase">Vivariums</Link>

                </div>
                <div className="list-group-item">
                    <address>
                        Queens, NY 11375<br/>
                        <a href="#map" data-toggle="modal"><i className="fa fa-map-o" aria-hidden="true"></i></a>
                    </address>
                    <address>
                        <strong>Your Name</strong><br/>
                        <a href="mailto:dave.luke@gmail.com">dave.luke@gmail.com</a>
                    </address>
                </div>
            </div>
          </div>

        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
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

