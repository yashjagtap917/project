import React from 'react'
import { useForm } from 'react-hook-form'
import { createBlog } from '../store/slice/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    let mode = useSelector((state) => state.mode)

    let navigate = useNavigate()


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()



    let dispatch = useDispatch()

    let onSubmit = (data) => {
        dispatch(createBlog(data))
        navigate("/data")
    }


    return (
        <>

            <div className={`vh-100 container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'}`}>

                <div className="col-md-6">
                    <form action="" className='p-5' onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="" className='form-label'>Enter Blog Title</label>
                        <input
                            {...register("title", { required: true, maxLength: 20, })}
                            type="text" className='form-control' />

                        {errors?.title?.type === "required" && <p className='text-danger'>Title is required!</p>}
                        {errors?.title?.type === "maxLength" && <p className='text-danger'>limit exceeded!</p>}

                        <label htmlFor="" className='form-label'>Write Here</label>
                        <input {...register("body", { required: true, maxLength: 500 })} type="text" className='form-control' />

                        {errors?.body?.type === "required" && <p className='text-danger'>body is required!</p>}
                        {errors?.title?.type === "maxLength" && <p className='text-danger'>limit exceeded!</p>}

                        <br />
                        <input type="submit" className='btn btn-success' />
                    </form>
                </div>

            </div>

        </>
    )
}

export default Form

