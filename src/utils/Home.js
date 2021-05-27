import React,{useEffect,useState} from 'react';
import Colors from '../components/registrations';
import axios from 'axios';

const Home=()=>{
    const [Data,setData]=useState({
        _Id:'',
        lag:''
    })
    const [personaliaData,setPersonaliaData]=useState([])
    const [sizeData,setSizeData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/registration/')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Colors Data: ',res.data)

                setSizeData(JSON.parse(res.data))
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <Colors data={sizeData}/>
        </>
    )
}

export default Home;