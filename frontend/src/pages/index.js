import * as React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import nosotrosFoto from "../images/HeroImage.png";
// import iconoUbicacion from "../images/marker.svg";
import iconoUbicacion from "../images/location_chorated.svg";
// import iconoTShirt from "../images/tshirt.svg";
import iconoTShirt from "../images/tshirt_chorated.svg";
// import iconoBoxJart from "../images/box-heart.svg";
import iconoBoxJart from "../images/box-heart_chorated.svg";
// import iconoRSVP from "../images/envelope-open-text.svg";
import iconoRSVP from "../images/envelope_chorated.svg";
import iconoArgentina from "../images/ArgentinaBandera.svg";
import iconoMundo from "../images/earth-africa1.svg";

import { withPrefix } from "gatsby";

// Change before deploying
let backendURL = "http://localhost:8080/"
// backendURL = "https://sunny-emissary-445202-m6.ue.r.appspot.com/"

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
  teagreen: {
    // default:"#7c8f3a",
    default: "#964742",
    hover: "#53221e"
  },
  beige: {
    default: "#e9edc9ff",
    hover:"#c2c2c2"
  },
  cornsilk: {
    default: "#fefae0ff",
    hover: "#bfbcaa"
  },
  papayawhip: {
    default: "#faedcdff",
    hover: "#aea58f"
  },
  buff: {
    default: "#d4a373ff",
    hover: "#8c6c4c"
  },
  chorated: {
    default: "#F1F1F1"
  },
  darkchorated: {
    default: "#535353",
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 0.5vw 1.5vw;
  border-radius: 0.5vw;
  font-size: 3vw;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  display: block;
  margin: auto;
  cursor: pointer;
  box-shadow: 0vw 2vw 2vw lightgray;
  transition: ease background-color 250ms;
  margin-bottom: 3vw;
  margin-top: 4vw;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "teagreen",
};

const Button2 = styled.button`
  background-color: white;
  color: ${(props) => theme['teagreen'].default};
  padding: 0.5vw 1.5vw;
  border-radius: 0.5vw;
  font-size: 2.5vw;
  outline: 0;
  border: 0; 
  text-transform: uppercase;
  display: block;
  margin: auto;
  fontWeight: "bold",
  cursor: pointer;
  transition: ease background-color 250ms;
  margin-bottom: 3vw;
  margin-top: 4vw;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button2.defaultProps = {
  theme: "beige",
};


const Button3 = styled.button`
  background-color: lightgrey;
  color: ${(props) => theme['darkchorated'].default};
  padding: 0vw 1.3vw;
  border-radius: 3vw;
  font-size: 2.5vw;
  outline: 0;
  border: 0 ; 
  text-transform: uppercase;
  // display: block;
  //margin: auto;
  fontWeight: "bold",
  cursor: pointer;
  transition: ease background-color 250ms;
  //margin-bottom: 0vw;
  margin-top: -20vw;
  margin-left: 2vw;

 

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button3.defaultProps = {
  theme: "beige",
};
const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  padding: 3vw 3vw; //de la pagina
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0vw 1vw 1vw lightgray;
  cursor: pointer;
  font-size: 16px;
  margin-left: 2.5vw;
  margin-right: 2.5vw;

  img {
    width: 7vw;
    height: auto;
  }

  &:hover {
    background-color:${(props) => theme[props.theme].hover};
  }
