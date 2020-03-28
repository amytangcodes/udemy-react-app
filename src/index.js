import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  const data = [
    {
      author: "Sam",
      date: "Aug 3",
      text: "Lorem ipsum",
      avatar: faker.image.avatar()
    },
    {
      author: "Bart",
      date: "Aug 28",
      text: "Lorem ipsum stuff",
      avatar: faker.image.avatar()
    },
    {
      author: "Cathy",
      date: "April 28",
      text: "Lorem ipsum stuff more stuff",
      avatar: faker.image.avatar()
    }
  ]

  console.log(data[0].avatar);


  return (
    <div>
      <div className="ui container comments">
        {data.map(item => (
          <ApprovalCard>
            <CommentDetail
              key={item.id}
              author={item.author}
              date={item.date}
              text={item.text}
              avatar={item.avatar}
            />
          </ApprovalCard>
        ))}
        <ApprovalCard>
          <h1>Blarp</h1>
          <p>We are just passing stuff into the child component</p>
        </ApprovalCard>
      </div>
    </div>
  );
};

// Take that component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));