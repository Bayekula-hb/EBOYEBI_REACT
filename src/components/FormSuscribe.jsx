import { Form, Button } from "react-bootstrap";

const  FormSuscribe= () => {
  return (
    <Form className="Form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="Form--label">Adresse mail </Form.Label>
        <Form.Control type="email" placeholder="monnom@compte.com" />
      </Form.Group>
      
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="Form">Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="Form">Confirmer le mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Button className="Form--submit" variant="primary" type="submit">
        CRÉER MON COMPTE
      </Button>
    </Form>
  );
};
export default FormSuscribe;