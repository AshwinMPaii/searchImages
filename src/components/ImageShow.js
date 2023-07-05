

export default function ImageShow({ image }) {
    return (
        <div style={{ width: '300px', height: '200px' }}>
            <img src={image.urls.small} alt={image.alt_description} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
        </div>
    )
}
