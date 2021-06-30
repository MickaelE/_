import React, {Component} from 'react';
import './table.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
export class DataTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch("https://xmie-ot-data.mdbgo.io/api/registrations")
            .then(response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result.data
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
        const columns = [{
            dataField: '_id',
            text: 'ID'
        }, {
            dataField: 'name',
            text: 'Namn'
        }, {
            dataField: 'lag',
            text: 'Åldergrupp'
        }, {
            dataField: 'myEmail',
            text: 'Email'
        }, {
            dataField: 'address',
            text: 'Adress'
        }, {
            dataField: 'zip',
            text: 'postnummer'
        }, {
            dataField: 'city',
            text: 'Stad'
        }
        ];

        const CustomerRow = (post, index) => {
            return (

                <tr key={post._id} className='even'>
                    <td> {post._id} </td>
                    <td>{post.name}</td>
                    <td>{post.lag}</td>
                    <td>{post.myEmail}</td>
                    <td>{post.address}</td>
                    <td>{post.zip}</td>
                    <td>{post.city}</td>
                </tr>
            )
        }

        const CustomerTable = posts.map(post =>
            post.ownData.map((cust, index) => CustomerRow(cust, index))
        )


        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <BootstrapTable keyField='_id' bootstrap4 ={true} columns={columns} data={CustomerTable} pagination={ paginationFactory() }  />
            );
        }
    }
}

export default DataTableComponent