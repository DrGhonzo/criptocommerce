import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Importar NavLink
import { Badge, Col, Form, Row } from 'react-bootstrap';
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect, useRowState } from 'react-table';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import ButtonsCheckAll from './components/ButtonsCheckAll';
import ButtonsAddNew from './components/ButtonsAddNew';
import ControlsPageSize from './components/ControlsPageSize';
import ControlsAdd from './components/ControlsAdd';
import ControlsEdit from './components/ControlsEdit';
import ControlsDelete from './components/ControlsDelete';
import ControlsSearch from './components/ControlsSearch';
import ModalAddEdit from './components/EntityModalAddEdit';
import Table from './components/Table';
import TablePagination from './components/TablePagination';
import Routes from '../../../../../routes';


const EditableRows = () => {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v01/entitys');
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.log('Error al obtener los datos de la API:', error);
      }
    };
  
    fetchData();
  }, []);

  const title = 'Entities';
  const description = 'Separate rows with edit, delete and add.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/plugins', title: 'Plugins' },
    { to: 'interface/plugins/datatables', title: 'Datatables' },
  ];

  const columns = React.useMemo(() => {
    return [
      {
        Header: '',
        id: 'view',
        headerClassName: 'empty w-10',
        Cell: ({ row }) => {
          const { id } = row; // Obtén el ID desde la fila de datos
          return (
            <NavLink
              className="btn btn-primary btn-sm"
              to={`/profile/${id}`} // Agrega el ID a la URL
            >
              Ver
            </NavLink>
          );
        },
      },
      { Header: 'Name',
        accessor: 'name',
        sortable: true,
        headerClassName: 'text-muted text-small text-uppercase w-30',
        Cell: ({ cell }) => {
          return (
            <a
              className="list-item-heading body"
              href="#!"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {cell.value}
            </a>
          );
        }
      },
      { Header: 'Surname', accessor: 'surname', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-10' },
      { Header: 'ID', accessor: 'dni', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-10' },
      { Header: 'Customer ID', accessor: 'customer_id', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-20' },
      { Header: 'Email', accessor: 'email', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-20' },
      { Header: 'Address', accessor: 'address', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-20' },
      { Header: 'Location', accessor: 'location', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-20' },
      { Header: 'Phone number', accessor: 'phone_number', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-20' },
      {
        Header: '',
        id: 'action',
        headerClassName: 'empty w-10',
        Cell: ({ row }) => {
          const { checked, onChange } = row.getToggleRowSelectedProps();
          return <Form.Check className="form-check float-end mt-1" type="checkbox" checked={checked} onChange={onChange} />;
        },
      },
    ];
  }, []);

  
  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState(false);

  const tableInstance = useTable(
    { columns, data, setData, isOpenAddEditModal, setIsOpenAddEditModal, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useRowState
  );

  return (
    <>
      <HtmlHead title={title} description={description} />

      <Row>
        <Col>
          <div className="page-title-container">
            <Row>
              <Col xs="12" md="7">
                <h1 className="mb-0 pb-0 display-4">{title}</h1>
                <BreadcrumbList items={breadcrumbs} />
              </Col>
              <Col xs="12" md="5" className="d-flex align-items-start justify-content-end">
                <ButtonsAddNew tableInstance={tableInstance} /> <ButtonsCheckAll tableInstance={tableInstance} />
              </Col>
            </Row>
          </div>

          <div>
            <Row className="mb-3">
              <Col sm="12" md="5" lg="3" xxl="2">
                <div className="d-inline-block float-md-start me-1 mb-1 mb-md-0 search-input-container w-100 shadow bg-foreground">
                  <ControlsSearch tableInstance={tableInstance} />
                </div>
              </Col>
              <Col sm="12" md="7" lg="9" xxl="10" className="text-end">
                <div className="d-inline-block me-0 me-sm-3 float-start float-md-none">
                  <ControlsAdd tableInstance={tableInstance} /> <ControlsEdit tableInstance={tableInstance} /> <ControlsDelete tableInstance={tableInstance} />
                </div>
                <div className="d-inline-block">
                  <ControlsPageSize tableInstance={tableInstance} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <Table className="react-table rows" tableInstance={tableInstance} />
              </Col>
              <Col xs="12">
                <TablePagination tableInstance={tableInstance} />
              </Col>
            </Row>
          </div>
          <ModalAddEdit tableInstance={tableInstance} />
        </Col>
      </Row>
    </>
  );
};

export default EditableRows;
