// import Book from '../components/Book';

import Book from '../components/Book';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import { issueStore } from '../hooks/store';

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
  const [loading, setLoading] = useState(true);
  const { IssueData } = issueStore();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0); //FIXME 시간 수정
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="flex h-screen items-start bg-sub p-4">
          <div className="flex justify-around w-full">
            {/* {issueProcess &&
              issueProcess.map((item) => {
                return (
                  <div key={item.id}>
                    <Book item={item} />
                  </div>
                );
              })} */}

            {IssueData &&
              Object.entries(IssueData).map(([key, value], i) => {
                console.log(IssueData[key]);
                return (
                  <div key={key}>
                    <h1>{key}</h1>
                    <Book item={IssueData[key]} />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
