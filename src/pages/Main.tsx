import Book from '../components/Book';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import { issueStore } from '../hooks/store';
import styled from 'styled-components';
import Dnd from '../components/Dnd';

export interface IIssue {
  id?: number; // 고유번호
  title?: string; // 제목
  content?: string; // 내용
  deadDate?: string; //마감일
  status?: number; // 상태
  who?: string;
  order?: number;
}

export interface IIssueProcess {
  id: number;
  title: string;
  color: string;
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { IssueData, dndIssueData } = issueStore();
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
        <Wrapper>
          {IssueData && (
            <Dnd
              data={IssueData}
              render={(v) => <Book item={v} />}
              onDrop={(v) => dndIssueData(v)}
            />
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 1200px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .container {
    width: 390px;
    background-color: ${(props) => props.color};
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    border-radius: 10px;
  }
  .book {
    list-style: none;
    padding-left: 0;
  }
`;
