import FormSuscribe from "./FormSuscribe";
import Img from "../Public/Image/gettyimages-948316790-612x612.jpg"

const containerInscription = () => {
  return (
    <section className="container--inscription col-12 row ">
      <div className="container--inscription--div col-sm-6 col-12">
        <h2>Inscription</h2>
        <FormSuscribe />
      </div>
      <div className="container--inscription--right col-sm-6 col-12">

          <img src={Img} alt="Une personne devant l'ordinateur"/>
      </div>
    </section>
  );
};
export default containerInscription;
