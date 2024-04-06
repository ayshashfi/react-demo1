
import './App.css';

// import Greet from './components/Greet';
//import Message from './components/Messgae';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
//import { NameList } from './components/NameList';
// import { Form } from './components/Form';
// import Timer from './components/UseEffect';
// import Parent from './components/Parent';
import LifecycleExample from './components/LifeCycle';
// import ControlledComponent from './components/ControlledComponent';
// import ControlledCheckbox from './components/ControlledComponent';
 import InputFocus from './components/useRef';
import CounterUsingUseState from './components/CounterUsingUseState';
import ReviewUseState from './components/ReviewUseState';
// import SimpleComponent from './components/SimpleComponent';
import CondRe from './components/CondRe';

import Counter from './components/Counter';


function App()  {
  return (
    <div className="App">
     {/* <ReviewUseState/> */}
      {/* <CounterUsingUseState/> */}
      {/* <SimpleComponent/> */}
      <Counter/>

      {/* <Greet name="Aysha" heroName="spiderman"/>
      <Greet name="Akifa" heroName="superman">
      <button>action</button>
      </Greet>
      <Greet name="Hafiza" heroName="batman">
        <p>This is children</p>
        </Greet> */}
        {/* <Message/> */}
        {/* <ClickHandler/> */}
        {/* <ParentComponent/> */}
        <UserGreeting/>
        {/* <NameList/> */}
        {/* <Form/> */}
        {/* <Timer/>\ */}
        {/* <Parent/> */}
        <LifecycleExample/>
        {/* <ControlledCheckbox/> */}
        <InputFocus/>
        <CondRe/>
       
    </div>
  );
}

export default App;
