import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./components/ApprovalCard";
import Comment from "./components/Comment";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui comments">
        <h3 className="ui header dividing">Comments</h3>
        <ApprovalCard>
          <Comment
            avatarSrc={faker.image.avatar()}
            author="Radhika"
            days="Today at 4:00PM"
            text="This is great!!!!"
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            avatarSrc={faker.image.avatar()}
            author="Mayur"
            days="Today at 2:30AM"
            text="Dude don't say anything like an idiot :("
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            avatarSrc={faker.image.avatar()}
            author="Kaushal"
            days="Yesterday at 3:00PM"
            text="I am so happy here in Tampa guys. How you doin' ?"
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
