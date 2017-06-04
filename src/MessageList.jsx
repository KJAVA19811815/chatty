import React, {Component} from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    const messageItems = this.props.messages.map((message, index) =>
          <Message key={index} id={message.id} username={message.username}
          content={message.content}
          notification={message.notification}  />
        )

    return (
      <div>
        {messageItems}
      </div>
    )
  }
}
export default MessageList;