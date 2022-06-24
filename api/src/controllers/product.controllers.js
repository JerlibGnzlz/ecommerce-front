const { Product, Brand, Category } = require("../db");
const { Op } = require("sequelize");
const Joi = require("joi");
const controller = {};

controller.product = async (req, res) => {
  let { category, brand, id, price, genre } = req.body;

  // para que no se creen errores price sola mente puede tomar los valores ASC o DESC sino no se aplicara el ordenamiento
  let orderByPrice = [];
  if (price) {
    if (price === "ASC" || price === "DESC") {
      orderByPrice = [["price", price]];
    }
  }

  if (id) {
    try {
      res.status(200).send(
        await Product.findAll({
          where: {
            id: id,
          },
          include: [{ model: Brand }, { model: Category }],
        })
      );
    } catch (err) {
      res.status(400).send(err);
    }
  } else if (category || brand) {
    if (category && brand) {
      try {
        res.status(200).send(
          await Product.findAll({
            where: {
              [Op.and]: {
                // enable: true,
                genre: genre,
                brandId: brand,
                categoryId: category,
              },
            },
            order: orderByPrice,
            include: [{ model: Brand }, { model: Category }],
          })
        );
      } catch (err) {
        res.status(400).send(err);
      }
    } else if (category) {
      try {
        res.status(200).send(
          await Product.findAll({
            where: {
              [Op.and]: {
                // enable: true,
                genre: genre,
                categoryId: category,
              }
            },
            order: orderByPrice,
            include: [{ model: Brand }, { model: Category }],
          })
        );
      } catch (err) {
        res.status(400).send(err);
      }
    } else {
      try {
        res.status(200).send(
          await Product.findAll({
            where: {
              [Op.and]: {
                // enable: true,
                genre: genre,
                brandId: brand,
              }
            },
            order: orderByPrice,
            include: [{ model: Brand }, { model: Category }],
          })
        );
      } catch (err) {
        res.status(400).send(err);
      }
    }
  } else if (genre){
    try {
      res.status(200).send(
        await Product.findAll({
          where: {
            genre: genre,
          },
          order: orderByPrice,
          include: [{ model: Brand }, { model: Category }],
        })
      );
    } catch (err) {
      res.status(400).send(err);
    }
  }
  else{
    try {
      res.status(200).send(
        await Product.findAll({
          order: orderByPrice,
          include: [{ model: Brand }, { model: Category }],
        })
      );
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

const schema = Joi.object({
  name: Joi.string().min(5).max(30).required(),
  description: Joi.string().min(30).max(400).required(),
  model: Joi.string(),
  price: Joi.number().required(),
  image: Joi.array().items(Joi.string()).required(),
  brandId: Joi.number().required(),
  categoryId: Joi.number().required(),
  genre: Joi.string().valid("men", "women", "kids", "accesories").insensitive(),
})



controller.createProduct = async (req, res) => {
    const {name, description, model, price, image, brandId, categoryId, genre} = req.body

    try{
        await schema.validateAsync({name: name,  
                                    description: description, 
                                    model: model, 
                                    price: price, 
                                    image: image, 
                                    brandId: brandId,
                                    categoryId: categoryId,
                                    genre: genre})

        const doesExist = await Product.findOne({where: {name: name}})

        if (doesExist){
          res.status(400).send(`${name} ya existe un producto con ese nombre`)
        }
        else{
          await Product.create({
              genre: genre,
              name: name,
              description: description,
              model: model,
              price: price,
              image: image,
              brandId: brandId,
              categoryId: categoryId,
              rating: 0
          })
          res.status(200).send("producto creado")
        }
    }
    catch(err){
        res.status(400).send(err)
    }
}

controller.editPorduct= async(req, res)=> {
    const {id} = req.params
    const {name, description, model, price, image, brandId, categoryId, genre} = req.body
    
    try{
        const product = await schema.validateAsync({name: name,  
                                    description: description, 
                                    model: model, 
                                    price: price, 
                                    image: image, 
                                    brandId: brandId,
                                    categoryId: categoryId,
                                    genre: genre});

        Product.update(product, {
            where: {
                id
            }
        });
        res.status(200).send("Usuario editado");
    }
    catch(err){
        res.status(400).send(err)
    }
}

controller.anabledProduct = async(req, res) => {
  const {id} = req.params

  try{
    const doesExist = await Product.findOne({where:{[Op.and]: {id: id, enabled: true}}})

    if (doesExist){
      Product.update({ enabled: false }, { where: {id} });
     res.status(200).send("Producto desabilitado");
    }
    else{
      Product.update({ enabled: true }, { where: {id} });
      res.status(200).send("Producto habilitado");
    }
    
  }
  catch(err){
      res.status(400).send(err)
  }
}


module.exports = controller;
