const data ={
    products:[
      {
          id:'1',
          name:'The Inspection',
          price:14,
         image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL0NQd7zGizxgrYZ4x3a2WJLybFYKPn0ZQA&usqp=CAU'
        },
      {
        id:'2',
        name:'The God Father',
        price:24,
       image:'data:image/jpeg;base64,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'   
    }, 
     {
        id:'3',
        name:'The Old Guard',
        price:10,
        image:'https://kevtontech.com/wp-content/uploads/2020/07/the-old-guard-poster-wide.jpg'
    },
    ],
};
export default data;