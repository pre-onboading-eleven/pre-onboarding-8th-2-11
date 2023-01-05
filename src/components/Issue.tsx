import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IIssue } from '../pages/Main';

interface IProps {
  mark: IIssue;
}

const Mark = ({ mark }: IProps) => {
  const navigate = useNavigate();

  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (
    e: React.DragEventHandler<HTMLDivElement> | any
  ) => {
    // e.dataTransfer.setData('cardInfo', JSON.stringify({ id, status }));
    e.target.className += ' border';
    let targetCardId = e.target.id;
    console.log('🚀 ~ file: Issue.tsx:20 ~ Mark ~ targetCardId', targetCardId);
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };

  const dragEndHandler = () => {
    setOnHold(false);
  };

  return (
    <div
      onClick={() => navigate(`/issue/${mark.id}`, { state: mark })}
      className="group mb-1 box-border cursor-pointer rounded border-2 border-cyan-400 bg-white p-1 hover:bg-gray-50"
    >
      <div
        id={String(mark.id)}
        className={`card ${onHold ? 'hidden' : ''}`}
        draggable="true"
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      >
        <h3 className="m-1 font-medium text-slate-700">
          {mark.id}.{mark.title}
        </h3>
        <p className="m-1 text-sm text-gray-500">{mark.content}</p>
        <p>{mark.deadDate}</p>
        <p>담당자 : {mark.who}</p>
      </div>
    </div>
  );
};

export default Mark;
