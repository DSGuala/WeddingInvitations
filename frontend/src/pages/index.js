import * as React from "react"
import styled from "styled-components";
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

// Change before deploying
const backendURL = "http://localhost:8080/" 

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
    default:"#964742",
    hover:"#53221e"},
  beige: {
    default: "#e9edc9ff",
    hover:"#bfc3a5"},
  cornsilk: {
    default: "#fefae0ff",
    hover:"#bfbcaa"},
  papayawhip: {
    default: "#faedcdff",
    hover:"#aea58f"},
  buff: {
    default: "#d4a373ff",
    hover:"#8c6c4c"},
  chorated: {
    default: "#F1F1F1"},
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
  fontWeight:"bold",
  fontSize:"6vw"}

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
  color: theme.darkchorated.default
};

const inputStyle = {
  padding: '0 w',
  marginBottom: '2vw',
  marginLeft: '1vw',
  margin: '0 0',
  border: '1px solid #ccc',
  borderRadius: '0.3vw',
  width: '50vw',

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
  marginBottom: "3vw", //de la pagina
  // height: "auto",
  margin: "auto",
  color: theme.darkchorated.default,
}

const containerStyle = {
  position: 'relative',
  textAlign: 'center',
  color: 'white',
};


const textStyle = {
  position: 'absolute',
  top: '5%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '45px',
  fontFamily:"Rouge Script, serif",
  color: "white",

};

const IndexPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    transporte: 'no',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(backendURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();

    console.log('Form submitted:', formData);
    console.log('Server reply:', data);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{...pageStyles, margin:'auto'}}>
      {/* Collage Inicial */}
      <img src={nosotrosFoto} alt="Collage inicial" style={{width:"100vw", margin: "auto"}} />
      {/* nombres*/}
      <div style={{...fancyFont, fontSize: "18vw", margin:'auto'}}>
        Diego y Sofi</div>
      {/* dia semana, fecha, hora */}
      {/* TODO: poner porcentajes en vez de valores absolutos */}
      <div style={{width: "100vw", height:"25vw", position: 'relative', margin:'auto'}}>
        <div style={{width: "30vw", left:"10vw", top: "10vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>SÁBADO</div>
        <div style={{width: "100vw", top: "1vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>MAYO</div>
        <div style={{width: "100vw",  top: "20vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>2025</div>
        <div style={{width: "30vw", left: "10vw", top: "9vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid'}}></div>
        <div style={{width: "30vw", left: "10vw", top: "18vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid'}}></div>
        <div style={{width: "30vw", left: "60vw", top: "10vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "5vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>A LAS 11HS</div>
        <div style={{width: "30vw", left: "60vw", top: "9vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid'}}></div>
        <div style={{width: "30vw", left: "60vw", top: "18vw", position: 'absolute', background: '#535353', border: '0.1vw #535353 solid'}}></div>
        <div style={{width: "100vw", top: "6vw", position: 'absolute', textAlign: 'center', color: '#535353', fontSize: "10vw", fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>3</div>
      </div>
        
      {/* te queremos invitar */}
      <p style={paragraphStyles}>
        Queremos que seas parte de
        <br/> este momento tan especial.
      </p>

      <div style={{position: 'relative', margin:'auto', textAlign:'center', width:'100%'}}>
        {/* <ButtonRedondo><img src={iconoUbicacion} style={{...iconoStyle, width:"100%"}} alt='boton_lugar'></img></ButtonRedondo>
        <ButtonRedondo>A</ButtonRedondo> */}
        <StyledButton onClick={() => scrollToSection("DondeSection")}>
          <img src={iconoUbicacion} alt='boton_lugar'></img>
        </StyledButton>
        <StyledButton onClick={() => scrollToSection("VestimentaSection")}>
          <img src={iconoTShirt} alt='boton_codigo_vestimenta'></img>
        </StyledButton>
        <StyledButton onClick={() => scrollToSection("RegalosSection")}>
          <img src={iconoBoxJart} alt='boton_regalos'></img>
        </StyledButton>
        <StyledButton onClick={() => scrollToSection("RSVPSection")}>
          <img src={iconoRSVP} alt='boton_rsvp'></img>
        </StyledButton>
      </div>   
      
      {/* direccion */}
      <p style ={headingStyle} id = 'DondeSection'>DONDE</p>
      <p style = {paragraphStyles}> Quinta P.L.
      B. Verazzi 1668, 
      <br/>
      Pilar, Provincia de Buenos Aires, Argentina</p>
      <a href="https://maps.app.goo.gl/mG4yY1bEy1bJa1be6"> <Button>Ver Ubicación</Button>
      </a>
      {/* embed mapa */}
      {/* <iframe title="embeded-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.681198400434!2d-58.8522799!3d-34.4094482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d9529581513%3A0x3107eac4dcad3e6c!2sQuinta%20P.L.!5e0!3m2!1sen!2sca!4v1735000668275!5m2!1sen!2sca" width="600" height="450" style={{border:0, margin:"auto"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br/> */}
      {/* codigo de vestimenta */}
      <p style={headingStyle} id ="VestimentaSection"> CÓDIGO DE VESTIMENTA</p>
      <p style={paragraphStyles}>Vení con lo que quieras!
      <br/>
      Sentite libre de elegir lo que te
      <br/>
       haga sentir más cómodo/a
       <br/>
       para comer, bailar y disfrutar </p>
      {/* tu presencia es regalo, colaboraciones para fiesta*/}
      <div style={{width: "100vw", height:"88vw",position: 'relative', background: "#964742"}}>
        <p style={{...headingStyle, color:theme.chorated.default,  textShadow: "0vw 0.5vw 0.5vw #4c4545"}} id="RegalosSection"> <br/> REGALOS</p>
        <div style={{...paragraphStyles, color:theme.chorated.default, textAlign: 'center'}}>Tu presencia es nuestro regalo.<br/><br/>Pero si queres contribuir a los <br/> costos del festejo  </div>
        <div style={{width:'50vw', top: "54vw", textAlign:'center', position: 'absolute', color: '#F1F1F1', fontSize: "2.4vw", fontFamily: 'Mulish',fontWeight: '3vw'}}>
          <img style={{...iconoStyle, width: '7vw',magin:'auto'}} src={iconoArgentina} alt="icono argentina"/>
          Desde Argentina por Mercado Pago<br/>alias: ...<br/>CBU: ....<br/>
        </div>
        <div style={{width: '50vw', left: '50vw', textAlign:'center', top: "54vw", position: 'absolute', color: '#F1F1F1', fontSize: "2.4vw", fontFamily: 'Mulish', fontWeight: '3vw', wordWrap: 'break-word'}}> 
          <img style={{...iconoStyle, width: '7vw',magin:'auto'}} src={iconoMundo} alt="icono mundo" />
          Desde el exterior usando PayPal<br/> link <br/>
        </div>
        <div style={{width: "18vw", height: 0, left: '50vw', top: '77vw', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.02vw #F1F1F1 solid'}}></div>
        
        
      </div>
      {/* RSVP */}
      <p style={headingStyle} id="RSVPSection"> CONFIRMAR ASISTENCIA </p>

      <form style={formStyle} onSubmit={handleSubmit}>
        <label>
          Nombre y Apellido
          <br/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label>
          Email
          <br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label>
          Mensaje
          <br/>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label>
        ¿Vas a necesitar transporte <br/>desde capital?
          <br/>
          <select
            name="transporte"
            value={formData.transporte}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
            <option value="Aun nose">Aun nose</option>
          </select>
        </label>
        <br />
        <Button type="submit">Enviar</Button>
      </form>

      {/* From Figma */}
      {/* <div style={{width: 1440, height: 8177, position: 'relative', background: '#F1F1F1'}}>
        <div style={{left: 269, top: 0, position: 'absolute', color: '#535353', fontSize: 207, fontFamily: 'Rouge Script', fontWeight: '400', lineHeight: 310.50, wordWrap: 'break-word'}}>Nos Casamos</div>
        <div style={{left: 404, top: 7893, position: 'absolute', color: '#535353', fontSize: 207, fontFamily: 'Rouge Script', fontWeight: '400', lineHeight: 310.50, wordWrap: 'break-word'}}>Te esperamos</div>
        <div style={{width: 670, left: 376, top: 3025, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>Queremos que seas parte  de este momento tan especial </div>
        <div style={{width: 670, left: 400, top: 3906, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>DÓNDE</div>
        <img style={{width: 1118, height: 1153, left: 178, top: 349, position: 'absolute', borderRadius: 101}} src="https://via.placeholder.com/1118x1153" />
        <div style={{width: 189, height: 182, left: 772, top: 3281, position: 'absolute', background: '#964742', borderRadius: 9999}} />
        <div style={{width: 189, height: 182, left: 491, top: 3274, position: 'absolute', background: '#964742', borderRadius: 9999}} />
        <div style={{width: 189, height: 182, left: 213, top: 3274, position: 'absolute', background: '#964742', borderRadius: 9999}} />
        <div style={{width: 189, height: 182, left: 1042, top: 3281, position: 'absolute', background: '#964742', borderRadius: 9999}} />
        <div style={{width: 91, height: 91, left: 1089, top: 3326, position: 'absolute'}}>
          <div style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: '#F1F1F1'}}></div>
        </div>
        <div style={{width: 91, height: 91, left: 821, top: 3326, position: 'absolute'}}>
          <div style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: '#F1F1F1'}}></div>
        </div>
        <div style={{width: 91, height: 91, left: 540, top: 3319, position: 'absolute'}}>
          <div style={{width: 91, height: 91, left: 0, top: 0, position: 'absolute', background: '#F1F1F1'}}></div>
        </div>
        <div style={{width: 91, height: 91, left: 262, top: 3319, position: 'absolute'}}>
          <div style={{width: 75.83, height: 91, left: 7.58, top: 0, position: 'absolute', background: '#F1F1F1'}}></div>
          <div style={{width: 30.33, height: 30.33, left: 30.33, top: 22.75, position: 'absolute', background: '#F1F1F1'}}></div>
        </div>
        <div style={{width: 297, height: 107, left: 308, top: 2602, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>SÁBADO</div>
        <div style={{width: 297, height: 107, left: 552, top: 2512, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>MAYO</div>
        <div style={{width: 297, height: 107, left: 552, top: 2709, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>2025</div>
        <div style={{width: 290, height: 0, left: 312, top: 2592, position: 'absolute', background: '#535353', border: '2.50px #535353 solid'}}></div>
        <div style={{width: 290, height: 0, left: 312, top: 2682, position: 'absolute', background: '#535353', border: '2.50px #535353 solid'}}></div>
        <div style={{width: 297, height: 107, left: 791, top: 2601, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>A LAS 11HS</div>
        <div style={{width: 290, height: 0, left: 795, top: 2591, position: 'absolute', background: '#535353', border: '2.50px #535353 solid'}}></div>
        <div style={{width: 290, height: 0, left: 795, top: 2682, position: 'absolute', background: '#535353', border: '2.50px #535353 solid'}}></div>
        <div style={{width: 149, height: 96, left: 626, top: 2560, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 120, fontFamily: 'Mulish', fontWeight: '400', wordWrap: 'break-word'}}>3</div>
        <div style={{left: 386, top: 2744, position: 'absolute', color: '#535353', fontSize: 160, fontFamily: 'Rouge Script', fontWeight: '400', lineHeight: 240, wordWrap: 'break-word'}}>Diego y Sofi</div>
        <div style={{width: 389, height: 64, left: 540, top: 4282, position: 'absolute', background: '#964742', borderRadius: 8, overflow: 'hidden'}}>
          <div style={{left: 57, top: 8, position: 'absolute', color: 'white', fontSize: 35, fontFamily: 'Mulish', fontWeight: '600', lineHeight: 45.50, wordWrap: 'break-word'}}>VER UBICACIÓN</div>
        </div>
        <div style={{width: 670, left: 413, top: 3961, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '300', wordWrap: 'break-word'}}><br/>Quinta P.L. B. Verazzi 1668,<br/>Pilar, Provincia de Buenos Aires, Argentina</div>
        <div style={{width: 1440, height: 883, left: 0, top: 6700, position: 'absolute', background: '#F1F1F1', borderRadius: 45, overflow: 'hidden', border: '5px #F1F1F1 solid'}}>
          <div style={{width: 1316, height: 156, left: 70, top: 63, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: '#1E1E1E', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 67.20, wordWrap: 'break-word'}}>Nombre y Apellido</div>
            <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', alignSelf: 'stretch', color: '#B3B3B3', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 48, wordWrap: 'break-word'}}>Nombre</div>
            </div>
          </div>
          <div style={{width: 1316, height: 156, left: 103, top: 781, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}} />
          <div style={{width: 1316, height: 156, left: 73, top: 231, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: '#1E1E1E', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 67.20, wordWrap: 'break-word'}}>Email</div>
            <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', alignSelf: 'stretch', color: '#B3B3B3', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 48, wordWrap: 'break-word'}}>Email</div>
            </div>
          </div>
          <div style={{width: 1316, height: 156, left: 73, top: 399, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: '#1E1E1E', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 67.20, wordWrap: 'break-word'}}>Confimación </div>
            <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', alignSelf: 'stretch'}}></div>
            </div>
          </div>
          <div style={{width: 1313, height: 265, left: 71, top: 555, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: '#1E1E1E', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 67.20, wordWrap: 'break-word'}}>Mensaje</div>
            <div style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{flex: '1 1 0', alignSelf: 'stretch', color: '#B3B3B3', fontSize: 48, fontFamily: 'Mulish', fontWeight: '400', lineHeight: 48, wordWrap: 'break-word'}}>Mensaje</div>
            </div>
          </div>
          <div style={{width: 66, height: 66, left: 1307, top: 486, position: 'absolute'}}>
            <div style={{width: 27.50, height: 13.75, left: 19.25, top: 27.50, position: 'absolute', background: '#535353'}}></div>
          </div>
        </div>
        <div style={{width: 670, left: 400, top: 4812, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>CÓDIGO DE VESTIMENTA</div>
        <div style={{width: 670, height: 276, left: 385, top: 4842, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '300', wordWrap: 'break-word'}}><br/>Vení con lo que quieras!<br/>Sentite libre de elegir lo que te haga sentir más cómodo/a para comer, bailar y disfrutar </div>
        <div style={{width: 670, left: 418, top: 6455, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 48, fontFamily: 'Mulish', fontWeight: '700', wordWrap: 'break-word'}}>CONFIRMAR ASISTENCIA</div>
        <div style={{width: 389, height: 64, left: 611, top: 7771, position: 'absolute', background: '#964742', borderRadius: 8, overflow: 'hidden'}}>
          <div style={{left: 131, top: 8, position: 'absolute', color: 'white', fontSize: 35, fontFamily: 'Mulish', fontWeight: '600', lineHeight: 45.50, wordWrap: 'break-word'}}>ENVIAR</div>
        </div>
        <div style={{width: 389, height: 64, left: 1000, top: 7583, position: 'absolute', background: '#964742', borderRadius: 8, overflow: 'hidden'}}>
          <div style={{left: 99, top: 9, position: 'absolute', color: 'white', fontSize: 35, fontFamily: 'Mulish', fontWeight: '600', lineHeight: 45.50, wordWrap: 'break-word'}}> INVITADO/A</div>
          <div style={{left: 70, top: -3, position: 'absolute', color: 'white', fontSize: 47, fontFamily: 'Mulish', fontWeight: '700', lineHeight: 61.10, wordWrap: 'break-word'}}>+</div>
        </div>
        <div style={{width: 750, height: 149, left: 379, top: 6545, position: 'absolute', textAlign: 'center', color: '#535353', fontSize: 35, fontFamily: 'Mulish', fontWeight: '300', wordWrap: 'break-word'}}>Asegurate de completar una casilla por invitado/a. Podés agregar invitados con el botón ”+ invitado/a” </div>
        <div style={{width: 109, height: 46, left: 295, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 404, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 321, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 949, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1058, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 975, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1276, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1193, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1167, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1084, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 866, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 731, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 840, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 757, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 648, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 513, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 622, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 539, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 430, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 295, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 404, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 321, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 949, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1058, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 975, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1276, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1193, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1167, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1084, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 866, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 731, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 840, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 757, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 648, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 513, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 622, top: 4583, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 539, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 430, top: 4560, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 299, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 408, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 325, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 953, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1062, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 979, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1280, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1197, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1171, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1088, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 870, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 735, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 844, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 761, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 652, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 517, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 626, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 543, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 434, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 299, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 408, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 325, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 953, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1062, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 979, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1280, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1197, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 1171, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 1088, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 870, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 735, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 844, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 761, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 652, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 517, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 109, height: 46, left: 626, top: 3757, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 543, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 51, height: 23, left: 434, top: 3734, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
        <div style={{width: 1045.50, height: 44.11, left: 190, top: 3623, position: 'absolute'}}>
          <div style={{width: 222, height: 43.11, left: 624, top: 44.11, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
          <div style={{width: 222, height: 43.11, left: 584, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 222, height: 43.11, left: 222, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 893, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 775, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 0, top: 44.11, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 109, top: 44.11, position: 'absolute', border: '5px #964742 solid'}}></div>
        </div>
        <div style={{width: 1045.50, height: 44.11, left: 185, top: 4626, position: 'absolute'}}>
          <div style={{width: 222, height: 43.11, left: 624, top: 44.11, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '5px #964742 solid'}}></div>
          <div style={{width: 222, height: 43.11, left: 584, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 222, height: 43.11, left: 222, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 893, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 775, top: 0, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 0, top: 44.11, position: 'absolute', border: '5px #964742 solid'}}></div>
          <div style={{width: 152.50, height: 43.11, left: 109, top: 44.11, position: 'absolute', border: '5px #964742 solid'}}></div>
        </div>
        <div style={{left: 485, top: 8171, position: 'absolute', color: '#535353', fontSize: 140, fontFamily: 'Rouge Script', fontWeight: '400', lineHeight: 210, wordWrap: 'break-word'}}>Diego y Sofi</div>
        <img style={{width: 504, height: 822, left: 151, top: 1561, position: 'absolute', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) inset', borderRadius: 58, border: '1px rgba(0, 0, 0, 0) solid'}} src={nosotrosFoto} />
        <img style={{width: 604, height: 832, left: 705, top: 1551, position: 'absolute', borderRadius: 75}} src="https://via.placeholder.com/604x832" />
      </div> */}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
