import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'
import Destinos from './Destinos'

export default function Espera() {
    let params = useParams()
    const { data, isLoading } = useFetch(`tempoEspera/Estacao/${params.stop_id}`)


    if (isLoading) {
        return <Loading />
    }

    if (data) {


        return (
            <Typography variant="body2">

                {data.resposta.map(c => (
                    < Box key={c.id} >
                        <Card>
                            <CardContent>
                                <Destinos count={c.destino} />
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">Tempo de Espera</Typography>
                                <Typography>{new Date(c.tempoChegada1 * 1000).toISOString().substr(14, 5)}</Typography>
                                <Typography>{new Date(c.tempoChegada2 * 1000).toISOString().substr(14, 5)}</Typography>
                                <Typography>{new Date(c.tempoChegada3 * 1000).toISOString().substr(14, 5)}</Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))
                }

            </Typography >
        )
    }
}
