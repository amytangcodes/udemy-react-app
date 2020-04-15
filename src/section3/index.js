import React from 'react';
import { data } from '../api/cardData';
import Page from "../shared/Page";
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const Section3 = () => {

  return (
    <Page heading="Section 3">
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
    </Page>
  );
};

export default Section3;