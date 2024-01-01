import styled from "styled-components";

export const Slogan = styled.div`
  @media (min-width: 320px) {
    font-size: 10px;
    color: var(--main-blue-text);
    text-align: center;
    margin-top: 30px;

    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* padding: 10px 20px; */
    color: var(--main-blue-text);
    text-align: center;
  }
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 100px;
  }
`;

export const ImageContainer = styled.div`
  position: relative; 
  display: inline-block; 
`;