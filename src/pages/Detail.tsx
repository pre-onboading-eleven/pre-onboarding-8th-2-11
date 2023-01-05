import { useLocation, useNavigate } from 'react-router-dom';
import { useReducer, useState } from 'react';

import { issueStore } from '../hooks/store';
import AddForm from '../components/AddForm';
import { IIssue } from './Main';

const TYPE = ['할 일', '진행 중', '완료'];

const Detail = () => {
  const { delIssue, updateIssueData } = issueStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [mark, setMark] = useState(location.state);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);

  const onSubmit = (newIssue: IIssue, prevStatus) => {
    console.log('🚀 ~ file: Detail.tsx:18 ~ onSubmit ~ newIssue', newIssue);
    updateIssueData(newIssue, prevStatus);
    setMark(newIssue);
    toggleEditing();
  };

  return (
    <div>
      <div>Mark detail page</div>
      {isEditing ? (
        <div>
          <AddForm
            edit={mark}
            onSubmit={onSubmit}
            toggleEditing={toggleEditing}
          />
        </div>
      ) : (
        <>
          <p>id : {mark.id}</p>
          <p>제목 : {mark.title}</p>
          <p>내용 : {mark.content}</p>
          <p>마감일 : {mark.deadDate}</p>
          <p>상태 : {mark.status}</p>
          <p>담당자 : {mark.who}</p>
        </>
      )}
      <div className="item-center group-vi mr-3 justify-end group-hover:flex">
        <button
          onClick={() => toggleEditing()}
          className="mb-1 mr-1 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500"
        >
          {/* <PencilSquareIcon className='w-4 text-white' /> */}{' '}
          {isEditing ? '취소' : '수정'}
        </button>
        <button
          onClick={() => {
            delIssue(mark.status, mark.id);
            navigate('/');
          }}
          className="mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500"
        >
          {/* <TrashIcon className='w-4 text-white' /> */} 삭제
        </button>
      </div>
    </div>
  );
};

export default Detail;
