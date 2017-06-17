import React, { Component } from 'react';


class SearchBar extends Component{
    constructor(){
        super();
        this.state = {term: ''}; 
    }

    render(){
        return(
            <div>
                <input value={this.state.term}
                onChange={e=>this.setState({term:e.target.value})}/>
            </div>
        );
    }    
}

export default SearchBar;