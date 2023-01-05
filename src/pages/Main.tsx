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
}

export const issueProcess: IIssueProcess[] = [
  {
    id: 0,
    title: '할 일',
  },
  {
    id: 1,
    title: '진행 중',
  },
  {
    id: 2,
    title: '완료',
  },
];

const Home = () => {
  return (
    <div className="flex h-screen items-start bg-sub p-4">
      <div className="flex justify-around w-full">
        {issueProcess &&
          issueProcess.map((item) => {
            // console.log('selectIssue', item.id, selectIssue);
            return (
              <div key={item.id}>
                <Book item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;

const test = styled.div`
  color: #222222;
`;
