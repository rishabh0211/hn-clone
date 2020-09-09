import styled from "styled-components";
import { hex2rgba } from "../../utils";
import theme from "../../styles/theme";

const { colors } = theme;

export default styled.ul`
  background: ${({ theme: { colors } }) => colors.ulBg};
  box-shadow: 0 .1rem 10rem ${hex2rgba(colors.black, 0.4)};
`;