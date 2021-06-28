import React from 'react'
import './App.scss';
import Form from './components/form.jsx'
import CardList from './components/cardList.jsx'

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  deleteNewProfile = (profileData) => {
    const deletedProfile = this.state.profiles.splice(this.state.profiles.findIndex(obj => obj.id === parseInt(profileData.id)),1)
  	this.setState(prevState => ({
    	profiles: prevState.profiles
    }));
  };
	render() {
  	return (
    	<div className="wrapper">
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList deleteCard={this.deleteNewProfile} profiles={this.state.profiles} />
    	</div>
    );
  }
}

export default App;
