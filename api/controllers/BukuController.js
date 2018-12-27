/**
 * BukuController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list_buku:function(req,res){
      Buku.find({}).exec(function(err,buku){
          if(err){
              res.send(500,{error:"Databases Eror"})
          }
            res.view("pages/list_buku",{buku:buku},{
            layout:"layouts/layout"
            });
          
      })
    
  },
  tambah_buku:function(req,res){
      var judul = req.body.judul;
      var keterangan = req.body.keterangan;
      
      Buku.create({judul:judul,keterangan:keterangan}).exec(function(err){
          if(err){
              res.send(500,{error:"error input data "});
          }else{
            res.redirect('/list_buku');      
          }
        
      });
       
  },
  hapus_buku:function(req,res){
      Buku.destroy({id:req.params.id}).exec(function(err){
           if(err){
              res.send(500,{error:"error input data "});
          }else{
            res.redirect('/list_buku');      
          }
      })
      return false;
  },
    edit_buku:function(req,res){
       Buku.findOne({id:req.params.id}).exec(function(err,buku){
          if(err){
              res.send(500,{error:"Databases Eror"})
          }
            res.view("pages/edit_buku",{buku:buku},{
            layout:"layouts/layout"
            });
          
      })
  },
  update_buku:function(req, res){
      var judul = req.body.judul;
      var keterangan = req.body.keterangan;
      
      Buku.update({id:req.body.id},{judul:judul,keterangan:keterangan }).exec(function(err,buku){
          if(err){
              res.send(500,{error:"Databases Eror"})
          }
            res.redirect('/list_buku'); 
      })
      
  }
};

