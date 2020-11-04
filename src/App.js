import './App.css';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <article className="App-article">
        <Form className="formulaire">
        <h1 className="Title">Formulaire Gomycode</h1>
          <Form.Row>
            <Form.Label>Nom</Form.Label>
            <Form.Control placeholder="Foulen"/>
          </Form.Row>
          <Form.Row>
            <Form.Label>Prénom</Form.Label>
            <Form.Control placeholder="Ben Foulen"/>
          </Form.Row>
          <Form.Row>
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control type="datetime-local"/>
          </Form.Row>
          <Form.Row>
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control placeholder="exemple@gmail.com"/>
          </Form.Row>
          <Form.Row>
            <Form.Label>Profession</Form.Label>
            <Form.Control placeholder="Ingénieur, médecin, avocat..."/>
          </Form.Row>
        <Button style={{marginTop:"20px"}}>Envoyer</Button>
        </Form>
      </article>
    </div>
  );
}

export default App;
