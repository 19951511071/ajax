let n = 1;
getNext.onclick = ()=>{
    const request = new XMLHttpRequest();
    console.log('ccc')
    request.open("GET",`/page${n+1}`)
    request.onreadystatechange =() =>{
        if(request.readyState === 4 ){
            console.log('haha')
            if(request.status >=200 && request.status <300){
                console.log('haha')
                console.log(request.response)
                const array = JSON.parse(request.response) 
                array.forEach(item=>{
                    const li = document.createElement("li")
                    li.textContent = item.id
                    ulContent.appendChild(li)
                })
            }
            
        }
        
    }
    request.send()
    n+=1
}
getJson .onclick = () =>{
    const request  = new XMLHttpRequest();
    request.open("GET","/1.json");
    request.onreadystatechange = () =>{
        if(request.readyState === 4 ){
            if(request.status >=200 && request.status<300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                resultname.textContent = object.name
            }
        }
    }
    request.send()
}

getCSS.onclick = () =>{
    console.log('ccc')
    const request = new XMLHttpRequest();
    request.open("get","/stye.css")
    request.onreadystatechange = () =>{
        console.log('cc')
        console.log(request.readyState)
        if(request.readyState === 4 ){
            //根据状态码200到300之间来确认是否失败或者成功
            if(request.status >=200 &&  request.status < 300){
                const style  =  document.createElement("style")
                style.innerHTML = request.response;
                document.head.appendChild(style)
            }else{
                alert('请求css失败')
            }
            
        }
    
    }
    request.send()
}
getJS.onclick = () =>{
    
    const request = new XMLHttpRequest();
   
    request.open("GET","/main2.js")
    request.onreadystatechange = () =>{
        console.log('bbb')
        if(request.readyState === 4){
            console.log('ccc')
            const script = document.createElement("script")
            script.innerHTML = request.response;
            document.body.appendChild(script)
        }
    }
    request.send()
}

getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open("GET","/index2.html")
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            console.log('bbbb')
            const div = document.createElement("div")
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}

getXML.onclick = () =>{
    
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml")
    request.onreadystatechange = () =>{
        if(request.readyState === 4 ){
            if(request.status>=200 && request.status < 300){
                //responsexml方法。 
                const dom = request.responseXML
                const text = dom.querySelectorAll("warning")[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}

