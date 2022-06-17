import React from 'react';
import Article from '../article/article.jsx';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="ak__blog section__padding" id="blog">
      <h1 className="heading__text">Blogs</h1>
    <div className="ak__blog-container">
      <div className="ak__blog-container_groupA">
        <Article imgUrl={blog01} text="Artificial Intelligence in agriculture will not only help farmers to automate their farming but also shifts to precise cultivation for higher crop yield and better quality while using fewer resources. How Artificial Intelligence can change the Agriculture sector? " link="https://www.linkedin.com/posts/arraykart_arraykart-techable-wehandleit-activity-6808356107510194176-RLQA?utm_source=linkedin_share&utm_medium=member_desktop_web"/>
      </div>
      <div className="ak__blog-container_groupB">
        <Article imgUrl={blog02}  text="Arraykart B2B is the the future. Let us explore how it is?" link="https://www.linkedin.com/posts/arraykart_arraykart-wehandleit-agriculture-activity-6857634022621790208-EERR?utm_source=linkedin_share&utm_medium=member_desktop_web"/>
        <Article imgUrl={blog03} text="Water Management" link="https://www.linkedin.com/posts/arraykart_arraykart-wehandleit-irrigation-activity-6848889282501890048-asKu?utm_source=linkedin_share&utm_medium=member_desktop_web"/>
        <Article imgUrl={blog04}  text="Modern Farming" link="https://www.linkedin.com/posts/arraykart_problem-and-solution-of-agriculture-in-2021-activity-6847139456500215808-sqg2?utm_source=linkedin_share&utm_medium=member_desktop_web"/>
        <Article imgUrl={blog05}  text="Technology creates difference!" link="https://www.linkedin.com/posts/arraykart_arraykart-wehandleit-technology-activity-6930412757318017024-G_Lf?utm_source=linkedin_share&utm_medium=member_desktop_web"/>
      </div>
    </div>
  </div>
);

export default Blog;