import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
    //https://www.paradigmadigital.com/dev/agilizar-desarrollo-tablas-react/
    //https://primereact.org/datatable/
    //https://react-icons.github.io/react-icons/
    //https://unsplash.com/es

    //Steps:
    //npx crate-react-app preentrega01orbezo
        return(
            <div className="Container">
                <NavBar/>
                <ItemListContainer greeting={'Bienvenido'}/>                
            </div>
        );
    }
    
    export default App;