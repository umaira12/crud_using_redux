import axios from "axios";
import {API_URL} from "../config/constants";
export function getCategoryService(){
    return axios.get(API_URL+"category");
}
export function createCategoryService(data){
    return axios.post(API_URL+"category",data);
}
export function updateCategoryService(data,id){
    return axios.put(API_URL+"category/"+id,data);
}
export function deleteCategoryService(id){
    return axios.delete(API_URL+"category/"+id);
}
