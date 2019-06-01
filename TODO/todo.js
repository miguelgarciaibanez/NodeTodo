const fs = require('fs');


let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Cannot save')
        }
    })

}

const loadDB = () => {

    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
    
}

const create = (description) => {
    
    loadDB();
    
    let todo = {
        description,
        completed: false
    };

    todoList.push(todo);
    saveDB();

    return todo;
}

const getList = () => {
    loadDB();
    return todoList;
}

const updateList = (description, completed = true) =>{
    loadDB();

    let index = todoList.findIndex(task => task.description === description);

    if (index >= 0){
        todoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {
    loadDB();

    let index = todoList.findIndex(task => task.description === description);

    if (index >=0) {
        todoList.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    create,
    getList,
    updateList,
    deleteTask
}