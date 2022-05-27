import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const HomeCOm=()=>{
    const [surah, setSurah]= useState([])

    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/chapters?language=id" )
            .then((res)=>{
                setSurah(res.data.chapters)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })
    },[])
        return (
            <div style={{marginTop:"55px",marginBottom:"80px"}}>
                <div className='p-5 text-center' style={{backgroundColor:"#EEF3D2"}}>
                    <h1 className='mb-3' style={{color:"#B689C0"}}>Selamat Datang di Al-Quran Digital </h1>
                    <h4 className='mb-3' style={{color:"#B689C0"}}>Semoga Bermanfaat</h4>
                </div>
                <div className="mt-3">
                    <p className="fs-2">Silahkan Pilih Surah :</p>
                </div>
                <ListGroup variant="flush" >
                    {surah.map((sutahitem, index)=>(
                        <ListGroup.Item className="mt-1 fs-2"><Link to={'/surah/' + sutahitem.id} className="text-decoration-none text-dark"><span className="btn btn-sm btn-secondary" style={{backgroundColor:"#B689C0"}}><strong>{sutahitem.id}</strong></span> <strong>{sutahitem.name_simple}</strong> <span className="float-right">{sutahitem.name_arabic}</span></Link></ListGroup.Item>
                    ))}
                </ListGroup>

            </div>
        );
}

export default HomeCOm;