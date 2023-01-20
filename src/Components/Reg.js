import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useForm} from 'react-hook-form'


const Reg = ({formSub}) => {
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {

    // console.log(data);
    data.id=Date.now();
    data.fav=false;
    formSub(data)
    reset();
}
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='border p-3 pt-4 mt-4 text-center shadow'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="text" placeholder="Enter Name" {...register("Name",{required:"enter a name"})}/>
        {errors.Name && <small className='text-danger'>{errors.Name.message}</small>}

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter email" {...register("Email",{required:"Enter email"})} />
        {errors.Email && <small className='text-danger'>{errors.Email.message}</small>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="text" placeholder="Phone Number" {...register("Phone",{required:"Enter Phone Number"})} />
        {errors.Phone && <small className='text-danger'>{errors.Phone.message}</small>}
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Reg