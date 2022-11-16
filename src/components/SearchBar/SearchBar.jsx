import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={styles.searchField} >
         <input className={styles.inputBox} type='search'/>
         <button className={styles.okButton} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
