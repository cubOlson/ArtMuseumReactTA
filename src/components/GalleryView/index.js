import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';

export default function GalleryView({ galleries }) {

    let { galleryId } = useParams();

    let currentGallery = galleries.find(gal => gal.gallerynumber === galleryId)

    const artWorks = currentGallery.objects.map(art => {
        const props = {
            art,
            galleryId
        };
            return (
                <ArtImageTile key={art.id} props={props} />
            )
    });

    return (
        <>
            <h1>{currentGallery.name}</h1>
            <Route exact path='/galleries/:galleryId' >
                {artWorks}
            </Route>
            <Route exact path='/galleries/:galleryId/art/:artId'>
                <ArtDescription props= {currentGallery} />
            </Route>
        </>
    )
};