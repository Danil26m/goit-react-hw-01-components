import Profile from "./Profile/Profile.js";
import user from './Profile/user.json';
import './style.css';
import Statistics from "./Statistics/Statistics.js";
import data from "./Statistics/data.json"
export const App = () => {
  const color = ['aqua','rgb(91, 78, 177)','rgb(197, 80, 80)','rgb(80, 197, 164)','rgb(183, 78, 125)'];
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title="Upload stats" 
        rgb={color}
        stats={data}
      />
    </div>
  );
};
