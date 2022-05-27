import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";

const InfoCOm=()=>{
    const {id}=useParams()
    const [info, setInfo]=useState([]);
    const [surah, setSurah]= useState([])


    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/chapters/" + id + "/info?language=id")
            .then((res)=>{
                setInfo(res.data.chapter_info)
            })
            .catch((error)=>{
                console.log(error, 'error handle info')
            })
        axios.get("https://api.quran.com/api/v4/chapters/" + id)
            .then((res)=>{
                setSurah(res.data.chapter)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })
    },[id])
    return (
        <div>
            <div className='p-5 text-center' style={{backgroundColor:"#EEF3D2", marginTop:"55px"}}>
                <h1 className='mb-3' style={{color:"#B689C0"}}>INFO SURAH {surah.name_simple}</h1>
            </div>
            <center>
            <Card style={{width:"90%", marginBottom:"80px", marginTop:"10px"}}>
                <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted" style={{color:"#B689C0"}}  dangerouslySetInnerHTML={{__html: info.short_text}}/>
                    <br/>
                        <Card.Text className="text-start" dangerouslySetInnerHTML={{__html: info.text}}/>

                </Card.Body>
            </Card>
            </center>

        </div>
    );
}

export default InfoCOm;