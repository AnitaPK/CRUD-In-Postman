const books=[
    {id:1, title:'Bhagwat Gita', Author:'ShriKrishna'},
    {id:2, title:'Ramayan',Author:'Valmiki'}
]
const writerList = []


function getAllBooks (req, res){
    console.log('******')
    try {
    res.status(200).send({task:books, success:true})
        
    } catch (error) {
    res.status(500).send(error);
    }
}

function createBook (req, res){
    console.log('req.body for createbook',req.body);
    try {

    const newBook = req.body
    books.push(newBook);
    console.log('book array', books)
    res.status(202).send({message:'Book added successfully', status:true, task:books})
        
} catch (error) {
    res.status(500).send(error);
    
}
}

function getWriter (req,res){
    // console.log(books)
    try {
        if(books.length > 0){
            books.map(elmt=>{
                writerList.push(elmt.Author)
            })
            res.status(201).send({task:writerList})
        }else{
            res.status(200).send({message:'no writer available'})
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

getOneBook = (req,res) => {
    console.log(req.params)
    try{
    const ID = req.params.ID
    const book = books.filter(elmn=> elmn.id == ID)
    res.status(200).send({task:book})
        
} catch (error) {
    res.status(500).send(error);
    
}
}

deleteBook = (req,res) => {
    console.log(req.params)
    try{
    const Id = req.params.id;
    const remainingBooks = books.filter((elmn)=>elmn.id != Id)
    console.log(remainingBooks);
    res.status(200).send({message:'Deleted successfully', success:true})
        
} catch (error) {
    res.status(500).send(error);
    
}
}

updateBook = (req,res) => {
    console.log(req.body);

    console.log(req.params);
    try {
        const index = books.findIndex((elmn=>elmn.id == req.params.id))
        if(index == -1){
            res.status(400).send({message:"Book not found"})
        }else{
            books[index].title = req.body.title || books[index].title
            books[index].Author = req.body.Author || books[index].Author
            res.status(200).send({message:"Book details update successfully"})
        }    
        
    } catch (error) {
        res.status(500).send(error);
        
    }
   
}

module.exports={
    getAllBooks,
    createBook,
    getWriter,
    getOneBook,
    deleteBook,
    updateBook
}