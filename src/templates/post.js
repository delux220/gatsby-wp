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

class CloudinaryImage extends Component {

  constructor(props) {
    super(props);
    this.state = {loaded: false, src1: '', src2: ''};
  }

  componentDidMount() {
    var { src, style, className } = this.props;
    src = src.replace('https://', '');
    src = src.replace('http://', '');
    src = src.replace('res.cloudinary.com/', '');
    var parts = src.split('/');
    var domain = parts.shift();
    var image = parts[parts.length-1];
    var newSrc = 'https://res.cloudinary.com/'+domain+'/';
    var lowQ = 'https://res.cloudinary.com/'+domain+'/';
    if (this.props.height) {
      newSrc += 'h_'+this.props.height+',';
      lowQ += 'h_'+Math.floor(this.props.height/3)+',';
    }
    if (this.props.width) {
      newSrc += 'w_'+this.props.width+',';
      lowQ += 'w_'+Math.floor(this.props.width/3)+',';
    }

    lowQ += 'c_fill,q_10/'+parts.join('/');
    newSrc += 'c_fill/'+parts.join('/');

    var i = new Image();
    i.onload = function() {
      this.setState({loaded: true});
    }.bind(this);
    i.src = newSrc;

    this.setState({src1: lowQ, src2: newSrc, className: className, style: style});


  }

  render() {
    var overlay = <div></div>;
    if (this.state.loaded) {
      overlay = <img src={this.state.src2} style={{position:'absolute', top:'0px', left: '0px', height:'100%', width:'100%'}} className="animated fadeIn"/>;
    }
    
    return <div style={{position:'relative'}}><img src={this.state.src1} style={{width:'100%', filter: 'blur(15px)'}} className={this.state.loaded?"animated fadeOut":""}/>{overlay}</div>;
  }
  

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
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props)
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
    <div className="cbp-l-project-subtitle">{post.acf.tagline}</div>
    <Slider {...settings} >
        {post.acf.image_1&&<div>
            <CloudinaryImage src={post.acf.image_1.url} width={'1120'} height={'800'} style={{maxWidth:'100%'}}/>
          </div>}

          {post.acf.image_2&&<div>
            <CloudinaryImage src={post.acf.image_2.url} width={'1120'} height={'800'} style={{maxWidth:'100%'}}/>
          </div>}

          {post.acf.image_3&&<div>
            <CloudinaryImage src={post.acf.image_3.url} width={'1120'} height={'800'} style={{maxWidth:'100%'}}/>
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
    <div className="cbp-popup-navigation-wrap"><div className="cbp-popup-navigation"><Link to={'/pets'} className="cbp-popup-close"></Link><Link to={this.props.pathContext.next}><div className="cbp-popup-next" title="Next (Right arrow key)" ></div></Link><Link to={this.props.pathContext.prev}><div className="cbp-popup-prev" ></div></Link><div className="cbp-popup-singlePage-counter">1 of 8</div></div></div>
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
      tagline
    }
      
    }
    
  }
`