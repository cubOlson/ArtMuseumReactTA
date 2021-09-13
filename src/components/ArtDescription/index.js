import { Link, useParams } from 'react-router-dom'

export default function ArtDescription({props}) {

    const {artId} = useParams();

    const thisArt = props.objects.find(ele => {
        console.log(ele.id)
        return ele.id === parseInt(artId)
    });

    console.log(thisArt)

    const imageArr = thisArt.images.map(image => {
        return (
            <img src={image.baseimageurl} alt={image.format} key={image.id}/>
        )
    });

    return (
        <>
            <Link to={`/galleries/${props.galleryid}`}>Back to Gallery</Link>
            <a href={props.url}>
                <h1>{thisArt.title}</h1>
            </a>
            <p>{thisArt.medium}, {thisArt.century}</p>
            <p>{thisArt.description}</p>
            <p>{thisArt.medium}</p>
            {imageArr}
        </>
    )
}