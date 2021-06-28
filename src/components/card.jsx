import React from 'react'
import './css/card/card.scss'

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} alt='' />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
        <button className="delete" onClick= { () =>
            this.props.deleteCall(profile)}>Delete</button>
    	</div>
    );
  }
}

export default Card;