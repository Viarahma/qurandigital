import React from 'react';
import {Card} from "react-bootstrap";

const AboutCom=()=>{
    return (
        <div>
            <div className='p-5 text-center' style={{backgroundColor:"#EEF3D2", marginTop:"55px"}}>
                <h1 className='mb-3' style={{color:"#B689C0"}}>ABOUT</h1>
            </div>
            <center>
                <Card style={{width:"90%", marginBottom:"80px", marginTop:"10px"}}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted" style={{color:"#B689C0"}} > ABOUT THIS WEB</Card.Subtitle>
                        <br/>
                        <Card.Text className=""> Ini adalah Al-Quran Digital , data yang diambil adalah dari https://quran.api-docs.io/v4.
                            <br/>Dibuat menggunakan Framework  React Js dan Library UI BOOSTRAP</Card.Text>
                        <Card.Subtitle className="mb-2 text-muted" style={{color:"#B689C0"}} > ABOUT AUTHOR</Card.Subtitle>
                        <br/>
                        <Card.Text className=""> Dibuat oleh Via Rahma Sriningrum , Mahasiswa Teknik Informatika UIN Sultan Syarif Kasim Riau</Card.Text>
                    </Card.Body>
                </Card>
            </center>
        </div>
    );
}

export default AboutCom;