import css from './ImageGallery.module.css'
import { ImageGalleryItem } from "./ImageGalleryItem";

export function ImageGallery({images}){
    return (
        <ul className={css.ImageGallery}>
            {images.map(({id, webformatURL, tags}) => <ImageGalleryItem key={id} src={webformatURL} alt={tags}/>)}
        </ul>
    );
}