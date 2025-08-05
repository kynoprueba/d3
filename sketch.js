/*let numeros=[
    {dur:2},
    {dur:10},
    {dur:32},
    {dur:15},
    {dur:44},
     {dur:100}
    
]
     */
/*let misdatos=["primero","segundo","tercero","cuarto","quinto","noveno"];*/

let misdatos2=[1,2,3,4,5,6,7,8,9,11,10];

let miArray = [
  { nombre: "Juan", edad: 3 },
  { nombre: "Maria", edad: 5 },
  { nombre: "Pedro", edad: 4 }
];

for(i=0; i< miArray.length; i++ ){
    console.log(i);
}


let obj1=miArray[0].edad;
let num= Number(obj1)
console.log(num);


/*let misdatos=[
    {
    nombre:"dato 1",
    cal:1
    },
    {
        nombre:"dato 2",
        cal:5
    },
    {
        nombre:"dato 3",
        cal:3
    },
    {
        nombre:"dato 4",
        cal:5
    }

];

*/

let misvg =d3.select("#uno")
.attr("width",800)
.attr("height",800)



misvg.selectAll("circle")
.data(misdatos2)
.enter()
.append("circle")
.attr("cx",(d,i)=>i*100)
.attr("cy",100)
.attr("r",(d,i)=>d*num)

/*
let misvg =d3.selectAll("p")
.attr("width",800)
.attr("height",800)
.style("background-color","green")
.data(misdatos)
.text((d,i)=>d)
*/
   

