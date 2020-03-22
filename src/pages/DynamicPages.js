import React, { useState, useEffect } from 'react';
import PostGrid from '../components/PostGrid';
import Header from '../components/Header';

const DynamicPages = props => {
  if (localStorage.token) {
  } else {
    props.history.push('/login');
  }
  return (
    <>
      <Header />
      <div className="pt-3">
        <div className="container">
          <PostGrid />
        </div>
      </div>
    </>
  );
};

export default DynamicPages;
