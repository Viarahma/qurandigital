import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import "./navbar.css"
import axios from "axios";

const NavbarCom=()=>{
    const [juz, setJuz] = useState([]);
    const [surah, setSurah]=useState([]);

    useEffect(()=>{
        axios.get("https://api.quran.com/api/v4/juzs")
            .then((res )=>{
                setJuz(res.data.juzs)
            })
            .catch((error)=>{
                console.log(error, "error handle juz")
            })
        axios.get("https://api.quran.com/api/v4/chapters/")
            .then((res)=>{
                setSurah(res.data.chapters)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })

    },[]);

    return (
            <div>
                <Navbar collapseOnSelect className="justify-content-end" fixed="top"  expand="lg"  variant="dark" style={{backgroundColor:"#947EC3"}}>
                    <Container>
                        <Navbar.Brand  ><Link to="/" className="text-decoration-none " style={{color:"#EEF3D2"}}> Al-Quran'an Digital</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                               <Nav.Link> <NavLink className="text-decoration-none" to="/" style={{color:"#EEF3D2"}}>Home</NavLink></Nav.Link>
                                <NavDropdown title="Juz" style={{color:"#EEF3D2"}} id="collasible-nav-dropdown" >
                                    {juz.map((juzItem, index)=>(
                                    <NavDropdown.Item key={index} ><Link to={"/juz/" + juzItem.id} className="text-decoration-none" style={{color:"#947EC3"}} >Juz {juzItem.id}</Link></NavDropdown.Item>
                                    ))}
                                    </NavDropdown>
                                <NavDropdown title="Info" style={{color:"#EEF3D2"}} id="collasible-nav-dropdown">
                                    {surah.map((surahItem, index)=>(
                                    <NavDropdown.Item key={index} ><Link to={"/info/" + surahItem.id} className="text-decoration-none" style={{color:"#947EC3"}}>{surahItem.name_complex}</Link></NavDropdown.Item>
                                    ))}
                                    </NavDropdown>
                                <Nav.Link> <NavLink to="/about" className="text-decoration-none" style={{color:"#EEF3D2"}} >About</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
}

export default NavbarCom;