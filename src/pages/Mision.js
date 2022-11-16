import Nav from "../components/Nav";
import Footer from "../components/Footer";
import './mision.css';
import CardMi from "../components/CardMi";

const Mision = () => {
    return (
        <div>

            <Nav user={localStorage.getItem("userName")} />


            <CardMi />

            <Footer />
        </div>

    );
}

export default Mision;