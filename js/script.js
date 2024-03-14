//Get from value
const weight = document.getElementById("weight");
const age = document.getElementById("age");
const height = document.getElementById("height");
const gender = document.querySelector('input[name="sex"]:checked').value;
let submitBtn = document.querySelector("#formBmi");
var bmi;

function calculate(e){
    
    var heightInM = height.value/100;  // konversi tinggi badan dari cm ke m
    bmi = weight.value/Math.pow(heightInM,2);

    submitBtn.addEventListener("submit", function(e){
        e.preventDefault();
    })


    // check input validiity
    if(!weight.checkValidity() || !height.checkValidity() || !age.checkValidity()){
        alert('Data yang anda masukkan salah !!!');
    }else{
        
        if(bmi<18.5){
            document.getElementById("resultBMI").innerHTML = bmi.toFixed(1);
            injectBMI(1);
        } else if(bmi<25){
            document.getElementById("resultBMI").innerHTML = bmi.toFixed(1);
            injectBMI(2);
        } else if(bmi<30){
            document.getElementById("resultBMI").innerHTML = bmi.toFixed(1);
            injectBMI(3);
        } else if(bmi>=30){
            document.getElementById("resultBMI").innerHTML = bmi.toFixed(1);
            injectBMI(4);
        }        
    }
}

var a;
function injectBMI(a){
    const summary = document.getElementById("summary");
    const konsul = document.getElementById("konsul");
    const newH4 = document.createElement("h4");
    const newP = document.createElement("p");

    while(summary.hasChildNodes()){
        summary.removeChild(summary.firstChild);
    }

    if(a===1){
        newH4.textContent = "Berat Badan Kurang";
        newP.textContent = "BMI Anda menunjukkan bahwa Anda kekurangan berat badan. Artinya, berat badan Anda mungkin terlalu rendah dibandingkan tinggi badan Anda, sehingga dapat menimbulkan risiko kesehatan. Penting untuk berkonsultasi dengan profesional kesehatan untuk memastikan Anda menjaga berat badan yang sehat.";
        a=0;
    }else if(a===2){
        newH4.textContent = "Berat Badan Normal";
        newP.textContent = "Selamat! BMI Anda berada dalam kisaran normal. Hal ini menunjukkan bahwa berat badan Anda sebanding dengan tinggi badan Anda, yang umumnya dikaitkan dengan kesehatan yang baik. Pertahankan kebiasaan sehat!.";
        a=0;
    }else if(a===3){
        newH4.textContent = "Berat Badan Lebih";
        newP.textContent = "BMI Anda menunjukkan bahwa Anda kelebihan berat badan. Hal ini menunjukkan bahwa Anda mungkin memiliki kelebihan berat badan dibandingkan tinggi badan Anda, yang dapat meningkatkan risiko masalah kesehatan tertentu. Pertimbangkan untuk melakukan perubahan gaya hidup seperti menyesuaikan pola makan dan meningkatkan aktivitas fisik untuk mencapai berat badan yang lebih sehat.";
        a=0;
    }else if(a===4){
        newH4.textContent = "Anda Obesitas";
        newP.textContent = "BMI Anda menunjukkan bahwa Anda mengalami obesitas. Ini berarti Anda memiliki jumlah lemak tubuh yang jauh lebih tinggi dibandingkan dengan tinggi badan Anda, yang dapat menimbulkan dampak kesehatan yang serius. Penting untuk mengambil langkah proaktif untuk mengatasi berat badan Anda, termasuk berkonsultasi dengan seorang profesional kesehatan untuk bimbingan dan dukungan lebih serius.";
        a=0;
    }
    
    summary.appendChild(newH4);
    summary.appendChild(newP);
    konsul.style.visibility = "visible";
    konsul.style.animation = "fade-down 0.5s";

}
