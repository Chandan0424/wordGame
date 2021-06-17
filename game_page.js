P1=localStorage.getItem("player1Name");
P2=localStorage.getItem("player2Name");

P1score=0;
P2score=0;

Qturn="P1";
Aturn="P2";

document.getElementById("p1Name").innerHTML=P1;
document.getElementById("p2Name").innerHTML=P2;

document.getElementById("p1score").innerHTML=P1score;
document.getElementById("p2score").innerHTML=P2score;

document.getElementById("player_question").innerHTML="Question Turn: "+P1;
document.getElementById("player_answer").innerHTML="Answer Turn: "+P2;

function Send(){
    Tp_word=document.getElementById("text_inputWord").value;
    word=Tp_word.toLowerCase();

    charat1=word.charAt(1);
    console.log(charat1);

    lengthdiv2=Math.floor(word.length/2);
    charat2=word.charAt(lengthdiv2);
    console.log(charat2);

    lengthMinusOne=word.length-1;
    charat3=word.charAt(lengthMinusOne);
    console.log(charat3);

    removecharat1=word.replace(charat1,"_");
    console.log(removecharat1);

    removecharat2=removecharat1.replace(charat2,"_");
    console.log(removecharat2);

    removecharat3=removecharat2.replace(charat3,"_");
    console.log(removecharat3);

    question_word="<h4 id='word_display'>Q."+removecharat3+"</h4>"
    inputbox="<br> answer: <input type='text' id='inputCheckBox'>";
    checkbutton="<br><br> <button class='btn btn-info' onclick='Check()'>Check</button>";
    row=question_word+inputbox+checkbutton;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("text_inputWord").value="";
}


function Check(){
    getAnswer=document.getElementById("inputCheckBox").value;
    answer=getAnswer.toLowerCase();
    console.log(answer);

    if(answer==word){
        if(Aturn=="P1"){
            P1score=P1score+1;
            document.getElementById("p1score").innerHTML=P1score;
        
        }else{
            P2score=P2score+1;
            document.getElementById("p2score").innerHTML=P2score;
        }
    }
    if(Qturn=="P1"){
        Qturn="P2";
        document.getElementById("player_question").innerHTML="Question Turn: "+P2;
    }else{
        Qturn="P1";
        document.getElementById("player_question").innerHTML="Question Turn: "+P1;
    }
    if(Aturn=="P1"){
        Aturn="P2";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+P2;
    }else{
        Aturn="P1";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+P1;
    }
    document.getElementById("inputCheckBox").value="";
}
