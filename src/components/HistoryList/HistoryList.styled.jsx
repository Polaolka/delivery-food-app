import styled from '@emotion/styled';
// import { colors } from 'constants';
// import { mediaSizes } from 'constants';
// import { transition } from 'helpers';

export const HistoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 50px 10px 30px;
  border: 1px solid rgb(149, 157, 165);
  border-radius: 4px;
  width: 100%;
  margin: 0 auto;
`;

export const HistoryListEmpty = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  p {
    margin-top: 20px;
  }
`;
