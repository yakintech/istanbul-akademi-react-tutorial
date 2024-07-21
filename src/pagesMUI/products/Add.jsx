import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { baseService } from '../../api/baseService'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function Add() {

  const [name, setname] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState(0)
  const [quantityPerUnit, setquantityPerUnit] = useState("")


  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()


  const create = () => {

    baseService.create("products", {
      name,
      unitPrice,
      unitsInStock,
      quantityPerUnit
    }).then(res => {

      enqueueSnackbar("Success!!", {
        variant: "success"
      })
      navigate("/products")
    })

  }

  return <>
    <h1>Add Product Form</h1>
    <hr />
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={4}>
        <TextField fullWidth value={name} onChange={(e) => setname(e.target.value)} label="Name" />
        <TextField fullWidth value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} label="Unit Price" />
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <TextField fullWidth value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)} label="Stock" />
        <TextField fullWidth value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} label="Quantity Per Unit" />
      </Stack>
      <Stack>
        <Button onClick={create} sx={{ width: "25%" }} variant="contained">Add</Button>
      </Stack>

    </Stack>

  </>
}

export default Add