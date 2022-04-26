import { Box, CardContent, Card, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'

export default function LinhaDia() {

    let params = useParams()
    console.log(params)
    const { l, d } = params

    const { data, isLoading } = useFetch(`/infoIntervalos/${l}/${d}`)


    if (isLoading) {
        return <Loading />
    }

    if (data) {

        return (
            <>
                {data.resposta.map(r => (
                    <Box>
                        <Card><CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary"> {r.HoraInicio} // {r.HoraFim} </Typography>
                            <Typography> Tempo de Espera: {r.Intervalo.substr(0, 5)} </Typography>
                        </CardContent></Card>
                    </Box>
                ))}
            </>
        )
    }

}
