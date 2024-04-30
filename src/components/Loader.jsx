import css from '../css/loader.module.css'
export const Loader=({loaderClass})=>{
    return(
        <div className={css[loaderClass]}></div>
    )
}