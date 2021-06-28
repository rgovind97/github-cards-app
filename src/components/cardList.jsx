import React from 'react'
import Card from './card.jsx'

class CardList extends React.Component {
    state = { userName: '' };
    handleDelete = async (profile) => {
      this.props.deleteCard(profile);
      this.setState({ userName: '' });
    };
    render() {
    const profiles = this.props.profiles
    return (
      <div>
        {profiles.map(profile => <Card deleteCall={this.handleDelete} key={profile.id} {...profile}/>)}
      </div>
    );
    }
  }

  export default CardList;