import React, {useState} from "react";

import * as WebDataRocksReact from './webdatarocks.react';

export class DataTableComponent extends React.Component {

    myRef = null;

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    reportComplete = () => {
        console.log(">>>>>", this.myRef.webdatarocks.getReport());
    }

    render() {

        return (

            <div>
                <WebDataRocksReact.Pivot
                    ref={(elem) => {
                        this.myRef = elem
                    }}
                    toolbar={true}
                    report="http://localhost:3001/api/registrations"
                    reportcomplete={() => {
                        this.reportComplete();
                    }}
                />
            </div>
        );
    }
}
export default DataTableComponent