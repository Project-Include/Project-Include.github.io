import React from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

type Props = LinkProps & {
  href: string;
};

const NavLink: React.FC<Props> = ({ href, children }): JSX.Element => (
  <StyledAnchorLink href={href}>{children}</StyledAnchorLink>
);

export default NavLink;

const StyledAnchorLink = styled(Link)<Props>`
  color: black;
  display: inherit;
  text-decoration: none;

  :hover {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }
`;
