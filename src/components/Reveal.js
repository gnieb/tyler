
import useRevealOnScroll from "../hooks/useRevealOnScroll";


const Reveal = ({children}) => {
    const [ref, isVisible] = useRevealOnScroll({
        root: null,
        rootMargin: "0px",
        threshold:0.1
    });

    const classes = `transition-opacity duration-6000 
            ${isVisible ? "opacity-100 " : "opacity-0"
            }`;

    return (
        <div ref={ref} className={classes}>{children}</div>
    )
};

export default Reveal;