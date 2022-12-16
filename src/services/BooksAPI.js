import { randomInt } from 'utils/common';
import instance from './Instance';

export async function getBooks() {
  try {
    const response = await instance.get('/book');
    console.log(response);
    // return response.data;
    const data = await Promise.all(
      response?.data?.map((val) => ({
        ...val,
        url: `https://picsum.photos/id/${randomInt(1000)}/200/330`,
      }))
    );
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getBookById(id) {
  try {
    const response = await instance.get(`/book/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function addBook(data) {
  try {
    const response = await instance.post('/book', { data });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function updateBookById(id, data) {
  try {
    const response = await instance.put(`/book/${id}`, { data });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function deleteBookById(id) {
  try {
    const response = await instance.delete(`/book/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}
