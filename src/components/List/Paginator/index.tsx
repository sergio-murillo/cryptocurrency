import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { PaginatorIcon, PaginatorContainer, PaginatorNumber } from './styles';

enum PaginatorActionOptions {
  back = 'back',
  next = 'next'
}

interface PropsFromComponent {
  maxItems: number;
  itemsPerPage: number;
}

type Props = PropsFromComponent;

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
