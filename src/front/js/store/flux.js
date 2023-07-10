
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			BACKEND_URL: 'http://localhost:3001',
			users: [],
			id: ""
			
		},
		actions: {
				Register : async (user) => {
					const store = getStore();
					const actions = getActions();
					try {
						let response = await fetch(`${process.env.BACKEND_URL}/api/users`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(user),
					});
					if (response.ok) {
						console.log(user)
						return true
						}
					} catch (err) {
					console.log(err);
					}
				},

		}
	}
}
export default getState;

