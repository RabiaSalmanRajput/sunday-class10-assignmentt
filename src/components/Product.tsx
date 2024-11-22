import Image from "next/image";


function Products() {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Product 1 */}
                <div className="rounded-sm my-8 flex flex-col items-center">
                    <Image 
                        className="h-64 w-64 object-cover" 
                        src="/product1 (2).png"
                        width={300}
                        height={300}
                        alt="p1"
                    />
                    <p className="text-xl font-bold text-center py-2">
                        All Your Essential Beauty Needs
                        <br /> In One Place.
                    </p>
                    <p className="text-center text-xl font-bold"> RS: 2500 </p>
                    <div className="flex justify-center items-center py-2">
                        <button className="bg-slate-700 py-2 px-8 text-white text-xl font-bold rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="rounded-sm my-8 flex flex-col items-center">
                    <Image 
                        className="h-64 w-64 object-cover" 
                        src="/product2 (2).png"
                        width={300}
                        height={300}
                        alt="p2"
                    />
                    <p className="text-xl font-bold text-center py-2">
                        Everything You Need In One
                        <br /> Convenient Pack
                    </p>
                    <p className="text-center text-xl font-bold"> RS: 3000 </p>
                    <div className="flex justify-center items-center py-2">
                        <button className="bg-slate-700 py-2 px-8 text-white text-xl font-bold rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="rounded-sm my-8 flex flex-col items-center">
                    <Image 
                        className="h-64 w-64 object-cover" 
                        src="/product1n3 (2).png"
                        width={300}
                        height={300}
                        alt="p3"
                    />
                    <p className="text-xl font-bold text-center py-1 mt-1">
                        All Your Skincare Needs In 
                        <br />One Convenient Pack
                    </p>
                    <p className="text-center text-xl font-bold"> RS: 3500 </p>
                    <div className="flex justify-center items-center py-2 my-2">
                        <button className="bg-slate-700 py-2 px-8 text-white text-xl font-bold rounded-md">
                            Buy Now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products;