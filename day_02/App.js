// console.log(React);
// console.log(ReactDOM);
// const element = <div>Pierwszy elementy react</div>

// const element2 = React.createElement("div", null, "Pierwszy element React");

// const element3 = (
//     <div>
//         <p>
//             Tekst
//         </p>
//     </div>
// )

// const element4 = <div><p>Tekst</p></div>

// const element5 = (
//     <>
//         <section className="klasa"></section>
//         <section></section>
//     </>
    
// )

const handleClick = ()=>alert("klik!");
const header = <h1 onClick={handleClick} className="title">Witaj na stronie!</h1>
const classBig = "big"
const main = (
    <div>
        <h1 className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deserunt illo tempora vero facilis nam earum a magnam molestiae aperiam beatae explicabo quas quibusdam dolores numquam sunt delectus dolor, suscipit, expedita fugit qui culpa? Labore veritatis ad distinctio assumenda vitae aliquid amet quisquam laudantium? Aperiam quo officiis veniam inventore eveniet.</p>
    </div>
)
const text = "stopkaaaaa"
const footer = (
    <footer>
        <p className={classBig}>
            Stopka {text}
        </p>
    </footer>
)

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'))