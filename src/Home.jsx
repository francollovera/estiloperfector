import React from 'react';
import './edicion.css'; 
import portada from './fotos/portada.png';
// import portada1 from './fotos/diapo2.png';
import imagen1 from './fotos/comentarios.png';
import imagen2 from './fotos/Brainstorming User Persona Minimalista Azul.png';
import diapo1 from './fotos/diapo1.png';
import diapo2 from './fotos/diapo2a.png';
import diapo3 from './fotos/diapo3.png';
import diapo4 from './fotos/diapo4.png';
import diapo5 from './fotos/diapo5.png';
import diapo6 from './fotos/diapo6.png';
import diapo7 from './fotos/diapo7.png';
import diapo8 from './fotos/diapo8.png';
import diapo9 from './fotos/recuadros.png'


function EstiloPerfecto() {
  return (
    <div className="master">
      <div className="section">
        <div className="content">
          {/* <div className="text-container">
            <h3>ESTILO PERFECTO</h3>
            <p className="textoinicial">
              "Estilo Perfecto" es una aplicación<br />
              que tiene como objetivo lograr con<br />
              rapidez las mejores combinaciones de<br />
              tus prendas y accesorios para que <br />
              puedas lucir ese look que siempre <br />
              quisiste, guardarlos, ordenarlos y <br />
              almacenarlos en tus favoritos de <br />
              manera rápida y sencilla.
            </p>
          </div> */}
          <div className="portada">
            <img src={portada} alt="Portada" />
            {/* <img src={portada1} alt="Portada" /> */}
          </div>
        </div>
      </div>
      <div className="container">
        <p className="primertexto">
        <br /><br />
          <h3>BACKGROUND</h3><br />
          
          En aquel entonces acababa de terminar mi estudios en diseño ux, y en charlas comunes con mi novia y amigos y<br />
          surgía constantemente el tema de la moda, sus accesorios, calzado y mas, por lo que me puse a investigar en Google,<br />
          youtube, Pinterest y otros. Me encontré con páginas y videos que podían sugerirte las mejores combinaciones de ropa<br /> basándose en los colores y la moda, pero ninguno tenía la opción de un guardado fácil o bien simplemente no se<br /> adecuaban a las prendas que cada persona poseía en casa y sobre todo a mano, entonces teníamos que recurrir a hacer<br /> capturas de pantalla, guardar links en Gmail o enviar videos por WhatsApp, etc... y luego cuando queríamos acceder <br />era una frustración o pérdida de tiempo encontrar los colores justos para el momento justo... 
          <br /><br /><br /><br />
          
          <h3>EL PROBLEMA</h3><br />
          Todas las personas conocen la sensación de desorden y frustración que se crea al no saber qué ropa luciría mejor en <br />
          todo momento y tener que recurrir a  capturas de pantalla guardadas en nuestros teléfonos, correos electrónicos que <br />nos envían amigos o nosotros mismos, por lo que terminamos teniendo tos links sin saber dónde están y dónde<br /> encontrarlos cuando queramos vestirnos. 
          <br />
          Solución y objetivos Cuando comencé mi investigación, era extremadamente<br /> importante para mí crear un producto que tuviera algo nuevo, vi que había pocas aplicaciones de organización de pren-<br />das pero no se adaptaban a mi visión y no lograban lo prometido. Mi objetivo era crear un producto que se convierta<br />en una solución para la vida cotidiana de las personas, un lugar donde puedan guardar sus prendas con todas las combina-<br />ciones posibles, editarlas, crear sus propios looks, buscar inspiración y poder compartirlo y lucirlo con sus amigos, y<br /> finalmente  tener una vestimenta perfecta.<br /><br />
        </p>
        <h3>MI ROL</h3>
        <p className="primertexto">Ser el diseñador UX / UI creando toda la interfaz y la arquitectura pensando en el uso que le va a dar el usuario y una vez realizado encargarme de los testeos.</p>
        
      </div>
      <div className="section1">
        <p className="segundotexto">
          <br />
          <h3>INVESTIGACIÓN DE USUARIOS / USER RESEARCH</h3><br /><br />
          Para comprender el problema y las necesidades de los usuarios, 
          realicé una encuesta utilizando Google Forms a 35 <br />personas
          amantes de la moda. Estas son algunas de sus respuestas y
          datos que recopilé:
          <br /><br />
          P: Cuando encuentres una combina-ción de ropa que te guste en la web y 
          quieras usarla, ¿dónde la guardarías?<br /> ¿Cómo volverías a ello más adelante?
          ¿Cómo sabes si coincide con tus prendas a mano?
        </p>
        <img className="imagen1" src={imagen1} alt="Comentarios" />
      </div>
      <div className="section2">
        <img  className="imagen2" src={imagen2} alt="Captura de pantalla" />
      </div>
      <div className="section2"><h2 >PROCESO DE DISEÑO</h2></div>
      <img className="recuadro" src={diapo9} alt="Diapo 1" />
      <div className="tituloproducto"><h2 >EL PRODUCTO</h2></div>
      <div className="product">
        <img className="tamano" src={diapo1} alt="Diapo 1" />
        <img  className="tamano1" src={diapo2} alt="Diapo 2" />
        <img  className="tamano2" src={diapo3} alt="Diapo 3" />
        <img className="tamano3" src={diapo4} alt="Diapo 4" />
      </div>
      <div className="product2">
        <img className="tamano3" src={diapo5} alt="Diapo 5" />
        <img className="tamano2" src={diapo6} alt="Diapo 6" />
        <img className="tamano3" src={diapo7} alt="Diapo 7" />
        <img className="tamano4" src={diapo8} alt="Diapo 8" />
      </div>
    </div>
  );
}

export default EstiloPerfecto;
