import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 10rem;
    background: #ff9000;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    ::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 0.375rem 0.375rem 0 0.375rem;
      bottom: 1.25rem;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
    }
  }
  :hover span {
    opacity: 1;
    visibility: visible;
  }
`
