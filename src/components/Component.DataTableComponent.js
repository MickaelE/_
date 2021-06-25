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
                                    post.sizes.map( sizes =>(
                                        post.parents.map( parents =>(
                                <li key={post.id} align="start">
                                    <div>
                                        <p className="title">{ownData.name}</p>
                                        <table id ="ownd" className="table">
                                            <caption>Storlekar</caption>
                                            <tr>
                                                <th>Åldersgrupp</th>
                                                <th>Adress</th>
                                                <th>Postnummer</th>
                                                <th>Telefon</th>
                                                <th>email</th>
                                            </tr>
                                            <tr>
                                                <td>{ownData.lag}</td>
                                                <td>{ownData.address}</td>
                                                <td>{ownData.zip}</td>
                                                <td>{ownData.myPhone}</td>
                                                <td>{ownData.myEmail}</td>
                                            </tr>
                                        </table>
                                        <table id ="size" className="table">
                                            <caption>Föräldrar</caption>
                                            <tr>
                                            <th>Tröja</th>
                                                <th>Shorts</th>
                                                <th>Strumpor</th>
                                            </tr>
                                            <tr>
                                                <td>{sizes.shirt}</td>
                                                <td>{sizes.shorts}</td>
                                                <td>{sizes.socks}</td>
                                            </tr>
                                        </table>
                                        <table id ="mamma" className="table">
                                            <tr>
                                                <th>Mamma</th>
                                                <th>TelefonNr</th>
                                                <th>Email</th>
                                            </tr>
                                            <tr>
                                                <td>{parents.momsName}</td>
                                                <td>{parents.momsPhone}</td>
                                                <td>{parents.momsMail}</td>
                                            </tr>
                                        </table>
                                        <table id ="pappa" className="table">

                                            <tr>
                                                <th>Pappa</th>
                                                <th>TelefonNr</th>
                                                <th>Email</th>
                                            </tr>
                                            <tr>
                                                <td>{parents.dadsName}</td>
                                                <td>{parents.dadsPhone}</td>
                                                <td>{parents.dadsMail}</td>
                                            </tr>
                                        </table>

                                    </div>
                                </li>
                                        ))  ))
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