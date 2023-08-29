const React= require('react');

function Show (props){
    const{EachPokemon}= props
    return(
        <main>
            <h1>Gotta Catch 'Em All</h1>
          
           <h2> Name: {EachPokemon.name.charAt(0).toUpperCase() + EachPokemon.name.slice(1)}</h2> <br/>
             {<img src={EachPokemon.img+'.jpg'}></img>} <br/>
             <a href={`/pokemon`}>BACK</a>


        
        </main>
    )
}

module.exports=Show