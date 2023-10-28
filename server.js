const express=require('express')
const app= express()
const articleRouter=require('./routes/article')

app.set('view engine', 'ejs')
app.use('/article', articleRouter)
app.get('/',(req,res)=>{
    const article=[{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test Description'
    },
    {
        title: 'Test Article2',
        createdAt: Date.now(),
        description: 'Test Description2'
    }]
    res.render('articles/index',{articles: article})
})



app.listen(5000)