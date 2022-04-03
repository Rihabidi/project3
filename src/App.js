import './App.css';
import Address from './profile/Address';
import FullName from './profile/FullName';
import ProfilePhoto from './profile/ProfilePhoto';

function App() {
  return (
    <div >
      <div className='style'>
      <ProfilePhoto/>
      <FullName/>
      </div>
      <br/>
      <hr/>
     <Address/>
      
      
    </div>
  );
}

export default App;
