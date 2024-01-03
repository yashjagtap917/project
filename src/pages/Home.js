import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    let mode = useSelector((state) => state.mode)

    return (
        <>
            <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'}`}>
                <div className="container">
                    <h1 className='text-center'>Welcome To Blog Website!</h1>
                    <img src="Images/blog.jpg" alt="" width="100%" height="450px" />
                </div>
            </div>


        </>
    )
}

export default Home