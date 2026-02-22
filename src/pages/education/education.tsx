import "./education.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function Education() {

    return (
        <section>
            <h2>C-suite</h2>
            <ul>
                <li>What is AI?</li>
                <li>Identifying AI use cases</li>
                <li>Getting the most out of AI solutions</li>
                <li>...</li>
            </ul>
            <h2>Business professionals</h2>
            <ul>
                <li>What is AI?</li>
                <li>Day to day use</li>
                <li>Better prompts</li>
                <li>....</li>
            </ul>
            <h2>IT-staff</h2>
            <ul>
                <li>How does AI work</li>
                <li>AI in a professional development setting</li>
                <li>Influencing AI</li>
                <li>...</li>
            </ul>
        </section>
    );
}

export default Education;