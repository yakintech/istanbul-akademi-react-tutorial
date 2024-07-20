import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

function AddSupplierMUI() {
    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField fullWidth name='companyName' label="Company Name" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth name='companyName' label="Contact Name" />
            </Grid>
            <Grid item xs={12}>
                <TextField sx={{width:'50%'}} name='companyName' label="Contact Title" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Add</Button>
            </Grid>


        </Grid>
    </>
}

export default AddSupplierMUI