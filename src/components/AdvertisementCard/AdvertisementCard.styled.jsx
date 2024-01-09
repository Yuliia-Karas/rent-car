import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 426 px;
 
`;

export const Image = styled.img`
  width: 290px;
  height: auto;
  border-radius: 5%;
  position: relative;
`;

export const Header = styled.h2`
  color: var(--main-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Model = styled.p`
  color: var(--main-blue-text);
`;

export const Info = styled.div`
  color: var(--light-grey-text);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 3px;
  justify-content: flex-start;
`;

export const InfoLast = styled.div`
  color: var(--light-grey-text);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  justify-content: flex-start;
`;

export const MainInfo = styled.div`
  display: flex;
  gap: 4px;
`;

export const MainLine = styled.div`
  display: flex;
  justify-content:space-between;
  margin-top:14px;
  margin-bottom:8px;
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: flex-start;
  gap:2px;
  margin-bottom:4px;
`;

export const ButtonLearnMore = styled.button`
  display: flex;
  width: 290px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: var(--main-blue-text);
  margin-top: 20px;

  color: var(--white-text);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: var(--dark-blue);
  }
`;

export const Heart = styled.img`
  position: absolute; 
  top: 14px; 
  right: 14px; 
  width: 18px; 
  height: 18px; 
  z-index: 1; 
  
`;

export const ImgContaiter = styled.div`
  position: relative;
  height: 210px;
`;