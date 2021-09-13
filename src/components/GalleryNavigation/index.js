import { NavLink } from 'react-router-dom';

import './GalleryNavigation.css';

export default function GalleryNavigation({galleries}) {

    const navItems = galleries.map(gallery => {
        return (
            <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
        )
    });

    return (
        <nav>
            <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>Home</NavLink>
            {navItems}
            <h1>Galleries</h1>
        </nav>
    );
  }