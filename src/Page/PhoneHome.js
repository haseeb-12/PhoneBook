import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { usePhoneData } from '../Context/ContextHelper'
import { AiFillDelete } from 'react-icons/ai'

const PhoneHome = () => {
  const { state: { phoneData, inputSearch }, dispatch } = usePhoneData()

  const filterContact = phoneData.filter(t => t.name.toLowerCase().includes(inputSearch))

  // localStorage.clear()

  return (
    <div className='container'>
      <table  >
        <thead>
          <tr style={{ borderBottom: '1px solid gray' }}>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            filterContact.map(({ id, name, number, backColor }) => (
              <tr className='table_data' key={id}>
                <td>
                  <Link to={`contact/${id}/${name}/${number}/${backColor}`}>
                    <div className='left'>
                      <div className='circle' style={{ backgroundColor: backColor }}>
                        {name[0]}
                      </div>
                      {name}
                    </div>
                  </Link>
                </td>
                <td>{number}</td>
                <td>
                  <AiFillDelete style={{ color: 'red', fontSize: '1.5rem' }} onClick={() => {
                    dispatch({
                      type: 'DELETE',
                      payload: id
                    })
                  }} />
                </td>
              </tr>


            ))
          }
        </tbody>

      </table>
    </div>

  )
}

export default PhoneHome