import FotoPerfil from "../images/FotoPerfil.jpg";
import IconReact from "../images/IconReact.png";
import IconMongo from "../images/IconMongo.png";
import IconNext from "../images/IconNextJS.png";
import IconTypescript from "../images/IconTypescript.png";
import IconNode from "../images/IconNode.png";
// import IconExpress from '../../src/images/IconExpress'
// import IconCSS from '../../src/images/IconCSS'
// import IconJS from '../../src/images/IconJS'

import classes from "../components/Principal.module.css";
import { useState } from "react";

function Spanish() {
  var [lenguaje, setLenguaje] = useState(true);
  if (lenguaje) {
    return (
      <div className={classes.contenedor}>
        <img src={FotoPerfil} alt="" className={classes.profilePic} />
        <div>
          {/* <a href="/en"> */}
          <button
            onClick={() => setLenguaje((lenguaje = lenguaje ? false : true))}
          >
            Switch Lenguaje
          </button>
          {/* </a> */}
        </div>
        <h1>LEANDRO COMERÓN</h1>
        <h2>Desarrollador Full Stack - Ingeniero Químico</h2>
        <h3>Fecha de nacimiento: 08/04/1992 - 29 años</h3>
        <h3>Argentina, Córdoba - Córdoba Capital</h3>
        <h3>+54 9 3492 517831</h3>
        <h3>leocomeron@gmail.com</h3>
        <h3>Actualmente en: Cordoba, Argentina</h3>
        <div>
          <div>
            <h1>Mi perfil online:</h1>
            <div className={classes.misLinks}>
              <a
                href="https://github.com/leocomeron"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="img GitHub"
                  className={classes.iconGit}
                ></img>
              </a>
            </div>
            <div className={classes.misLinks}>
              <a
                href="https://www.linkedin.com/in/leandro-comeron/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://image.similarpng.com/very-thumbnail/2021/01/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png"
                  alt="img Linkedin"
                  className={classes.iconBig}
                ></img>
              </a>
            </div>
          </div>
        </div>
        <hr className={classes.hrSmall}></hr>
        <div className={classes.academic}>
          <h2>Skills</h2>
          <div className={classes.skills}>
            <div className={classes.skillsDiv}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>HTML</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>CSS</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img
                src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>Javascript</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img
                src="https://img2.freepng.es/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg"
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>NodeJS</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img src={IconReact} alt="" className={classes.iconSkill}></img>
              <pre>React</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img src={IconMongo} alt="" className={classes.iconSkill}></img>
              <pre>MongoDB</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>Bootstrap</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img
                src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png"
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>Express</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img src={IconNext} alt="" className={classes.iconSkill}></img>
              <pre>NextJS</pre>
            </div>
            <div className={classes.skillsDiv}>
              <img
                src={IconTypescript}
                alt=""
                className={classes.iconSkill}
              ></img>
              <pre>Typescript</pre>
            </div>
          </div>

          <hr></hr>

          <h2>Historia académica</h2>
          <h3>Universidad Nacional de Córdoba</h3>
          <h3>2010 - 2015</h3>
          <h3>Ingeniero químico</h3>
          <hr className={classes.hrSmall}></hr>
          <h3>Udemy</h3>
          <h3>2020 - 2021</h3>
          <h3>Web Developer Bootcamp</h3>
          <hr className={classes.hrSmall}></hr>
          <h3>Udemy</h3>
          <h3>May 2021 - Jul 2021</h3>
          <h3>React: The Complete Guide</h3>
          <hr></hr>
          <h2>Lenguajes</h2>
          <h3>Inglés</h3>
          <h4>Profesional</h4>
          <h3>Español</h3>
          <h4>Nativo</h4>
          <h3>Italiano</h3>
          <h4>Intermedio</h4>

          <hr></hr>

          <h2>Experiencia Profesional</h2>

          <h2>Desarrollador Web Freelancer - Ene 2021 a la actualidad</h2>

          <h4>
            Implementar el desarrollo de buenas prácticas (responsive, UX).
          </h4>
          <h4>Manejo de conexiones asíncronas con Ajax y/o Fetch.</h4>
          <h4>Uso de session y cookies para almacenado de información.</h4>
          <h4>
            Implementación de validaciones en JavaScript para formularios.
          </h4>
          <h4>
            Análisis, diseño e implementación de un sistema de bases de datos.
          </h4>
          <h4>Autenticación y manejo de sesiones y usuarios.</h4>
          <h4>Integración con otras plataformas mediante api REST.</h4>

          <h3>Portfolio: </h3>

          <div>
            <a
              href="https://github.com/leocomeron/estetica"
              target="_blank"
              rel="noreferrer"
            >
              <button>Estética Bell&Co</button>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/leocomeron/YelpCamp"
              target="_blank"
              rel="noreferrer"
            >
              <button>YelpCamp (Bootcamp project)</button>
            </a>
          </div>

          <hr className={classes.hrSmall}></hr>
          <h2>COCA-COLA Supervisor de Producción - 2019 a la actualidad</h2>
          <h4>
            Liderazgo de grupos de trabajo para cumplimiento de objetivos
            productivos.
          </h4>
          <h4>Gestión de trabajo con proveedores.</h4>
          <h4>Participación en planificación y ejecución de proyectos.</h4>
          <h4>Proyecto bebida energizante Monster.</h4>
          <h4>Proyecto reducción de gramos de plastico en botellas.</h4>
          <h4>Proyecto bebida con alcohol Topo Chico.</h4>

          <hr className={classes.hrSmall}></hr>
          <h2>ARCOR-Bagley S.A.- Supervisor de Producción - 2017 a 2019</h2>
          <h4>
            Liderazgo de grupos de trabajo para cumplimiento de objetivos
            productivos.
          </h4>
          <h4>Liderazgo de grupos de proyectos de mejora continua.</h4>
          <h4>
            Proyecto aumento de productividad de línea de producción Traviata.
          </h4>
          <h4>
            Proyecto interdiciplinario para disminución de reclamos de calidad
            en producto Traviata.
          </h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.principal}>
        <div className={classes.contenedor}>
          <img src={FotoPerfil} alt="" className={classes.profilePic} />
          <div>
            {/* <a href="/en"> */}
            <button
              onClick={() => setLenguaje((lenguaje = lenguaje ? false : true))}
            >
              Cambiar idioma
            </button>
            {/* </a> */}
          </div>
          <h1>LEANDRO COMERÓN</h1>
          <h2>Full Stack Developer - Chemistry Engineer</h2>
          <h3>Birth date: Apr/08/1992 - 29 years old</h3>
          <h3>Argentina, Córdoba - Córdoba Capital</h3>
          <h3>+54 9 3492 517831</h3>
          <h3>leocomeron@gmail.com</h3>
          <h3>Now living in: Cordoba, Argentina</h3>
          <div>
            <div>
              <h1>My online profile:</h1>
              <div className={classes.misLinks}>
                <a
                  href="https://github.com/leocomeron"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="img GitHub"
                    className={classes.iconGit}
                  ></img>
                </a>
              </div>
              <div className={classes.misLinks}>
                <a
                  href="https://www.linkedin.com/in/leandro-comeron/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://image.similarpng.com/very-thumbnail/2021/01/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png"
                    alt="img Linkedin"
                    className={classes.iconBig}
                  ></img>
                </a>
              </div>
            </div>
          </div>

          <hr className={classes.hrSmall}></hr>
          <div className={classes.academic}>
            <h2>Skills</h2>
            <div className={classes.skills}>
              <div className={classes.skillsDiv}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>HTML</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>CSS</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img
                  src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>Javascript</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img
                  src="https://img2.freepng.es/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg"
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>NodeJS</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img src={IconReact} alt="" className={classes.iconSkill}></img>
                <pre>React</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img src={IconMongo} alt="" className={classes.iconSkill}></img>
                <pre>MongoDB</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>Bootstrap</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img
                  src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png"
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>Express</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img src={IconNext} alt="" className={classes.iconSkill}></img>
                <pre>NextJS</pre>
              </div>
              <div className={classes.skillsDiv}>
                <img
                  src={IconTypescript}
                  alt=""
                  className={classes.iconSkill}
                ></img>
                <pre>Typescript</pre>
              </div>
            </div>

            <hr></hr>
            <h2>Academic History</h2>
            <h3>Universidad Nacional de Córdoba</h3>
            <h3>2010 - 2015</h3>
            <h3>Chimestry Engineer</h3>
            <hr className={classes.hrSmall}></hr>
            <h3>Udemy</h3>
            <h3>2020 - 2021</h3>
            <h3>Web Developer Bootcamp</h3>
            <hr className={classes.hrSmall}></hr>
            <h3>Udemy</h3>
            <h3>May 2021 - Jul 2021</h3>
            <h3>React: The Complete Guide</h3>
            <hr></hr>
            <h2>Lenguajes</h2>
            <h3>Inglés</h3>
            <h4>Professional</h4>
            <h3>Spanish</h3>
            <h4>Native</h4>
            <h3>Italian</h3>
            <h4>Intermediate</h4>

            <hr></hr>

            <h2>Professional Experience</h2>

            <h2>Freelance Web developer - 2021 to date</h2>

            <h4>
              Implement the development of good practices (responsive, UX).
            </h4>
            <h4>Handling asynchronous connections with Ajax and / or Fetch.</h4>
            <h4>Use of session and cookies to store information.</h4>
            <h4>Implementation of validations in JavaScript for forms.</h4>
            <h4>Analysis, design and implementation of a database system.</h4>
            <h4>Authentication and management of sessions and users.</h4>
            <h4>Integration with other platforms through REST api.</h4>

            <h3>Portfolio:</h3>

            <div>
              <a
                href="https://github.com/leocomeron/estetica"
                target="_blank"
                rel="noreferrer"
              >
                <button>Estética Bell&Co</button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/leocomeron/YelpCamp"
                target="_blank"
                rel="noreferrer"
              >
                <button>YelpCamp (Bootcamp project)</button>
              </a>
            </div>

            <hr className={classes.hrSmall}></hr>
            <h2>COCA-COLA Production supervisor - 2019 to date</h2>
            <h4>Leadership of work groups to fulfill production objectives.</h4>
            <h4>Management of work with suppliers.</h4>
            <h4>Participation in planning and execution of projects.</h4>
            <h4>Monster energy drink project.</h4>
            <h4>Project to reduce grams of plastic in bottles.</h4>
            <h4>Topo Chico alcoholic drink project.</h4>

            <hr className={classes.hrSmall}></hr>
            <h2>ARCOR-Bagley S.A.- Production supervisor - 2017 to 2019</h2>
            <h4>Leadership of work groups to fulfill production objectives.</h4>
            <h4>Leadership of improvement projects groups.</h4>
            <h4>Traviata production line productivity increase project.</h4>
            <h4>
              Interdisciplinary project to decrease quality claims in Traviata
              product.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Spanish;
