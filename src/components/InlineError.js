import React from "react";
import { Message } from "semantic-ui-react";

const InlineError = (props) => {
  return (
    <div>
      <Message negative size="mini">
        <Message.Header>{props.message}</Message.Header>
      </Message>
    </div>
  );
};

export default InlineError;
