import React,{useState} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';


const DisplayImage = ({ imageUrl, originalText, englishName, description, engDescription, handleImageClick, isClicked }) => {
  //const { englishName, description } = translateData[originalText] || {englishName:'' ,description: ''};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    handleImageClick(originalText);
    setShow(true);
  }

  return (
    <>
      <div className="dynamic-image" onClick={handleShow}>
        <img className="fixed-size-image" src={imageUrl} alt={originalText} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>{englishName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
          <p><span className="text-primary">In English:</span> {engDescription}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayImage;


