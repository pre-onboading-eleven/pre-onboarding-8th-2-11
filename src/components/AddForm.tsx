import { useRef, useState, useEffect } from 'react';
import { issueStore } from '../hooks/store';

import { issueProcess } from '../pages/Main';

import { IIssue } from '../pages/Main';

const whoList = [
  '이호준',
  '노해리',
  '박민경',
  '유나영',
  '장태경',
  '조민우',
  '김동현',
  '박준서',
];

interface IProps {
  onSubmit: any;
  edit?: IIssue;
}

const AddForm = ({ onSubmit, edit }: IProps) => {
  const { IssueData } = issueStore();

  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const [whoKeyword, setWhoKeyword] = useState<string[]>([]);
  const [newWho, setNewWho] = useState<string>();
  const [newStatus, setNewStatus] = useState<string>('todo');

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;
    if (keyword.length >= 2) {
      const temp = whoList.filter((who) => who.toLowerCase().includes(keyword));
      setWhoKeyword(temp);
    }
  };

  const addNewStatus = (status: string) => {
    setNewStatus(status);
  };

  const onSave = () => {
    let newIssue = {};
    if (titleRef.current) {
      newIssue = {
        id: edit
          ? edit.id
          : IssueData['todo'].length > 0
          ? IssueData['todo'][IssueData['todo'].length - 1].id + 1
          : 0,
        title: titleRef?.current?.value,
        content: contentRef?.current?.value,
        deadDate: dateRef?.current?.value,
        who: newWho ?? edit.who,
        status: edit ? newStatus : 'todo',
        order: 0,
      };
    }
    edit ? onSubmit(newIssue, edit.status) : onSubmit(newIssue);
  };

  useEffect(() => {
    if (edit) {
      console.log('edit:>> ', edit.status);
      setNewWho(edit.who);
      setNewStatus(edit.status);
    }
  }, []);

  const BUTTONDISABLED = newWho && newStatus;
  return (
    <div className="flex flex-col m-10">
      {edit ? (
        <label htmlFor="">
          id:
          <input
            defaultValue={edit ? edit.id : null}
            className="my-1"
            type="text"
            placeholder="제목을 입력하세요"
            ref={idRef}
            disabled={edit}
          />
        </label>
      ) : (
        ''
      )}

      <input
        defaultValue={edit ? edit.title : null}
        className="my-1"
        type="text"
        placeholder="제목을 입력하세요"
        ref={titleRef}
      />

      <label htmlFor="content">
        <textarea
          defaultValue={edit ? edit.content : null}
          name=""
          id="content"
          placeholder="내용을 입력하세요"
          ref={contentRef}
        ></textarea>
      </label>
      <label htmlFor="deadDate">
        마감일
        <input
          type="datetime-local"
          ref={dateRef}
          defaultValue={edit ? edit.deadDate : null}
        />
      </label>
      <label htmlFor="deadDate">
        담당자
        <input onChange={onChangeData} defaultValue={edit ? edit.who : null} />
      </label>
      <select
        onChange={(e) => {
          setNewWho(e.target.value);
        }}
        defaultValue={edit ? edit.who : null}
      >
        <option value="">담당자를 선택하세요</option>
        {whoKeyword &&
          whoKeyword.map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
      </select>

      {edit ? (
        <select
          onChange={(e) => {
            addNewStatus(e.target.value);
          }}
          defaultValue={edit ? edit.status : null}
        >
          <option value="">상태를 선택하세요</option>
          {['todo', 'doing', 'done'].map((item, i) => {
            return (
              <option key={i} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      ) : (
        ''
      )}

      <button
        type="submit"
        onClick={onSave}
        className="border bg-gray-100"
        disabled={!BUTTONDISABLED}
      >
        저장
      </button>
    </div>
  );
};

export default AddForm;
