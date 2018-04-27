import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  border-bottom: 1px solid var(--color-warm-light);
  margin-bottom: 4rem;
`;

const PageHeader = ({ title }) => {
  console.log('title: ', title);
  return <Header>{title}</Header>;
};

export default PageHeader;