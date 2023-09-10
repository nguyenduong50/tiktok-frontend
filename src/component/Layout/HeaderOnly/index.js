import Header from "../component/Header";

function DefaultLayout({children}) {
    return ( 
        <>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </>
     );
}

export default DefaultLayout;