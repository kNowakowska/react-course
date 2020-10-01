//Symulacja modułów (w przyszłości będziemy robić) - każdy komponent w innym module (póki co pliku)
// - index.js - do renderowania
// - App.js - główny komponent, obsługuje stan
// - Header.js - nagłówek
// - ListItems.js - komponent będący kontenerem na listę potraw
// - Item.js - komponent na jedną potrawę

class App extends React.Component{
    state = {
        items =[
            {
                id: 1,
                name: "herbata",
                active: true
            },
            {
                id:2,
                name:"ziemniaki",
                active: true
            },
            {
                id:3,
                name:"kasza",
                active: true
            },
            {
                id:4,
                name:"zupa wodna",
                active: true
            },
            {
                id:5,
                name:"wrzątek",
                active: true
            },
            {
                id:6,
                name:"ziemniaki",
                active: true
            }
        ]
    }
    activityChange= ()=>{
        
    }

    render(){
        return(

        )
    }
}