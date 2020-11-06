// handling error routes 
server.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error)
})
server.use((error, req, res, next) => {
    res.status(404 || 500)
    res.json({
        error: {
            message: 'Something went wrong Please try again later'

        }
    })
})

//  CORS Handling 
server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,PATCH,DELETE,GET,POST');
        return res.status(200).json({})
    }
    next();
})
