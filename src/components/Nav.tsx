import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddIssueInput from '../pages/AddIssueInput';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setOpenModal(true);
  };
  return (
    <NavWrapper>
      <Logo
        onClick={() => {
          navigate('/');
        }}
      >
        WANTED TEAM 11
      </Logo>
      <AddIssue onClick={showModal}>Add</AddIssue>
      {openModal && <AddIssueInput setOpenModal={setOpenModal} />}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  height: 70px;
  border-bottom: 1px solid gray;
  padding: 0 70px 0 70px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AddIssue = styled.button`
  background-color: #c1121f;
  &:hover {
    background: #db6565;
    color: white;
    transition: 0.5s;
  }
  width: 50px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
`;

export default Nav;
