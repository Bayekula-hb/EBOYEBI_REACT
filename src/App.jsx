// import axios from "axios";
import { useEffect } from "react";
import Header from "./components/Header";
import Query from "./components/query";
import queryCors from "./components/queryWithCors";
// import Photo1 from "./Public/Image/students.jpg";

const App = () => {
  const APIList = "https://www.udemy.com/api-2.0/courses/";
  const APIClient = "gIJdINdl183ge1sMAIWh2aaCaDCyq50y3SXIW9sJ";
  const APISecret =
    "Ocxd4ix5nIfwn8GhnA96O74O4NaxmzCfxdxsJps9RPAFI3gDJvd5WXTzDixzixWwQxfyg3CuaP0rG6zmdzTqKHf2mC8qDZIJrGotNnUp4cxdBrNuZkY4ZLKFAEmW5bLZ";
  useEffect(() => {
    const query = Query(APIList);
    console.log("Query : ", query);
    const query2 = queryCors(APIList, APIClient, APISecret);
    console.log("Query : ", query2);
  }, []);
  return (
    <>
      <Header />
      <div>
        <section id="Home" className="section section--home">
          <div className="col-12 row div--home">
            {/* <div className="col-4 container-img">
              <img src={Photo1} alt="étudiant" className="img--home" />
            </div> */}
            <div className="col-12 div--text ">
              {/* <p>
                Développez vos compétences numériques avec nos cours 100% à
                distance Grâce à nos formations en ligne, sécurisez votre avenir
                en misant sur vos compétences numériques. Formez-vous à votre
                rythme, aux côtés d’experts et d'artistes passionnés.
              </p> */}
              <p className="para--apprendre">Développez vos compétences numériques avec nos cours 100% à
                distance Grâce à nos formations en ligne, sécurisez votre avenir
                en misant sur vos compétences numériques. <br/> L'apprentissage à votre porte</p>
              <p className="para--details">
                Désormais vous pouvez apprendre quand vous voulez, à n'importe
                quel moment, à votre
                rythme et où vous voulez, aux côtés.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default App;
