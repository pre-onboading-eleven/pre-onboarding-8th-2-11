import { issueStore } from '../hooks/store';
import { IIssueProcess, IIssue } from '../pages/Main';
import Issue from './Issue';
import styled from 'styled-components';

interface IProps {
  item: IIssueProcess;
}

const Book = ({ item }: IProps) => {
  const { IssueData } = issueStore();

  const selectIssue = IssueData.filter(
    (issue: IIssue) => item.id === issue.status
  );

  return (
    <>
      <div className=" bg-one-red my-3 mx-2 box-border h-fit max-h-full w-48 border border-solid shadow-lg">
        <div className="m-2 mb-3 items-center text-center justify-between text-xl font-bold text-slate-600">
          <CardTitle>{item.title}</CardTitle>
        </div>
        <div>
          {selectIssue
            ? selectIssue.map((mark: IIssue) => (
                <CardItem>
                  <ItemWrapper>
                    <Issue key={mark.id} mark={mark} />
                  </ItemWrapper>
                </CardItem>
              ))
            : null}
        </div>
      </div>
    </>
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
