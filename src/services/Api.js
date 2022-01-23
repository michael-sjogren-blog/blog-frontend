

export const baseApiUrl = "https://localhost:5001/";
export const endpoints = {
    posts:"Posts",
    authors:"Authors",
}

const request = {
    method: '',
    cache:'no-cache',
    headers: {
        'Content-Type':'application/json'
    },
    redirect:'follow',
    referrerPolicy: 'no-referrer',
    body:''
}

export const getOne = async(endpoint = "", id = "") => {
    const route = `${baseApiUrl}${endpoint}/${id}`;
    const res = await fetch(route)
    const data = await res.json();
    return data;
}

export const getAll = async(endpoint = "") => {
    const route = `${baseApiUrl}${endpoint}`;
    console.log(route)
    const res = await fetch(route)
    const data = await res.json();
    return data;
}

export const deleteOne = async(endpoint="",id="") => {
    let newReq = {...request}
    newReq.method = 'DELETE'
    const route = `${baseApiUrl}${endpoint}/${id}`;

    const res = await fetch(route,newReq)
    const data = await res.json()
    if (res.ok){
        console.log("Delete Ok")
        return true;
    }
    else{
        console.log("Delete Failed")
        return false;
    }
}

export const create = async(endpoint,payload) => {
    let newReq = {...request}
    const route = `${baseApiUrl}${endpoint}`;

    newReq.method = 'POST'
    newReq.body = JSON.stringify(payload)
    const res = await fetch(route,newReq)
    if (res.ok)
    {
        const data = await res.json()
        if(res.status === 200)
        {
            return data
        }
        return data
    }   
}

export const update = async(endpoint="",data={},id="") => {
    let newReq = {...request}
    
    newReq.method = 'PUT'
    newReq.body = JSON.stringify(data)
    const route = `${baseApiUrl}${endpoint}/${id}`;

    const res = await fetch(route,newReq)
    const response = await res.json()
    
    if (response.ok){
        console.log(" Ok" , response.data)
    }
    else{
        console.log("Failed")
    }
}