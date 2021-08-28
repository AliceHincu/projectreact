//Components in React basically return a piece of JSX code that tells 
//what should be rendered on the screen. App is a component

import React, {useState} from 'react'; // to create a component. not necessary anymore
import Hello from './sayHello';
import { Tweet } from './Tweet';

// we create the component
function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  
  /*
  const [user, setUser] = useState({
    name:'Ed',
    age:25,
    posts: ['my first post', 'my lovely summer']
  });*/

  const [users, setUsers] = useState([
    {name:'Ed', message: 'Hello there!'},
    {name:'John', message: 'I am john snow!'},
    {name:'traversy', message: 'I am awesome!'},
  ]);


  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return(
    //it will be compiled to html but it s jsx now  <=> React.creaetelement ..
    <div className="app">
      <h1>This is the app component</h1> 
      <Hello />
      <div className="tweets">
        {//prop = a property that we can define on each individual component
        }
        <Tweet name="Dev ED" message="This is a random tweet"/>
        <Tweet name="John Snow" message="I am the true king"/>
        <Tweet name="Media" message="700k my dudes"/>
        <Tweet name="Mosh" message="My new course is available"/>
      </div>

      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      <div className="tweets">
        {users.map(user => (
          <Tweet name={user.name} message={user.message}/>
        ))}
      </div>
    </div>
  );
}

// then export the component
export default App;