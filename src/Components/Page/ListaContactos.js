import React from'react'



const ListaContactos = () => {
	const [contactos, cambiarContactos] = useState([]);

	useEffect(() => {
		onSnapshot(
			collection(db, 'usuarios'),
			(snapshot) => {
				// console.log('Se ejecuto snapshot');
				// console.log(snapshot.docs[0].data());

				const arregloUsuarios = snapshot.docs.map((documento) => {
					return {...documento.data(), id: documento.id}
				})

				cambiarContactos(arregloUsuarios);
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);
    