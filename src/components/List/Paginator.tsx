import React from 'react';
import styled from '@emotion/styled';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { flex } from '../../styles/commons';
import { css, Theme, withTheme } from '@emotion/react';

enum PaginatorActionOptions {
  back = 'back',
  next = 'next'
}

interface PropsFromComponent {
  maxItems: number;
  itemsPerPage: number;
}

type Props = PropsFromComponent;

const stylePaginatorNumber = (props: { activated?: boolean, theme: Theme }) => {
  const { theme: { colors } } = props;
  
  return css`
    background-color: ${props.activated && colors.blue_1};
    color: ${props.activated ? colors.white : colors.dark_black};
    &:hover {
      background-color: ${colors.blue_2};
    }
  `;
};

const PaginatorIcon = styled.span`
  cursor: pointer
`;

const PaginatorContainer = styled.div`
  ${flex('center', 'row', 'center')}
`;

const PaginatorNumber = withTheme(styled.div`
  ${stylePaginatorNumber}
  padding: 12px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`);

const PaginatorAction: React.FC<{ action: PaginatorActionOptions }> = ({ action }) => {
  let icon: JSX.Element;
  switch(action) {
    case PaginatorActionOptions.next:
      icon = <FaAngleRight />;
      break;
    case PaginatorActionOptions.back:
      icon = <FaAngleLeft />;
      break;
  }
  
  return <PaginatorIcon>{icon}</PaginatorIcon>;
};

const Paginator: React.FC<Props> = ({ maxItems,  itemsPerPage}) => {
  const data = Array.from(Array(8).keys());

  return (
    <PaginatorContainer>
      <PaginatorAction action={PaginatorActionOptions.back}></PaginatorAction>
        {data.map((item, index) => {
          return <PaginatorNumber onClick={() => getResults(item)} key={index}>{item}</PaginatorNumber>;
        })}
      <PaginatorAction action={PaginatorActionOptions.next}></PaginatorAction>
    </PaginatorContainer>
  );
};

const getResults = (item: number) => {

};

export default Paginator;
