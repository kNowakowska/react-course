//komponent funkcyjny, bezstanowy

//nazwa funkcji wielką literą
const Header = () => {
    //musi coś zwracać
    return (
         <h1>Witaj na stronie! </h1>
      
    )
}

//komponent klasowy, stanowy

//musimy dziedziczyć po klasie reactowej Component
class Blog extends React.Component {
    // state = {
    //     number:0
    // }
     render(){
         return(
             <section>
                 <h2>Artykuł </h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur repellat perspiciatis velit obcaecati beatae veniam quos hic illo qui!</p>
             </section>
         )
     }
}

const App = () =>{
    return (
        <>
            <Header />
            <Blog />
        </>
    )
}

//komponenty klasowy dają wiecej możliwości niż funkcyjne, ale częściej uzywa sie funkcyjnych bo nie potrzebujemy wszystkich możliwości klasowego 
ReactDOM.render(<App/>, document.getElementById("root"))