import React, { ReactNode } from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header';

type Props = {
  children: ReactNode | ReactNode[];
};

const MainLayout: React.FC<Props> = ({ children }): JSX.Element => (
  <>
    <Header />
    <StyledChildrenContainer>{children}</StyledChildrenContainer>
    {/* <Footer /> */}
  </>
);

export default MainLayout;

const StyledChildrenContainer = styled.div`
  margin-top: 60px;
`;
