import { useState } from "react"

export const AddCategory = ({addCategory}) => {
    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event)=>{
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length<=1)return ;
        addCategory(newValue)
        setinputValue('');

    }

  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Search GIFs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
    
  )
}
