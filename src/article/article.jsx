import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <div className="ak__blog-container_article">
    <div className="ak__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="ak__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <a href={link} target="_blank">Read Full Article</a>
    </div>
  </div>
);

export default Article;