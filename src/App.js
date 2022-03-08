import './App.css';
import Header from './Components/Header' //https://learn-the-web.algonquindesign.ca/topics/naming-paths-cheat-sheet/
import Question from './Components/Question'
import questions from './Data'


// this is our main application component
// we moved the other components into their own files (line 2 and 3) because organization is nice
// we don't love the name Question - but for now lets get something functional

function App() {

  // we can store a list of questions here and pass those to our Question component (as a full data structure!)
    // steps:
      //1: just get a simple object/data structured passed into our question component, then we can expand later
      //2: pass in an answer too and change it
      //3: decisions...next step really depends on how we as app designers think. Go back to the data model
    
  return (
    <div className="App">
      <Header />
      <Question questions={questions} />
    </div>
  );
}

export default App;