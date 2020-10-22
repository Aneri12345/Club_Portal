var pool = require('../pool');

exports.signUp = (req,res) =>{

    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    let roll = req.body.roll;
    let email = req.body.email;
    let password = req.body.password;

    pool.getConnection(function(err){
        if(err){
            res.send({
               status: 0,
               success: false,
               msg: 'Something is wrong with the server. Please try again later',
               data: {}, 
            });
        } else {
            let insertQuery = "INSERT INTO user (firstName, lastName, rollNo, email, password) VALUES  ('" + firstName + "','" + lastName + "','" + roll + "','" + email + "','" + password + "')";
            pool.query(insertQuery, function(err, result){
                if(err){

                    console.log('error is: ' + err.message);
                    res.send({
                        status: 0,
                        success: false,
                        msg: err.message,
                        data: {},
                    });

                } else {

                    req.session.user = email;
                    console.log("New User session created.");
                    
                    res.send({
                        status: 1,
                        success: true,
                        msg: "You have successfully registered.",
                        data: {},
                    });

                }
            });
        }
    });

}