`;

StyledButton.defaultProps = {
  theme: "teagreen",
};

const pageStyles = {
  //color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // backgroundImage: "url(https://www.toptal.com/designers/subtlepatterns/uploads/floor-tile.png)",
  // backgroundColor: "#f5efe9",
  backgroundColor: "var(--chorated)"

  // backgroundSize: '500px 500px',  // Size of the pattern
  // backgroundRepeat: 'repeat',   // Ensure the pattern repeats
  // backgroundOpacity: 0.5, // Adjust opacity here

}


const paragraphStyles = {
  textAlign: "center",
  color: theme.darkchorated.default,
  marginBottom: "10vw",
  marginTop: "10vw",
  fontFamily: "Mulish",
  fontSize: "4vw",
  fontWeight: '3vw'
}

// const containerStyle = {
//   textAlign: 'center',  // Centers the link horizontally
//   padding: '20px',      // Optional: Add padding for spacing
// };


const headingStyle = {
  fontFamily: "Mulish",
  marginTop: "10vw",
  marginBottom: "10vw",
  fontStyle: "normal",
  textAlign: "center",
  textShadow: "0vw 1vw 1vw lightgray",
  color: theme.darkchorated.default,
  fontWeight: "bold",
  fontSize: "6vw"
}

const fancyFont = {
  fontFamily: "Rouge Script, serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: 100,
  textAlign: "center",
  color: theme.darkchorated.default,
}

const formStyle = {
  padding: '2vw',
  backgroundColor: '#f9f9f9',
  borderRadius: '0.8vw',
  width: '70vw',
  margin: '0 auto',
  fontFamily: "Mulish",
  fontSize: '3vw',
  textAlign: 'justify',      // Justify the text inside the form
  color: theme.darkchorated.default
};

const inputStyle = {
  // Space between input and button
  padding: '0 w',
  marginBottom: '2vw',
  marginLeft: '1vw',
  margin: '0 0',
  border: '1px solid #ccc',
  borderRadius: '0.3vw',
  width: '50vw',
  fontWeight:'normal',

};


const labelStyle = {
  // Space between input and button
  //  padding: '0 w',
  marginLeft: '8vw',
  fontWeight: "bold",
  marginTop: '3vw',
  textAlign: "left"
};

const inputContainerStyle = {
  // display: 'flex',
  marginLeft: '8vw',
  display: 'block',
  justifyContent: 'center', // Center the inputs horizontally
};

const casualFont = {
  fontFamily: "Mulish",
  fontWeight: 40,
  fontStyle: "normal",
  fontSize: 40,
  textAlign: "center",
  color: theme.darkchorated.default,
}


const iconoStyle = {
  // width : "8%",
  marginTop: "3vw", //de la pagina
  marginBottom: "4vw", //de la pagina
  // height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  color: theme.darkchorated.default,
}

const containerStyle = {
  position: 'relative',
  // textAlign: 'center',
  // margin:'auto',
  // display: 'flex',
  margin: 'auto',
  display: 'block',
  justifyContent: 'center', // Horizontal centering
  alignItems: 'center',
};

const buttonContainer = {
  display: 'flex',
  gap: '10vw', /* Adds space between the buttons */
  marginTop: '2vw', /* Adds space between the form and buttons */
}

const submitContainer= {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const textStyle = {
  position: 'absolute',
  top: '5%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '45px',
  fontFamily: "Rouge Script, serif",
  color: "white",

};

const IndexPage = () => {
  const [formData, setFormData] = React.useState([{
    name: '',
    email: '',
    confirmacion: 'Si',
    message: '',
    transporte: 'no',
  }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const [isModalOpen3, setIsModalOpen3] = React.useState(false);
  const closeModal3 = () => setIsModalOpen3(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen3(true);
    formData.forEach(async (invitado) => {
      const response = await fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invitado),
      });
      const data = await response.json();
      console.log('Submited:', invitado.name);
      console.log('Server reply:', data);
    }
    )
    };

    function ModalSubmit({ onClose }) {
      return (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2  style={paragraphStyles}>Gracias!</h2>
            <p  style={paragraphStyles}>Tu información ha sido enviada</p>
            <Button onClick={onClose}>Volver</Button>
          </div>
        </div>
      );
    }

  const debugSubmit = async (e) => {
    e.preventDefault();
    formData.forEach((item) => {
      console.log(item);
    }
    )
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (index, field, value) => {
    // Create a copy of the current forms array.
    const updatedForms = [...formData];

    // Update the specific form at the index.
    updatedForms[index] = { ...updatedForms[index], [field]: value };

    // Update the state with the modified forms array.
    setFormData(updatedForms);
  };

  const handleAddForm = (e) => {
    setFormData([...formData, { name: '', email: '' }]); // Add a new form object.
    //e.target.remove();
  };
  
  const removeForm = () => {
    if (formData.length > 1) { // Prevent removing the last form if there's only one
      setFormData(prevForms => prevForms.slice(0, prevForms.length - 1)); // Remove the last form
    }
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function Modal({ onClose }) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2  style={paragraphStyles}>Mercado pago</h2>
          <p  style={paragraphStyles}>Alias: casamiento.sofidiego</p>
          <Button onClick={onClose}>Volver</Button>
        </div>
      </div>
    );
  }

  
  const [isModalOpen2, setIsModalOpen2] = React.useState(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);

  function ModaPaypal({ onClose }) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2  style={paragraphStyles}>PayPal</h2>
          <p  style={paragraphStyles}>link: here</p>
          <Button onClick={onClose}>Volver</Button>
        </div>
      </div>
    );
  }
  
  
  const [isModalOpenDressCode, setIsModalOpenDressCode] = React.useState(false);

  const openModalDressCode = () => setIsModalOpenDressCode(true);
  const closeModalDressCode = () => setIsModalOpenDressCode(false);

  function ModalDressCode({ onClose }) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2  style={paragraphStyles}>Tratá de evitar:</h2>
          <p  style={paragraphStyles}> - Ojotas/crocs  <br/>  - Bermudas/shorts  <br/>  - Remeras con gráficos 
          <br/>  - Jean roto o muy gastado <br/>  -Buso con capucha <br/>  - Ropa deportiva
          </p>
          <Button onClick={onClose}>Volver</Button>
        </div>
      </div>
    );
  }
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };
  
  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center',
  };
  

 
 
  return (
    <main style={{ ...pageStyles, margin: 'auto' }}>
      {/* Collage Inicial */}
      <StaticImage src={"../images/HeroImage.png"} alt="Collage inicial" style={{ width: "100vw", margin: "auto" }} />
      {/* nombres*/}
      <div style={{ ...fancyFont, fontSize: "18vw", margin: 'auto', marginBottom: '10vw', marginTop: '10vw' }}>
        Diego y Sofi</div>
      {/* dia semana, fecha, hora */}
      {/* TODO: poner porcentajes en vez de valores absolutos */}
      <div style={{ width: "100vw", height: "25vw", position: 'relative', margin: 'auto' }}>
        <div style={{ width: "30vw", left: "10vw", top: "10vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>JUEVES</div>
        <div style={{ width: "100vw", top: "1vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>MAYO</div>
        <div style={{ width: "100vw", top: "20vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>2025</div>
        <div style={{ width: "30vw", left: "10vw", top: "9vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid' }}></div>
        <div style={{ width: "30vw", left: "10vw", top: "18vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid' }}></div>
        <div style={{ width: "30vw", left: "60vw", top: "10vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>A LAS 12PM</div>
        <div style={{ width: "30vw", left: "60vw", top: "9vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid' }}></div>
        <div style={{ width: "30vw", left: "60vw", top: "18vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid' }}></div>
        <div style={{ width: "100vw", top: "6vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "10vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word' }}>1</div>
      </div>

      {/* te queremos invitar */}
      <p style={paragraphStyles}>
        Queremos que seas parte de
        <br /> este momento tan especial.
      </p>

      <div style={{ position: 'relative', margin: 'auto', textAlign: 'center', width: '100%' }}>
        {/* <ButtonRedondo><img src={iconoUbicacion} style={{...iconoStyle, width:"100%"}} alt='boton_lugar'></img></ButtonRedondo>
        <ButtonRedondo>A</ButtonRedondo> */}
        <StyledButton onClick={() => scrollToSection("DondeSection")}>
          <StaticImage src={"../images/location_chorated.svg"} alt='boton_lugar'/>
        </StyledButton>
        <StyledButton onClick={() => scrollToSection("VestimentaSection")}>
          <StaticImage src={"../images/tshirt_chorated.svg"} alt='boton_codigo_vestimenta'/>
        </StyledButton>
        <StyledButton onClick={() => scrollToSection("RegalosSection")}>
          <StaticImage src={"../images/box-heart_chorated.svg"} alt='boton_regalos'/>
        </StyledButton>
        <StyledButton onClick={() => scrollToSection("RSVPSection")}>
          <StaticImage src={"../images/envelope_chorated.svg"} alt='boton_rsvp'/>
        </StyledButton>
      </div>

      {/* direccion */}
      <p style={headingStyle} id='DondeSection'>DÓNDE</p>
      <p style={paragraphStyles}> Quinta P.L.
        B. Verazzi 1668,
        <br />
        Pilar, Provincia de Buenos Aires, Argentina</p>
      <a href="https://maps.app.goo.gl/mG4yY1bEy1bJa1be6"> <Button>Ver Ubicación</Button>
      </a>
      {/* embed mapa */}
      {/* <iframe title="embeded-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.681198400434!2d-58.8522799!3d-34.4094482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d9529581513%3A0x3107eac4dcad3e6c!2sQuinta%20P.L.!5e0!3m2!1sen!2sca!4v1735000668275!5m2!1sen!2sca" width="600" height="450" style={{border:0, margin:"auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br/> */}
      {/* codigo de vestimenta */}
      <p style={headingStyle} id="VestimentaSection"> CÓDIGO DE VESTIMENTA</p>
      <p style={paragraphStyles}> 
        ELEGANTE SPORT  
        <Button3 style={{fontWeight: "bold"  , position:'relative', top: '-0.5vw'}} onClick={openModalDressCode}>?</Button3>
         {isModalOpenDressCode && <ModalDressCode onClose={closeModalDressCode} />}
        <br/>
        <br/>
        Venite lindo/a y elegante
        <br/>
        pero sobretodo cómodo/a.
        </p>
      {/* tu presencia es regalo, colaboraciones para fiesta*/}
      <div style={{ width: "100vw", height: "88vw", position: 'relative', background: "#964742" }}>
        <p style={{ ...headingStyle, color: theme.chorated.default, textShadow: "0vw 0.5vw 0.5vw #4c4545" }} id="RegalosSection"> <br /> REGALOS</p>
        <div style={{ ...paragraphStyles, color: theme.chorated.default, textAlign: 'center' }}>Tu presencia es nuestro regalo.<br /><br />Pero si queres contribuir a los <br /> costos del festejo  </div>
        <div style={{ width: '50vw', top: "54vw", textAlign: 'center', position: 'absolute', color: '#F1F1F1', fontSize: "2.4vw", fontFamily: 'Mulish', fontWeight: '3vw'}}>
          <StaticImage style={{ ...iconoStyle, display: 'block', width: '7vw' }} src={"../images/ArgentinaBandera.svg"} alt="icono argentina" />
          Desde Argentina por Mercado Pago
          <div>
         <Button2 onClick={openModal}>Detalles</Button2>
         {isModalOpen && <Modal onClose={closeModal} />}
          </div>
        </div>
        <div style={{ width: '50vw', left: '50vw', textAlign: 'center', top: "54vw", position: 'absolute', color: '#F1F1F1', fontSize: "2.4vw", fontFamily: 'Mulish', fontWeight: '3vw', wordWrap: 'break-word' }}>
          <StaticImage style={{ ...iconoStyle, display: 'block', width: '7vw' }} src={"../images/earth-africa1.svg"} alt="icono mundo" />
          Desde el exterior usando PayPal
          <div>
         <Button2 onClick={openModal2}>Detalles</Button2>
         {isModalOpen2 && <ModaPaypal onClose={closeModal2} />}
          </div>
        </div>
        <div style={{ width: "18vw", height: 0, left: '50vw', top: '77vw', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.02vw #F1F1F1 solid' }}></div>


      </div>
      {/* RSVP */}
      <p style={headingStyle} id="RSVPSection"> CONFIRMAR ASISTENCIA </p>
      <p style={{
        fontSize: "3vw", color: theme.darkchorated.default, fontWeight: '3vw', textAlign: 'center',
        fontFamily: "Mulish", marginBottom: '10vw'
      }}>
        Asegurate de completar una casilla por <br />
        invitado/a. Podés agregar invitados con el <br />
        botón "+ invitado/a"  </p>
      <div style={containerStyle}>
        {formData.map((formData2, index) => (
          <form style={{ ...formStyle, clear: 'both' }} onSubmit={debugSubmit} key={index}>
            <label style={{ ...labelStyle, display: 'block' }}> Nombre y Apellido
              <input
                type="text"
                name="name"
                value={formData2.name}
                display='block'
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                style={inputStyle}
              />
            </label>
            <label style={{ ...labelStyle, display: 'block' }}> Email
              <br />
              <input
                type="email"
                name="email"
                value={formData2.email}
                onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                style={inputStyle}
                display='block'
              />
            </label>
            <label style={{ ...labelStyle, display: 'block' }}>Confimación
              <select
                name="confirmacion"
                value={formData2.confirmacion}
                onChange={(e) => handleInputChange(index, 'confirmacion', e.target.value)}
                style={inputStyle}
                display='block'
              >
                <option value="Si ">Si</option>
                <option value="No voy a poder"> No voy a poder</option>
              </select>
            </label>
            <label style={{ ...labelStyle, display: 'block', marginLeft: '8vw' }}>¿Vas a necesitar transporte<br /> desde CABA?
            <select
                name="transporte"
                value={formData2.transporte}
                onChange={(e) => handleInputChange(index, 'transporte', e.target.value)}
                style={inputStyle}
                display='block'
              >
                <option value="No">No</option>
                <option value="Si">Si</option>
                <option value="No sé">No sé</option>
              </select>
            </label>
            <label style={{ ...labelStyle, display: 'block' }}> Mensaje
              <textarea
                name="message"
                value={formData2.message}
                onChange={(e) => handleInputChange(index, 'message', e.target.value)}
                style={inputStyle}
                display='block'
              />
              <br />
            </label>
            
            <div style={buttonContainer}>
            {index === formData.length - 1 && formData.length > 1 && (
            <Button onClick={removeForm} style={{ marginLeft: '5vw' }}>- Invitado/a</Button>
            )}
            {index === formData.length - 1 && (
            <Button onClick={handleAddForm} style={{ marginRight: '5vw' }}>+ Invitado/a</Button> )}
             
            </div>     
            </form>))}

            
          <div>
         <Button type ='submit' onClick={handleSubmit}>Enviar</Button>
         {isModalOpen3 && <ModalSubmit onClose={closeModal3} />}
          </div>
          <br/>
       </div >
      
          
     
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>