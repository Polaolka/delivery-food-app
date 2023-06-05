import { HistoryStyled } from './History.styled';
import { HistoryForm } from '../HistoryForm/HistoryForm';
import { HistoryList } from '../HistoryList/HistoryList';

const HistoryEl = () => {
  return (
    <HistoryStyled>
      <HistoryForm />
      <HistoryList />
    </HistoryStyled>
  );
};
export default HistoryEl;