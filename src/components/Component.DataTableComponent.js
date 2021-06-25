import React, { Component } from 'react';
import './table.css';

export class DataTableComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts :[]
        };
    }

    componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 posts
        fetch("https://xmie-ot-data.mdbgo.io/api/registrations")
            .then( response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded : true,
                        posts : result.data
                    });
                },

                // Handle error
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
    }
    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol>
                        {
                            posts.map(post => (
                                post.ownData.map( ownData =>(
                                <li key={post.id} align="start">
                                    <div>
                                        <p className="title">{ownData.name}</p>
                                        <p className="body">{ownData.lag}, {ownData.address}</p>
                                    </div>
                                </li>
                                ))
                            ))
                        }
                    </ol>
                </div>
            );
        }
    }
}
export default DataTableComponent