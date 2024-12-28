import "./src/styles/global.css"
export const onClientEntry = () => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&family=Metal&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rouge+Script&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };
