import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import {Label} from 'reactstrap';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import './LoginForm.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 250,
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};


const UserLoginForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPassword, setShowPassword] = useState(false)

 return (
   <div>
     <Button onClick={handleOpen}><LoginRoundedIcon /></Button>
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
       <Formik
          initialValues={{
              username: '',
              password: '',

          }}
          onSubmit={handleOpen}
          validate={validateUserLoginForm}
      >
          <Form>
              <FormGroup>
                  <Label className='usernameText' htmlFor='username'>Username</Label>
                  <Field
                      id='username'
                      name='username'
                      placeholder='Username'
                      className='form-control'
                  />
                  <ErrorMessage name='username'>
                  {(msg) => <p className='error'>{msg}</p>}
              </ErrorMessage>
              </FormGroup>
              <FormGroup>
                  <Label className='passwordText' htmlFor='password'>Password</Label>
                  <Field
                    type={showPassword ? "text" : "password"}
                    id='password'
                    name='password'
                    placeholder='Password'
                    className='form-control rounded-0'
                  />
                  <ErrorMessage name='password'>
                  {(msg) => <p className='error'>{msg}</p>}
              </ErrorMessage>
              <Button outline className='pull-right' onClick={() => {
                  console.log(showPassword)
                 if (showPassword === false) {
                     (setShowPassword(true))
                 } else {
                     (setShowPassword(false))
                 }

              }}>
              <VisibilityOffIcon />
              </Button>
              </FormGroup>
              <Button type='submit' color='primary'>Login</Button>
          </Form>
      </Formik>
       </Box>
     </Modal>
   </div>
  )
}

export default UserLoginForm;
