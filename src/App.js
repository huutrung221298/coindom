import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from "./components/Header.js";
import Homepage from "./pages/Homepage";
import CoinPage from './pages/CoinPage';
import './App.css';

function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <Router>
    <div className={classes.App}>
      <Header />

        <Route path='/' component={Homepage} exact/>
        <Route path='/coins/:id' component={CoinPage} exact/>
      
    </div>
    </Router>
  );
}

export default App;
