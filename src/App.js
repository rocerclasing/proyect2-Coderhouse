// estilos-styled
import './App.css';
import styled from 'styled-components';
// react router dom
import{Link,Route,Routes} from'react-router-dom';
// Componentes
import Home from'../../proyecto-oficial/src/Components/Page/Home';

import ListContainer from'../../proyecto-oficial/src/Components/Page/ListContainer';
import Error404 from'../../proyecto-oficial/src/Components/Page/Error404';
import ContactsForm from './Components/Page/ContactsForm';
import ItemDetail from './Components/Page/ItemDetail';


function App() {
  return (
    <Contenedor>
      <Menu>
          <Link to="/">Home</Link> 
          <Link to="/ListContainer">List of products</Link>
          <Link to="/ContactForm">Contact Form</Link>
          {/* <Link to="/Products/:id">CategoryFruits</Link> */}
      </Menu>
      <main>
        <Routes>
              <Route path="*"element={<Error404/>}/>
              <Route path="/"  element={<Home/>}/>
              <Route path="/ListContainer" element={<ListContainer/>}/>
              <Route path="/ContactForm" element={<ContactsForm/>}/>
              <Route path="/Products/:id" element={<ItemDetail/>}/>
        </Routes>
      </main>
        <aside>
          <h2>Sidebar</h2>
        </aside>
    </Contenedor>
  )
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;
