const express= require ('express');
const jsxEngine=require('jsx-view-engine')
const pokemon=require('./models/pokemon')

const app = express ();
const PORT = 3000;

app.set('view engine', 'jsx') //call the templet
app.engine('jsx',jsxEngine()); //parse the templet
app.use((req,res,next)=>{
    console.log(req.method, req.url); 
    next();
})

app.use(express.urlencoded({extended:false})) //middleware


app.get ('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!')
})



app.get('/pokemon',(req,res)=>{
res.render('Index',{
    pokemon: pokemon
})
})


app.get('/pokemon/:id',(req,res)=>{
    const{id}=req.params
    // res.send(pokemon[id])
    res.render('Show',{
        EachPokemon:pokemon[id] })

})





app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})

