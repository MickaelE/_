// @ts-ignore
import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

// Internals
import givenSchema from '../schemas/form.json';
import givenUISchema from '../schemas/ui-schema.json';

import givenFormData from '../schemas/form-data.json';
const givenXhrSchema = require('../schemas/hrx-schema.json'); // Optional
type Props = {}

export default function RegForm({}: Props) {
    const [formData, setFormData] = React.useState(givenFormData);

    const onSubmit = (value, callback) => {
        console.log('onSubmit: %s', JSON.stringify(value)); // eslint-disable-line no-console
        setTimeout(() => callback && callback(), 2000); // just an example in real world can be your XHR call
    }
    const onCancel = () => {
        console.log('on reset being called');
    }

    const onFormChanged = ({ formData }) => setFormData(formData);

    const onUpload = (value) => {
        console.log('onUpload: ', value); // eslint-disable-line no-console
    }
    const onError ={
      //Todo
    }
    return (
        <MaterialJsonSchemaForm
            // Define Schema
            schema={givenSchema}
            uiSchema={givenUISchema}
            xhrSchema={givenXhrSchema || {}}
            formData={formData}

            // Define Event handlers
            onChange={onFormChanged}
            onSubmit={onSubmit}

            // Every Prop below is optional - every prop above this line is required
            onCancel={onCancel} /* optional */
            onUpload={onUpload} /* optional */
            onError={onError} /* optional */

            /* Optional Prop for custom functions to be executed for transforming data */
            interceptors={{
                translateRatings: (givenData, uiData) => ({ givenData, uiData }),
            }}


            /* Optional Prop to auto submit form on press of enter */
            submitOnEnter
        />
    );
}
