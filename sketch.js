
d3.json("datos.json").then(function(datos){
   let n=datos;
   


});


let misdatos2=[1,2,3,4,5,6,7,8,9,11,10];

let misvg =d3.select("#uno")
.attr("width",800)
.attr("height",800)



misvg.selectAll("circle")
.data(misdatos2)
.enter()
.append("circle")
.attr("cx",(d,i)=>i*100)
.attr("cy",100)
.attr("r",(d,i)=>d*6)

/*
let misvg =d3.selectAll("p")
.attr("width",800)
.attr("height",800)
.style("background-color","green")
.data(misdatos)
.text((d,i)=>d)
*/
   

