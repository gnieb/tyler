import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Reveal from "../components/Reveal"
import ServicesMarquee from "../components/ServicesMarquee";
import MobileNav from "../components/MobileNav";

const ServicesPage = () => {
    return (
        <div className="overflow-x-hidden">
            <MobileNav />
            <Nav />
           
            <div className="pt-24 sm:pt-32 p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8  bg-base text-darker">
            <div className="grid grid-rows-3 items-center">
                <div className="text-4xl font-bold">TRIMMING</div>
                <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $119</div>
            </div>
                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">TREE & BUSH REMOVAL</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $249</div>
                </div>

                

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">STUMP GRINDING</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $59</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">CANOPY RAISES</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">DEADWOOD</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

                <div className="grid grid-rows-3 items-center">
                    <div className="text-4xl font-bold">STORM DAMAGE</div>
                    <div className="text-xl">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</div>
                    <div className="my-10">
                    <p>_______________________________</p>
                    STARTING AT $299</div>
                </div>

            </div>

            <div className="mb-10 font-bold text-center italic text-lg sm:text-xl m-auto">Prices vary depending on size and traveling distance</div>

            {/* <div><button>READY TO CHAT?</button></div> */}
            

            <Footer />

        </div>
    )
};

export default ServicesPage;