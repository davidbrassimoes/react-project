import { Typography, Button, ButtonGroup, Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Loading from '../components/layout/Loading'




export default function Linha() {

    let params = useParams()
    console.log(params)
    const { l } = params

    // const { data, isLoading } = useFetch(`/infoIntervalos/${l}/s`)


    // if (isLoading) {
    //     return <Loading />
    // }

    return (
        <>
            <Box>
                <Card className={l} sx={{ mt: "3px" }} >
                    <CardContent>
                        <Typography sx={{ mt: "3px" }} variant="h5" component="div">
                            {l.charAt(0).toUpperCase() + l.slice(1)}
                        </Typography>
                    </CardContent>
                </Card>
                <ButtonGroup sx={{ mt: "3px" }} variant="contained" aria-label="outlined primary button group">
                    <Button ><Link to="s">
                        Dias de Semana
                    </Link>
                    </Button>
                    <Button>
                        <Link to="f">
                            Fins de Semana e Feriados
                        </Link>
                    </Button>
                </ButtonGroup>
                <Outlet />
            </Box>
        </>
    )

}
