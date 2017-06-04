import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Nav from './nav.jsx';
import Message from './Message.jsx';



class App extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
  };

  componentDidMount() {

    this.sock = new WebSocket("ws://localhost:3001");

    this.sock.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("OBJECT ", JSON.parse(event.data));
      if(data.type === "incomingMessage") {
        //this.state.messages.push(data)
        //this.forceUpdate();
        const messages = this.state.messages;
        this.setState({messages: [data].concat(messages)})
      } else {
        this.setState({counter: data })
      }

      if(!data.username) {
        console.log("nothing")
      }



    }
    setTimeout(() => {
      const newMessage = {id:3, username:"Michelle", content:"hello there:"};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
    }, 3000);
  }
  render() {
    return (
      <div>

        <Nav
          counter={this.state.counter}
        />
        <MessageList
          messages={this.state.messages}

          />

          <Message
           messages={this.state.messages.notification}


          />
          <ChatBar
            onSubmit={(message) => {
            let updatedMessages = this.state.messages.slice();
            this.setState({currentUser: {name: message.username}})
            const newMessage = {currentuser: this.state.currentUser.name, username: message.username, content: message.content };

              newMessage["type"] = "postMessage";
              console.log("IS THE NOTIFICATION THERE " , newMessage)
              this.sock.send(JSON.stringify(newMessage));



            }
          }
            currentUser={this.state.currentUser.name}
         />
      </div>
    )
  }
}

export default App;
