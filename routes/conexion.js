const mongoose=require('mongoose');

mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost:27017/agenciaviajes',{useNewUrlParser:true})
.then(()=>console.log('Conexion establecida!!'))
.catch(error=>console.log('Error al conectar a mongo: '+error))

module.exports=mongoose;