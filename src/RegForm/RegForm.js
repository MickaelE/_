// @ts-ignore
import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

// Internals
import givenSchema from '../schemas/form.json';
import givenUISchema from '../schemas/ui-schema.json';
import givenFormData from '../schemas/form-data.json';



export default function RegForm() {
    const [formData, setFormData] = React.useState(givenFormData);

    const onSubmit = (value, callback) => {

        const url = 'http://localhost:3001/api/registration'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ formData})
        };
        fetch(url, requestOptions)
            .then(response => console.log('Submitted successfully'))
            .catch(error => console.log('Form submit error', error))
    }
    const onCancel = () => {
        console.log('on reset being called');
    }

    const onFormChanged = ({ formData }) => setFormData(formData);

    return (
        <MaterialJsonSchemaForm
            // Define Schema
            schema={givenSchema}
            uiSchema={givenUISchema}
          //  xhrSchema={givenXhrSchema || {}}
            formData={formData}

            // Define Event handlers
            onChange={onFormChanged}
            onSubmit={onSubmit}

            // Every Prop below is optional - every prop above this line is required
            onCancel={onCancel} /* optional */

            /* Optional Prop to auto submit form on press of enter */
            submitOnEnter
        />
    );
}
