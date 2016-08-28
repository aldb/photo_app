import React from 'react';
import NavBarComponent from './NavBarComponent.jsx';

class BoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            id:this.props.photo.id,
            url: this.props.photo.image_url[0],
            name:this.props.photo.name,
            times_viewed:this.props.photo.times_viewed,
            backgroundColor: 'white'
        }
    }

    onFavorite() {
        if(this.state.backgroundColor == 'white') {
            this.setState({backgroundColor: '#CECECE'});
            NavBarComponent.onFavorite();
        }
        else {
            this.setState({backgroundColor: 'white'});
            NavBarComponent.deFavorite();
        }
    }

    render() {
        var divStyle = {
            backgroundColor: this.state.backgroundColor
        };
        return(
            <div className='box' key={this.state.id} onClick={this.onFavorite.bind(this)} style={divStyle}>
                <img src={this.state.url}/>
                <span className="box-title">{this.state.name}</span>
                <span>&nbsp;🝯 {this.state.times_viewed}</span>
            </div>
        );
    }
}

export default BoxComponent;