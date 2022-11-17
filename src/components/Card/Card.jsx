import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className={styles.card}>
         <div className={styles.divImg}>
            <button className={styles.button} onClick={props.onClose}>X</button>
            <img  src={props.image} alt="Imagen de Personaje"/>
            <h2 className={styles.imgName}>{props.name}</h2>
         </div>
         <div className={styles.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>         
      </div>
   );
}
