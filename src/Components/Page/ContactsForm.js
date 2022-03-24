import React,{useState} from 'react'
import db from '../../Firebase/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function ContactsForm() {
  const [nombre, cambiarNombre] = useState('');
	const [correo, cambiarCorreo] = useState('');

  const onSubmit = async (e) => {
		e.preventDefault();

		try {
      // se usa la collecion que uno crea en firestore
			await addDoc(collection(db, 'usuarios'), {
				nombre: nombre,
				correo: correo
			});
		} catch(error){
			console.log('Hubo un error al intentar guardar el documento');
			console.log(error);
		}

		cambiarNombre('');
		cambiarCorreo('');
	
  }
  return (
      <>
      
          <form action="" onSubmit={onSubmit}>
              <input 
                type="text"
                name="nombre"
                value={nombre}
                onChange={(e) => cambiarNombre(e.target.value)}
                placeholder="Nombre"
              />
              <input 
                type="email"
                name="correo"
                value={correo}
                onChange={(e) => cambiarCorreo(e.target.value)}
                placeholder="Correo"
              />
              <button type="submit">Agregar</button>
              
          </form>
      </>
  )
}

export default ContactsForm
