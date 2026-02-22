import './home.css';
import Card from "../../components/card/card.tsx";
import aiBrain from '../../assets/ai-brain.svg';
import humansConnected from '../../assets/humans-connected.svg';
import secure from '../../assets/shield-check.svg';
import handShake from '../../assets/handshake.svg';
import rocket from '../../assets/rocket.svg';
import slider from '../../assets/slider-circled.svg';

function Homepage() {
    return (
        <section className={'motivation'}>
            <h1>Why choose us?</h1>
            <p className={'sub'}>We combine cutting edge Ai technology with a personalized human touch</p>
            <ul className={'motivation-list'}>
                <li>
                    <Card title={'In-dept AI knowledge'}
                          description={'Not only are we experts in our field, we are passionate and continuously learning ourselves.'}
                          icon={aiBrain}/>
                </li>
                <li>
                    <Card title={'Human in the loop'}
                          description={'You do not need to decide by yourself. We can assist you in every step of the way through experience.'}
                          icon={humansConnected}/>
                </li>
                <li>
                    <Card title={'Secure'}
                          description={'Having experience in large enterprise, we know how important security is. We take measures your data is secure and private.'}
                          icon={secure}/>
                </li>
                <li>
                    <Card title={'Partner'}
                          description={'By joining us, we become partners. Our goal is to enrich you, speed up your processes, and deliver the most up to date information.'}
                          icon={handShake}/>
                </li>
                <li>
                    <Card title={'Tailor fit'}
                          description={'Curious about Ai? Want to start small? Or want the full blown experience. We serve it all.'}
                          icon={slider}/>
                </li>
                <li>
                    <Card title={'Future ready'}
                          description={'Ai is hype, everyone is talking about it. We provide modern sensible solutions and update our solutions continuously.'}
                          icon={rocket}/>
                </li>
            </ul>
        </section>
    )
}

export default Homepage
