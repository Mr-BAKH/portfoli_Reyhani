import React from 'react';
import Nav from '../../components/nav/Nav'
import Wellcome from '../../components/wellcome/Wellcome'
import WorkFields from '../../components/workfields/Workfields'
import Progress from '../../components/progress/index'
import CoolStuffs from '../../components/coolstuff/CoolStuff'
// import OurTeam from './components/ourteam/index'
import Footer from '../../components/footer/Footer'


function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Wellcome/>
      <WorkFields/>
      <Progress/>
      <CoolStuffs/>
      {/* <OurTeam/> */}
      <Footer /> 
    </div>
  );
}

export default App;
