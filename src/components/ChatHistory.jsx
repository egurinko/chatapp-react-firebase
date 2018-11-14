import React, { Component } from "react";
import { Card, CardHeader, CardText, CardMedia } from "material-ui/Card";
import "../css/ChatHistory.css";

class ChatHistory extends Component {
  render() {
    const props = this.props;
    return (
      <Card className="Chat-History">
        <CardHeader title={props.senderUsername} avatar={props.senderPhoto} />
        {props.postedPhotoUrl ? (
          <CardMedia>
            <img
              className="Chat-History-Pic"
              src={props.postedPhotoUrl}
              alt="photo"
            />
          </CardMedia>
        ) : (
          <div />
        )}

        <CardText>{props.message}</CardText>
      </Card>
    );
  }
}

export default ChatHistory;
