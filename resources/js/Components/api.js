import React from "react";
import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:8000/api/'
    baseURL: 'http://3.34.97.97/api/'
});

const loginUrl = 'login';
const registUrl = 'regist';
const searchUrl = 'search';
const searchListUrl = 'searchList';
const searchProductUrl = 'searchProduct';

const ADD_WEISH_LIST = 'pocket';
const WISH_LIST = 'pocketList';
const WISH_DELETE = 'deletePoket';
const BUY_DATA = 'deletePoket';
const MY_DATA = 'selldataList';

export const Api = {
    addWishListApi: (user_id, food_id) => api.post(ADD_WEISH_LIST, {user_id, food_id})
        .then( res=> {
            return res.got;
        }),
    wishListApi: user_id => api.post(WISH_LIST, {user_id}),
    wishDeleteApi: (user_id, food_id) => api.post(WISH_DELETE, {user_id, food_id})
        .then(res => {
            // 'result' => $result,
            return res.result;
        }),
    buyDataApi: (
        user_id,
        order_id,
        type,
        food_list) => api.post(BUY_DATA, {user_id,order_id,food_list,type})
        .then(res=> {
            // result = bool
            return res.result;
        }),
    myDataApi: user_id => api.get(`${MY_DATA}/${user_id}`),
    
};