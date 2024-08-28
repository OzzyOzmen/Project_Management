import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title }) => (
  <ReactHelmet title={`${title} | Project Management`} />
);

export default Helmet;
