import { useState, useEffect } from 'react';
import { issueStore } from '../hooks/store';

import styled from 'styled-components';

import Book from '../components/Book';
import Loading from '../components/Loading';
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
    }, 500);
  }, []);

  // console.log('main page', IssueData);

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <Wrapper>
          <CardContainer>
            {IssueData && (
              <Dnd
                data={IssueData}
                render={(v) => <Book item={v} />}
                onDrop={(v) => dndIssueData(v)}
              />
            )}
          </CardContainer>
        </Wrapper>
      )}
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .container {
    width: 390px;
    box-sizing: border-box;
  }
  .book {
    list-style: none;
    padding-left: 0;
  }
`;

const CardContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;
