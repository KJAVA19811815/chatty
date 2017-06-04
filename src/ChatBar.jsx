
import React, {Component} from 'react';

const defaultState = {
  username: '',
  content: ''
}

class ChatBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username:this.props.currentUser.name,
      content:""

    }
  }

  render() {
    return (

      <footer className="chatbar">
        <input onKeyPress={this._onKeyPressUser} className="chatbar-username"
          //value={this.state.username}
          placeholder={this.props.currentUser} onChange={this._nameChanged} />

        <input onKeyPress={this._onKeyPress} className="chatbar-message"
          //value={this.state.content}
          placeholder="Type a message and hit ENTER" onChange={this._contentChanged}/>

      </footer>
    )


  }

  _onKeyPress = (e) => {
    if(e.which === 13) {
      console.log('This is the props - User', this.props.currentUser);
      this.props.onSubmit(this.state);

    }
  }

  _contentChanged = (e) => {
    this.setState({content: e.target.value});
  }

  _onKeyPressUser = (e) => {
    console.log("THIS IS THE USER ")
    if(e.which === 13) {
      this.setState({username: e.target.value});
      this.props.onSubmit(this.state);
      //console.log(this);

    }
  }

  _nameChanged = (e) => {
    this.setState({username: e.target.value});
  }


}
export default ChatBar;