import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

import { issueStore } from '../hooks/store';
import AddForm from '../components/AddForm';
import { IIssue } from './Main';

const TYPE = ['할 일', '진행 중', '완료'];

interface PropsType {
  mark: IIssue;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Detail = ({ mark, setOpenModal }: PropsType) => {
  const { delIssue, updateIssueData } = issueStore();
  // const location = useLocation();
  const navigate = useNavigate();
  // const [mark, setMark] = useState(location.state);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const onSubmit = (newIssue: IIssue) => {
    updateIssueData(newIssue.id, newIssue);
    // setMark(newIssue);
    toggleEditing();
  };

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
      <div>Mark detail page</div>
      {isEditing ? (
        <ContainerWrapper>
          <AddForm
            edit={mark}
            onSubmit={onSubmit}
            // toggleEditing={toggleEditing}
          />
        </ContainerWrapper>
      ) : (
        <>
          <p>id : {mark.id}</p>
          <p>제목 : {mark.title}</p>
          <p>내용 : {mark.content}</p>
          <p>마감일 : {mark.deadDate}</p>
          <p>상태 : {TYPE[mark.status]}</p>
          <p>담당자 : {mark.who}</p>
        </>
      )}
      <div>
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
            delIssue(mark.id);
            navigate('/');
          }}
        >
          삭제
        </DeleteBtn>
      </div>
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
  width: 600px;
  height: 540px;
  /* background-color: white; */
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

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  /* background-color: transparent; */
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #44c975;
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
  background-color: #e66b6b;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
`;
