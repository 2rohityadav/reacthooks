import React, { useEffect } from 'react';
import AddComment from '../components/AddComment';
import List from '../components/List';
import useFetch from '../hooks/useFetch';
import useForm from '../hooks/useForm';

// const initialValues = {
//   name: '',
//   email: '',
//   comment: '',
// };

const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [newList, setNewList] = React.useState([]);
  const { values } = useForm();

  const Api = useFetch('https://jsonplaceholder.typicode.com/users');
  // const Api = useFetch('http://localhost:8080/users');

  useEffect(() => {
    setLoading(true);
    Api.get().then(data => setList(data));
    // Api.get().then(data => {
    //   const dataLimit = data.slice(0, 10);
    //   setList(dataLimit);
    // });
    setLoading(false);
  }, []);

  //! ADD FORM
  const addForm = () => {
    console.log('form Submited-->', values);

    setLoading(true);
    Api.post({
      values,
    })
      .then(data => {
        console.log('data-->', data);
        // const _newList = [...newList, data].sort((a, b) => (a < b ? 1 : -1));
        // console.log('_newList-->', _newList);
        // setNewList(_newList);
        setLoading(false);
      })
      .catch(err => {
        console.log('err', err);
        throw new err();
      });

    // if (!newTask) return;
    // setLoading(true);
    // Api.post({
    //   description: newTask,
    //   done: false,
    // }).then(data => {
    //   const newList = [...list, data].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    //   setList(newList);
    //   setNewTask('');
    //   setLoading(false);
    // });
  };

  return (
    <div className="row">
      {loading ? <div className="loading" /> : ''}

      <div className="col-12">
        <ul className="list-group">
          <List list={list} />
        </ul>

        {/* Add Commments */}
        <hr />
        <AddComment addForm={addForm} />
      </div>
    </div>
  );
};

export default Dashboard;
