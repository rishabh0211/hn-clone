import styled from "styled-components";

export default styled.nav`
  padding: 1rem;
  display: flex;

  .logo {
    display: flex;
    align-items: center;
    .logo__img {
      width: 3rem;
    }
    .logo__title {
      margin-left: 1rem;
    }
  }

  .links {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    .links__item {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: .1rem;
      transition: transform .3s ease-in-out;
      padding: .5rem 0;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 1rem;
      }
      &:hover {
        transform: translateY(-.2rem);
        text-decoration: underline;
      }
      &.active {
        background: #ffba69;
        color: #fff;
      }
    }
  }
`;