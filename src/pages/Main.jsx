import React from 'react'
import { Button, ButtonGroup } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button><Link to='estacoes'>Todas as Estações</Link></Button>
                <Button><Link to='favoritos' refresh="true">Favoritos</Link></Button>
                <Button><Link to='linhas'>Linhas</Link></Button>
            </ButtonGroup>
            <Outlet />
        </div>
    )
}
