import ImageShow from './ImageShow';
import './ImageList.css';

export default function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} ></ImageShow>
    })
    return (
        <div className='image-list'>{renderedImages}</div>
    )
}
