import styles from './styles.module.css';


export default function DefaultButton({ title, backgroundColorButton, colorText, paddingButton, widthButton, fontButton, onclickButton  }){

    return <div className={styles.container} style={{backgroundColor: backgroundColorButton, padding: paddingButton, width: widthButton, fontWeight: fontButton, onclick:onclickButton}}>
        <p style={{color: colorText}}>{title}</p>
    </div>


}