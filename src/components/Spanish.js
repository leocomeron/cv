import FotoPerfil from '../../src/FotoPerfil.jpg'
import IconReact from '../../src/IconReact.png'
import IconMongo from '../../src/IconMongo.png'
import classes from '../components/Spanish.module.css'


function Spanish() {
    return (

        <div className={classes.principal}>
            <div className={classes.contenedor}>
                <img src={FotoPerfil} alt="" className={classes.profilePic} />
                <div>
                    <a href="/en">
                        <button>Switch Lenguaje</button>
                    </a>
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
                    <h2>Historia académica</h2>
                    <h3 className={classes.intitute}>Universidad Nacional de Córdoba</h3>
                    <h3 className={classes.date}>2010 - 2015</h3>
                    <h3 className={classes.degree}>Ingeniero químico</h3>
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

                    <h2>Experiencia Profesional</h2>

                    <h2>Desarrollador Web Freelancer - 2021 a la actualidad</h2>

                    <h4>Implementar el desarrollo de buenas prácticas (responsive, UX).</h4>
                    <h4>Manejo de conexiones asíncronas con Ajax y/o Fetch.</h4>
                    <h4>Uso de session y cookies para almacenado de información.</h4>
                    <h4>Implementación de validaciones en JavaScript para formularios.</h4>
                    <h4>Análisis, diseño e implementación de un sistema de bases de datos.</h4>
                    <h4>Autenticación y manejo de sesiones y usuarios.</h4>
                    <h4>Integración con otras plataformas mediante api REST.</h4>

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
                    <h2>COCA-COLA Supervisor de Producción  - 2019 a la actualidad</h2>
                    <h4>Liderazgo de grupos de trabajo para cumplimiento de objetivos productivos.</h4>
                    <h4>Gestión de trabajo con proveedores.</h4>
                    <h4>Participación en planificación y ejecución de proyectos.</h4>
                    <h4>Proyecto bebida energizante Monster.</h4>
                    <h4>Proyecto reducción de gramos de plastico en botellas.</h4>
                    <h4>Proyecto bebida con alcohol Topo Chico.</h4>

                    <hr></hr>
                    <h2>ARCOR-Bagley S.A.- Supervisor de Producción - 2017 a 2019</h2>
                    <h4>Liderazgo de grupos de trabajo para cumplimiento de objetivos productivos.</h4>
                    <h4>Liderazgo de grupos de proyectos de mejora.</h4>
                    <h4>Proyecto aumento de productividad de línea de producción Traviata.</h4>
                    <h4>Proyecto interdiciplinario para disminución de reclamos de calidad en producto Traviata.</h4>


                </div>
            </div>
        </div >
    )
}

export default Spanish