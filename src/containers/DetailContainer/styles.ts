import { flex, mq } from '../../styles/commons';
import styled from '@emotion/styled';

export const DetailContainer = styled.div`
  ${flex('stretch', 'row', 'center')}
  ${mq[0]} {
    flex-direction: column;
  }
`;

export const DetailLists = styled.div`
  margin-left: 20px;
  width: 70%;
  ${mq[0]} {
    margin-top: 20px;
    margin-left: 0;
    width: 100%;
  }
`;

export const DetailCoin = styled.div`
  width: 30%;
  ${mq[0]} {
    width: 100%;
  }
`;

export const DetailTable = styled.div`
  margin-bottom: 0;

  &:first-of-type {
    margin-bottom: 20px;
  }
`;
