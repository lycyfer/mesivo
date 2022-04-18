import './app.css';
import EmpliyeesList from '../empliyeers-list/empliyeers-list';

function App() {

    const data = [
        {name:'Микаса Акерман', salary: 800, increase: false},
        {name:'Эрен Егер', salary: 2000, increase: true},
        {name:'Леви Акерман', salary: 5000, increase: false}
      ];

    return(
        <div className='app'>
            <EmpliyeesList data={data}/>
        </div>
    );
}

export default App;