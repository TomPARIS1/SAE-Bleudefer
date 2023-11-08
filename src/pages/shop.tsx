import '../app/globals.css'
import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import menuF from "@/img/menuF.jpg";
import {Product} from "@/components/product";

export default function Shop() {
    return (
        <main>
            <header>
                <Navbar/>
            </header>

            <h1 className="text-center text-2xl my-5">Produits</h1>

            <div className="flex justify-center">
                <form>
                    <label htmlFor="select-choice" className="mr-2">FILTRER PAR:</label>
                    <select name="select-choice" id="select-choice" className="mr-10">
                        <option value="Choice 1">Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                    </select>

                    <label htmlFor="select-choice" className="mr-2">TRIER PAR:</label>
                    <select name="select-choice" id="select-choice">
                        <option value="Choice 1">Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                    </select>
                </form>
            </div>

            <div className="flex justify-center my-8">
                <Product img={menuC} productName={'"Test", exemple de produit'} productPrice={"99.99€"}/>
                <Product img={menuD} productName={'"Test 2", exemple de produit'} productPrice={"199.99€"}/>
                <Product img={menuE} productName={'"Test 3", exemple de produit'} productPrice={"49.99€"}/>
                <Product img={menuF} productName={'"Test 4", exemple de produit'} productPrice={"19.99€"}/>
            </div>
            <div className="flex justify-center my-8">
                <Product img={menuC} productName={'"Test", exemple de produit'} productPrice={"99.99€"}/>
                <Product img={menuD} productName={'"Test 2", exemple de produit'} productPrice={"199.99€"}/>
                <Product img={menuE} productName={'"Test 3", exemple de produit'} productPrice={"49.99€"}/>
                <Product img={menuF} productName={'"Test 4", exemple de produit'} productPrice={"19.99€"}/>
            </div>
            <div className="flex justify-center my-8">
                <Product img={menuC} productName={'"Test", exemple de produit'} productPrice={"99.99€"}/>
                <Product img={menuD} productName={'"Test 2", exemple de produit'} productPrice={"199.99€"}/>
                <Product img={menuE} productName={'"Test 3", exemple de produit'} productPrice={"49.99€"}/>
                <Product img={menuF} productName={'"Test 4", exemple de produit'} productPrice={"19.99€"}/>
            </div>
            <div className="flex justify-center mt-10">
                <button type="button"
                        className="text-black bg-white rotate-180 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-5 text-center inline-flex items-center mr-2">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
                <h1 className="text-2xl">Page 1 sur X</h1>
                <button type="button"
                        className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-5 text-center inline-flex items-center mr-2">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>

            <Footer/>
        </main>
    )
}
