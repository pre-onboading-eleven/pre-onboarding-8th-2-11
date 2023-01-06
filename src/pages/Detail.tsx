import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

import { issueStore } from '../hooks/store';
import AddForm from '../components/AddForm';
import { IIssue } from './Main';

interface IType {
  [key: string]: string;
}

const TYPE: IType = {
  todo: '할 일',
  doing: '진행 중',
  done: '완료',
};

interface PropsType {
  mark: IIssue;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Detail = ({ mark, setOpenModal }: PropsType) => {
  const { delIssue, updateIssueData } = issueStore();
  const navigate = useNavigate();
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const onSubmit = (newIssue: IIssue, prevStatus: string) => {
    updateIssueData(newIssue, prevStatus);
    toggleEditing();
  };

  const deadDate = mark?.deadDate?.split('T').join(' ');
  return (
    <ModalWrapper onClick={(e) => e.stopPropagation()}>
      <ContainerHeader>
        <CloseBtn
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(false);
          }}
        >
          X
        </CloseBtn>
      </ContainerHeader>
      {isEditing ? (
        <ContainerWrapper>
          <AddForm edit={mark} onSubmit={onSubmit} />
        </ContainerWrapper>
      ) : (
        <ContainerWrapper>
          <DetailWrapper>
            <DetailHeader>
              <h1>{mark.title}</h1>
            </DetailHeader>
            <DetailBody>
              <p>상태 : {TYPE[mark?.status as string]}</p>
              <p>마감일 : {deadDate}</p>
              <p>담당자 : {mark.who}</p>
              <p>내용</p>
              <ContentDiv>{mark.content}</ContentDiv>
            </DetailBody>
            <DetailFooter>
              <SubmitBtn
                onClick={(e) => {
                  e.stopPropagation();
                  toggleEditing();
                }}
              >
                {isEditing ? '취소' : '수정'}
              </SubmitBtn>
              <DeleteBtn
                onClick={(e) => {
                  e.stopPropagation();
                  delIssue(mark.status, mark.id);
                  navigate('/');
                }}
              >
                삭제
              </DeleteBtn>
            </DetailFooter>
          </DetailWrapper>
        </ContainerWrapper>
      )}
    </ModalWrapper>
  );
};

export default Detail;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(44, 43, 43, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerWrapper = styled.div`
  width: 500px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
`;

const ContainerHeader = styled.div`
  height: 70px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const DetailWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

const DetailHeader = styled.div``;

const DetailBody = styled.div``;

const ContentDiv = styled.div`
  height: 110px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const DetailFooter = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #003049;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #c1121f;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
`;
