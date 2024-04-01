import "@/app/style/footer.css";

export default function Footer_Main() {
  return (
    <>
      <footer className="footer__Container">
        <hr />
        <div className="footer__Container__Postion">
          <p>Tecnologias en Uso</p>
          <div className="footer__subContainer__images">
            <abbr title="Javascript">
              <img src="./js.png" alt="JS" />
            </abbr>
            <abbr title="Node Js">
              <img src="./node.png" alt="Node JS" />
            </abbr>
            <abbr title="Python">
              <img src="./python.png" alt="Python" />
            </abbr>
            <abbr title="React">
              <img src="./react.png" alt="React" />
            </abbr>
            <abbr title="Next JS">
              <img src="./nextjs.png" alt="Next Js" />
            </abbr>
            <abbr title="Firebas">
            <img src="./firebase.png" alt="FireBase" />
            </abbr>
          </div>
          <p>
            Terminal desarollado Por Molina <span>Adevs</span> 2024
          </p>
        </div>
      </footer>
    </>
  );
}
