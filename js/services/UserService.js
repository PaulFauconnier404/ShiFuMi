import axios from "axios";
import API from 'conn_api/api_connection';

function findAll() {
    return API.get(`/user`)
        .then(response => response.data)
        .catch(function (response) {
            console.log(response);
        });
}

function findOne(id) {
    return API.get(`/user/`+id)
        .then(response => response.data)
        .catch(function (response) {
            console.log(response);
        });
}

function createOne(data) {
    return API.post(`/user`, data)
    .then(function (response) {
        console.log('User file created')
    })
    .catch(function (response) {
        console.log(response);
    });

}

function updateOne(id, data) {
    return API.post(`/user/`+ id, data)
    .then(function (response) {
        console.log('User file '+id+' update')
    })
    .catch(function (response) {
        console.log(response);
    });

}

function deleteOne(id) {
    return API.delete(`/user/`+ id)
    .then(() => {
        console.log("User file deleted !");
    })
    .catch((error) => {
        console.log(error.response);
    });;
}

export default {
    findAll,
    findOne,
    createOne,
    updateOne,
    deleteOne,
}