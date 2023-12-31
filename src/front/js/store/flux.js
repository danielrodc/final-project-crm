const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {
        name: "jose",
        last_name: "zangarini",
        role: "admin",
      },
			users: [],
			id: "",
      project: { 
        project_name : "",
        account_manager_id: "",
        assistant_id: "",
        customer_id: "",
        description:""
    },
    },
    actions: {

      Project : async(project) =>{
        const store = getStore();
        const actions = getActions();
        try {
          let response = await fetch(`${process.env.BACKEND_URL}/api/regproject`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project),
        });
        if (response.ok) {
          console.log(project)
          return true
          }
        } 
        catch (err) {
        console.log(err);
        }
      },

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
            console.log(user);
            return true;
          }
        } 
        catch (err) {
        console.log(err);
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
