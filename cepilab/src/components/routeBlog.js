import React from 'react';
import FooterComp from './Footer.js';
import HeaderComp from './Header.js';
import Blog from './Blog.js';

function RouteBlog(props)
{
    return (
        <>
            <HeaderComp />
            <Blog />
            <FooterComp />
        </>          
      );
}
export default RouteBlog;