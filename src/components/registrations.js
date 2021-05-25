import React, {useEffect,useState} from 'react';
import axios from 'axios';

const Registrations = ({ registrations }) => {

    const [Data,setData]=useState({
        _id:'',
        Descrlagiption:''
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/registration/')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data._id)
                let companyData=res.data;
                setData({_id:companyData._id,lag:companyData.lag})
                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return (
        <div>
            {registrations.map((registration) => (
                <div class="card">
                    <div class="card-body">
                         <h5 class="card-title">{Data._id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{Data.Lag}</h6>
                        <p class="card-text">{Data.personalia.namn_barn}</p>

                    </div>
                </div>
            ))}

        </div>
    )
};

export default Registrations