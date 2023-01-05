import Issue from './Issue';
import styled from 'styled-components';

const Book = ({ item }: any) => {
  console.log('🚀 ~ file: Book.tsx:6 ~ Book ~ item', item);
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

const CardTitle = styled.div`
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #3b3b3b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardItem = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
