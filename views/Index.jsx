const React= require ('react');

function Index(props){
    const {pokemon}= props
    console.log(pokemon);

    

    return(
        <main>
<nav> </nav>
<h1>
See All The Pokemon!
</h1>
<ul>{
    
    pokemon.map((EachPokemon, i)=>{
        return( <li>
<a href={`/pokemon/${i}`}> {EachPokemon.name.charAt(0).toUpperCase() + EachPokemon.name.slice(1)} </a>
<br/>
{<img src={EachPokemon.img+'.jpg'}></img>}


        </li>
        )

    })}


</ul>
        </main>
    )

}

module.exports=Index