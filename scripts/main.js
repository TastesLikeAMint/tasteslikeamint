'use strict';

document.getElementById('wutbh-button').onclick = ()=>{
    document.getElementById('wutbh').style.visibility = "visible";
    setTimeout(()=>{
        document.getElementById('wutbh').style.visibility ="hidden";
    }, 3000)
}