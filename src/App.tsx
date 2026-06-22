
import { Routes, Route } from "react-router"
import "./assets/scss/style.scss"
import HomePage from "./pages/Home"
import CatagoryLayout from "./layouts/CatagoryLayout"
import HeaderNav from "./components/HeaderNav"
import FilmPage from "./pages/Film"
import PeoplePage from "./pages/People"
import PlanetPage from "./pages/Planet"
import SpeciesPage from "./pages/Specie"
import StarshipPage from "./pages/StarShip"
import VehiclePage from "./pages/Vehicle"
import FilmDetailPage from "./pages/DetailPages/FilmDetail"
import PeopleDetailPage from "./pages/DetailPages/PeopleDetail"
import PlanetDetailPage from "./pages/DetailPages/PlanetDetail"
import StarshipDetailPage from "./pages/DetailPages/StarshipDetail"
import SpecieDetailPage from "./pages/DetailPages/SpecieDetail"
import VehiclesDetailPage from "./pages/DetailPages/VehicleDetail"
import DetailsLayout from "./layouts/DetailsLayout"


export default function App() {

    return <div className="vh-100">

        <HeaderNav />

        <Routes>

            <Route path="/" element={<HomePage />} />

            <Route element={<CatagoryLayout />} >

                <Route path="/films" element={<FilmPage />} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetPage />} />

                <Route path="/species" element={<SpeciesPage />} />
                <Route path="/starships" element={<StarshipPage />} />
                <Route path="/vehicles" element={<VehiclePage />} />

            </Route>

            <Route element={<DetailsLayout />} >

                <Route path="/films/:id" element={<FilmDetailPage />} />
                <Route path="/people/:id" element={<PeopleDetailPage />} />
                <Route path="/planets/:id" element={<PlanetDetailPage />} />

                <Route path="/species/:id" element={<SpecieDetailPage />} />
                <Route path="/starships/:id" element={<StarshipDetailPage />} />
                <Route path="/vehicles/:id" element={<VehiclesDetailPage />} />

            </Route>

        </Routes >

    </div>
}

