import { useRef, useState, useEffect, SetStateAction } from 'react';
import { issueStore } from '../hooks/store';
import { IIssue } from '../pages/Main';
import styled from 'styled-components';

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
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddForm = ({ onSubmit, edit, setOpenModal }: IProps) => {
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

    if (edit) {
      onSubmit(newIssue, edit.status);
    } else {
      onSubmit(newIssue);
      setOpenModal(false);
    }
  };

  useEffect(() => {
    if (edit) {
      // console.log('edit:>> ', edit.status);
      setNewWho(edit.who);
      setNewStatus(edit.status);
    }
  }, []);

  const BUTTONDISABLED = newWho && newStatus;
  return (
    <ContainerWrapper>
      <ContainerBody>
        <InputWrapper>
          제목
          <InputModal
            type="text"
            defaultValue={edit ? edit.title : null}
            placeholder="제목을 입력하세요"
            ref={titleRef}
          />
        </InputWrapper>
        {edit ? (
          <InputWrapper>
            상태
            <Select
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
            </Select>
          </InputWrapper>
        ) : (
          ''
        )}
        <InputWrapper>
          <label htmlFor="deadDate">마감일</label>
          <InputModal
            type="datetime-local"
            ref={dateRef}
            defaultValue={edit ? edit.deadDate : null}
          />
        </InputWrapper>
        <AssignWrapper>
          <label htmlFor="deadDate">담당자</label>
          <AssignInput>
            <SearchInput
              type="text"
              onChange={onChangeData}
              defaultValue={edit ? edit.who : null}
            />
            <AssignSelect
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
            </AssignSelect>
          </AssignInput>
        </AssignWrapper>
        <label htmlFor="content">내용</label>
        <ContentInput
          defaultValue={edit ? edit.content : null}
          name=""
          id="content"
          placeholder="내용을 입력하세요"
          ref={contentRef}
        ></ContentInput>
        <BtnWrapper>
          <SaveBtn
            type="submit"
            onClick={onSave}
            className="border bg-gray-100"
            disabled={!BUTTONDISABLED}
          >
            저장
          </SaveBtn>
        </BtnWrapper>
      </ContainerBody>
    </ContainerWrapper>
  );
};

export default AddForm;

const ContainerWrapper = styled.div`
  width: 500px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
`;

const ContainerBody = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AssignWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AssignInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81%;
`;

const SearchInput = styled.input`
  width: 47%;
  height: 20px;
`;

const AssignSelect = styled.select`
  width: 47%;
  height: 25px;
`;

const Select = styled.select`
  width: 81%;
  height: 25px;
`;

const InputModal = styled.input`
  width: 80%;
  height: 25px;
  outline: none;
`;

const ContentInput = styled.textarea`
  height: 180px;
  margin-top: 10px;
  outline: none;
  resize: none;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SaveBtn = styled.button`
  width: 70px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #003049;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
`;
