import GoogleMaps from '../GoogleMaps/GoogleMaps'
import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const Modalmap = (props) => {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Quero esse!
            </Button>

            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="Form.ControlInput1">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o seu nome"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlInput2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Informe seu email"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlInput2">
                            <Form.Label>Cep</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o seu cep"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.ControlInput2">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Informe o seu endereço"
                                autoFocus
                            />
                        </Form.Group>

                    </Form>
                    <GoogleMaps></GoogleMaps>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" >
                        Fazer pedido
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modalmap