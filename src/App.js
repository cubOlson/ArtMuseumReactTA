import { Route, Switch } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/galleries/:galleryId'>
          <GalleryView exact galleries={harvardArt.records}/>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
