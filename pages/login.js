import React, { useEffect, useState } from 'react'
import {
	Center, Box, Heading, Text, Button, Input,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react'

import { useFormik } from 'formik'
import Axios from 'axios';
import user from '../Helpers/User.js'
import { useRouter } from 'next/router';

function login() {
	const [Loading, setLoading] = useState(false)
	const route = useRouter()
	useEffect(() => {

	}, []);
	const initialValues = {
		email: '',
		password: ''
	}
	const onSubmit = (val) => {
		setLoading(true)
		console.log(val)
		user.login(val);
	}

	const Formik = useFormik({
		initialValues,
		onSubmit
	});


	return (
		<div>
			<Center h='100vh'>
				<Box p={5} w='400px' bg='white' shadow='2px' borderWidth='1px' >
					<form onSubmit={Formik.handleSubmit}>
						<Center><Heading as='h3'> Admin Login </Heading></Center>
						<Text my='2'>user email :</Text>
						<Input
							name='email'
							id='email'
							variant='filled' width='100%' placeholder='user emial'
							{...Formik.getFieldProps('email')}

						/>
						{Formik.errors.name && Formik.touched.email ? <div>{Formik.errors.email}</div> : null}
						<Text my='2'>user password:</Text>
						<Input
							name='password'
							id='password'
							type='password'
							variant='filled' width='100%' placeholder='user password'
							{...Formik.getFieldProps('password')}
						/>
						{Formik.errors.name && Formik.touched.email ? <div color='red.300'>{Formik.errors.email}</div> : null}

						<Center> <Box m='3'> <Button
							isLoading={Loading}
							type='submit'
						>Login</Button> </Box> </Center>
					</form>
				</Box>
			</Center>
		</div>
	)
}

login.getLayout = 'withOut'

export default login

