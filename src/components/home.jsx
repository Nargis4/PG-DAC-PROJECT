function HomePage(){
    return (
        <div className="home">
            <div className="jumbotron bg-transparent p-4 text-center border-bottom">
                <h1><b>Pathway to Success</b></h1>    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mx-auto mt-5 text-center shadow p-2"  onClick={()=>window.location.href='/login'}>
                        <img src={'images/logo.png'} className="img-thumbnail" style={{height:"200px",width:"200px"}} />
                        <h5 className="p-2 text-white">Login</h5>
                    </div>                                                    
                </div>
            </div>
        </div>
        )
    }
export default HomePage;