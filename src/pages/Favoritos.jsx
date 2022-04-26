import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'
import { store } from '../store'
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

export default function Favoritos() {
    const dispatch = useDispatch()
    const { data, isLoading } = useFetch('/infoEstacao/todos')

    if (isLoading) {
        return <Loading />
    }

    if (data) {

        const handleAdd = (event) => {
            dispatch({
                type: "ADD_FAVORITE",
                event

            })
        }
        const handleDelete = (event) => {
            dispatch({
                type: "DELETE_FAVORITE",
                event,

            })
        }


        const arr1 = data.resposta
        console.log('arr1 ', arr1)

        const arr2 = store.getState().favorites
        console.log('arr2 ', arr2)

        const res = arr1.filter(item => arr2.includes(item.stop_id));
        console.log('res', res)



        return (
            <>
                {res.map(f => (
                    <Box stop_id={f.stop_id} sx={{ minWidth: 275 }} key={f.stop_id}>
                        <Card className={f.linha.toLowerCase().substring(1, f.linha.length - 1).replace(",", "")} variant="outlined">
                            <React.Fragment>
                                <Link id={f.stop_id} to={`/${f.stop_id}`}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">

                                            <div>
                                                {f.stop_name}
                                            </div>

                                        </Typography>
                                    </CardContent>
                                </Link>
                                <CardActions>
                                    <Button size="large" onClick={handleAdd}>
                                        <StarIcon id={f.stop_id} className='favorite'></StarIcon>
                                    </Button>
                                    <Button size="large" onClick={handleDelete}>
                                        <DeleteIcon id={f.stop_id} className='favorite'></DeleteIcon>
                                    </Button>

                                </CardActions>
                            </React.Fragment>
                        </Card>
                    </Box>
                ))
                }
            </>
        )
    }
}

