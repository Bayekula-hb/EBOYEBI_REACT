const Section = () => {
  return (
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
            <p className="para--apprendre">
              Développez vos compétences numériques avec nos cours 100% à
              distance Grâce à nos formations en ligne, sécurisez votre avenir
              en misant sur vos compétences numériques. <br /> L'apprentissage à
              votre porte
            </p>
            <p className="para--details">
              Désormais vous pouvez apprendre quand vous voulez, à n'importe
              quel moment, à votre rythme et où vous voulez, aux côtés.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Section;
