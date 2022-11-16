import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;

   return (
   <div className={styles.divCard}>
      {characters.map((character)=><Card
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      />)}
   </div>);
}
