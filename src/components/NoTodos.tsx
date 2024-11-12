import classes from './NoTodos.module.css';

const NoTodos = () => {
    return(
        <div className={classes.wrapper}>
            <span className={classes.icon}></span>
            <p className={classes.paragraph}>
                It seems like you don't have anything planned yet...
            </p>
        </div>
    )
}

export default NoTodos;