import { Typography, Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'
import Espera from './Espera'
import { MapContainer, TileLayer, Popup, LayerGroup, Circle } from 'react-leaflet'
import { Marker } from 'react-leaflet/Marker'

export default function Estacao() {

    let params = useParams()
    const { data, isLoading } = useFetch(`/infoEstacao/${params.stop_id}`)

    if (isLoading) {
        return <Loading />
    }

    if (data) {

        const { linha, stop_id, stop_lat, stop_lon, stop_name } = data.resposta[0]
        const position = [stop_lat, stop_lon]

        const cores = linha.toLowerCase().substring(1, linha.length - 1).split(", ")

        if (cores[1] == undefined) {
            cores[1] = cores[0]
            console.log(cores[1])
        }

        const marker = {
            fillColor: `var(--${cores[0]})`,
            color: `var(--${cores[1]})`
        }

        console.log('marker ', marker);

        return (
            <>
                <Box>
                    <Card className={cores}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {stop_name} - {linha.substring(1, linha.length - 1)}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Espera />


                    <div className='map'>
                        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <Circle
                                    center={position}
                                    pathOptions={marker}
                                    radius={100}
                                />
                            </LayerGroup>
                            <Marker position={position}>
                                <Popup>
                                    Metro {stop_name}
                                </Popup>
                            </Marker>
                            {/*
                             este Marker não está a funcionar, inspecionando o meu mapa no browser e comparando com um mapa de exemplo, vi que ele está a gerar uma <img> com a src errada,faz este caminho https://unpkg.com/browse/leaflet@1.8.0/distmarker-icon.png e devia antes ser url=https://unpkg.com/browse/leaflet@1.8.0/dist/images/marker-icon.png mas não consegui alterar.  
                            Deixei um circulo com a cor da linha e se clickarmos no marker tem um popup com o nome da estação
                            */}
                        </MapContainer>
                    </div>
                </Box>
            </>
        )
    }

}

