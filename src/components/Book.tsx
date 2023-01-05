import { issueStore } from '../hooks/store';
import { IIssueProcess, IIssue } from '../pages/Main';
import Issue from './Issue';

interface IProps {
  item: IIssueProcess;
}

const Book = ({ item }: IProps) => {
  // const selectIssue = IssueData.filter(
  //   (issue: IIssue) => item.id === issue.status
  // );

  return (
    <>
      <div className=" bg-one-red my-3 mx-2 box-border h-fit max-h-full w-48 border border-solid shadow-lg">
        <div className="m-2 mb-3 items-center text-center justify-between text-xl font-bold text-slate-600">
          <div>{item.title}</div>
        </div>
        <div className="">
          {item ? (
            item.map((mark: IIssue) => <Issue key={mark.id} mark={mark} />)
          ) : (
            <hr className="border-3 mt-0 mb-3 border-white" />
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
