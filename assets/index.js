const mysql = require("mysql")
const inquirer = require("inquirer")
const cTable = require("console.table")

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "department_DB",
  });
  
  // connect to the mysql server and sql database
  connection.connect((err) => {
    if (err) {
      throw err;
    }
    // run the start function after the connection is made to prompt the user
   
  });
  

  function start() {
    return inquirer
      .prompt({
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: ["Add  a deparment ", "Add a role", "Add  an employee","View deparment","View roles", "View employees", "Update an employee"],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === "POST") {
          return postAuction();
        } else if (answer.postOrBid === "BID") {
          return bidAuction();
        } else {
          connection.end();
        }
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }
  start()


  function deparment(){

 return inquirer
      .prompt({
        name: "department1",
        type: "input",
        message: "What is the name of the departmennt you would like to add?"
          
      },
      
      )
      .then((answer) =>{})}

      function Addroles(){

        return inquirer
             .prompt({
               name: "title",
               type: "input",
               message: "What is the title of the role you would like to add?"
                 
             },
             {
               name: "salary",
               type: "input",
               message: "What is the salary for this role?"
                 
             },
             {
                name: "department",
                type: "input",
                message: "What department does this role belong to?"
                  
              },
             )
             .then((answer) =>{})}





      function AddEmployee(){

        return inquirer
             .prompt({
               name: "first_name",
               type: "input",
               message: "What is the first name of the employee you would like to add?"
                 
             },
             {
               name: "last_name",
               type: "input",
               message: "What is the last name of the employee you would like to add??"
                 
             },
             {
                name: "role",
                type: "input",
                message: "What role would you like to add for this employee?"
                  
              },
             )
             .then((answer) =>{})}