
export const Navbar = ()=>{
    return <>

        <div className="fixed -[999] w-full px-20 py-8 flex justify-between items-center">
            <div className="logo">
                <div className="font-semibold uppercase text-5xl">SMS</div>
            </div>
            <div className="links flex gap-10">
                {["Home", "About Us","Blogs","Events","contact"].map((item,index)=>(
                    <a key={index} className={`text-md capitalize font-semibold $(index===4 && "ml-32")`}>{item}</a>
                ))}
            </div>
        </div>
    </>
}