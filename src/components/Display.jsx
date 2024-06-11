import styles from './Display.module.css';

const Display = ({displayValue}) =>
  {
    return <div className= {styles.disp}>
      <input
        type="text" className= {styles.innerdisp} value={displayValue} readOnly
      /> 
    </div>
  }
  export default Display;