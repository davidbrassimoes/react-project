import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'

export default function Linhas() {
    const { data, isLoading } = useFetch('/estadoLinha/todos')

    if (isLoading || (data == undefined)) {
        return <Loading />
    }

    if (data.resposta == "Circulação encerrada") {
        return <Typography color="text.secondary" variant="h6">Circulação encerrada</Typography>
    }

    if (data) {

        const arr1 = Object.keys(data.resposta)
        const arr2 = arr1.splice(4)
        console.log(arr1)
        console.log(arr2)

        return (
            <>
                {arr1.map(l => (
                    <Box>
                        <Card className={l}>
                            <React.Fragment>
                                <Link to={l}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            <div>
                                                {l.charAt(0).toUpperCase() + l.slice(1)}
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </React.Fragment>
                        </Card>
                        < Outlet />
                    </Box>
                ))}
            </>
        )
    }
}