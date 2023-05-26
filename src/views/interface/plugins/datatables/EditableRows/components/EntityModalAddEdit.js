import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ModalAddEdit = ({ tableInstance }) => {
  const { selectedFlatRows, data, setData, setIsOpenAddEditModal, isOpenAddEditModal } = tableInstance;
  const emptyItem = {
    id: data.length + 1,
    name: '',
    surname: '',
    dni: '',
    customer_id: '',
    address: '',
    location: '',
    phone_number: '',
    email: '',
    type: '',
    user: '',
  };
  const [selectedItem, setSelectedItem] = useState(emptyItem);

  useEffect(() => {
    if (isOpenAddEditModal && selectedFlatRows.length === 1) {
      setSelectedItem(selectedFlatRows[0].original);
    } else {
      setSelectedItem(emptyItem);
    }
    return () => { };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenAddEditModal, selectedFlatRows]);

  const changeName = (event) => {
    setSelectedItem({ ...selectedItem, name: event.target.value });
  };
  const changeSurname = (event) => {
    setSelectedItem({ ...selectedItem, sales: event.target.value });
  };
  const changeDni = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeCustomerId = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeAddress = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeLocation = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeEmail = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changePhoneNumber = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeType = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeUser = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };


  const saveItem = () => {
    console.log("saving item");
    if (selectedFlatRows.length === 1) {
      /*
      * edits and update information selected
      */
      const { index } = selectedFlatRows[0];
      const newData = data.map((row, rowIndex) => (rowIndex === index ? selectedItem : row));
      setData(newData);
    } else {
      /*
      * saves data from form
      */
      const newData = [selectedItem, ...data];
      setData(newData);
      console.log(newData);
    }
    setIsOpenAddEditModal(false);
  };

  return (
    <Modal className="modal-right fade" show={isOpenAddEditModal} onHide={() => setIsOpenAddEditModal(false)}>
      <Modal.Header>
        <Modal.Title>{selectedFlatRows.length === 1 ? 'Edit' : 'Add'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="col-mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.name : ''} onChange={changeName} />
          </div>
          <div className="col-mb-3">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.surname : ''} onChange={changeSurname} />
          </div>
          <div className="col-mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.dni : ''} onChange={changeDni} />
          </div>

          <div className="mb-3">
            <Form.Label>Customer ID</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.customer_id : ''} onChange={changeCustomerId} />
          </div>
          <div className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.address : ''} onChange={changeAddress} />
          </div>
          <div className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.location : ''} onChange={changeLocation} />
          </div>


          <div className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.email : ''} onChange={changeEmail} />
          </div>
          <div className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.phone_number : ''} onChange={changePhoneNumber} />
          </div>
          <div className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.type : ''} onChange={changeType} />
          </div>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={() => setIsOpenAddEditModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={saveItem}>
          {selectedFlatRows.length === 1 ? 'Done' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddEdit;
