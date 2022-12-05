import axios from 'axios';

const URL = '';

export const getalldata=async ()=>{
    try{
       return await axios.get(`${URL}/compare/data`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}


