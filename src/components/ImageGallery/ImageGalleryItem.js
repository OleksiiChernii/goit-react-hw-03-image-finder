import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem({src, alt}){
    return (
        <li className={css.ImageGalleryItem}>
            <img className={css["ImageGalleryItem-image"]} src={src} alt={alt} />
        </li>
    );
}