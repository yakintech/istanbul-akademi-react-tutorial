import axios from 'axios';
import React from 'react'
import useSWR from 'swr';
import { axiosInstance } from '../../api/axiosInstance';
import { Box, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const fetcher = (url) => {
    return axiosInstance.get(url).then(res => res.data)
} 


function ListSWR() {
    const { data, error, isLoading } = useSWR("products",
        fetcher
    );

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.25
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            flex: 0.25
        },
        {
            field: "unitsInStock",
            headerName: "Stock",
            flex: 0.25
        },
        {
            field: "quantityPerUnit",
            headerName: "Per Unit",
            flex: 0.25
        }
    ]


    return <>
       <div style={{ height: 400 }}>
            {
                isLoading == true ? <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    <CircularProgress />
                </Box> : <DataGrid
                    rows={data}
                    columns={columns}
                />
            }

        </div>
    </>
}

export default ListSWR