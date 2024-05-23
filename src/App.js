import './App.css';
import UserCard from './components/UserCard ';
import avatar from './assets/profile.png'
import UserProfile from './components/UserProfile ';
function App() {
  const user = {
    name: 'ATHULYA KISHOR',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum',
    avatar:avatar 
  }
  return (
    <div className="App">
      <UserProfile
        user={user}
        renderComponent={(user) => <UserCard user={user} />}
      />
    </div>
  );
}

export default App;
