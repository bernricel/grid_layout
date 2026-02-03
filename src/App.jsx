import "./App.css";

function PeachBox() {
  return <div className="peachBox"></div>;
}

function InnerBox(props) {
  return <div className="innerBox">{props.name}</div>;
}
function PeachBox2() {
  return (
    <div className="peachBox middle">
      <InnerBox name="Bern" />
      <InnerBox name="Musngi" />
    </div>
  );
}

function Header() {
  return (
    <div className="lightBlueContainer">
      <PeachBox />
      <PeachBox2 />
      <PeachBox />
    </div>
  );
}

function MainBox() {
  return <div className="mainBox"></div>;
}

function AsideBox() {
  return <div className="asideBox"></div>;
}

function AsideContainer() {
  return (
    <div className="asideContainer">
      <AsideBox />
      <AsideBox />
    </div>
  );
}

function Body() {
  return (
    <div className="container">
      <MainBox />
      <AsideContainer />
    </div>
  );
}

function SmallPeachBox(props) {
  return <div className="smallPeachBox">{props.courseSection}</div>;
}

function PurpleBox() {
  return <div className="purpleBox"></div>;
}

function Footer() {
  return (
    <div className="blueContainer">
      <PurpleBox />
      <SmallPeachBox courseSection="C-PCIT9" />
      <SmallPeachBox courseSection="IT3A" />
      <PurpleBox />
    </div>
  );
}

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
