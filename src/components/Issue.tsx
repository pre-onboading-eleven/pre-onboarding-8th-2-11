import { useState } from 'react';
import Detail from '../pages/Detail';
import { IIssue } from '../pages/Main';

interface IProps {
  mark: IIssue;
}

const Mark = ({ mark }: IProps) => {
  const [onHold, setOnHold] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const dragStartHandler = (
    e: React.DragEventHandler<HTMLDivElement> | any
  ) => {
    e.target.className += ' border';
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };

  const dragEndHandler = () => {
    setOnHold(false);
  };

  const deadDate = mark?.deadDate?.split('T').join(' ');

  return (
    <div
      onClick={() => setOpenModal(!openModal)}
      className="group mb-1 box-border cursor-pointer rounded border-2 border-cyan-400 bg-white p-1 hover:bg-gray-50"
    >
      <div
        id={String(mark.id)}
        className={`card ${onHold ? 'hidden' : ''}`}
        draggable="true"
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      >
        <h3 className="m-1 font-medium text-slate-700">{mark.title}</h3>
        <p className="m-1 text-sm text-gray-500">{mark.content}</p>
        <p>{deadDate}</p>
        <p>담당자 : {mark.who}</p>
      </div>
      {openModal && <Detail mark={mark} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Mark;
