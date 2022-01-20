import { Form, Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { useState } from "react";
import ApiService from "./ApiService";

const Main = ()=>{
    let [search, setSearch] = useState("")
    return(
        <>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <h1>Weather</h1>
                    </Navbar.Brand>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                            type="text" 
                            placeholder="Enter a city" 
                            onChange={e => {
                                setSearch(e.target.value)
                                localStorage.setItem('city', search);
                                console.log(search);
                                }}
                            />

                        </Form.Group>
                    </Form>
                </Container>
            </Navbar>
            <main>
            <ApiService/>
            
            </main>
        </>
    )
}
export default Main