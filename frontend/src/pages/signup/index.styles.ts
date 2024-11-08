import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  gap: 2rem;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 5rem;
    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
  }

  h2 {
    padding-bottom: 7rem;
  }
  div {
    padding-bottom: 1rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const InputIDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  position: relative;
`;

export const InputPassWordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  position: relative;
`;

export const ErrorMessage = styled.p`
  text-align: left;
  color: red;
  margin: 0;
  position: absolute;
  top: 90%;
  left: 0;
`;

export const SuccessMessage = styled.p`
  text-align: left;
  color: green;
  margin: 0;
  position: absolute;
  top: 90%;
  left: 0;
`;

export const DuplicateButtonWrapper = styled.div`
  margin-top: 25px;
  align-self: flex-start;
`;
export const LogoContainer = styled.div`
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 20px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 27%;
    height: auto;
    margin-right: -35px;
    &:last-child {
      margin-right: 0;
      margin-top: 12px;
    }
  }
`;
