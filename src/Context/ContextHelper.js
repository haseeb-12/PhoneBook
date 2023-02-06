import { createContext, useReducer, useContext, useEffect } from 'react'

const phoneReducer = (state, action) => {

    console.log(action.payload)

    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                phoneData: [...state.phoneData, action.payload]
            }
        case 'DELETE':
            return {
                ...state,
                phoneData: state.phoneData.filter(t => t.id !== action.payload)
            }
        case 'EDIT': return {
            ...state,
            editId: action.payload
        }
        case 'UPDATE_DATA':
            return {
                ...state,
                phoneData: state.phoneData.map(t => {
                    if (t.id === action.payload.id) {
                        return action.payload
                    }
                    return t;
                }),
                editId: ''
            };
        case 'SEARCH':
            return {
                ...state,
                inputSearch: action.payload
            }
        default:
            return state
    }

}

const PhoneContext = createContext()

const ContextHelper = ({ children }) => {

    const [state, dispatch] = useReducer(phoneReducer, {
        editId: '',
        inputSearch: '',
        phoneData: JSON.parse(localStorage.getItem('phoneBook')) || []
        // if we refresh it set phoneData to empty if !localStorage
    })
    useEffect(() => {
        localStorage.setItem('phoneBook', JSON.stringify(state.phoneData));
    }, [state]);


    return (
        <PhoneContext.Provider value={{ state, dispatch }}>{children}</PhoneContext.Provider>
    )
}

const usePhoneData = () => {
    return useContext(PhoneContext)
}
export { ContextHelper, usePhoneData }