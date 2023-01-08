import { ImageGalleryItem } from "./ImageGalleryItem";
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'

export function ImageGallery({images}){
    return (
        <ul className={css.ImageGallery}>
            {images.map(({id, webformatURL, tags}) => <ImageGalleryItem key={id} src={webformatURL} alt={tags}/>)}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired
        })
    )
}