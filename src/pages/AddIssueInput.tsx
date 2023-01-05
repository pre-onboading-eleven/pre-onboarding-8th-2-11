import { useNavigate } from 'react-router-dom';
import { issueStore } from '../hooks/store';
import AddForm from '../components/AddForm';

import { IIssue } from './Main';

const whoList = ['이호준', '이혜미', ' 김별이', '김만중', '이호열'];

const AddIssueInput = () => {
  const navigate = useNavigate();

  const { setIssueData } = issueStore();
  const onSubmit = (newIssue: IIssue) => {
    setIssueData(newIssue);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center">
      <AddForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddIssueInput;
