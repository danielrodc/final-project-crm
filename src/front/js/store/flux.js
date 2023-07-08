// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			message: null,
// 			demo: [
// 				{
// 					title: "FIRST",
// 					background: "white",
// 					initial: "white"
// 				},
// 				{
// 					title: "SECOND",
// 					background: "white",
// 					initial: "white"
// 				}
// 			]
// 		},
// 		actions: {
// 			// Use getActions to call a function within a fuction
// 			exampleFunction: () => {
// 				getActions().changeColor(0, "green");
// 			},

// 			getMessage: async () => {
// 				try{
// 					// fetching data from the backend
// 					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
// 					const data = await resp.json()
// 					setStore({ message: data.message })
// 					// don't forget to return something, that is how the async resolves
// 					return data;
// 				}catch(error){
// 					console.log("Error loading message from backend", error)
// 				}
// 			},
// 			changeColor: (index, color) => {
// 				//get the store
// 				const store = getStore();

// 				//we have to loop the entire demo array to look for the respective index
// 				//and change its color
// 				const demo = store.demo.map((elm, i) => {
// 					if (i === index) elm.background = color;
// 					return elm;
// 				});

// 				//reset the global store
// 				setStore({ demo: demo });
// 			}
// 		}
// 	};
// };

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			BACKEND_URL: 'http://localhost:3001',
			users: [],
			id: ""
			
		},
		actions: {
				createUser: async (userName, userLastname, userEmail, userPassword, 
					userDepartment, userCity, userCountry) => {
					const store = getStore();
					const actions = getActions();
					try {
						let response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
						name: `${userName}`,
						lastname: `${userLastname}`,
						email: `${userEmail}`,
						password: `${userPassword}`,
						department: `${userDepartment}`,
						city: `${userCity}`,
						country: `${userCountry}`,
						}),
					});
					if (response.ok) {
						actions.getUsers();
						let nameInput = document.getElementById("nameInput");
						let lastnameInput = document.getElementById("lastnameInput");
						let emailInput = document.getElementById("emailInput");
						let passwordInput = document.getElementById("passwordInput");
						let departmentInput = document.getElementById("departmentInput");
						let cityInput = document.getElementById("cityInput");
						let countryInput = document.getElementById("countryInput");
						nameInput.value = "";
						lastnameInput.value = "";
						emailInput.value = "";
						passwordInput.value = "";
						departmentInput.value = "";
						cityInput.value = "";
						countryInput.value = "";
					}
					} catch (err) {
					console.log(err);
					}
				},

		}
	}
}
export default getState;

