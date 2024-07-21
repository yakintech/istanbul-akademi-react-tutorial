import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseService } from '../../api/baseService'
import { Button, Stack, TextField } from '@mui/material'
import { useSnackbar } from 'notistack'

function Update() {

  const [name, setname] = useState("")
  const [unitPrice, setunitPrice] = useState("")
  const [unitsInStock, setunitsInStock] = useState(0)
  const [quantityPerUnit, setquantityPerUnit] = useState("")
  const { id } = useParams()


  useEffect(() => {

    baseService.getById("products", id)
      .then(data => {
        setname(data.name)
        setunitPrice(data.unitPrice)
        setunitsInStock(data.unitsInStock)
        setquantityPerUnit(data.quantityPerUnit)
      })

  }, [])


  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()


  const update = () => {

    baseService.update("products/" + id, {
      name,
      unitPrice,
      unitsInStock,
      quantityPerUnit,
      id
    })
      .then(res => {
        navigate("/products")
        enqueueSnackbar("Updated!!", {
          variant: "info"
        })

      })

  }


  return <>
    <h1>Update Product Form</h1>
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
        <Button onClick={update} sx={{ width: "25%" }} variant="contained">Update</Button>
      </Stack>

    </Stack>
  </>

}

export default Update