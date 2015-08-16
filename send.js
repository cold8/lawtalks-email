var _ = require('lodash');
var nodemailer = require('nodemailer');

exports.intern = function (req, res) {

	console.log('req', req.body);
    var info = _.pick(req.body,['name','email']);
    var nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
	    service: 'QQ',
	    auth: {
	        user: 'gaojintian@lawtalks.cn',
	        pass: 'pi31415926'
	    }
	});

	var mailOptions = {
	    from: 'gaojintian@lawtalks.cn',
	    to: info.email,
	    subject: 'intern-'+info.name,
	    text: 'contract',
	    html: '<b>contract</b>' 
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	console.error(error)
	        return res.send(error);
	    }
	    res.send('email sent: ' + info.response);
	});

}