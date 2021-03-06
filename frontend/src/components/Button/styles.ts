import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #ff9000;
  height: 3.5rem;
  border-radius: 10px;
  border: none;
  width: 100%;
  color: #312e39;
  margin-top: 1rem;
  transition: background 0.2s;

  :hover {
    background: ${shade(0.2, '#ff9000')};
  }

  button {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    font-weight: 600;
  }
`
