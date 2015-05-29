module.exports = {
	test:function(req,res){
		res.status(200);
		return res.json({test:'ahoy'});
	}
};