const Posts = require('./../models/posts');
const mongoose = require('mongoose');

/* GET home page. */
exports.get = (req, res, next)=> {
    Posts.find({}, (err, posts) =>{
        if(err){
            console.log('Error na busca de dados!!!');
        }
        res.status(201).send(posts);
    }, next);
};

exports.post = (req, res, next) => {
    let posts = new Posts(req.body);
    posts.save((err, posts)=>{
        if(err){
            console.log('error post create');
            return;
        }
        res.status(200).send({
            product: posts
        });
    }, next);
};

exports.delete = (req, res, next)=>{
    Posts.findByIdAndRemove({_id: req.params.id}, (err, posts)=>{
        if(err){
            console.log('error');
            return;
        }
        res.status(201).send(posts);
    }, next);
};

exports.put = (req, res, next)=>{
    Posts.findByIdAndUpdate({_id: req.params.id}, req.body).then(()=>{
        Posts.findOne({_id: req.params.id}).then((posts)=>{
            res.status(201).send(posts);
        });
    });
};