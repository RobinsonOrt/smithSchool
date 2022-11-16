import Nav from '../components/Nav'
import Footer from '../components/Footer';
import './horarios.css';
import CardsHo from '../components/CardsHo';


const Horarios = () => {
  return (
    <div className="bodyHo">
      <Nav user={localStorage.getItem("userName")} />
      <CardsHo />
      <Footer />
    </div >
  );
}

export default Horarios;