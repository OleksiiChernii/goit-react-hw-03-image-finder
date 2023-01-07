import css from './Button.module.css'

export function Button({buttonHandler}){
    return (
        <button className={css.Button} type='button' onClick={buttonHandler} >Load more...</button>
    );
}