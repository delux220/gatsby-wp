import React, {Component} from "react"
import {graphql, Link } from "gatsby"

import PropTypes from "prop-types"
import Layout from "../components/layout"
import { Container, Row, Col } from 'react-grid-system';

class Pets extends Component {
  componentDidMount() {
  	
  }
  render() {

   const posts = this.props.data.allWordpressWpInterests;
 
  return <Layout>
  	  <div id="js-grid-juicy-projects" className="cbp cbp-caption-active cbp-caption-overlayBottomReveal cbp-ready">
  	  <div>
  	  <div className="row">
  	  	{posts.edges.map(function(edge) {
  	  		var post = edge.node;
  	  		return (<div className="col-md-3"><div className="cbp-item movie" style={{position:'relative'}}><div className="cbp-item-wrapper">
                        <div className="cbp-item-wrap">
                            <div className="cbp-caption">
                                <div className="cbp-caption-defaultWrap">
                                    <img src={post.acf.featured_image.url} alt="img3"/> </div>
                                <div className="cbp-caption-activeWrap">
                                    <div className="cbp-l-caption-alignCenter">
                                        <div className="cbp-l-caption-body">
                                            <div className="btn-group">
                                                <Link to={'/'+post.slug} className="cbp-singlePage btn" style={{width:'100%'}}>more info</Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cbp-l-grid-projects-title uppercase text-center uppercase text-center">{post.title}</div>
                            <div className="cbp-l-grid-projects-desc uppercase text-center uppercase text-center">{post.acf.tagline}</div>
                        </div>
                    </div></div></div>);
  	  	})}</div>
  	  </div>
  	  </div>
  </Layout>
}
}
Pets.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Pets

export const pageQuery = graphql`
  query {
    allWordpressWpInterests {
    	edges {
          node {
            id
            slug
            title
            featured_media {
              id
              source_url
            }
            acf {
            	featured_image {
            		url
            	}
            	tagline
            }
      
      
    }
    
  }
}
}
`
