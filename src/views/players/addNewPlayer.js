import * as yup from 'yup';
import { Form, Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import { useState } from 'react';
import { FormControl, Stack, Grid } from '@mui/material';
import { Box, Button, FormHelperText, InputLabel, OutlinedInput } from '@material-ui/core';
import ReusableModal from 'views/reusable/Modal/Modal';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none'
});
const AddPlayerForm = ({ existPlayer, callback }) => {
    // use state
    const scriptedRef = useScriptRef();
    const [state, setState] = useState({});
    const [picture, setPicture] = useState({
        picturePreview: null,
        pictureAsFile: null
    });
    // upload picture
    const uploadPicture = (e) => {
        setPicture({
            /* contains the preview, if you want to show the picture to the user
             you can access it with this.state.currentPicture
         */
            picturePreview: URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile: e.target.files[0]
        });
    };
    return (
        <>
            <ReusableModal
                title="Ajouter un nouveau joueur"
                content={
                    <>
                        <Formik
                            initialValues={{
                                firstName: existPlayer ? existPlayer.firstName : '',
                                lastName: existPlayer ? existPlayer.lastName : '',
                                date: existPlayer ? existPlayer.date : '',
                                picture: existPlayer ? existPlayer.picture : '',
                                poste: existPlayer ? existPlayer.poste : '',
                                clubs: existPlayer ? existPlayer.clubs : ''
                            }}
                            validationSchema={yup.object().shape({
                                firstName: yup
                                    .string()
                                    .max(255, 'Le prénom ne doit pas dépasser 255 caractères')
                                    .matches(/^[A-Za-z0-9\s]/, 'Ce ....')
                                    .required('Ce champs est obligatoire'),
                                lastName: yup
                                    .string()
                                    .max(255, 'Le nom ne doit pas dépasser 255 caractères')
                                    .required('Ce champs est obligatoire')
                            })}
                            handleChange={async (values) => setState({ ...values })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                try {
                                    if (scriptedRef.current) {
                                        // add or edit collaborateur
                                    }
                                } catch (err) {
                                    console.error(err);
                                    if (scriptedRef.current) {
                                        console.log('error');
                                    }
                                }
                            }}
                        >
                            {({ values, errors, isSubmitting, handleChange, touched }) => (
                                <Form>
                                    <Grid container lg={12} md={12} xs={12} sm={12}>
                                        <Grid item lg={12} md={12} xs={12} sm={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-code-process">Nom</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-code-process"
                                                    type="text"
                                                    name="lastName"
                                                    label="Nom"
                                                    value={values.lastName}
                                                    onChange={handleChange}
                                                />
                                                {touched.lastName && errors.lastName && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {' '}
                                                        {errors.lastName}{' '}
                                                    </FormHelperText>
                                                )}{' '}
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={12} md={12} xs={12} sm={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-firstName">Prénom</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-firstName"
                                                    type="text"
                                                    name="firstName"
                                                    label="Prénom"
                                                    value={values.firstName}
                                                    onChange={handleChange}
                                                />{' '}
                                                {touched.firstName && errors.firstName && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {' '}
                                                        {errors.firstName}{' '}
                                                    </FormHelperText>
                                                )}{' '}
                                            </FormControl>
                                        </Grid>

                                        <Grid item lg={12} md={12} xs={12} sm={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-code-process">Date de naissance</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-code-process"
                                                    type="text"
                                                    name="date"
                                                    label="Nom"
                                                    value={values.date}
                                                    onChange={handleChange}
                                                />
                                                {touched.date && errors.date && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {' '}
                                                        {errors.date}{' '}
                                                    </FormHelperText>
                                                )}{' '}
                                            </FormControl>
                                        </Grid>

                                        <Grid item lg={12} md={12} xs={12} sm={12}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-code-process">Poste</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-code-process"
                                                    type="text"
                                                    name="poste"
                                                    label="Nom"
                                                    value={values.poste}
                                                    onChange={handleChange}
                                                />
                                                {touched.poste && errors.poste && (
                                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                                        {' '}
                                                        {errors.poste}{' '}
                                                    </FormHelperText>
                                                )}{' '}
                                            </FormControl>
                                        </Grid>
                                        <Grid item lg={12} md={12} xs={12} sm={12} marginTop={1}>
                                            <label htmlFor="contained-button-file">
                                                <Input accept="image/*" id="contained-button-file" type="file" onChange={uploadPicture} />
                                                <Button className="btn downloadButton" component="span" startIcon={<CameraAltIcon />}>
                                                    Télécharger votre image
                                                </Button>
                                            </label>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ '& button': { m: 0.2 }, paddingRight: '15px', display: 'flex', justifyContent: 'end' }}>
                                        <Button size="sm" variant="contained" color="error">
                                            Annuler
                                        </Button>
                                        <Button size="sm" type="submit" variant="contained" color="primary">
                                            Sauvegarder
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </>
                }
            />
        </>
    );
};

export default AddPlayerForm;
