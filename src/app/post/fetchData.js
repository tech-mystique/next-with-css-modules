const BASE_URL = 'https://jsonplaceholder.typicode.com';
const END_POINT = 'posts';


export const fetchPost = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${END_POINT}/${id}`)
        const result = await response.json();

        return result
    } catch (error) {
        console.error(error);
    }
}

