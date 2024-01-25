import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller, Autoplay } from 'swiper/modules';
import 'swiper/css';


function App() {
  return (



    <div className="App">

      <header className="App-header">
        <div id="logo">Supercerebros</div>
        <div id="navList">
          <ul id='navItems'>
            <li><a href='#heroSection'>App</a></li>
            <li><a href='#serviciosSection'>Servicios</a></li>
            <li><a href='#sobreNosotros'>¿Quienes Somos?</a></li>
            <li><a href='#contact'>Contáctanos</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section id="heroSection" className="darkSection">
          <div id="heroContent">
            <div id="left">
              <div id="tx1">APLICACIÓN</div>
              <div id="tx2">SUPERCEREBROS</div>
              <div id="tx3">¡Despierta el poder de tu mente con SuperCerebro! ¿Estás listo para llevar tus habilidades cognitivas al siguiente nivel? Juegos que activarán tu cerebro mientras te diviertes y ganas neuronas.</div>
              <div id="buttonIr">
                <button className='submit'>Ir</button>
              </div>
            </div>
            <div id="right">
              <img src="https://supercerebros.com/assets/componentes/web/imagenCelular.png" alt="imagen de supercerebros" id="imagen" />
            </div>
          </div>
          <img src="https://supercerebros.com/assets/componentes/web/desktop1.svg" alt="" id='rotateSVG' />

        </section>

        <div id="whitebg">
          <section id="serviciosSection" className="lightSection">
            <h1 className="titulos">Servicios</h1>

            <div id="carousel">
              <Swiper
                modules={[Navigation, Controller, Autoplay]}
                slidesPerView={1}
                onSwiper={(swiper: any) => console.log(swiper)}
                loop={true}
                autoplay={true}
              >
                <SwiperSlide id="serviceSlides">

                  <div id="serviceInfo">
                    <p>Conferencias Inspiradoras</p>
                  </div>
                  <div id="serviceImg">
                    <img src="https://supercerebros.com/assets/componentes/web/img1.jpg" alt="" />
                  </div>

                </SwiperSlide>

                <SwiperSlide id="serviceSlides">
                  <div id="serviceInfo">
                    <p>Graduados</p>
                  </div>
                  <div id="serviceImg">
                    <img src="https://supercerebros.com/assets/componentes/web/img2.jpg" alt="" />
                  </div>
                </SwiperSlide>

                <SwiperSlide id="serviceSlides">
                  <div id="serviceInfo">
                    <p>Conferencia TedX</p>
                  </div>
                  <div id="serviceImg">
                    <img src="https://supercerebros.com/assets/componentes/web/img3.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div id='botonServicios'>
              <button className='submit'> <a href="https://www.facebook.com/DiegoRodriguezJJs">Más Información</a> </button>
            </div>

          </section>

          <section id="sobreNosotros" className="darkSection">
            <div id="sobreNosotrosFlex">
              <div id="muchachoIzquierda" className="mushashos sobreNosotrosChildren">
                <img src="https://supercerebros.com/assets/componentes/web/JuanPabloDuque.png" alt="" />
              </div>
              <div id="sobreNosotrosCentro" className="sobreNosotrosChildren">
                <h1 className="titulos">SOBRE NOSOTROS</h1>

                <img id="img-sp" src="https://supercerebros.com/assets/images/Logo-blanco.png" alt="" />
                <p id="psn2">Somos los representantes Colombianos y semifinalistas en el programa “SUPERCEREBROS” del canal internacional NATGEO, con más de 9 años de experiencia, dedicados al aprendizaje y la enseñanza de la metodología MILAG, tiempo en el cual hemos sido reconocidos en procesos de formación y Neuro-entrenamiento en niños, jóvenes, adultos y adultos sabios.</p>

                <h1 className="nc">NUESTROS CLIENTES</h1>
                <div id='imagenes-empresas'>
                  <div id='column'>
                    <img id="empresa1-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/2c2404153191307.Y3JvcCw4MDgsNjMyLDAsMA.png" alt="" />
                  </div>
                  <div>
                    <img id="empresa2-img" src="https://www.comfandi.com.co/sites/default/files/styles/3_2_large/public/2021-02/U.%20Antonio%20Nari%C3%B1o%20UAN.png?itok=gtFUlcV5" alt="" />
                  </div>
                  <div>
                    <img id="empresa3-img" src="https://gimnasiomoderno.edu.co/wp-content/uploads/2018/04/LOGO-GIMNASIO-MODERNO_COLOR-BAJA.jpg" alt="" />
                  </div>
                  <div>
                    <img id="empresa4-img" src="https://logowik.com/content/uploads/images/banco-de-occidente3369.logowik.com.webp" alt="" />
                  </div>
                </div>
              </div>
              <div id="muchachoDerecha" className="mushashos sobreNosotrosChildren">
                <img src="https://supercerebros.com/assets/componentes/web/DavidCantor.png" alt="" />
              </div>
            </div>

          </section>
        </div>

        <section id='contact' className='Contactenos'>

          <img
            className='supercerebro'
            src="https://supercerebros.com/assets/images/supercerebro/SuperCerebroSenalando.png"
            alt="Imagen de super cerebros"

          />
          <form className='formulario'>

            <h1 className='Contactanos'>Contactanos</h1>
            <label>
              <input type="text" placeholder='ingresa tu email' />
            </label>
            <label>
              <input type="text" placeholder='Nombres' />
            </label>

            <label>
              {/* <input type='text' placeholder='Mensaje' /> */}
              <textarea placeholder='Mensaje' />
            </label>

            <button className='submit'>Enviar</button>

          </form>
        </section>

        <footer>
            <h1 >Redes Sociales</h1>
            <div className='redesSociales'>
              <a className='links' href='#'>Facebook</a>
              <a className='links' href='#'>Instagram</a>
              <a className='links' href='#'>Tik Tok</a>
            </div>
          <div className='Informacion'>
            <h2 className='info'>Informacion de Contacto</h2>
            <p>SUPERCEREBROS SAS  </p>
              <p>info@Supercerebros.com </p>
              <p>Calle 19 #6-68 Oficina 603, Bogota, 111511 Bogotá </p>
              <p>(+57) 310 311 3156</p>
  
          </div>
          <p className='derechos'>Todos los derechos reservados para Juan, Diego, yeyo, Daniel</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

