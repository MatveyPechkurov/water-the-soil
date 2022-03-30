import styled, {css, keyframes} from "styled-components";

const stylesSelector = (type: string) => {
  switch(type) {
    case 'soil':
      return soilStyles
    case 'rain':
      return rainStyles
    default:
      return emptyStyles
  }
}

const rainAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  70%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`

const soilAnimation = keyframes`
  from {
    transform: translateY(49vh);
  }
  to {
    transform: translateY(0);
  }  
`

export const Block = styled.div`
  width: 30px;
  height: 30px;
  ${(props: { type: string }) => stylesSelector(props.type)}
`

export const Wrapper = styled.div`
  border: 1px solid #000 ;
`

const emptyStyles = css`
  background: transparent;
`

const soilStyles = css`

  background: linear-gradient(#99962b,#5d742c);
  animation: 1s ${soilAnimation} cubic-bezier(1, 1.43, .76, .98);
`

const rainStyles = css`
  animation: 1s ${rainAnimation} cubic-bezier(.39, .74, 1, 1.22);
  background: linear-gradient(183deg, #37b4ef,#535e8a);
`
