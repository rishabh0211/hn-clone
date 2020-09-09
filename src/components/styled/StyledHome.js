import styled from "styled-components";

export default styled.main `
  background: ${({theme}) => theme.colors.lightGray};
  max-width: 100rem;
  width: 100%;
  margin: auto;
  min-height: 100vh;

  .list-container {
    margin-top: 1rem;
    padding: 0 1rem;
  }
`;