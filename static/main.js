

function fn1()
    {
          let name = document.getElementById("text1").value;
          data = /^[A-Za-z ]+$/


          if(name == ""){
            document.getElementById("demo").innerHTML="Please fill these field"
            return false;
          }
          else if(name.length<3){
            document.getElementById("demo").innerHTML="Atleast three characters"
            return false;
          }
          else if(!name.match(data)){
            document.getElementById("demo").innerHTML="Must be characters"
            return false;
          }
          else if(name.match(data)){
            document.getElementById("demo").innerHTML="Below your name is succesfull"
 
            return;
            
          }
          
    }

    function fn2()
    {
          let name1 = document.getElementById("text2").value;
          data1 = /^[A-Za-z ]+$/


          if(name1 == ""){
            document.getElementById("demo1").innerHTML="Please fill these field"
            return false;
          }
          else if(name1.length<3){
            document.getElementById("demo1").innerHTML="Atleast three characters"
            return false;
          }
          else if(!name1.match(data1)){
            document.getElementById("demo1").innerHTML="Must be characters"
            return false;
          }
          else if(name1.match(data1)){
            document.getElementById("demo1").innerHTML="Below your name is succesfull"
 
            return;
            
          }
          
    }


      /section move forward/

      

    function showSection(sectionId){
        var currentSection = document.getElementById(sectionId);
        currentSection.style.display = "block";
        var prevSectionId = sectionId.slice(0, -1);
        var prevSection = document.getElementById(prevSectionId)
        prevSection.style.display = "none";
      
        
       }
      
      /store the image click/
      
      function setImage(imageNumber){
        console.log("Selected image:" + imageNumber);
        document.getElementById("selectedImage").value = imageNumber;
        sessionStorage.setItem("selectedImagePage1",imageNumber)
        printSelectedImage();
       }
    
      function printSelectedImage(){
        var selectedImage = document.getElementById("selectedImage").value;
        console.log("Selected image value: " + selectedImage);
        document.getElementById("selectedImageDisplay").innerHTML = "selected image-1: " + selectedImage;
       }
      
   
      function setImage1(imageNumber1){
          console.log("Selected image1:" + imageNumber1);
          document.getElementById("selectedImage1").value = imageNumber1;
          sessionStorage.setItem("selectedImagePage2",imageNumber1)
          printSelectedImage1();
      }
      
      function printSelectedImage1(){
          var selectedImage1 = document.getElementById("selectedImage1").value;
          console.log("Selected image value: " + selectedImage1);
          document.getElementById("selectedImageDisplay1").innerHTML = "selected image-2: " + selectedImage1;
      }
      
      
      
      function setImage2(imageNumber2){
        console.log("Selected image2:" + imageNumber2);
        document.getElementById("selectedImage2").value = imageNumber2;
        sessionStorage.setItem("selectedImagePage3",imageNumber2)
        printSelectedImage2();
      }
      
      function printSelectedImage2(){
        var selectedImage2 = document.getElementById("selectedImage2").value;
        console.log("Selected image value: " + selectedImage2);
        
        document.getElementById("selectedImageDisplay2").innerHTML = "selected image-3: " + selectedImage2;
      }
      
      
      function setImage3(imageNumber3){
        console.log("Selected image3:" + imageNumber3);
        document.getElementById("selectedImage3").value = imageNumber3;
        sessionStorage.setItem("selectedImagePage4",imageNumber3)
        printSelectedImage3();
      }
      
      function printSelectedImage3(){
        var selectedImage3 = document.getElementById("selectedImage3").value;
        console.log("Selected image value: " + selectedImage3);
        document.getElementById("selectedImageDisplay3").innerHTML = "selected image-4: " + selectedImage3;
      }
      
      
      
      
      function setImage4(imageNumber4){
        console.log("Selected image3:" + imageNumber4);
        document.getElementById("selectedImage4").value = imageNumber4;
        sessionStorage.setItem("selectedImagePage5",imageNumber4)
        printSelectedImage4();
      }
      
      function printSelectedImage4(){
        var selectedImage4 = document.getElementById("selectedImage4").value;
        console.log("Selected image value: " + selectedImage4);
        document.getElementById("selectedImageDisplay4").innerHTML = "selected image-5: " + selectedImage4;
      }
      
      
      
      function setImage5(imageNumber5){
        console.log("Selected image5:" + imageNumber5);
        document.getElementById("selectedImage5").value = imageNumber5;
        sessionStorage.setItem("selectedImagePage6",imageNumber5)
        printSelectedImage5();
      }
      
      function printSelectedImage5(){
        var selectedImage5 = document.getElementById("selectedImage5").value;
        console.log("Selected image value: " + selectedImage5);
        document.getElementById("selectedImageDisplay5").innerHTML = "selected image-6: " + selectedImage5;
      }
      
      
      
      function setImage6(imageNumber6){
        console.log("Selected image6:" + imageNumber6);
        document.getElementById("selectedImage6").value = imageNumber6;
        sessionStorage.setItem("selectedImagePage7",imageNumber6)
        printSelectedImage6();
      }
      
      function printSelectedImage6(){
        var selectedImage6 = document.getElementById("selectedImage6").value;
        console.log("Selected image value: " + selectedImage6);
        document.getElementById("selectedImageDisplay6").innerHTML = "selected image-7: " + selectedImage6;
      }
      
      

      
      
      function setImage7(imageNumber7){
        console.log("Selected image7:" + imageNumber7);
        document.getElementById("selectedImage7").value = imageNumber7;
        sessionStorage.setItem("selectedImagePage8",imageNumber7)
        printSelectedImage7();
      }
      
      function printSelectedImage7(){
        var selectedImage7 = document.getElementById("selectedImage7").value;
        console.log("Selected image value: " + selectedImage7);
        document.getElementById("selectedImageDisplay7").innerHTML = "selected image-8: " + selectedImage7;
      }
      
      
      function setImage8(imageNumber8){
        console.log("Selected image8:" + imageNumber8);
        document.getElementById("selectedImage8").value = imageNumber8;
        sessionStorage.setItem("selectedImagePage9",imageNumber8)
        printSelectedImage8();
      }
      
      function printSelectedImage8(){
        var selectedImage8 = document.getElementById("selectedImage8").value;
        console.log("Selected image value: " + selectedImage8);
        document.getElementById("selectedImageDisplay8").innerHTML = "selected image-9: " + selectedImage8;
      }
      
      function setImage9(imageNumber9){
        console.log("Selected image9:" + imageNumber9);
        document.getElementById("selectedImage9").value = imageNumber9;
        sessionStorage.setItem("selectedImagePage10",imageNumber9)
        printSelectedImage9();
      }
      
      function printSelectedImage9(){
        var selectedImage9 = document.getElementById("selectedImage9").value;
        console.log("Selected image value: " + selectedImage9);
        document.getElementById("selectedImageDisplay9").innerHTML = "selected image-10: " + selectedImage9;
      }


      /page 2/
      
      function setImage10(imageNumber10){
        console.log("Selected image10:" + imageNumber10);
        document.getElementById("selectedImage10").value = imageNumber10;
        sessionStorage.setItem("selectedImagePage11",imageNumber10)
        printSelectedImage10();
      }
      
      function printSelectedImage10(){
        var selectedImage10 = document.getElementById("selectedImage10").value;
        console.log("Selected image value: " + selectedImage10);
        document.getElementById("selectedImageDisplay10").innerHTML = "selected image-1: " + selectedImage10;
      }
      
      function setImage11(imageNumber11){
        console.log("Selected image11:" + imageNumber11);
        document.getElementById("selectedImage11").value = imageNumber11;
        sessionStorage.setItem("selectedImagePage12",imageNumber11)
        printSelectedImage11();
      }
      
      function printSelectedImage11(){
        var selectedImage11 = document.getElementById("selectedImage11").value;
        console.log("Selected image value: " + selectedImage11);
        document.getElementById("selectedImageDisplay11").innerHTML = "selected image-2: " + selectedImage11;
      }
      
      
      function setImage12(imageNumber12){
        console.log("Selected image12:" + imageNumber12);
        document.getElementById("selectedImage12").value = imageNumber12;
        sessionStorage.setItem("selectedImagePage13",imageNumber12)
        printSelectedImage12();
      }
      
      function printSelectedImage12(){
        var selectedImage12 = document.getElementById("selectedImage12").value;
        console.log("Selected image value: " + selectedImage12);
        document.getElementById("selectedImageDisplay12").innerHTML = "selected image-3: " + selectedImage12;
      }
      
      function setImage13(imageNumber13){
        console.log("Selected image13:" + imageNumber13);
        document.getElementById("selectedImage13").value = imageNumber13;
        sessionStorage.setItem("selectedImagePage14",imageNumber13)
        printSelectedImage13();
      }
      
      function printSelectedImage13(){
        var selectedImage13 = document.getElementById("selectedImage13").value;
        console.log("Selected image value: " + selectedImage13);
        document.getElementById("selectedImageDisplay13").innerHTML = "selected image-4: " + selectedImage13;
      }
      
      function setImage14(imageNumber14){
        console.log("Selected image14:" + imageNumber14);
        document.getElementById("selectedImage14").value = imageNumber14;
        sessionStorage.setItem("selectedImagePage15",imageNumber14)
        printSelectedImage14();
      }
      
      function printSelectedImage14(){
        var selectedImage14 = document.getElementById("selectedImage14").value;
        console.log("Selected image value: " + selectedImage14);
        document.getElementById("selectedImageDisplay14").innerHTML = "selected image-5: " + selectedImage14;
      }
      
      function setImage15(imageNumber15){
        console.log("Selected image15:" + imageNumber15);
        document.getElementById("selectedImage15").value = imageNumber15;
        sessionStorage.setItem("selectedImagePage16",imageNumber15)
        printSelectedImage15();
      }
      
      function printSelectedImage15(){
        var selectedImage15 = document.getElementById("selectedImage15").value;
        console.log("Selected image value: " + selectedImage15);
        document.getElementById("selectedImageDisplay15").innerHTML = "selected image-6: " + selectedImage15;
      }
      
      function setImage16(imageNumber16){
        console.log("Selected image16:" + imageNumber16);
        document.getElementById("selectedImage16").value = imageNumber16;
        sessionStorage.setItem("selectedImagePage17",imageNumber16)
        printSelectedImage16();
      }
      
      function printSelectedImage16(){
        var selectedImage16 = document.getElementById("selectedImage16").value;
        console.log("Selected image value: " + selectedImage16);
        document.getElementById("selectedImageDisplay16").innerHTML = "selected image-7: " + selectedImage16;
      }
      
      function setImage17(imageNumber17){
        console.log("Selected image17:" + imageNumber17);
        document.getElementById("selectedImage17").value = imageNumber17;
        sessionStorage.setItem("selectedImagePage18",imageNumber17)
        printSelectedImage17();
      }
      
      function printSelectedImage17(){
        var selectedImage17 = document.getElementById("selectedImage17").value;
        console.log("Selected image value: " + selectedImage17);
        document.getElementById("selectedImageDisplay17").innerHTML = "selected image-8: " + selectedImage17;
      }
      
      function setImage18(imageNumber18){
        console.log("Selected image18:" + imageNumber18);
        document.getElementById("selectedImage18").value = imageNumber18;
        sessionStorage.setItem("selectedImagePage19",imageNumber18)
        printSelectedImage18();
      }
      
      function printSelectedImage18(){
        var selectedImage18 = document.getElementById("selectedImage18").value;
        console.log("Selected image value: " + selectedImage18);
        document.getElementById("selectedImageDisplay18").innerHTML = "selected image-9: " + selectedImage18;
      }
      
      function setImage19(imageNumber19){
        console.log("Selected image19:" + imageNumber19);
        document.getElementById("selectedImage19").value = imageNumber19;
        sessionStorage.setItem("selectedImagePage20",imageNumber19);
        printSelectedImage19();
      }
      
      function printSelectedImage19(){
        var selectedImage19 = document.getElementById("selectedImage19").value;
        console.log("Selected image value: " + selectedImage19);
        document.getElementById("selectedImageDisplay19").innerHTML = "selected image-10: " + selectedImage19;
      }

