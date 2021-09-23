import FotoPerfil from '../../src/FotoPerfil.jpg'
import IconReact from '../../src/IconReact.png'
import IconMongo from '../../src/IconMongo.png'
import classes from '../components/Spanish.module.css'


function English() {
    return (

        <div className={classes.principal}>
            <div className={classes.contenedor}>
                <img src={FotoPerfil} alt="" className={classes.profilePic} />
                <div>
                    <a href="/">
                        <button>Switch Lenguaje</button>
                    </a>
                </div>
                <h1>LEANDRO COMERÓN</h1>
                <h2>Full Stack Developer - Chemistry Engineer</h2>
                <h3>Birth date: Apr/08/1992 - 29 years</h3>
                <h3>Argentina, Córdoba - Córdoba Capital</h3>
                <h3>+54 9 3492 517831</h3>
                <h3>leocomeron@gmail.com</h3>
                <h3>Now living in: Cordoba, Argentina</h3>
                <div>
                    <div>
                        <h1>My online profile:</h1>
                        <a href="https://github.com/leocomeron" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img GitHub" className={classes.iconGit}></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/leandro-comeron/" target="_blank" rel="noreferrer">
                            <img src="https://image.similarpng.com/very-thumbnail/2021/01/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png" alt="img Linkedin" className={classes.iconBig}></img>
                        </a>
                    </div>
                </div>
                <div className={classes.academic}>
                    <h2>Skills</h2>
                    <div className={classes.skills}>
                        <div className={classes.skillsDiv}>
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" className={classes.iconSkill}></img>
                            <pre>HTML</pre>
                        </div>
                        <div className={classes.skillsDiv}>
                            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt="" className={classes.iconSkill}></img>
                            <pre>CSS</pre>
                        </div>
                        <div className={classes.skillsDiv}>
                            <img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt="" className={classes.iconSkill}></img>
                            <pre>Javasript</pre>
                        </div>
                        <div className={classes.skillsDiv}>
                            <img src="https://img2.freepng.es/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg" alt="" className={classes.iconSkill}></img>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" className={classes.iconSkill}></img>
                            <pre>Bootstrap</pre>
                        </div>
                        <div className={classes.skillsDiv}>
                            <img src="https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png" alt="" className={classes.iconSkill}></img>
                            <pre>Express</pre>
                        </div>
                    </div>
                    <h2>Academic History</h2>
                    <h3 className={classes.intitute}>Universidad Nacional de Córdoba</h3>
                    <h3 className={classes.date}>2010 - 2015</h3>
                    <h3 className={classes.degree}>Chimestry Engineer</h3>
                    <hr></hr>
                    <h3 className={classes.intitute}>Udemy</h3>
                    <h3 className={classes.date}>2020 - 2021</h3>
                    <h3 className={classes.degree}>Web Developer Bootcamp</h3>
                    <hr></hr>
                    <h3 className={classes.intitute}>Udemy</h3>
                    <h3 className={classes.date}>May 2021 - Jul 2021</h3>
                    <h3 className={classes.degree}>React: The Complete Guide</h3>
                    <hr></hr>
                    <h2>Lenguajes</h2>
                    <h3>Inglés</h3>
                    <h4>Profesional</h4>
                    <h3>Español</h3>
                    <h4>Nativo</h4>
                    <h3>Italiano</h3>
                    <h4>Intermedio</h4>

                    <hr></hr>

                    <h2>Experiencia Professional</h2>

                    <h2>Freelance Web developer - 2021 to now</h2>

                    <h4>Implement the development of good practices (responsive, UX).</h4>
                    <h4>Handling asynchronous connections with Ajax and / or Fetch.</h4>
                    <h4>Use of session and cookies to store information.</h4>
                    <h4>Implementation of validations in JavaScript for forms.</h4>
                    <h4>Analysis, design and implementation of a database system.</h4>
                    <h4>Authentication and management of sessions and users.</h4>
                    <h4>Integration with other platforms through REST api.</h4>

                    <h3>Portfolio:</h3>

                    <div>
                        <a href="https://github.com/leocomeron/estetica" target="_blank" rel="noreferrer">
                            <button>Estética Bell&Co</button>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/leocomeron/YelpCamp" target="_blank" rel="noreferrer">
                            <button>YelpCamp (Bootcamp proyect)</button>
                        </a>
                    </div>


                    <hr></hr>
                    <h2>COCA-COLA Production supervisor  - 2019 to now</h2>
                    <h4>Leadership of work groups to fulfill production objectives.</h4>
                    <h4>Management of work with suppliers.</h4>
                    <h4>Participation in planning and execution of projects.</h4>
                    <h4>Monster energy drink project.</h4>
                    <h4>Project to reduce grams of plastic in bottles.</h4>
                    <h4>Topo Chico alcoholic drink project.</h4>

                    <hr></hr>
                    <h2>ARCOR-Bagley S.A.- Production supervisor - 2017 to 2019</h2>
                    <h4>Leadership of work groups to fulfill production objectives.</h4>
                    <h4>Leadership of improvement projects groups.</h4>
                    <h4>Traviata production line productivity increase project.</h4>
                    <h4>Interdisciplinary project to decrease quality claims in Traviata product.</h4>


                </div>
            </div>
        </div >
    )
}

export default English