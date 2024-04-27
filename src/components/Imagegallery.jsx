import css from '../css/gallery.module.css'

export const ImageGallery = ({ markup }) => {
    let updateMarkup
    console.log(markup)
    if (markup) {
        updateMarkup = markup.hits.map((data) => (
            <div key={data.id}>
                <a href={data.largeImageURL}>
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