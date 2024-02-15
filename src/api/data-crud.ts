import { User } from "./data.types";

const getData = async (): Promise<User[] | null> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
      });
      if (!response.ok) throw response.statusText;
  
      return response.json();
    } catch (e) {
      console.error(e);
      return null
    }
}
  
export default getData; 