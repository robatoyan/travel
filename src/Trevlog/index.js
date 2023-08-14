import { Contact } from "./Contact"
import { Discover } from "./Discover"
import { Home } from "./Home"
import { KeyFeatures } from "./KeyFetures"
import { Menu } from "./Menu"
import { Services } from "./Services"
import { Sponsor } from "./Sponsor"
import { Subscribe } from "./Subscribe"
import { Testimonials } from "./Testimonials"
import { TrevelPoins } from "./TrevelPoins"

export const Trevlong = () => {
    return (
        <div className="Trevlong">
            <Menu />
            <Home />
            <div className="HomeGlavniReduce"></div>
            <Sponsor />
            <Services />
            <div className='ReduseHome'></div>
            <Discover />
            <TrevelPoins />
            <KeyFeatures />
            <Testimonials />
            <Subscribe />
            <Contact />
        </div>
    )
}