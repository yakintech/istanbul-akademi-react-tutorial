import React, { useContext, useState } from 'react'
import { CounterContext } from '../context/CounterContext'

function CounterSample() {

    const { counter } = useContext(CounterContext)

    return <>
        <h1>{counter}</h1>
    </>
}

export default CounterSample