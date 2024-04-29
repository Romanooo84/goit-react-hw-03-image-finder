import css from '../css/gallery.module.css'

export const ImageGallery = ({ markup, toggleModal }) => {
    let updateMarkup
    if (markup) {
        updateMarkup = markup.hits.map((data, index) => (
            <div key={index}>
                <a href={data.largeImageURL} onClick={toggleModal} >
                    <img alt={data.tags} src={data.webformatURL} loading="lazy"/>
                </a>
            </div>
        ));
    }

    return (
        <div className={css.gallery}>
            {updateMarkup}
        </div>
    );
};