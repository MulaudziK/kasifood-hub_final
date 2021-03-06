
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const datb = require('../database/database');

// vendor / customer/ and himself (super admin) CRUD
// products/ menu/ categories orders(vendor/restaurant)

router.get('/admin', (req,res)=>{

    datb.query('SELECT * FROM system_admin',function(error,results,fields){
 
        if(error)
        {
            res.send({"failed":"error occurred"})
        }
        else{
                   return res.send({data:results})
            }

    });
});


router.get('/all_customers', (req,res)=>{

    datb.query('SELECT * FROM customer',function(error,results,fields){
 
        if(error)
        {
            res.send("error occurred")
        }
        else{
                   res.send(results)
            }

    });
});


router.get('/allrestuarant', (req,res)=>{

    datb.query('SELECT * FROM restuarant_admin',function(error,results,fields){
 
        if(error)
        {
            res.send({"failed":"error occurred"})
        }
        else{
                   res.send(results)
            }

    });
});



router.get('/alldriver', (req,res)=>{

    datb.query('SELECT * FROM driver',function(error,results,fields){
 
        if(error)
        {
            res.send({"failed":"error occurred"})
        }
        else{
                   res.send(results)
            }

    });
});
//done

  router.put('/restu_update/:id', (req,res)=>{
    let restuarant ={ 
      status:req.body.status   
    }
    let email = (req.body.email)  
    datb.query('UPDATE restuarant_admin SET ? WHERE restuarant_id = "'+req.params.id+'"',[restuarant],function (error, results, fields)
    {
        if (error) throw error 
        else{
          datb.query('select * from restuarant_admin where restuarant_id = "'+req.params.id+'"',function (error, results, fields){
              res.send(results)
          })
      
          }
    })

})




router.put('/driver_update/:id', (req,res)=>{
    let driver ={ 
      status:req.body.status   
    }
    let email = (req.body.email)  
    datb.query('UPDATE driver SET ? WHERE driverID = "'+req.params.id+'"',[driver],function (error, results, fields)
    {
        if (error) throw error 
        else{
          datb.query('select * from driver where driverID = "'+req.params.id+'"',function (error, results, fields){
              res.send(results)
          })
      
          }
    })

})




router.delete('/restuarant/:id',function(req, res){
   
    datb.query('DELETE FROM restuarant_admin WHERE restuarant_id = ?',[req.params.id], (err,results,fields)=>{
        if(!err){
                    res.send('Deleted successfully.');
                }else{
                    console.log(err)
                }
       }); 
    })
	
	
	
	router.delete('/driverDelete/:id',function(req, res){
   
    datb.query('DELETE FROM driver WHERE driverID = ?',[req.params.id], (err,results,fields)=>{
        if(!err){
                    res.send('Deleted successfully.');
                }else{
                    console.log(err)
                }
       }); 
    })
	
	

    router.put('/cust_update', (req,res)=>{
        let cust ={ 
            customer_ID:req.body.customer_ID,
            name:req.body.name,
            surname:req.body.surname,
            email_address:req.body.email_address,
            cell_no:req.body.cell_no,
            password:req.body.password    
           }
      let email_address = (req.body.email_address)
           
        datb.query('UPDATE customer SET ? where email_address = "'+email_address+'"',[cust],function (error, results, fields)
        {
            if (error) throw error;
            else
            {
              datb.query('select * from customer where email_address = "'+email_address+'"',[cust],function (error, results, fields){
              return res.send({results})
          })
        }       
          })
        })
    
        router.delete('/customerdelete/:id',function(req, res){
   
            datb.query('DELETE FROM customer WHERE customer_ID = ?',[req.params.id], (err,results,fields)=>{
                 
              if(!err){
                res.send('Deleted successfully.');
            }else{
                console.log(err)
            }
            }); 
        });

module.exports = router;