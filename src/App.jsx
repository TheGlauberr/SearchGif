import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const App = () => {
  const [categories, setcategories] = useState(["Hunter X Hunter"]);

  const addCategory = (value) =>{
    if(categories.includes(value)) return;
    setcategories([value, ...categories]);
  }

  return (
    <>
        <h1>Gift Search</h1>
        <AddCategory addCategory = {addCategory} />
        {
            // You can not use cateogories here because it's a state that contains all the values, we need a individual breakdown of the category
            categories.map((category)=>(
              <GifGrid key={category} category={category}/>
            ))
        }
    </>
  )
}

