import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [id, setId] = useState("")

   const handleChange = (e) => {
      const {value} = e.target
      setId(value)
   }

   return (
      <div className={styles.searchField} >
         <input className={styles.inputBox} type='search' name='search' id='' onChange={handleChange}/>
         <button className={styles.okButton} onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
