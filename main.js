array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log( Math.floor(Math.random() *array.length+1))

function shoffle(arr) {
    var n = arr.length
    let shi = arr
    var o = []
    for (let i = 0; i < n; i++) {
        var num = Math.floor(Math.random() * shi.length)
        o.push(shi[num])
        shi.splice(shi.indexOf(shi[num]), 1)
    }
    return o
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
var names = ["ahmed", "yasser", "ali", "khalid", "nora" ,"nasser" , "omar" , "bunny"]

const student = [{name:'Wejdan'  , type :'female' } , {name:'shahad'  , type :'female' },{name:'Doaa Alalawi'  , type :'female' },{name:'Ibtissam'  , type :'female' }
,{name:'ashjan'  , type :'female' },{name:'abeer'  , type :'female' },{name:'Nujud'  , type :'female' },{name:'Diala'  , type :'female' }
,{name:'Doaa AlHajjaji'  , type :'female' },{name:'sara'  , type :'female' },{name:'Raghad'  , type :'female' },{name:'Nouf'  , type :'female' }
,{name:'Amal'  , type :'female' },{name:'Majd'  , type :'female' },{name:'Nada'  , type :'female' },
{name:'Ahlam'  , type :'female' },{name:'Israa'  , type :'female' },{name:'Anas'  , type :'male' }
,{name:'mohammed'  , type :'male' },{name:'Yazeed'  , type :'male' },{name:'Tareq'  , type :'male' },{name:'Fahad'  , type :'male' },{name:'Abdullah'  , type :'male' }
,{name:'Hamed'  , type :'male' },{name:'Suhaib'  , type :'male' },{name:'Hisham'  , type :'male' },{name:'Abdulmajed'  , type :'male' },{name:'Ali'  , type :'male' },
{name:'Midhat'  , type :'male' },{name:'mohammed Salah'  , type :'male' },{name:'Anas'  , type :'male' },{name:'Abdulgadir'  , type :'male' } ]
names = shoffle(names);
// names.forEach(element => {
//     console.log("name: " + element)
//     $(".one").append(`<h1>${element}</h1>`)

// });
// setInterval(UPDATE, 60)
function update (){
    $(".one").empty()
    student.forEach((element , i  ) => {
        if ( (i)%4 == 0){
            var url  = (element.type =="female" ) ?`https://avatars.dicebear.com/v2/female/${Math.floor(Math.random() * 14)}.svg` :`https://avatars.dicebear.com/v2/male/${Math.floor(Math.random() * 14)}.svg`
           
            $(".one").append(` <div class="ui carde">
            <div class="cardee">
              <div class="content">
              <div class="list" id = so${i} ></div>
              </div>
            </div>
          </div>`)
          
          
             u =i
            $(`#so${u}`).append(`<li> <a class="ui image label">
            <img src=${url}>
            ${element.name}
          </a></li>`)
        }
        else { 
            
            var url  = (element.type =="female" ) ?`https://avatars.dicebear.com/v2/female/${Math.floor(Math.random() * 14)}.svg` :`https://avatars.dicebear.com/v2/male/${Math.floor(Math.random() * 14)}.svg`
        $(`#so${u}`).append(`<li> <a class="ui image label">
        <img src=${url}>
        ${element.name}
      </a></li>`)
        }
    });
}
$('button').click(function () {
    $(".one").empty()
    
    shuffle(student);
    var u = 0
   
   update()
  
    $('.label').transition('tada')

    
    console.log("press")

});