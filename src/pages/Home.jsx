import { useState } from "react";


const Home = () => {
    const [wish, setWish] = useState('');
    const [priority, setPriority] = useState('');
    const [bundeledWishes, setBundeledWishes] = useState([]);
    const [checkbox, setCheckbox] =useState(false);
    const [done, setDone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('you clicked submit');
    }

    const addToWishList = () => {
        setBundeledWishes([
            ...bundeledWishes,
            { userWish: wish, userPriority: priority, checked: checkbox}
        ])
        setWish('')
        setPriority('')
    }
    console.log(bundeledWishes);

    // Checkbox function noch fehlerhaft!! Momentan werden ALLE Wünsche durchgestrichen, sobald ein wunsch gechecked wird. Function muss umgebaut werden, sodass index brücksichtigt wird
    const handleCheckbox = (index) => {
        console.log(index);
        setCheckbox(!checkbox);
        
    }

    return (  
        <section className="bg-orange-100 py-3 px-5 pb-11 m-5">
            <h1 className="text-3xl">My Wishlist 🎄🎁</h1>
            <h3 className="text-xl py-2">Add a wish to your list</h3>

            <form onSubmit={handleSubmit} className="pb-10">

                <input type="text" name="" id="" placeholder="What's your wish?" onChange={(e) => setWish(e.target.value)} value={wish} className="p-1 m-1"/>
                <select name="" id="" onChange={(e) => setPriority(Number(e.target.value))} value={priority} className="p-1 m-1">
                    <option value="0">Select Priority</option>
                    <option value='2'>High</option>
                    <option value='1'>Low</option>
                </select>
                <button type="submit" onClick={addToWishList} className="block my-2 mx-auto bg-green-400 px-10 py-1 hover:text-white hover:font-bold hover:bg-green-700">Add wish</button>

                {bundeledWishes.length > 0 ? (
                    <article>
                        {bundeledWishes.map((singleWishObj, index) => {
                        return (
                            <div key={index} className="text-left">

                                <div className="inline-block">

                                    <input type="checkbox" name={singleWishObj.userWish} id={singleWishObj.userWish} onChange={() => handleCheckbox(index)}/>

                                    <label htmlFor={singleWishObj.userWish} 
                                    className={`${singleWishObj.userPriority === 2 ? "bg-red-200 px-8 py-2 m-2" : "bg-green-200 px-8 py-2 m-2"} 
                                    ${checkbox ? "line-through" : "underline"}`}>{singleWishObj.userWish}</label>
                                </div>
                            
                                <button type="submit" onClick={() => {
                                setBundeledWishes(bundeledWishes.filter(w => w.userWish !== singleWishObj.userWish))
                                }} className="inline-block outline outline-1 outline-offset-2 m-2 px-4">delete</button>
                            </div>
                        )
                    })}
                    </article>
                    
                ) : (
                    <p>Santa's inbox is empty</p>
                )}
                
                
            </form>
        </section>
    );
}
 
export default Home;