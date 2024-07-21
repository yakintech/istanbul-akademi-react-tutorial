import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../api/axiosInstance'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box, Button, CircularProgress, Stack } from '@mui/material'
import { baseService } from '../../api/baseService'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

function List() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    const { enqueueSnackbar } = useSnackbar()

    const navigate = useNavigate()

    useEffect(() => {
        loadData()
    }, [])


    const loadData = () => {
        baseService.getAll("products")
            .then(data => {
                setproducts(data)
                setloading(false)
            })
    }


    const deleteProduct = (row) => {

        baseService.delete("products", row.id)
            .then(res => {
                enqueueSnackbar(row.name + "  deleted", {
                    variant: "error"
                })
                loadData()
            })

    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.1
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 0.2
        },
        {
            field: "unitsInStock",
            headerName: "Stock",
            flex: 0.15
        },
        {
            field: "quantityPerUnit",
            headerName: "Per Unit",
            flex: 0.2
        },
        {
            field: "Update",
            headerName: "Update",
            flex: 0.1,
            renderCell: (item) => <Button onClick={() => navigate("/products/update/" + item.row.id)} variant="contained" color="inherit">Update</Button>
        },
        {
            field: "Delete",
            headerName: "Delete",
            flex: 0.1,
            renderCell: (item) => <Button onClick={() => deleteProduct(item.row)} variant="contained" color="error">Delete</Button>
        }
    ]


    return <>
        <Stack direction="row" justifyContent="flex-end">
            <Button onClick={() => navigate("/products/add")} sx={{width:150}} variant="contained">Add New</Button>
        </Stack>
        <hr />
        <div style={{ height: 400 }}>
            {
                loading == true ? <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <CircularProgress />
                </Box> : <DataGrid
                    rows={products}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                />
            }

        </div>
    </>
}

export default List