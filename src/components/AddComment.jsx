// https://www.sanwebe.com/2014/08/css-html-forms-designs
import React from 'react';
//import useForm from '../hooks/useForm';
import useForm from '../hooks/useForm';

const initialValues = {
  name: '',
  email: '',
  comment: '',
};
// const Api = useFetch('https://jsonplaceholder.typicode.com/users');
const AddComment = ({ addForm }) => {
  const { values, handleChange, handleSubmit } = useForm(initialValues, addForm);

  // const addForm = () => {
  //   console.log(values);
  // };

  // const { values, handleChange, handleSubmit } = useForm(initialValues, addForm);
  // function addForm() {
  //   console.log(values);

  //   Api.post({
  //     values: values,
  //   })
  //     .then(data => {
  //       console.log('data-->', data);
  //     })
  //     .catch(err => {
  //       console.log('err', err);
  //       throw new err();
  //     });
  // }
  return (
    <>
      <div className="form-style-2">
        <div className="form-style-2-heading">Provide your information</div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <>
            <label htmlFor="name">
              <span>
                Name <span className="required">*</span>
              </span>
              <input
                type="text"
                className="input-field"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </label>
          </>
          <>
            <label htmlFor="email">
              <span>
                Email <span className="required">*</span>
              </span>
              <input
                type="text"
                className="input-field"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </label>
          </>
          <>
            <label htmlFor="field5">
              <span>
                Message <span className="required">*</span>
              </span>
              <textarea
                className="textarea-field"
                name="comment"
                value={values.comment}
                onChange={handleChange}
                required
              />
            </label>
          </>
          <>
            <label>
              <span> </span>
              <input type="submit" value="Submit" />
            </label>
          </>
        </form>
      </div>
    </>
  );
};

export default AddComment;

// import React from 'react';

// const AddComment = props => {
//   const { addComment, newComment, setNewComment } = props;

//   // onChangeHandler = e => {
//   //   setnewComment({ ...props, [e.target.name]: e.target.value });
//   // };

//   formSubmit = event => {
//     event.preventDefault();
//     console.log('Form Submit 👏🏻');
//     addComment();
//   };

//   return (
//     <>
//       {/* <form>
//         <input
//           type="text"
//           className="form-control"
//           value={newTask}
//           placeholder="Enter your name"
//           onChange={event => setNewTask(event.target.value)}
//         />
//         <input
//           type="email"
//           className="form-control"
//           value={newTask}
//           placeholder="Enter your emailid"
//           onChange={event => setNewTask(event.target.value)}
//         />
//         </form> */}
//       {/* <textarea rows="4" cols="50" /> */}
//       <form onSubmit={formSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your name"
//           value={newComment}
//           onChange={event => setNewComment(event.target.value)}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your emailid"
//           value={newComment}
//           onChange={event => setNewComment(event.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

// export default AddComment;
