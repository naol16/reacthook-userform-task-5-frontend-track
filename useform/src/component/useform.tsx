import React from 'react'
import "./userform.css"
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

const Useform = () => {
  const form =useForm<values>();
  const {register,control,handleSubmit,formState}=form;
  const{errors}=formState
  interface values{
    name:string,
    message:string,
    email:string
  }
  function onsubmit(datas:values){
    console.log(datas)
  }
  return (
    <div className='mainwarpper'>
    <form onSubmit={handleSubmit(onsubmit)} noValidate>
      <div>
      <div className='name'>
      <label htmlFor='name'>name</label><br/>
      <input type="text" id="name" {...register("name",{
        required:"name is required"
      })}></input>
      <p className='error'>{errors.name?.message}</p>
      </div>
      <div className='email'>
      <label htmlFor='email'>Email</label><br/>
      <input type="email" {...register("email",{
      required:"email is required",
      pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",}},
      

      )}/>
      <p className='error'>{errors.email?.message}</p>
      </div>
      <div className='message'>
      <label htmlFor='message'>Message</label><br/>
      <input type="text" id="message" {...register("message",{
        required:"message is required"
      })}></input>
      <p className='error'>{errors.message?.message}</p>
      </div>
      <button type="submit">submit</button>
      </div>

    </form>
    <DevTool control={control}/>
    </div>
  )
}

export default Useform
