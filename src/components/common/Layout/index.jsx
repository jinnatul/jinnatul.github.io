import React from 'react';
import { Footer } from '../../theme';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Global theme={"light"} />
      {children}
      <Footer />
    </>
  );
};
