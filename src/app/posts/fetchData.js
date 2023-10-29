const BASE_URL = 'https://jsonplaceholder.typicode.com';
const END_POINT = 'posts';


export const fetchPostsList = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${END_POINT}`)
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