/comparing page1 variable values and comparing page2 variable values/

    var sum = 0;
    var resultDiv = document.getElementById("result");

var selectedImagePage1 = sessionStorage.getItem("selectedImagePage1");
var selectedImagePage2 = sessionStorage.getItem("selectedImagePage2");
var selectedImagePage3 = sessionStorage.getItem("selectedImagePage3");
var selectedImagePage4 = sessionStorage.getItem("selectedImagePage4");
var selectedImagePage5 = sessionStorage.getItem("selectedImagePage5");
var selectedImagePage6 = sessionStorage.getItem("selectedImagePage6");
var selectedImagePage7 = sessionStorage.getItem("selectedImagePage7");
var selectedImagePage8 = sessionStorage.getItem("selectedImagePage8");
var selectedImagePage9 = sessionStorage.getItem("selectedImagePage9");
var selectedImagePage10 = sessionStorage.getItem("selectedImagePage10");

/page2/
var selectedImagePage11 = sessionStorage.getItem("selectedImagePage11");
var selectedImagePage12 = sessionStorage.getItem("selectedImagePage12");
var selectedImagePage13 = sessionStorage.getItem("selectedImagePage13");
var selectedImagePage14 = sessionStorage.getItem("selectedImagePage14");
var selectedImagePage15 = sessionStorage.getItem("selectedImagePage15");
var selectedImagePage16 = sessionStorage.getItem("selectedImagePage16");
var selectedImagePage17 = sessionStorage.getItem("selectedImagePage17");
var selectedImagePage18 = sessionStorage.getItem("selectedImagePage18");
var selectedImagePage19 = sessionStorage.getItem("selectedImagePage19");
var selectedImagePage20 = sessionStorage.getItem("selectedImagePage20");

