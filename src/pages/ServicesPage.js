import Nav from "../components/Nav"
import Footer from "../components/Footer"

const ServicesPage = () => {
    return (
        <div>
            <Nav />
            <div className="flex min-w-screen min-h-screen items-center justify-center">
                <div className="flex justify-center w-1/2 p-10">
                    <img src="https://i.postimg.cc/Sx5ZcK56/IMG-1011.avif" />
                </div>
                <div className="w-1/2 flex justify-center text-xl p-20">
                    Our ISA Certified Arborists and plant healthcare specialists provide tree and landscape assessments, diagnose insect, disease, and structural problems and share solutions to help your trees thrive. Our staff’s experience and state-of-the-art equipment allow us to care for any size property
                </div>
            </div>
            <Footer />

        </div>
    )
};

export default ServicesPage;