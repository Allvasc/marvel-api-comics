import GoogleMaps from '../GoogleMaps/GoogleMaps'
import { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { ComicContext } from '../../context/ComicContext'

const Modalmap = (props) => {

    const { } = useContext(ComicContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Quero esse!
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.name}</p>
                    <GoogleMaps></GoogleMaps>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modalmap