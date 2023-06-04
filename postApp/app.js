
var inputText = document.getElementById("inputText");
var popup=document.getElementById("popupbox");
var textera= document.getElementById("WritePost");
var containor= document.getElementById("post-containor")
function addPost(){
popup.classList.add("open-pop");
}
function closepop(){
popup.classList.remove("open-pop");
 textera.value ="";
 
}
function post(){
    popup.classList.remove("open-pop");
    var containor= document.getElementById("post-containor");
 containor.innerHTML =`  
 <div id="post-containor">
 <span >
 <img src="./images/myimg.jpg" class="imgText" width="40px">
 <span>
 <div>m waqas</div>
   <div>timer</div>
 </span>
 </span>
<div class="Recived-post">
<p>${textera.value}</p>
</div>
<div class="line"></div>
<ul>
  <li><span><img src="./images/like.png" alt="" width="26px">like</span></li>
  <li><span><img src="./images/message.png" alt="" width="26px">comment</span></li>
  <li><span><img src="./images/share.png" alt="" width="26px">share</span></li>
</ul>
</div>
`
textera.value=""


}


