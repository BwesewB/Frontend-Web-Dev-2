function App() {
  return (
    <>
      <div className="mainContainer">
        <h1 className="tunes">MyTunes</h1>
        <img src="/public/yeatt.jpg" alt="yeat" className="theImage"/>
        <div className="accordionContainer">
            <h2 className="albums"> Yeat's Albums</h2>

            <input type="checkbox" id="section1" className="accordion-checkbox"/>
          <label htmlFor="section1" className="accordion-label">
            2093
          </label>
          <div className="accordion-content">
            <ol>
              <li>psycho ceo</li>
              <li>power trip</li>
              <li>breathe</li>
              <li>Familia</li>
            </ol>
          </div>

          <input type="checkbox" id="section2" className="accordion-checkbox"/>
          <label htmlFor="section2" className="accordion-label">
            2 alive
          </label>
          <div className="accordion-content">
          <ol>
              <li>poppin</li>
              <li>nvr again</li>
              <li>on tha line</li>
              <li>jump</li>
            </ol>
          </div>

        </div>
      </div>
    </>

  );
}

export default App;
