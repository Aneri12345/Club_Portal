var pool = require('../pool');

exports.login = (req,res) =>{

    var email = req.body.email;
    var password = req.body.password;

    pool.getConnection( (err)=> {

        if(err){
            res.send({
                status: 0,
                success: false,
                msg: err.message,
                data: {}
            });
        } else {
            let sqlQuery = "SELECT password FROM user where email = '" + email + "';";
            console.log("login query=" + sqlQuery);
            
            pool.query(sqlQuery, (err,results)=> {

                if(err){
                    res.send({
                        status: 0,
                        success: false,
                        msg: err.message,
                        data: {}
                    })
                } else if(results.length === 0){
                    res.send({
                        status: 1,
                        success: false,
                        msg: 'User doesnot exist, please sign up',
                        data: {}
                    })
                } else if(results[0].password === password){
                    res.send({
                        status: 1,
                        success: true,
                        msg: 'Successfully logged in',
                        data: {}
                    })
                } else if(results[0].password !== password){
                    res.send({
                        status: 1,
                        success: false,
                        msg: 'Incorrect password',
                        data: {}
                    })
                }
            });
        }
    });
}