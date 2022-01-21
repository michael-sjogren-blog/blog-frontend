

export const baseApiUrl = "https://localhost:5001/";
export const endpoints = {
    posts:"Posts",
    authors:"Authors",
}


export const getOne = async(endpoint,id) => {
    const route = `${baseApiUrl}${endpoint}/${id}`;
    const res = await fetch(route)
    const data = await res.json();
    return data;
}

export const getAll = async(endpoint) => {
    const route = `${baseApiUrl}${endpoint}`;
    console.log(route)
    const res = await fetch(route)
    const data = await res.json();
    return data;
}

export const deleteOne = async(endpoint,id) => {
    
}

export const create = async(endpoint,body) => {

}

export const update = async(endpoint,body,id) => {

}