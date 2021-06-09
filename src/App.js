import Header from "./components/Header";
import Photo1 from "./Public/Image/students.jpg";

const App = () => {
  return (
    <>
      <Header />
      <section id="Home" className="section section--home">
        <div className="col-12 row div--home">
          <div className="col-4 container-img">
            <img src={Photo1} alt="étudiant" className="img--home" />
          </div>
          <div className="col-6 div--text">
            <p className="para--apprendre">L'apprentissage à votre porte</p>
            <p className="para--details">
              Désormais vous pouvez apprendre quand vous voulez, à n'importe
              quel moment , et où vous voulez
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
