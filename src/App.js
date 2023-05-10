
import './App.css';

import Display from './components/Display';
import Star from './components/Star';
import Form from './components/Form';
import uuid from 'react-uuid';

import { useRef, createContext, useState } from 'react';

export const AppContext = createContext(null);
function App() {

  const initValue = { s1: false, s2: false, s3: false, s4: false, s5: false };
  const nameRef = useRef(null);
  const movieRef = useRef(null);
  const reviewRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [stars, setStars] = useState(initValue);
  const { s1, s2, s3, s4, s5 } = stars;

  const handleSubmit = () => {
    let name = nameRef.current.value;
    let movie = movieRef.current.value;
    let review = reviewRef.current.value;
    let mark = calcMark();
    let id = uuid();

    if (name === ' ' || movie === ' ' || review === ' ' || s1 === false) {
      alert('Please, fill up the form!');
      return;
    }

    setUsers([...users, { id: id, name: name, movie: movie, review: review, mark: mark }]);
    console.log(users);
  }

  const handles1 = () => {
    if (s1) {
      setStars({ s1: false, s2: false, s3: false, s4: false, s5: false });
      return;
    }
    setStars({ s1: true, s2: false, s3: false, s4: false, s5: false });
  }
  const handles2 = () => {
    if (s2) {
      setStars({ s1: true, s2: false, s3: false, s4: false, s5: false })
      return;
    }
    setStars({ s1: true, s2: true, s3: false, s4: false, s5: false })
  }
  const handles3 = () => {
    if (s3) {
      setStars({ s1: true, s2: true, s3: false, s4: false, s5: false })
      return;
    }
    setStars({ s1: true, s2: true, s3: true, s4: false, s5: false })
  }
  const handles4 = () => {
    if (s4) {
      setStars({ s1: true, s2: true, s3: true, s4: false, s5: false })
      return;
    }
    setStars({ s1: true, s2: true, s3: true, s4: true, s5: false })
  }
  const handles5 = () => {
    if (s5) {
      setStars({ s1: true, s2: true, s3: true, s4: true, s5: false })
      return;
    }
    setStars({ s1: true, s2: true, s3: true, s4: true, s5: true })
  }

  const calcMark = () => {
    if (s5) {
      return "5"
    } else if (s4) {
      return "4"
    } else if (s3) {
      return "3"
    } else if (s2) {
      return "2"
    } else if (s1) {
      return "1"
    } else {
      return ""
    }

  }

  const handleDelete = (id) => {
    setUsers(users.filter(e => e.id !== id))
  }

  return (
    <div className="App">
      <h1 className='display-5'>Movie Rating App</h1>
      <AppContext.Provider value={{ nameRef, movieRef, reviewRef, handleSubmit, stars, handles1, handles2, handles3, handles4, handles5, users, handleDelete }}>
        <div className='form'>
          <Form />
          <br /><br />
          <Star />
        </div>

        <br /><br />
        <Display />
        <br /><br />
      </AppContext.Provider>
    </div>
  );
}

export default App;
