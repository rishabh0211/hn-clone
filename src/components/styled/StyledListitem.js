import styled from "styled-components";
import { hex2rgba } from "../../utils";

export default styled.li`
  padding: 1rem;
  font-weight: 300;
  &:not(:last-child) {
    border-bottom: ${({theme: {colors}}) => hex2rgba(colors.black, 0.2)} solid .1rem;
  }
  .title-container {
    font-size: 1.4rem;
    display: flex;
  }
  .title {
    margin-right: 1rem;
  }
  .info-container {
    display: flex;
    margin-top: .4rem;
    margin-left: 1rem;
  }
  .website {
    color: ${({ theme: { colors } }) => hex2rgba(colors.black, 0.4)};
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
  .attr {
    margin-right: .4rem;
  }
  .by {
    margin-right: .4rem;
  }
  .separator {
    width: .1rem;
    margin: .2rem 0.3rem 0 0;
    background: ${({ theme: { colors } }) => colors.black};
  }
`;