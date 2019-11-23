function Father(){
    this.bloodType = 'A';
}
Father.prototype.wife = 'miss';
function Son(bloodType,name,age,phone,mother){
    Father.call(this,bloodType);
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.mother = mother;
    console.log(Son);
}
function Daughter(bloodType,name,age,phone,mother){
    Father.call(this,bloodType);
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.mother = mother;
    console.log(Daughter);
}
Daughter.prototype = new Father();
var Son1 = new Son('A','mike','5','13245678888','miss',function(){
    alert(Father.call(this,bloodType),this.name,this.age,this.phone,this.mother)
})
var Daughter1 = new Daughter('A','mier','15','13245678889','miss',function(){
    alert(Father.call(this,bloodType),this.name,this.age,this.phone,this.mother)
})

function isPoneAvailable(str){
    var str = document.getElementById('tel');
    let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(!myreg.test(str)){
            alert('信息错误！');
            console.log('信息错误！');
        }else{
            alert('信息正确');
            console.log('信息正确');
        }
}