
import "tailwindcss";

function Cat() {


    return (
        <div>
            <h1 className="underline ml-4">This is H1</h1>
            <h2 className="text-4xl">This is H2</h2>
            <h3 className="text-2xl">This is H3</h3>
            <br></br>
            <div className ="bg-green-500 w-1/2">This is div</div>
            <br></br><p className="font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit quisquam doloribus illo quasi fugiat ea distinctio animi mollitia eaque.</p>
           <br></br> <p className="font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur architecto neque, quae soluta enim omnis.</p>
            <br></br><p className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iste adipisci nemo ab accusamus quam et at numquam distinctio neque cumque est omnis necessitatibus libero rem, tempore, repellat cupiditate eligendi.</p>
            <br>
            </br>
            <div className ="space-y-4">
            <div className="box border-2 border-green-500 sm:bg-orange-500 md:bg-yellow-500">One</div>
            <div className ="box border-2 border-red-400">Two</div>
            <div className ="box">Three</div>
            <div className ="box">Four</div>
            </div>
          </div>
    )
}

export default Cat;
