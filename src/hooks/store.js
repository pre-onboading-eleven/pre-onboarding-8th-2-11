import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const initialData = {
  todo: [
    {
      id: 0, // 고유번호
      title: 'Title', // 제목
      content: 'ddd', // 내용
      deadDate: '2023-01-04T20:28', //마감일
      status: 'todo', // 상태
      who: '조민우',
      order: 0,
    },
  ],
  doing: [
    {
      id: 1, // 고유번호
      title: 'Title2', // 제목
      content: 'ddd2', // 내용
      deadDate: '2023-01-04T20:28', //마감일
      status: 'doing', // 상태
      who: '장태경',
      order: 0,
    },
  ],
  done: [
    {
      id: 2, // 고유번호
      title: 'Title', // 제목
      content: 'ddd', // 내용
      deadDate: '2023-01-04T20:28', //마감일
      status: 'done', // 상태
      who: '박민경',
      order: 0,
    },
  ],
};

const issueStore = create(
  devtools(
    persist(
      (set, get) => ({
        IssueData: initialData, //state
        setIssueData: (newIssue) => {
          set((state) => ({
            IssueData: {
              ...state.IssueData,
              todo: [...state.IssueData.todo, newIssue],
            },
          }));
        },
        delIssue: (key, delId) => {
          set((state) => ({
            IssueData: {
              ...state.IssueData,
              [key]: state.IssueData[key].filter((item) => item.id !== delId),
            },
          }));
        },
        updateIssueData: (newIssue, prevStatus) => {
          set((state) => ({
            IssueData: {
              ...state.IssueData,
              [prevStatus]: state.IssueData[prevStatus].filter(
                (item) => item.id !== newIssue.id
              ),
              [newIssue.status]: [
                ...state.IssueData[newIssue.status],
                newIssue,
              ],
            },
          }));
        },
        dndIssueData: (newIssues) => {
          set(() => ({
            IssueData: {
              ...newIssues,
            },
          }));
        },
      }),
      {
        name: 'issue-storage', // name of item in the storage (must be unique)
        // getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
      }
    )
  )
);

// redux devtools 사용하기
// const useStore = create(devtools(myStore));

export { issueStore };
