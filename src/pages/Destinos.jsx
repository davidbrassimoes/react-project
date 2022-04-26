import { Typography } from '@mui/material'
import React from 'react'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'

export default function Destinos(props) {

  const { data, isLoading } = useFetch(`infoDestinos/todos`)

  if (isLoading) {
    return <Loading />
  }

  if (data) {

    return data.resposta.map(c => (c.id_destino === props.count) ? (
      <Typography variant='h6'> Destino: {c.nome_destino} </Typography>
    ) : null)

  }

}


