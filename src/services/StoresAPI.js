import instance from './Instance';

export async function getStores() {
  try {
    const response = await instance.get('/store');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function getBookByStoreId(id) {
  try {
    const response = await instance.get(`/store/${id}/books`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

export async function addStore(data) {
  try {
    const response = await instance.post('/store', { data });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
}

// export async function updateStoreById(id, data) {
//   try {
//     const response = await instance.put(`/store/${id}`, { data });
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// }

// export async function deleteStoreById(id) {
//   try {
//     const response = await instance.delete(`/Store/${id}`);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// }
