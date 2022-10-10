import { Button, IconButton, Modal, Chip, Grid } from '@material-ui/core';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { useState } from 'react';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import AddPlayerForm from './addNewPlayer';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { Stack } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
/*
Modal style
*/

const rows = [
    {
        id: '1',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    },
    {
        id: '2',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    },
    {
        id: '3',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    },
    {
        id: '4',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    },
    {
        id: '5',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    },
    {
        id: '6',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    },
    {
        id: '7',
        firstName: 'Hela',
        lastName: 'Nouiri',
        poste: 'test',

        date: '01/06/2022'
    }
];
const defaultTheme = createTheme({
    palette: {
        primary: { main: '#1976d2' }
    }
});

export default function ConfigCollaborators() {
    /* 
   use state
  */
    const [openDetailsModal, setOpenDetailsModal] = useState(false);

    /* 
   Datagrid columns
  */
    const columns = [
        {
            field: 'firstName',
            headerName: 'Nom',
            flex: 1,
            filtrable: true,
            headerAlign: 'center',
            align: 'center',
            hide: false
        },
        {
            field: 'lastName',
            headerName: 'Prénom',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            filterable: true,
            hide: false
        },
        {
            field: 'date',
            headerName: 'Date de naissance',
            flex: 1,
            disableColumnMenu: true,
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'poste',
            headerName: 'Poste occupé',
            flex: 1,
            disableColumnMenu: true,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'club',
            headerName: 'Clubs',
            flex: 1,
            disableColumnMenu: true,
            headerAlign: 'center',
            align: 'center'
        },

        {
            field: 'Action ',
            headerName: 'Action',
            sortable: false,
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            disableColumnMenu: true,
            renderCell: (params) => (
                <>
                    <EditIcon />
                    <HighlightOffIcon />
                    <RemoveRedEyeRoundedIcon />
                </>
            )
        }
    ];
    return (
        <>
            <Grid container lg={12} md={12} xs={12} sm={12} margin={1} spacing={1}>
                <Grid container lg={12} md={12} xs={12} sm={12} alignItems="end" justifyContent="end">
                    <Button variant="contained" onClick={() => setOpenDetailsModal(true)}>
                        Ajouter un nouveau joueur
                    </Button>
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                    <div style={{ width: '100%', background: '#fff' }}>
                        <ThemeProvider theme={defaultTheme}>
                            <DataGrid
                                rowHeight={36}
                                rows={rows}
                                columns={columns}
                                autoHeight={true}
                                pagination
                                rowsPerPageOptions={[25, 50, 100]}
                                sx={{
                                    '.MuiDataGrid-columnHeaders': {
                                        minHeight: '36px !important'
                                    },
                                    '.MuiDataGrid-columnHeaderTitle': {
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                        '&:hover': {
                                            cursor: 'pointer',
                                            color: '#56b953'
                                        }
                                    }
                                }}
                            />
                        </ThemeProvider>
                    </div>
                </Grid>

                {/*  ADD OPERATOR MODAL */}
                <Modal open={openDetailsModal}>
                    <AddPlayerForm
                    // editUserData={userData}
                    // readOnly={readOnly}
                    // closeModal={() => {
                    //     closeModal();
                    //     getAllOperators();
                    //     setRows(users);
                    // }}
                    // refreshData={() => getAllOperators(setRows)}
                    />
                </Modal>
            </Grid>
        </>
    );
}
