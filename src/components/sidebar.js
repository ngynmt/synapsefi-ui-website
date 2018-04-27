import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data Import ----------------------------------------
// -----------------------------------------------------------------------------------------
import itemsSidebar from '../helpers/itemsSidebar';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  font-size: 1.6rem;
  line-height: 1;

  width: var(--width-sidebar);
  min-height: 100vh;

  background-color: var(--bg-color-sidebar);
  color: #fff;
  z-index: 100;
`;

const HeaderTitle = styled.div`
  height: var(--height-header);
  background-color: var(--bg-color-header);

  display: flex;
  align-items: center;

  font-size: 2.4rem;
  font-weight: 300;
  padding-left: 1.6rem;
`;

const NavbarItem = styled.div`
  cursor: pointer;
  padding: var(--padding-sidebar-item);

  &:hover {
    color: var(--color-default-font);
    background-color: var(--color-navbar-hover);
  }
`;

const Sidebar = ({ siteTitle }) => {
  console.log('siteTitle: ', siteTitle);
  return (
    <Wrapper>
      <HeaderTitle>{siteTitle}</HeaderTitle>
      {itemsSidebar.map(({ text, linkName }) => {
        return (
          <Link to={linkName}>
            <NavbarItem key={text}>{text}</NavbarItem>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Sidebar;
