import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/layout/Loading'
import { useFetch } from '../hooks/useFetch'
import Espera from './Espera'
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
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


        return (
            <>
                <Box>
                    <Typography className={linha.toLowerCase().substring(1, linha.length - 1)} variant="h5" component="div">
                        {stop_name} - {linha.substring(1, linha.length - 1)}
                    </Typography>
                    <Espera />


                    <div className='map'>
                        <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Metro {stop_name}
                                </Popup>
                            </Marker>
                            {/*
                             este Marker não está a funcionar, inspecionando o meu mapa no browser e comparando com um mapa de exemplo, vi que ele está a gerar no meu caso uma <img> com a src errada, até seguindo o link que ele gera, dá not found. Ainda consegui navegar pelos ficheiros e encontrar o icon neste url=https://unpkg.com/browse/leaflet@1.8.0/dist/images/marker-icon.png mas não consegui alterar. Ou seja, o problema é mesmo da biblioteca que gera mal este link, ficando antes assim https://unpkg.com/browse/leaflet@1.8.0/distmarker-icon.png 
                            A minha ultima tentativa foi importar para dentro deste icon um dos material icons, mas sem sucesso
                            De qualquer das formas aparece lá um quadradinho a dizer Marker que diz o nome da estação se clickado :)
                            
                            */}
                        </MapContainer>
                    </div>
                </Box>
            </>
        )
    }

}

