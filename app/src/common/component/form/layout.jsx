import React from 'react';
import styled from 'styled-components';

export const ContainerVertical = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const ContainerHorizontal = styled.div`
  display: flex;
  flex-flow: row wrap;
`;


export function VirtualBlock({children=null}){
  return children;
}
