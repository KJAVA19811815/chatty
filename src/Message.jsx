import React, {Component} from 'react';

class Message extends Component {

   _notification = (e) => {
    this.setState({notification: e.target.value});
  }
  render() {

    return (
      <main className="messages">
        <div className="message">
          <span className="message-username" >{this.props.username}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
        <div className="message system">
        {this.props.notification}
        </div>

      </main>


      );
  }
}
export default Message;