/comparing /



if(selectedImagePage1 && selectedImagePage11 && selectedImagePage1 === selectedImagePage11){
  console.log("selected images match!1");
  resultDiv.innerHTML='The selected images match!';
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML="The selected images are not match!";
}

if(selectedImagePage2 && selectedImagePage12 && selectedImagePage2 === selectedImagePage12){
  console.log("selected images match2!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage3 && selectedImagePage13 && selectedImagePage3 === selectedImagePage13){
  console.log("selected images match3!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage4 && selectedImagePage14 && selectedImagePage4 === selectedImagePage14){
  console.log("selected images match4!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage5 && selectedImagePage15 && selectedImagePage5 === selectedImagePage15){
  console.log("selected images match5!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage6 && selectedImagePage16 && selectedImagePage6 === selectedImagePage16){
  console.log("selected images match6!")
  resultDiv.innerHTML='The selected images match!'
  sum++
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage7 && selectedImagePage17 && selectedImagePage7 === selectedImagePage17){
  console.log("selected images match7!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage8 && selectedImagePage18 && selectedImagePage8 === selectedImagePage18){
  console.log("selected images match8!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage9 && selectedImagePage19 && selectedImagePage9 === selectedImagePage19){
  console.log("selected images match9!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}

if(selectedImagePage10 && selectedImagePage20 && selectedImagePage10 === selectedImagePage20){
  console.log("selected images match10!")
  resultDiv.innerHTML='The selected images match!'
  sum++;
  console.log(sum);
}
else{
  resultDiv.innerHTML='The selected images are not match!'
}
