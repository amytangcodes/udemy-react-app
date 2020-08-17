import React from "react";
import { data } from "../api/cardData";
import Page from "../shared/Page";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const Project01 = () => {
  return (
    <Page
      heading="Project 1 | Communicating with Props"
      subheading="A very basic React practice creating a single card component that maps
    through an array of data to spit out a number of cards."
    >
      <div className="ui container comments">
        <ApprovalCard>
          <h1>Blarp</h1>
          <p>We are just passing stuff into the child component</p>
        </ApprovalCard>
        {data.map((item) => (
          <ApprovalCard key={item.id}>
            <CommentDetail
              author={item.author}
              date={item.date}
              text={item.text}
              avatar={item.avatar}
            />
          </ApprovalCard>
        ))}
      </div>
    </Page>
  );
};

export default Project01;
