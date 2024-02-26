// import logo from './logo.svg';
import imgs from './images.json';
import './App.css';

function App() {
  return (
    <div className="App">
      
      { imgs && imgs.map((item)=>{
        return(
          <div key={item.id}>
            <img src={item.img} alt=""/>
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
