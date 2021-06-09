import Header from "./components/Header";
import Photo1 from "./Public/Image/handsome-man-reading-book.jpg"

const App = ()=>{

  return(
    <>
      <Header />
      <section id="Home" className="section section--home">
        <div className="col-12 row div--home">
          <img src={Photo1} alt="étudiant" className="col-6 img--home"/>
          <div className="col-6 div--text">
            <p className="para--apprendre">
              L'apprentissage à votre porte
            </p>
            <p className="para--details">
              Désormais vous pouvez apprendre quand vous voulez, à n'importe quel moment
              , et où vous voulez
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default App;