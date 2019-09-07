import React from 'react';

function List({ list }) {
  return (
    <>
      {console.log('list 🚂')}
      <h3>List of comments email id's</h3>
      <ul>
        {list.map(data => {
          return <li key={data.id}>{data.email}</li>;
        })}
      </ul>
    </>
  );
}

export default List;
