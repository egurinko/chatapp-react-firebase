import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

class ChatHistory extends Component {
  render() {
    const props = this.props;
    return (
      <Card className="Chat-History">
        <CardHeader title={props.senderUsername} avatar={props.senderPhoto} />
        <CardText>{props.message}</CardText>
      </Card>
    );
  }
}

export default ChatHistory;
