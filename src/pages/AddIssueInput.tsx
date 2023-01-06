import { useNavigate } from 'react-router-dom';
import { issueStore } from '../hooks/store';
import AddForm from '../components/AddForm';
import styled from 'styled-components';

import { IIssue } from './Main';
import { Dispatch, SetStateAction } from 'react';

interface modalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const AddIssueInput = ({ setOpenModal }: modalProps) => {
  const navigate = useNavigate();

  const { setIssueData } = issueStore();
  const onSubmit = (newIssue: IIssue) => {
    setIssueData(newIssue);
    navigate('/');
  };

  return (
    <ModalWrapper>
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
      <AddForm onSubmit={onSubmit} setOpenModal={setOpenModal} />
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(44, 43, 43, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
`;

export default AddIssueInput;
