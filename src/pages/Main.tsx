import Book from '../components/Book';
import styled from 'styled-components';

export interface IIssue {
  id: number; // 고유번호
  title: string; // 제목
  content: string; // 내용
  deadDate: number | string; //마감일
  status: number; // 상태
  who: string;
}

export interface IIssueProcess {
  id: number;
  title: string;
  color: string;
}

export const issueProcess: IIssueProcess[] = [
  {
    id: 0,
    title: '할 일',
    color: '#ebebeb',
  },
  {
    id: 1,
    title: '진행 중',
    color: '#ffd2db',
  },
  {
    id: 2,
    title: '완료',
    color: '#bad6f9',
  },
];

const Home = () => {
  return (
    <div>
      <Wrapper>
        {issueProcess &&
          issueProcess.map((item) => {
            return (
              <ContainerWrapper
                key={item.id}
                color={issueProcess[item.id].color}
              >
                <Book item={item} />
              </ContainerWrapper>
            );
          })}
      </Wrapper>
    </div>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 1200px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ContainerWrapper = styled.div`
  width: 390px;
  background-color: ${(props) => props.color};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  border-radius: 10px;
`;
