import React, { useState } from 'react'

import { MdOutlineLocalPhone } from 'react-icons/md'
import { useParams, useNavigate, Outlet } from 'react-router-dom'
import { usePhoneData } from '../Context/ContextHelper'

const SingleContact = () => {
  const [show, setShow] = useState(true)
  const { dispatch, } = usePhoneData()
  const navigate = useNavigate()
  const { name, contact, back, id } = useParams()

  const handleDelete = () => {
    dispatch({
      type: 'DELETE',
      payload: id
    })
    navigate('/')
  }

  const handleEdit = () => {
    setShow(!show)
    dispatch({
      type: 'EDIT',
      payload: id
    })
    navigate('edit')
  }

  return (
    <div className='container single_data'>
      <div className='upper_data'>
        <div className='upper_circle' style={{ backgroundColor: back }}>{name[0]}</div>
        <h2>{name}</h2>
      </div>
      <div className='upper_button'>
        <button style={{ background: 'dodgerBlue' }} onClick={handleEdit}>Edit</button>
        <button style={{ background: 'red' }} onClick={handleDelete}>Delete</button>
      </div>
      <Outlet />
      {show &&
        <div className='lower_data'>
          <h2>Contact Details</h2>
          <p>
            <MdOutlineLocalPhone style={{ fontSize: '1.3rem', marginRight: '1rem' }} />
            <span >{contact}</span>
          </p>
        </div>
      }

    </div>
  )
}

export default SingleContact