import { styled } from 'styled-components';

// App container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 30%;
  margin: auto;
  height: 100vh;

  @media screen and (max-width: 992px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
