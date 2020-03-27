import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  const data = [
    {
      author: "Sam",
      date: "Aug 3",
      text: "Lorem ipsum",
      avatar: faker.image.avater
    },
    {
      author: "Bart",
      date: "Aug 28",
      text: "Lorem ipsum stuff",
      avatar: faker.image.avatar()
    }
  ]

  return (
    <div>
      <div className="ui container comments">
        {data.map(item => (
          <CommentDetail
            key={item.id}
            author={item.author}
            date={item.date}
            text={item.text}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
};

// Take that component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));