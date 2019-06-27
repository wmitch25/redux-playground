export async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
  }