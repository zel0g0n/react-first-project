import {useState} from 'react'

const useInputValidation = initialValue => {
    const [value,setValue] = useState(initialValue)

    function onChange(e) {
        setValue(e.target.value)
    }

    const setColor = () => {
        return value.search(/\d/)>=0
    }

    return {value,onChange,setColor}
}
const User = ()=>{
    const f = useInputValidation('')
    const l = useInputValidation('')

    
    
   
    
    return (
        <div>
            <input value={f.value} onChange={e => f.onChange(e)} className={`${f.setColor() && 'text-danger'}`} type="text" />
            <input value={l.value} onChange={e => l.onChange(e)} className={`${l.setColor() && 'text-danger'}`} type="text" />
        </div>
    )
}
export default User