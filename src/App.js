import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container style={{
      width: 200, padding: 0, margin: 0, backgroundImage: `url("https://img.freepik.com/fotos-gratis/vista-aerea-da-ilustracao-de-design-de-layout-de-conteudo-do-site-no-notebook_53876-167124.jpg?w=2000")`,
      backgroundRepeat: 'no-repeat',
      width: '800px',
      height: '500px'
    }}>
      <Form style={{ 
        border: "2px solid black", 
        marginTop: 200, 
        marginLeft: 1000, 
        width: 300, 
        padding: 50,
         }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1 style={{marginLeft:50}}>Login</h1>

          <Form.Control style={{width:200}} type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control style={{width:200}} type="password" placeholder="Senha" />
        </Form.Group>
        <Button style={{width:200}} variant="primary" type="submit">
          Salvar
        </Button>
      </Form>
    </Container>
  );
}

export default App;
