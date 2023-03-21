import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:3000/books');
    const data = await res.json();
    console.log(data, 'here');
    setData(data);

  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className="App">
      {data.map(item => (
        <div>
            <div>{item.id}</div>
            <div>{item.kind}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
