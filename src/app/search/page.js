import React from 'react'

export const metadata = {
    title: "Search"
}

const page = () => {
    return (
        <main>
            <div className="py-20">
                <div className="container">
                    <div className="shadow-box p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl min-h-[390px]">
                        <h1 className="h2 text-center !mb-6 md:!mb-8 lg:!mb-12">Select Your Plan</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 items-end">
                            <div>
                                <label htmlFor="depth" className="text-sm block mb-1">Depth <span className="text-[#808080]">(feet)</span></label>
                                <input type="text" id="depth" className="form-control" placeholder="Depth" />
                            </div>
                            <div>
                                <label htmlFor="width" className="text-sm block mb-1">Width <span className="text-[#808080]">(feet)</span></label>
                                <input type="text" id="width" className="form-control" placeholder="Width" />
                            </div>
                            <div>
                                <label htmlFor="width" className="text-sm block mb-1">Label</label>
                                <select name="label" id="label" className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="width" className="text-sm block mb-1">Label</label>
                                <input type="text" id="width" className="form-control" placeholder="0" />
                            </div>
                            <div>
                                <label htmlFor="width" className="text-sm block mb-1">Label</label>
                                <input type="text" id="width" className="form-control" placeholder="North" />
                            </div>
                            <div> 
                                <button className="text-base font-mediem px-5 py-2 inline-flex items-center bg-primary text-dark rounded-md hover:bg-dark hover:text-white">Calculate Price</button>
                            </div>



                        </div>



                    </div>
                </div>

            </div>
        </main>
    )
}

export default page
