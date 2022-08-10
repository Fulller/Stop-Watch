let $= document.querySelector.bind(document)
let $$= document.querySelectorAll.bind(document)


let main = $('#main') 
let show = $('#show')
let second = $('#second')
let dot = $('#dot')
let start = $('#start')
let reset = $('#reset')
let minute = $('#minute')
let add = $('#add')
let listTime =  $('#listTime')

let app = {
    dot: 0 ,
    second: 0,
    minute: 0,
    interval: 0,
    indexListTime: 0,
    isStart: false,
    continuteTime: function (){
        this.interval = setInterval(() => {
            app.dot++
            if(app.dot >=100){
                app.dot = 0
                app.second++
                if(app.second >= 60){
                    app.second = 0
                    app.minute ++
                }
            }
            app.render()
        }, 10);
    },
    render: function (){
        if(this.second < 10 ){
            second.innerText  = `0${app.second}`
        }else{
            second.innerText  = this.second
        }
        if(this.dot < 10 ){
            dot.innerText  = `0${app.dot}`
        }else{
            dot.innerText  = this.dot
        }
        if(this.minute < 10 ){
            minute.innerText  = `0${app.minute}`
        }else{
            minute.innerText  = this.minute
        }
    },
    handleEvent: function (){
        start.onclick = function (){
            if(app.isStart){
                clearInterval(app.interval)
                app.isStart = false
                start.innerText = 'Start'
            }else{
                app.continuteTime()
                app.isStart = true
                start.innerText = 'Stop'
            }
        }
        reset.onclick = function (){
            clearInterval(app.interval)
            app.dot = 0 
            app.second = 0
            app.minute = 0  
            app.isStart = false
            app.indexListTime = 0
            start.innerText = 'Start'
            app.render()
            listTime.innerHTML = ''
        }
        add.onclick = function (){
            app.indexListTime ++;
            listTime.innerHTML +=  `
                <div><span>Set ${app.indexListTime}_</span>${app.minute<10?`0${app.minute}`:app.minute}:${app.second<10?`0${app.second}`:app.second}:${app.dot<10?`0${app.dot}`:app.dot}</div>
            `
        }
    },
    start: function (){
        this.handleEvent()
    }
}
app.start()











