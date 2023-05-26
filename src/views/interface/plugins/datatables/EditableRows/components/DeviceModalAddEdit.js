import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const DeviceModalAddEdit = ({ tableInstance }) => {
  const { selectedFlatRows, data, setData, setIsOpenAddEditModal, isOpenAddEditModal } = tableInstance;
  const emptyItem = {
    id: data.length + 1,
    entity: '',
    type: '',
    role: '',
    mac_address: '',
    ip_address: '', 
    serial_num: '', 
    version: '', 
    status: '',
    start_date: '', 
    end_date: '',
    user: ''
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

  const changeEntity = (event) => {
    setSelectedItem({ ...selectedItem, entity: event.target.value });
  };
  const changeMAC = (event) => {
    setSelectedItem({ ...selectedItem, mac_address: event.target.value });
  };
  const changeIp = (event) => {
    setSelectedItem({ ...selectedItem, ip_address: event.target.value });
  };
  const changeSerialNum = (event) => {
    setSelectedItem({ ...selectedItem, serial_num: event.target.value });
  };
  const changeFirmwareVersion = (event) => {
    setSelectedItem({ ...selectedItem, version: event.target.value });
  };
  const changeStatus = (event) => {
    setSelectedItem({ ...selectedItem, status: event.target.value });
  };
  const changeStartDate = (event) => {
    setSelectedItem({ ...selectedItem, start_date: event.target.value });
  };
  const changeEndDate = (event) => {
    setSelectedItem({ ...selectedItem, end_date: event.target.value });
  };
  const changeUser = (event) => {
    setSelectedItem({ ...selectedItem, user: event.target.value });
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
            <Form.Label>Entity</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.entity : ''} onChange={changeEntity} />
          </div>
          <div className="col-mb-3">
            <Form.Label>MAC Address</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.mac_address : ''} onChange={changeMAC} />
          </div>
          <div className="col-mb-3">
            <Form.Label>IP Address</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.ip_address : ''} onChange={changeIp} />
          </div>

          <div className="mb-3">
            <Form.Label>Serial Num</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.serial_num : ''} onChange={changeSerialNum} />
          </div>
          <div className="mb-3">
            <Form.Label>Frimware Version</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.version : ''} onChange={changeFirmwareVersion} />
          </div>
          <div className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.status : ''} onChange={changeStatus} />
          </div>


          <div className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.start_date : ''} onChange={changeStartDate} />
          </div>
          <div className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.end_date : ''} onChange={changeEndDate} />
          </div>
          <div className="mb-3">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.user : ''} onChange={changeUser} />
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

export default DeviceModalAddEdit;
