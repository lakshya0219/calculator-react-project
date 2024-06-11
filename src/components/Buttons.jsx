import styles from './Buttons.module.css';

const Buttons = ({onButtonClick}) =>
  {
    const btns = ['C', '1', '2','+', '3', '4', '-', '5', '6', '*', '7' ,'8', '/' , '=', '9', '0' , '.'];
    return <div className={styles.outbutton} >
      {btns.map((addbtn) => (
        <button className={styles.inbutton} onClick={() => onButtonClick(addbtn)}>{addbtn}</button>
     ) )}
    </div>
  }

  export default Buttons;