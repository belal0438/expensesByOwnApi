
const product = require('../models/data');

exports.PostProduct = async(req, res, next) =>{
    // console.log(req.body);
    try{
    const price = req.body.Amount;
    const table = req.body.Table;
    const menue = req.body.Menue;
   let data = await product.create({
        price: price,
        table: table,
        menue: menue
    })
   res.status(201).json(data)
    }catch(err){
        res.status(500).json({
            Error: err
        })
    }
}


exports.DeleteProduct = async (req, res, next) =>{
    try{
    const ProdId = req.params.id;
    let delPro = product.findByPk(ProdId);
    product.destroy({where : {id: ProdId}})
    res.status(200).json(delPro);
    } catch(err){
        res.status(500).json({
            Error: err
        })
    }
}

exports.GetData = async (req, res, next) =>{
    try{
   let getData = await product.findAll()
   res.status(201).json(getData)
    } catch(err){
        res.status(500).json({
            Error: err
        })
    }
}