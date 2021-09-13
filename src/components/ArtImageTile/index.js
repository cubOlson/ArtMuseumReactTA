import { Link } from 'react-router-dom';

export default function ArtImageTile({props}) {

    return (
        <Link to={`/galleries/${props.galleryId}/art/${props.art.id}`}>
            <img src={props.art.primaryimageurl} alt={`title ${props.art.id}`} />
        </Link>
    )
}