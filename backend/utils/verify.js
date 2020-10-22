var nodemailer = require('nodemailer');
var pool = require('../pool');

exports.verify = (req, res) => {
    let email = req.body.email;

    pool.getConnection(function(err){
        if(err){
            console.log('error connecting the database ' + err.message);
            res.send({
               status: 0,
               msg: 'Something is wrong with the server. Please try again later',
               data: {}, 
            });
        } else {
            let checkQuery = "SELECT password FROM user WHERE email='" + email + "';";
            pool.query(checkQuery, function(err, result) {
                if(err) {
                    console.log('error in running query ' + err.message);
                    res.send({
                        status: 0,
                        msg: err.message,
                        data: {},
                    });
                } else {
                    if(result.length === 0) {
                        console.log('unique email/mail sent');
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'sameep.v@ahduni.edu.in',
                                pass: 'Sameep211001!',
                            },
                        });
    
                        let otp = Math.floor(100000 + Math. random() * 900000);
    
                        let mailOptions = {
                            from: 'sameep.v@ahduni.edu.in',
                            to: 'aneri.d@ahduni.edu.in',
                            subject: 'OTP for verification (RMS)',
                            text: 'OTP for verification is: ' + otp + '. It will last for 5 minutes',
                        }
                        
    
                        transporter.sendMail(mailOptions, function(err, info){
                            if(err) {
                                res.send({
                                    status: 0,
                                    msg: err.message,
                                    data: {},
                                });
                            } else {
                                res.send({
                                    status: 1,
                                    msg: 'Successfull Verification',
                                    data: {},
                                });
                            }
                        });

                        
                        res.send({
                            status: 1,
                            msg: 'Email is unique',
                            success: true,
                            data: {otp: otp},
                        });
                    } else {
                        res.send({
                            status: 1,
                            msg: 'Email is not unique',
                            success: false,
                            data: {},
                        });
                    }
                }
            });
        }
    });
}