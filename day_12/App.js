//Symulacja modułów (w przyszłości będziemy robić) - każdy komponent w innym module (póki co pliku)
// - index.js - do renderowania
// - App.js - główny komponent, obsługuje stan
// - Header.js - nagłówek
// - ListItems.js - komponent będący kontenerem na listę potraw
// - Item.js - komponent na jedną potrawę

class App extends React.Component{
    state = {
        items: [
            {
                id: 1,
                name: "herbata",
                active: false
            },
            {
                id:2,
                name:"ziemniaki",
                active: false
            },
            {
                id:3,
                name:"kasza",
                active: true
            },
            {
                id:4,
                name:"zupa wodna",
                active: false
            },
            {
                id:5,
                name:"wrzątek",
                active: false
            },
            {
                id:6,
                name:"ziemniaki",
                active: true
            }
        ]
    }
    handleChangeStatus= (id)=>{
        const items = this.state.items.map(item => {
            if(id===item.id){
                item.active = !item.active;
            }
            return item
        })
        this.setState({
            // items: items to to samo co:
            items
        })
        
    }

    render(){
        return(
            <>
                <Header items={this.state.items}/>
                <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
            </>
        )
    }
}