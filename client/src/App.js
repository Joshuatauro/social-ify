// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Pages/Landing/Landing';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Feed from './Pages/Feed/Feed';
import All from './Pages/All/All';
import SideNavigation from './Components/SideNavigation/SideNavigation';
import PeopleCheckout from './Components/PeopleCheckout/PeopleCheckout';
import PostView from './Pages/PostView/PostView';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar/>
//       <div className="main">
//         <div className="container">
//           <div className='app__grid'>
//             <SideNavigation />
//             <Routes>
//               <Route path="/" exact element={<Feed />} />
//               <Route path="/all" element={<All />} />
//             </Routes>
//             <PeopleCheckout />
//           </div>
          
//         </div>
//       </div>
//       </BrowserRouter>
        
//     </div>
//   );
// }

const Home = (params) => {
  return(
    <div className="main">
      <div className="container">
        <div className="app__grid">
        <SideNavigation />
        <Routes>
          <Route path={'/'} element={<Feed />}/>
          <Route path={'all'} element={<All />} />
        </Routes>
        <PeopleCheckout />
        </div>
    </div>
    </div>
  );
};

const ViewPost = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="app__grid">
        <SideNavigation />
        <Routes>
          <Route path={'/'} element={<Feed />}/>
          <Route path={'all'} element={<All />} />
        </Routes>
        <PeopleCheckout />
        </div>
    </div>
    </div>
  )
}

const Dashboard = ({match}) => {
  return(
    <Routes>
      {/* <Route path={match.url} exact={true} element={DashboardDefaultelement} />
      ... other Dashboard paths like Home element above */}
    </Routes>
  );
};

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/feed/*' element={<Home />} />
        <Route path='/post/:id' element={<PostView />} />
        <Route path='/' element={<Navigate replace to="/feed" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
