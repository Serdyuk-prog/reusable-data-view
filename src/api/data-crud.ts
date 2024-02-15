import { User } from "./data.types";

export const getData = async (): Promise<User[] | null> => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "GET",
            }
        );
        if (!response.ok) throw response.statusText;

        return response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const newItem = async (data: User) => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) throw response.statusText;

        return response;
    } catch (e) {
        console.error(e);
        alert("Error");
        return null;
    }
};
