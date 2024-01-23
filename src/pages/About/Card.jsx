

const Card = ({ reviews }) => {
    const { name, review, image } = reviews;
    return (
        
            <div className="border-2 shadow-md p-4 ml-4 mb-10 rounded-lg ">
                <div className="mb-[10px]">
                    <h2 className=" font-bold text-xl sm:w-[300px] md:w-[400px] lg:w-[460px] p-4">{review}</h2>
                </div>
                <div className="flex  mt-[20px]">
                <div className="  border rounded-full h-16 w-16 overflow-hidden">
                    <img
                        src={image}
                        alt="Profile Picture"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="mt-3 p-3" >
                    <p className="text-xl font-bold text-blue-500">{name}</p>
                </div>
                </div>
                
             




            </div>
       
    );
};

export default Card;