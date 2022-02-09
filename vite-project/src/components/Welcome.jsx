import React from "react"

const Welcome = () => {
    return (
       <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Get Hired At <br /> Your Dream Company
                    </h1>
                </div>
            </div>
       </div>
    )
}

export default Welcome