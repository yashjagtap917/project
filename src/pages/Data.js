import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, getBlog } from '../store/slice/UserSlice'
import { MdDelete } from "react-icons/md";

const Data = () => {

    let mode = useSelector((state) => state.mode)


    let { loading, userData } = useSelector((state) => state.user)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBlog())
    }, [])

    if (loading) {
        return <div className="load vh-100 align-items-center d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    }

    return (
        <>
            <div className={`pt-5 vh-100 container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'}`}>
                <div className="row">

                    {
                        userData.map((e) => {
                            return (
                                <div className="col-md-7 mx-auto" key={e.id}>
                                    <div className="card text-bg-danger mb-3 ">

                                        <div className="title d-flex align-items-center justify-content-between">
                                            <div className="card-header">{e.title}</div>
                                            <MdDelete onClick={() => dispatch(deleteBlog(e.id))} style={{ fontSize: '30px' }} />
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">{e.body}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Data