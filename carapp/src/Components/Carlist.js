import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import AddCar from "./AddCar";
import EditCar from "./EditCar";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { API_URL } from "../constants";

function Carlist() {
    const[cars, setCars] = useState([]);

    const[columndDefs] = useState([
        {field: "brand", sortable: true, filter: true},
        {field: "model", sortable: true, filter: true},
        {field: "color", sortable: true, filter: true},
        {field: "fuel", sortable: true, filter: true, width: 150},
        {field: "year", sortable: true, filter: true, width: 120},
        {field: "price", sortable: true, filter: true, width: 150},
        {
            width: 150,
            cellRenderer: params => <EditCar data={params.data} editCar={updateCar}/> 
        },    
        {
            width: 150,
            cellRenderer: params => 
                <Button variant="outlined" color="error" onClick={() => deleteCar(params.data)}>
                    Delete
                </Button>
        }
    ])

    useEffect(() => {
        getCars();
    }, []);

    const getCars = () => {
        fetch(API_URL)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                alert("Something went wrong");
        })
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.err(err))
    }

    const deleteCar = (data) => {
        if (window.confirm("Are you sure?")) {
            fetch(data._links.car.href, {method: "DELETE"})
            .then(response => {
                if (response.ok)
                    getCars();
                else
                    alert("Something went wrong in deletion");
            })
            .catch(err => console.error(err))
        }
    }
     const addCar = (car) => {
        fetch(API_URL, {
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok)
                getCars();
            else
                alert("Something went wrong in addition")
        })
        .catch(err => console.error(err))
     }

     const updateCar = (car, url) => {
        fetch(url, {
            method: "PUT",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(car)
        })
        .then(response => {
            if (response.ok)
                getCars();
            else
                alert("Something went wrong in editing");
        })
        .catch(err => console.error(err))
     }

     console.log(cars)

    return (
        <>
            <AddCar addCar={addCar}/>
            <div className="ag-theme-material" style={{height: 600, width: "70%", margin: "auto"}}>
                <AgGridReact 
                    rowData={cars}
                    columnDefs={columndDefs}
                    pagination={true}
                    paginationPageSize={10}
                    suppressCellFocus={true}
                />
            </div>
        </>
    );
}

export default Carlist;