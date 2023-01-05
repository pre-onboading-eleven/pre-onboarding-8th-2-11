import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddIssueInput from '../pages/AddIssueInput';

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  return (
    <nav className=" bg-main">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between text-sub">
          <Link
            to={'/'}
            className="my-2 space-x-1 rounded-full border p-2 font-bold"
          >
            wanted 11team
          </Link>
          <div className="flex items-center space-x-1 text-sm">
            <Link to={'/'}>Home</Link>
            <AddSpan onClick={showModal}>addIssue</AddSpan>
            {openModal && <AddIssueInput setOpenModal={setOpenModal} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

const AddSpan = styled.span`
  cursor: pointer;
`;

export default Nav;
