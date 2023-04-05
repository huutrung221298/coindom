import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from "@material-ui/core"  
import React from 'react'
import { useHistory } from "react-router-dom"
import { CryptoState } from "../CryptoContext"
import App from "../App"

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}))

function Header() {

    const classes = useStyles();
    
    const history = useHistory();

    const  { currency, setCurrency } = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        }
    })
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position="static">
        <Container>
            <Toolbar>
                <Typography  
                variant='h6'
                onClick={() => history.push("/")}
                className={classes.title}
                >
                    CoinDom
                </Typography>

                <Select 
                    variant="outlined"
                    style={{
                        width: 100,
                        height: 40,
                        marginLeft: 15,
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"VND"}>VND</MenuItem>

                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
