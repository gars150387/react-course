// import { Todo } from "./components/Todo"
import { Routes, Route } from "react-router-dom"
import {AllMeetups} from "./pages/AllMeetups";
import {NewMeetup} from "./pages/NewMeetup";
import {Favorites} from "./pages/Favorites";


function App() {
  return <div>
    <Routes>
      <Route path="/" exact element={AllMeetups}>
      </Route>
      <Route path="/new-meetup" exact element={NewMeetup}>
      </Route>
      <Route path="/favorites" exact element={Favorites}>
      </Route>
    </Routes>
    {/* <h1>List of To Do</h1>
    <Todo text="Learn React" />
    <Todo text="Learn Javascript" />
    <Todo text="Learn Angular" /> */}

  </div>
}

export default App;
