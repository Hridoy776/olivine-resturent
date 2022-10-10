import React from 'react';

const BealingDetails = () => {

    const handleBeal=(e)=>{
        e.preventDefaut()
        console.log(e.target.name)
    }
    return (
        <div>
            <div className='w-[540px] p-2'>
                <h1 className='text-2xl font-medium capitalize mb-[30px] '>bealing Details</h1>
                <form onSubmit={handleBeal}>
                    <div className='grid grid-cols-2 gap-6 justify-center items-center p-4'>
                        <div className="form-control border-b-2">
                            <label className="label">
                                <span className=" text-xl font-medium">First name</span>
                            </label>
                            <input type="name" name='first_name' className="  focus:outline-none block w-full py-2 text-base uppercase bg-black " />
                        </div>
                        <div className="form-control border-b-2">
                            <label className="label">
                                <span className=" text-xl font-medium">Last name</span>
                            </label>
                            <input type="text" placeholder="" name='last_name' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                        </div>
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">company name(optional)</span>
                        </label>
                        <input type="text" placeholder="" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">country/region</span>
                        </label>
                        <input type="text" placeholder="country" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">streat address</span>
                        </label>
                        <input type="text" placeholder="" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">state</span>
                        </label>
                        <input type="text" placeholder="" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">postcode</span>
                        </label>
                        <input type="text" placeholder="" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">phone</span>
                        </label>
                        <input type="text" placeholder="" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black " required />
                    </div>
                    <div className="form-control mx-5 border-b-2">
                        <label className="label">
                            <span className=" text-xl font-medium">email</span>
                        </label>
                        <input type="text" placeholder="" name='fname' className="focus:outline-none block w-full py-2 text-base uppercase bg-black  " required />
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    );
};

export default BealingDetails;