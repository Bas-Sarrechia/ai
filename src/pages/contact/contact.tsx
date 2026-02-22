import "./contact.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function Contact() {
    const container = useRef(null);

    useGSAP(() => {
        const split = new SplitText(".fancy-text", {
            type: "words, chars"
        });

        gsap.from(split.chars, {
            duration: 0.3,
            opacity: 0,
            y: 20,
            stagger: 0.04,
            ease: "back.out(1.7)"
        });

        return () => split.revert(); // cleanup
    }, { scope: container });

    return (
        <section className={'contact-container'} ref={container}>
            <h1 className={'title'}>
                Curious?<br/> Lets open a{" "}
                <span className="fancy-text">Conversation!</span>
            </h1>
        </section>
    );
}

export default Contact;