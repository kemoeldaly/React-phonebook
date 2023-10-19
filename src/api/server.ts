export const server_calls = {
  get: async () => {
    const response = await fetch(
      "https://phonebook-8by0.onrender.com/api/contacts",
      {
        method: "GET",
        mode: "cors",
      });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the server");
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch ('https://phonebook-8by0.onrender.com/api/contacts',
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
  },

  update: async (id:string, data: any = {}) => {
    const reponse = await fetch(`https://phonebook-8by0.onrender.com/api/contacts/${id}`)
  }
  
};
