import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"

import Slider from "react-slick";
function SampleNextArrow(props) {
  const { css, style, onClick } = props;
  return (
    <div
      className={css}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) { 
  const { css, style, onClick } = props;
  return (
    <div
      className={css}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

class PageTemplate extends Component {
  componentDidMount() {
  }
  render() {
    const page = this.props.data.wordpressPage;
    

    return (
      <Layout>
      <div className="cbp-popup-wrap cbp-popup-singlePage cbp-popup-singlePage-open cbp-popup-transitionend cbp-popup-ready" style={{display:'block'}}>
<div className="cbp-popup-content-wrap"><div className="cbp-popup-content"><div className="portfolio-content">
   
    <div className="cbp-l-project-title">{page.title}</div>
    <div class="cbp-l-project-subtitle">{page.acf.tagline}</div>

    <div className="cbp-l-project-container">
        <div className="cbp-l-project-desc">
            <div className="cbp-l-project-desc-title">
                <span>Biography</span>
            </div>
            <div className="cbp-l-project-desc-text" dangerouslySetInnerHTML={{__html: page.content}}></div>
        </div>
        <div className="cbp-l-project-details">
            <div className="cbp-l-project-details-title">
                <span>I AM</span>
            </div>
            <ul className="cbp-l-project-details-list">
                <li><strong>College</strong>Stony Brook University</li>
                <li><strong>Date of birth</strong>February 20, 1984</li>
                <li><strong>Email</strong>dave.luke@gmail.com</li>
                <li><strong>Phone</strong>(123) 456-7890</li>
            </ul>
        </div>
    </div>

    </div>
    </div>
    </div>
        <div className="cbp-popup-navigation-wrap">
          <div className="cbp-popup-navigation">
            <Link to={'/pets'} className="cbp-popup-close"></Link>
            </div>
            </div>
            </div>
      </Layout>
    )
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PageTemplate


export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf {
        tagline
      }
    }
    
  }`