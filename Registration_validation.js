
let formNode
let nameNode;
let spanNode1;
let mobileNode; 
let spanNode2; 
let EmailNode; 
let spanNode3; 
let password1Node; 
let spanNode4; 
let tdNode; 
let password2Node; 
let spanNode5;
let passNode1;
let passNode2;
let checkNode;

$(document).ready(function(){
    nameNode = $('#name')
    spanNode1 = $('#error1')
    nameNode.blur(()=>validate1())

    mobileNode = $('#Mobile_num')
    spanNode2 = $('#error4')
    mobileNode.blur(()=>validate2())
    
    EmailNode = $('#email')
    spanNode3 = $('#error5')
    EmailNode.blur(()=>validate3())


    password1Node = $('#pass1')
    spanNode4 = $('#error6')
    tdNode = $('#passtd')
    password1Node.blur(()=>validate4())


    password2Node = $('#pass2')
    spanNode5 = $('#error7')
    password2Node.blur(()=>validate5())


    checkNode = $('#showp')
    checkNode.change(()=>showpassword())

    $('#rform').submit(()=>formValidation())

});
let invalidBorder = "4px double  red"
let validBorder = "4px double green"

function validate1(){
    let firstName = nameNode.val();
    spanNode1.text("")
    if(firstName === ""){
        spanNode1.text("Name is required");
        nameNode.css({'border': invalidBorder})
        return false
    }else{
        nameNode.css({'border': validBorder})
        return true
    }
}

function validate2(){
    let mob_no = mobileNode.val()
    spanNode2.text("")
    let regexp = new RegExp("^[0-9]{10}$")
    let Mob_result = regexp.test(mob_no)
    
    if(mob_no === ""){
        spanNode2.text("Mobile num is required");
        mobileNode.css({'border' : invalidBorder})
        return false
    }
    else if(Mob_result == false){
        spanNode2.text("Please enter a valid num");
        mobileNode.css({'border' : invalidBorder})
        return false
    }
    else{
        mobileNode.css({'border' : validBorder})
        return true
    }
}

function validate3(){
    let email = EmailNode.val();
    spanNode3.text("")
    let emailregExp = new RegExp("[A-za-z]{4,12}")
    let email_result = emailregExp.test(email)
    let symbol_check = email.includes("@")
    
    if(email === ""){
        spanNode3.text("Email is required");
        EmailNode.css({'border' : invalidBorder})
        return false
    }
    else if(!email.includes("@") || email.substring(email.indexOf('@')+1)=== ''){
        spanNode3.text("Please put a valid email")
        EmailNode.css({'border' : invalidBorder})
        return false
        
    }
    else{
        EmailNode.css({'border' : validBorder})
        return true
    }
}


function validate4(){
    let password1 = password1Node.val();
    
    tdNode.html("") 
    let pswd1regExp = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,12}$")
    let pswd1_result = pswd1regExp.test(password1)
    spanNode4.text("")
    tdNode.html("") 
    tdNode.append(spanNode4)
    if(password1 === ""){
        spanNode4.text("password1 is required");
        password1Node.css({'border' : invalidBorder})
        return false
    }
    else if(pswd1_result === false){
        spanNode4.text("password should contain")
        let olNode = $('<ol></ol>')
        let array = ['Small letter','Capital letter','Digit','Special symbol']
        for (let ele of array){
            let liNode =$('<li></li>')
        liNode.text(ele)
        olNode.append(liNode)    
        }
        let boldNode = $('<b/>')
        boldNode.text('and  it should be 5 to 12  charectars long')
        tdNode.append(spanNode4,olNode,boldNode)
        password1Node.css({'border' : invalidBorder})
        return false
        }
    else{
        password1Node.css({'border' : validBorder})
        return true
    }
}

function validate5(){
    let c_password2 = password2Node.val();
    let password1 =  password1Node.val();
    spanNode5.text("")
    if(c_password2 === ""){
        spanNode5.text("password2 is required");
        password2Node.css({'border' : invalidBorder})
        return false
    }else if(c_password2 !== password1){
        spanNode5.text("both Passwords should match")
        password2Node.css({'border' : invalidBorder})
        return false
    }
    else {
        password2Node.css({'border' : validBorder})
        return true
    }
}

function showpassword(){
    
    passNode1 = $('#pass1')
    passNode2 = $('#pass2')

    if ($('#showp').prop('checked')){
            $('#pass1').attr('type','text'); 
            $('#pass2').attr('type','text'); 
    }else{
        $('#pass1').attr('type','password'); 
        $('#pass2').attr('type','password'); 
    }
    
}

function formValidation(){
    let st1 = validate1()
    let st2 = validate2()
    let st3 = validate3()
    let st4 = validate4()
    let st5 = validate5()

    return (st1 && st2 && st3 && st4 && st5 )
}