import css from '../css/modal.module.css'

export const Modal = ({modalClass,picture, escModal}) => {
    return (
        <div className={css[modalClass]} onKeyDown={escModal}>
            <img alt='' src={picture} className={css.modalImg} />
        </div>
    )
}