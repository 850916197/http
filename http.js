let http = require('http')
let server = http.createServer()
server.on('request', (req, res1)=>{
    http.get({
        host: 'news.baidu.com'
    }, function(res){
        let arr = []
        res.on('data', function(data){
            arr.push(data)
        })
        res.on('end', function(){
            let r = Buffer.concat(arr).toString()
           //  r.match()
            res1.setHeader('Content-Type', 'text/html;charset=utf8')
            res1.end(r)
            console.log(r)
        })
    })
})
server.listen('3000', (err)=>{
    console.log('service start')
})
server.on('error', function(err){

})