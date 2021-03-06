import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'
import signInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 43.75rem;
`
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0rem);
  }
`
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 2.5rem 0;
    width: 21.25rem;
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 1.5rem;
      transition: color 0.2s;

      :hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ff9000;
    text-decoration: none;
    display: block;
    margin-top: 1.5rem;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    :hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 1.125rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`
