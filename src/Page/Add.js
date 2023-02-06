
import Form from '../Componentt/Form';
import { FaUserCircle } from 'react-icons/fa'

const Add = () => {
    return (
        <div className='container add_contact' >
            <div className='add_avatar'>
                <h2 style={{ color: 'black' }}>Create Contact</h2>
                <FaUserCircle className='icon' />
            </div>
            <Form data='Create' />
        </div>
    )
}

export default Add