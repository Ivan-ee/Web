import styles from './Button.module.css'

function Button(props) {
    const {onClick, title, children, disable = false} = props

    return (
        <button {...props} className={styles.button} onClick={onClick} title={title}
                disabled={disable}>{children}</button>
    )
}

export default Button