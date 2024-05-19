import {Section} from "../components/organisms/Section"
import { Section2 } from "../components/organisms/Section"
import { Section3 } from "../components/organisms/Section"
import { Section4 } from "../components/organisms/Section"
import '../pages/Home.css'

function Home(){
    return   (
    <div id="page">
    <div id="cards_home">
    <Section ></Section>
    </div>
    <div>
    <Section2></Section2>
    </div>
    <div>
    <Section3></Section3>

    </div>
    <div>
    <Section4></Section4>
    </div>
    
</div>
)
    
}
export default Home