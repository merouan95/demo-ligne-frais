var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LignesFrais');
var LigneFrais = mongoose.model('LigneFrais', mongoose.Schema({
	categorie:String,
	date:String,
	montant:String,
	
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/front'));

app.get('/api/LignesFrais', function(req, res){
	LigneFrais.find(function(err, LignesFrais){
		if(err)
			res.send(err);
		res.json(LignesFrais);
	});
});

app.get('/api/LignesFrais/:id', function(req, res){
	LigneFrais.findOne({_id:req.params.id}, function(err, LF){
		if(err)
			res.send(err);
		res.json(LF);
	});
});
app.post('/api/LignesFrais', function(req, res){
	LigneFrais.create( req.body, function(err, LignesFrais){
		if(err)
			res.send(err);
		res.json(LignesFrais);
	});
});

app.delete('/api/LignesFrais/:id', function(req, res){
	LigneFrais.findOneAndRemove({_id:req.params.id}, function(err, LF){
		if(err)
			res.send(err);
		res.json(LF);
	});
});
app.put('/api/LignesFrais/:id', function(req, res){
	var query = {
		categorie:req.body.categorie,
		date:req.body.date,
		montant:req.body.montant,

	};
	LigneFrais.findOneAndUpdate({_id:req.params.id}, query, function(err, LF){
		if(err)
			res.send(err);
		res.json(LF);
	});
});
app.listen(3000, function(){
	console.log('server port 3000..');
});