import { useFetch } from '../hooks/useFetch'
import React from 'react'
import Loading from '../components/layout/Loading'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

export default function Estacoes() {

    const dispatch = useDispatch()
    const { data, isLoading } = useFetch('/infoEstacao/todos')

    if (isLoading) {
        return <Loading />
    }

    if (data) {

        const { linha, stop_id, stop_lat, stop_lon, stop_name } = data.resposta

        const handleAdd = (event) => {
            dispatch({
                type: "ADD_FAVORITE",
                event

            })
        }
        const handleDelete = (event) => {
            dispatch({
                type: "DELETE_FAVORITE",
                event

            })
        }

        return (
            <>
                {data.resposta.map(stop => (
                    <Box stop_id={stop.stop_id} sx={{ minWidth: 275 }} key={stop.stop_id}>
                        <Card className={stop.linha.toLowerCase().substring(1, stop.linha.length - 1)} variant="outlined">
                            <React.Fragment>
                                <Link id={stop.stop_id} to={`/${stop.stop_id}`}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">

                                            <div>
                                                {stop.stop_name}
                                            </div>

                                        </Typography>
                                    </CardContent>
                                </Link>
                                <CardActions>
                                    <Button size="large" onClick={handleAdd}>
                                        <StarIcon id={stop.stop_id} className='favorite'></StarIcon>
                                    </Button>
                                    <Button size="large" onClick={handleDelete}>
                                        <DeleteIcon id={stop.stop_id} className='favorite'></DeleteIcon>
                                    </Button>
                                </CardActions>
                            </React.Fragment>
                        </Card>
                    </Box>
                ))
                }
                <Outlet />

            </>
        )
    }

}
