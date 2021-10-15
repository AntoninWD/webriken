import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

const AuthWrapper: React.FC = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <div className='lds-hourglass load'></div>;
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section``;
export default AuthWrapper;
