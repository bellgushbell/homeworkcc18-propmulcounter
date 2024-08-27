
function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 9 },
        { id: 2, number: 7 },
        { id: 3, number: 2 },
        { id: 4, number: 3 },
        { id: 5, number: 5 }
    ])
    const updateCounter = (id, press) => {
        // console.log(`id`, id)
        let idx = counters.findIndex(el => el.id === id)
        console.log(`counter array no`, idx)
        const newCounters = [...counters]

        //วิธีเก่า
        // newCounters[idx].number += 1
        // console.log(newCounters)
        // setCounters(newCounters)

        if (press === 'increment') {
            newCounters[idx].number += 1;
        } else if (press === 'decrement') {
            if (newCounters[idx].number > 0) {
                newCounters[idx].number -= 1;
            }
        } else if (press === 'clear') {
            newCounters[idx].number = 0;
        }
        // console.log(newCounters);
        setCounters(newCounters)


    }


    const AddCounter = () => {
        const newCounters = [...counters];
        // console.log(newCounters)
        const newID = counters.length + 1;
        console.log(newID)
        newCounters.push({ id: newID, number: 0 });
        setCounters(newCounters);
    };





    return (
        <div className='app'>
            <h1 className="show-sum">Sum = 0 </h1>
            <button onClick={AddCounter} className="btn-add">Add Counter</button>
            <hr />
            {
                counters.map(el => (
                    < Counter key={el.id} item={el} updateCounter={updateCounter} />
                ))
            }

        </div>

    )

}

function Counter(props) {
    // console.log(props)
    const { item, updateCounter } = props
    return (
        <div className="counter">
            <button onClick={() => updateCounter(item.id, 'decrement')} className="btn btn-dec">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id, 'increment')} className="btn btn-inc">+</button>
            <button onClick={() => updateCounter(item.id, 'clear')} className="btn btn-clr">C</button>
        </div>



    )

}



ReactDOM.createRoot(document.querySelector('#root')).render(<App />)





