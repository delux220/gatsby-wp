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

class PostTemplate extends Component {
  componentDidMount() {
  }
  render() {
    const post = this.props.data.wordpressWpInterests;
    console.log(post);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow css={'cbp-nav-prev'}/>,
      nextArrow: <SampleNextArrow css={'cbp-nav-next'}/>,
      className: 'cbp-slider',
      dotsClass: 'cbp-nav',
      appendDots: dots => (
        <div>
        <ul className="cbp-nav-pagination" style={{listStyleType: 'none'}}>
        {dots} 
        </ul>
        </div>
      ),
      customPaging: i => (
        
        <div
          className="cbp-nav-pagination-item" />
        
      )
    };

    return (
      <Layout>
      <div className="cbp-popup-wrap cbp-popup-singlePage cbp-popup-singlePage-open cbp-popup-transitionend cbp-popup-ready" style={{display:'block'}}>
<div className="cbp-popup-content-wrap"><div className="cbp-popup-content"><div className="portfolio-content">
   
    <div className="cbp-l-project-title">{post.title}</div>
    <div className="cbp-l-project-subtitle">by Dave</div>
    <Slider {...settings} >
        {post.acf.image_1&&<div>
            <img src={post.acf.image_1.url} style={{maxWidth:'100%'}}/>
          </div>}

          {post.acf.image_2&&<div>
            <img src={post.acf.image_2.url} style={{maxWidth:'100%'}}/>
          </div>}

          {post.acf.image_3&&<div>
            <img src={post.acf.image_3.url} style={{maxWidth:'100%'}}/>
          </div>}

    </Slider>
    <div className="cbp-l-project-container">
        <div className="cbp-l-project-desc">
            <div className="cbp-l-project-desc-title">
                <span>Description</span>
            </div>
            <div className="cbp-l-project-desc-text" dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
        <div className="cbp-l-project-details">
            <div className="cbp-l-project-details-title">
                <span>Project Details</span>
            </div>
            <ul className="cbp-l-project-details-list">
                <li><strong>Client</strong>John Doe</li>
                <li><strong>Date</strong>22 December 2016</li>
                <li><strong>Categories</strong>Logo, Graphic</li>
            </ul>
            
        </div>
    </div>
      <div>

      </div>

    
    </div>
    </div>
    </div>
    <div className="cbp-popup-navigation-wrap"><div className="cbp-popup-navigation"><Link to={'/pets'} className="cbp-popup-close"></Link><div className="cbp-popup-next" title="Next (Right arrow key)" ></div><div className="cbp-popup-prev" ></div><div className="cbp-popup-singlePage-counter">1 of 8</div></div></div>
       </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate


export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpInterests(id: { eq: $id }) {
      title
      content
      acf {
      image_1{
        url
      }
      image_2 {
        url
      }
      image_3 {
        url
      }
    }
      
    }
    
  }
`