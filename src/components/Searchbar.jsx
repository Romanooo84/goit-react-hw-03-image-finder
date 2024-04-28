import { SearchButton } from "./Button"
import css from '../css/searchbar.module.css'

export const Searchbar = ({onChange, onClick}) => {
    return (
        <div className={css.formclass}>  
            <form>      
                <div className={css.formdiv}>
                    <SearchButton onClick={onClick} />  
                    <input
                            type="text"
                            name="name"
                            id='id'
                            required
                            onChange={onChange}
                    />
                    
                </div>        
            </form> 
    </div>
    )
}