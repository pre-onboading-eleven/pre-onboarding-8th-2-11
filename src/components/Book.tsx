import Issue from './Issue';
import styled from 'styled-components';

import { IIssue } from '../pages/Main';

const Book = ({ item }: any) => {
  return (
    <div>
      {item ? (
        <CardItem key={item.id}>
          <ItemWrapper>
            <Issue mark={item} />
          </ItemWrapper>
        </CardItem>
      ) : null}
    </div>
  );
};

export default Book;

const CardItem = styled.div`
  padding: 10px;
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;
