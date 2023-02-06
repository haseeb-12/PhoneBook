
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineLocalPhone } from 'react-icons/md'
import { usePhoneData } from '../Context/ContextHelper'
import { useNavigate } from 'react-router-dom';

const Form = ({ data }) => {
    const navigate = useNavigate()
    const { dispatch, state: { editId, phoneData } } = usePhoneData()
    const [formData, setFormData] = useState({ name: '', number: '' });

    let randomColor = ['violet', 'yellow', 'slateBlue', 'tomato', 'lightGray', 'dodgerBlue']
    let back = randomColor[Math.floor(Math.random() * randomColor.length)]

    useEffect(() => {
        if (editId) {
            const itemToEdit = phoneData.find(item => item.id === editId);
            setFormData({ ...itemToEdit });
        } else {
            setFormData({ name: '', number: '' });
        }
    }, [editId, phoneData]);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            ...formData,
            id: editId ? editId : uuidv4(),
            backColor: back
        }

        if (payload.name) {
            dispatch({
                type: editId ? "UPDATE_DATA" : "ADD_DATA",
                payload
            });
        }

        if (editId) {
            navigate('/')
        }
        setFormData({ name: '', number: '' });
    };
    return (
        <form className='form_add' onSubmit={handleSubmit}>
            <div className='add_data'>
                <label><FaRegUser /></label>
                <input placeholder='Name' onChange={handleChange} name='name' value={formData.name} />
            </div>
            <div className='add_data'>
                <label><MdOutlineLocalPhone /></label>
                <input placeholder='Phone Number' onChange={handleChange} name='number' value={formData.number} pattern='[0-9]{10}' />
            </div>
            <button type='submit'>{data}</button>
        </form>
    )
};

export default Form;