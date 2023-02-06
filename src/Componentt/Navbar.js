import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { usePhoneData } from '../Context/ContextHelper'
const Navbar = () => {
    const {dispatch}=usePhoneData()
    return (
        <div className='container header'>
            <Link to='/'>
                <div className='phone_heading'>
                    <div className='avatar'>
                        <FaUserCircle />
                    </div>
                    <h2>PhoneBook</h2>
                </div>
            </Link>

            <div className='contact_search'>
                <input placeholder='Search..' onChange={(e)=>{
                    dispatch({
                        type:'SEARCH',
                        payload:e.target.value
                    })
                }}/>
            </div>
            <div className='create_btn'>
                <Link to='add'>
                    <button ><AiOutlinePlus className='icon' />Create Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar