// rr=async ()=>{
// const data=	await fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)
// const dd=await data.json()
// console.log(dd.ticker)

// }
// rr()
 
 // axios.get('http://api.tvmaze.com/shows/1/images')
 // .then((s)=>{
 // 	console.log(s.data)

 // })
 // .catch(e=>{
 // 	console.log(e)
 // })
 // start from here
const div1=document.querySelector(".div1");
const div2=document.querySelector(".div2");
 const form =document.querySelector('#form');
 form.addEventListener('submit', async function (e) {        //using axios and async javascript
 	e.preventDefault()
 	// console.dir(form)
 	const userInput=form.elements.query.value;
 	const config={params:{q:userInput}}
 	// console.log(userInput)
 	try{
 	const res=await axios.get('http://api.tvmaze.com/search/shows',config) //api get request
 	 	ddd(res.data)
 	 	
 	 	console.log(res.data)
 	form.elements.query.value="";
}
catch(e){
 	const h3=document.createElement('h3');
 	h3.innerText=`sorry there is an error${e}`
 	div1.append(h3)

 }


 })

 function ddd (r) {
 for (let m of r){
 	

if(m.show.image && m.show.rating){
 	const img=document.createElement('img');
 	const h3=document.createElement('h3');
 	const h4=document.createElement('h4');
 
	const h5=document.createElement('h5');
	const h6=document.createElement('h6');
	const h7=document.createElement('h6');
	h5.innerText=m.show.genres
	h6.innerHTML=m.show.summary
	h7.innerHTML=`released date : ${m.show.premiered}`
 	h3.innerText=m.show.rating.average;
 	h4.innerText=m.show.name;
 	img.src=m.show.image.original;
 	div1.append(img,h4,h3,h5,h7,h6)

 }}}
 