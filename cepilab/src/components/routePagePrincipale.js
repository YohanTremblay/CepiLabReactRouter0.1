import React from 'react';
import FooterComp from './Footer.js';
import HeaderComp from './Header.js';
import BlogList from './BlogList.js';


function PagePrinc(props)
{
    return (
        <>
            <HeaderComp />
            <BlogList />
            <FooterComp />
        </>          
      );
}
export default PagePrinc;