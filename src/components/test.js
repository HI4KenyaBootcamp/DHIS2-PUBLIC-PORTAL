import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

  }
  componentDidMount(){
      this.fetch();
  }
 fetch(){

    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(
        posts => (
            this.setState({posts}
                )
        
        
        )
    )
 }
   
   
  render() {

    return (

     
        <div>
      <p>Hello World</p>
      <ul>
        {
        this.state.posts.map(post => <li>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
        )
        }

      </ul>
    </div>
    
    );
  }
  
}

export default Posts;