import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const SampleData = [
  {
    id: 0, // 고유번호
    title: '기본', // 제목
    content: '내용을채워주세요', // 내용
    deadDate: '2023-01-05T10:54', //마감일
    status: 0, // 상태
    who: '박준서',
  },
];

const issueStore = create(
  devtools(
    persist(
      (set, get) => ({
        IssueData: SampleData, //state
        setIssueData: (newIssue) =>
          set((state) => ({ IssueData: [...state.IssueData, newIssue] })),
        delIssue: (delId) =>
          set((state) => ({
            IssueData: state.IssueData.filter((item) => item.id !== delId),
          })),
        updateIssueData: (delId, newIssue) =>
          set((state) => ({
            IssueData: [
              ...get().IssueData.filter((item) => item.id !== delId),
              newIssue,
            ],
          })),
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
