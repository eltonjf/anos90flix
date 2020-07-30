import styled from 'styled-components';

export const VideoCardContainer = styled.a`
 /* border: 2px solid;
  border-radius: 4px;
  */
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  /*border-radius: 10px; */
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: transform .2s;
  &:hover{
    
    margin-left:80px;
    margin-right:80px;
    transform: scale(1.5);
  
  }
  &:focus

 
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
