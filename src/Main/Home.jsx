import Banner from "../Component/Banner";
import Categories from "../Component/Categories";
import Lastmenu from "../Component/Lastmenu";
import Menu from "../Component/Menu";
import Navbar from "../Component/Navbar";
import Section from "../Component/Section";
import Testimonials from "../Component/Testimonials";



const Home = () => {
    return (
        <div>
            <div className="max-w-[1400px] mx-auto">
            <div>
            <Navbar></Navbar>
            </div>

            <div>
            <Banner></Banner>
            </div>
            <div>
                <Categories></Categories>
                </div>
            <div>
                <Section></Section>
            </div>
            <div>
                <Menu></Menu>
            </div>
            <div>
                <Lastmenu></Lastmenu>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>

            </div>

           
        </div>
    );
};

export default Home;