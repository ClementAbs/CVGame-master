$(document).ready(function () {



ecran.style.opacity=0.2;                      // permet de réduire l'opacité de l'écran pour créer un masque
 



function play(){                                          //fonction qui lance les élément du jeu


      ecran.style.opacity=1;        // fixe l'opacité de l'écran à 1

     $("#playbutton").hide();      // Permet de cacher certains élément non nécessaire dans le code

     $("#coeur").hide();
     
     $("#bulle").hide();

     $("#nodejs").hide();

     $("#imagehtmlcssjs").hide();
       
     $("#instructions").hide();

};





spritefinal.appendChild(maBarredeVie)     // Lie la barre de vie au Sprite Final
  // Initialisation des positions

maBarreDeVieCouleur = window.document.createElement('div')  // Crée une div maBarreDeVieCouleur
maBarreDeVieCouleur.style.background = "rgb(0, 255, 10)";   // Sélection une couleur de fond pour la barre de vie
maBarreDeVieCouleur.style.width = "100%";                   // Fixe la largeur de maBarreDeVieCouleur à 100 %
maBarreDeVieCouleur.style.display = "inline-block";         // Fixe le display en inline-block
maBarreDeVieCouleur.style.height = "20px";                  // Fixe la hauteur de la div à 20 px
maBarredeVie.appendChild(maBarreDeVieCouleur);              // Lie maBarredeVie à maBarreDeVieCouleur

  var ecranlargeur= document.getElementById("ecran").style.width ;      // Sélectionne la largeur de l'écran
  ecranlargeur="1500px";                                                // Puis on lui affecte 3000px

  var ecranHauteur = document.getElementById("ecran").style.height;     // Sélectionne la hauteur de l'écran
  ecranHauteur = "750px";                                              //Puis on lui affecte 1500px

  var perso=document.getElementById("spritefinal");      //On sélectionne le sprite final et on affecte ces propriété à la variable Perso  

  perso.style.left = "0";                                       //Définit la position du personnage à 0
  // perso.style.top = parseFloat(ecranHauteur) - 230 + "px";      // Définit la position en hauteur du personnage par rapport à la hauteur de l'écran





  // Décomposition mouvements

  var animationMarche = [                   //Tableau des différents mouvement pour la marche
    ["0px", "0px"],
    ["0px","-190px"],
    ["-78px","-190px"],
    ["-150px","-190px"],
    ["-228px","-190px"],
    ["-303px","-190px"],
    ["-378px","-190px"],
    ["-452px","-190px"],
    ["-525px","-190px"],
    ["-607px","-190px"],
    ["-681px","-190px"],
    ["-758px","-190px"],
    ["-829px","-190px"],
    ["0px", "0px"]
  ];

  var animationEpee = [                     //Tableau pour les mouvement de l'animation de l'épée
    ["0px", "0px"],
    ["-60px","0px"],
    ["-130px","0px"],
    ["-200px","0px"],
    ["-280px","0px"],
    ["-370px","0px"],
    ["-449px","0px"],
    ["-525px","0px"],
    ["-600px","0px"],
    ["-673px","0px"],
    ["-747px","0px"],
    ["-820px","0px"],
    ["-820px","0px"],
    ["0px", "0px"]
  ];


  var animationJet = [                      //Tableau de décomposition du mouvement pour l'animation du JetPack
    ["0px", "-397px"],
    ["-78px","-397px"],
    ["-151px","-397px"],
    ["-227px","-397px"],
    ["-302px","-397px"],
    ["-378px","-397px"],
    ["-455px","-397px"],
    ["-528px","-397px"],
    ["-609px","-397px"],
    ["-680px","-397px"],
    ["-755px","-397px"],
    ["-833px","-397px"],
    ["-833px","-397px"],
    ["0px", "-397px"]
  ];


  var coin =  [                           //Tableau de décomposition du mouvement pour l'animation du coin 1
    ["0px", "-397px"],
    ["0px", "0px"],
    ["-86.33x","0px"],
    ["-172.66px","0px"],
    ["-259px","0px"],
    ["-345.32px","0px"],
    ["-431.65px","0px"],
  ];

  var coin2 =  [                        //Tableau de décomposition du mouvement pour l'animation du coin 2
    ["0px", "0px"],
    ["-86.33x","0px"],
    ["-172.66px","0px"],
    ["-259px","0px"],
    ["-345.32px","0px"],
    ["-431.65px","0px"],
  ];

  var coin3 =  [                        //Tableau de décomposition du mouvement pour l'animation du coin 3
    ["0px", "0px"],
    ["-86.33x","0px"],
    ["-172.66px","0px"],
    ["-259px","0px"],
    ["-345.32px","0px"],
    ["-431.65px","0px"],
  ];


  
  // Indicateurs animations
  var animationLecture;
  var animationWalk = false, animationSword=false, animationJetPack=false;  // Définition des différentes variable nécessaire pour les animations du Jeu

  var testsw= true, testjet=false, testswatt=false;   // Définition de varaiable Booléen

  // Initialisation compteur

  var i = 0, j=0,  k=0, l=0;  //Initialisation de varaibles à 0


   setInterval(function () {     //Lance la fonction collision toutes les 300 ms
     collision();
   }, 300)


 
  var animerMarche = function (pas) {  // Définition d'une fonction animerMarche en fonction du pas
    var idInterval;
    if (!animationWalk) {               // Si l'animation Walk n'est pas true donc false
      animationWalk = true;
      idInterval = setInterval(function(){    // Alors répéter l'action toutes les 55ms
        if (i < animationMarche.length) {      // Si on a parcouru toute la longueur du tableau animationMarche
          perso.style.backgroundPositionX = animationMarche[i][0];                //On parcourt la première colonne du tableau
          perso.style.backgroundPositionY = animationMarche[i][1];                // On parcourt la deuxieme colonne du tableau
          perso.style.left = parseFloat(perso.style.left) + (0.5*pas) + "%";    // On effectue un parseFloat pour récupérer la valeur à gauche du Personnage

          i++;      // On incrémente i
        } else {      // Sinon
          clearInterval(idInterval);    // On efface l'intervalle avec la valeur du temps stocké dans la fonction 
          i = 0;                        // On réinitialise la valeur à 0
          animationWalk = false;        // On affecte la animationWalk à false
        }
      }, 55);     // On répete la liste des instruction explicités toutes les 55 ms
    }
  };



  var animerEpee = function (pas) {             // Même chose pour animerEpee
    var myInterval;
    if (!animationSword) {
      animationSword = true;
      myInterval = setInterval(function(){
        if (k < animationEpee.length) {
          perso.style.backgroundPositionX = animationEpee[k][0];
          perso.style.backgroundPositionY = animationEpee[k][1];
          k++;
        } else {
          clearInterval(myInterval);
          k = 0;
          animationSword = false;
        }
      }, 55);
    }
  };



   var animerJet = function (pas) {            // Même chose pour animerJet
    var idInterval;
    if (!animationJetPack) {
      animationJetPack = true;
      idInterval = setInterval(function(){
        if (j < animationJet.length) {
          perso.style.backgroundPositionX = animationJet[j][0];
          perso.style.backgroundPositionY = animationJet[j][1];    
          j++;
        } else {
          clearInterval(idInterval);
          j = 0;
          animationJetPack = false;
        }
      }, 55);
    }
  };







var moncoin = document.getElementById("coin");      // On sélectionne la div de la pièce (celle qui est première position)
var moncoin2 = document.getElementById("coin2");     // On sélectionne la deuxième div toujours avec la pièce
var moncoin3 = document.getElementById("coin3");      // On sélectionne la troisième div

  var animerCoin = function () {            //Fonction qui anime la pièce
    var idInterval;
      idInterval = setInterval(function(){
        if (j < coin.length) {
          moncoin.style.backgroundPositionX = coin[j][0];
          moncoin.style.backgroundPositionY = coin[j][1];

          j++;
           }
          else{
            j=0;
          }
       
        }, 55);
}




 var animerCoin2 = function () {            //Fonction qui anime la pièce numéro deux
    var idInterval;
      idInterval = setInterval(function(){
        if (j < coin2.length) {
        

          moncoin2.style.backgroundPositionX = coin2[j][0];
          moncoin2.style.backgroundPositionY = coin2[j][1];


          j++;
           }
          else{
            j=0;
          }
       
        }, 200);
}




 var animerCoin3 = function () {              // Fonction qui anime la troisième pièce
    var idInterval;
      idInterval = setInterval(function(){
        if (j < coin3.length) {

          moncoin3.style.backgroundPositionX = coin3[j][0];    
          moncoin3.style.backgroundPositionY = coin3[j][1];

          j++;
           }
          else{
            j=0;
          }
       
        }, 200);
}




animerCoin();       // On appelle nos trois fonctions pour pouvoir lancer les intructions contenues à l'intérieur de chacune
animerCoin2();
animerCoin3();

  
  


var mynumberHautBas="592px";  // Définition d'une variable à 1270 px
var Jetpackactive=false;

  window.onkeydown = function (event) {  // Si une touche a été appuyé alors un évènement s'est produit
    var code = event.keyCode;             // L'évènement est stocké en mémoire sous la valeur keyCode
    switch (code) {                       // On utilise un switch case pour pouvoir englober tous les cas des différentes touches
                                          // On effectue switch(code) code étant la valeur d'une touche du clavier

      case 13: // touche Entree
      
      

      play();                              // On lance la fonction play() pour faire redéfinir l'opacité à 1
      break;
      case 17: //touche ctrl
      animerEpee();                         //On lance la fonction animerEpee() pour lancer l'animation de l'épée
      break;

      case 37: //gauche
      


        if (!Jetpackactive)

        {

          animerMarche(-1);     // On anime la marche vers la gauche avec la valeur -1 qui est la direction vers la gauche en css

          function allerAGauche(){


          var perso=document.getElementById("spritefinal");


          perso.style.transform="scaleX(-1)";


        }

         
      }

      
        allerAGauche();                
        break;

      case 38: //haut

      if( Jetpackactive == true)  {
      var imgjet=document.getElementById("spritefinal"); //On sélectionne le sprite final
      mynumberHautBas=parseFloat(mynumberHautBas)-15;   // On diminue la valeur de imgjet.style.top de -15 px
      imgjet.style.top=mynumberHautBas+"px";
      }
        break;

      case 39: //droite
      

        if (!Jetpackactive)

        {

          animerMarche(1);          //On anime la marche vers la droite avec la valeur 1 qui est la direction vers la droite en css

         function allerADroite(){


          var perso=document.getElementById("spritefinal");


          perso.style.transform="scaleX(1)";


        }

      }



        allerADroite();


        break;
        

      case 40: //bas
      if( Jetpackactive == true)  {

      var imgjet=document.getElementById("spritefinal"); //On sélectionne le sprite final
      mynumberHautBas=parseFloat(mynumberHautBas)+15; // On augmente la valeur de imgjet.style.top de 15 px
      imgjet.style.top=mynumberHautBas+"px";

    }
        break;

      case 32: //espace
      Jetpackactive = true;

      animerJet();  //On réalise l'animation du JetPack si l'on appuie sur la touche espace

      
       break;



   };


  };





  function collision() {




    var mynumbertopang, mynumberleftang, mynumbertopswatt, mynumberleftswatt; //On définit plusieurs variables

    var imgswatt = document.getElementById("spritefinal");    // On sélectionne le sprite final
    var imgang = document.getElementById("imageangular");     // On sélection l'image Angular


    mynumbertopswatt = parseFloat(imgswatt.offsetTop);        // On définit les valeurs que l'on utilisera dans l'équation de collision ensuite dans le if

    mynumberleftswatt = parseFloat(imgswatt.offsetLeft);


    mynumbertopang = parseFloat(imgang.offsetTop);

    mynumberleftang = parseFloat(imgang.offsetLeft);

    



    // console.log("Perso gauche "+mynumberleftswatt);
    // console.log("Perso droite "+(mynumberleftswatt+imgswatt.clientWidth));
    // console.log("Angular gauche "+mynumberleftang);
    // console.log("Angular droite "+(mynumberleftang+imgang.clientWidth));
    // console.log("---------------------------------------------");


// L'équation de collision nous est donnée sur le site de mdn il n'y a plus qu'a remplacer nos valeurs dans l'équation

    if ((mynumberleftswatt < mynumberleftang + imgang.clientWidth) && (mynumberleftswatt + imgswatt.clientWidth > mynumberleftang) && (mynumbertopswatt < mynumbertopang + imgang.clientHeight) && imgswatt.clientHeight + mynumbertopswatt > mynumbertopang)

    {



 if (animationSword) { // Si l'animation Epée est active alors

     var audio = new Audio('mp3/stomp.mp3');
      audio.play();

        $("#imageangular").hide(200);                               // On fait disparaitre l'image Angular en 200 ms
        maBarreDeVieCouleur.style.background = "rgb(255, 255, 0)";   // On définit la barre de vie en fond jaune
        maBarreDeVieCouleur.style.width = "70%";                    //On réduit la barre de vie à 70%

  

}        

    
    
    };





    var mynumbertopjq, mynumberleftjq, mynumbertopswatt, mynumberleftswatt; //De même pour JQuery

    var imgswatt = document.getElementById("spritefinal");
    var imgjq = document.getElementById("imagejquery");         // Sélection Image JQuery







    mynumbertopswatt = parseFloat(imgswatt.offsetTop);

    mynumberleftswatt = parseFloat(imgswatt.offsetLeft);


    mynumbertopjq = parseFloat(imgjq.offsetTop);

    mynumberleftjq = parseFloat(imgjq.offsetLeft);






    if ((mynumberleftswatt < mynumberleftjq + imgjq.clientWidth) && (mynumberleftswatt + imgswatt.clientWidth > mynumberleftjq) && (mynumbertopswatt < mynumbertopjq + imgjq.clientHeight) && imgswatt.clientHeight + mynumbertopswatt > mynumbertopjq)

    {

        


      var position=0;
      var myInterval;

       if (animationSword) {

        var audio = new Audio('mp3/stomp.mp3');
          audio.play();

       myInterval = setInterval(function(){


        document.getElementById("imagejquery").style.backgroundPositionX = position+"px"; // On fait varier la position du sprite avec la propriété backgroundX
        maBarreDeVieCouleur.style.background = "rgb(255, 255, 0)";
        maBarreDeVieCouleur.style.width = "40%";  // On réduit de nouveau la barre de vie
        


        if (position < 1800) {   // Si la position est inférieur à 1800px alors on ajoute 300px sinon on se place en position 1800px pour le faire disparaitre
          position = position + 300;
        } else {
          position = 1800;    
          clearInterval(myInterval); // On efface l'interval de temps de la fonction myInterval()
        }



      }, 100); //On définit la valeur du set interval à 100

      

    }
 
  

};




  




    var mynumbertopco, mynumberleftco, mynumbertopsw, mynumberleftsw; // De même pour la pièce une

    var imgsw = document.getElementById("spritefinal");
    var imgco = document.getElementById("coin");







    mynumbertopsw = parseFloat(imgsw.offsetTop);

    mynumberleftsw = parseFloat(imgsw.offsetLeft);


    mynumbertopco = parseFloat(imgco.offsetTop);

    mynumberleftco = parseFloat(imgco.offsetLeft);






    if ((mynumberleftsw < mynumberleftco + imgco.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberleftco) && (mynumbertopsw < mynumbertopco + imgco.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertopco)

    {


      var audio = new Audio('mp3/coin.mp3');
          audio.play();



      $(document).ready(function () {
        $('#coin').hide();




      });


    };







    var mynumbertopcoin2, mynumberleftcoin2, mynumbertopsw, mynumberleftsw; // De même pour la pièce 2

    var imgsw = document.getElementById("spritefinal");
    var imgcoin2 = document.getElementById("coin2");



    mynumbertopsw = parseFloat(imgsw.offsetTop);

    mynumberleftsw = parseFloat(imgsw.offsetLeft);


    mynumbertopcoin2 = parseFloat(imgcoin2.offsetTop);

    mynumberleftcoin2 = parseFloat(imgcoin2.offsetLeft);





    // console.log("Perso gauche "+mynumberleftsw);
    // console.log("Perso droite "+(mynumberleftsw+imgsw.clientWidth));
    // console.log("Coin2 gauche "+mynumberleftcoin2);
    // console.log("Coin2 droite "+(mynumberleftcoin2+imgcoin2.clientWidth));
    // console.log((mynumberleftsw < mynumberleftcoin2 + imgcoin2.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberleftcoin2) && (mynumbertopsw < mynumbertopcoin2 + imgcoin2.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertopcoin2)
    //  console.log("---------------------------------------------");





    if ((mynumberleftsw < mynumberleftcoin2 + imgcoin2.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberleftcoin2) && (mynumbertopsw < mynumbertopcoin2 + imgcoin2.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertopcoin2)

    {
        var audio = new Audio('mp3/coin.mp3');
          audio.play();
     

      $(document).ready(function () {
        $('#coin2').hide(); // On fait disparaître la pièce 2 instatanément


      });



    }






    var mynumbertopcoin3, mynumberleftcoin3, mynumbertopsw, mynumberleftsw; //De même pour la pièce 3

    var imgsw = document.getElementById("spritefinal");
    var imgcoin3 = document.getElementById("coin3");




    mynumbertopsw = parseFloat(imgsw.offsetTop);

    mynumberleftsw = parseFloat(imgsw.offsetLeft);


    mynumbertopcoin3 = parseFloat(imgcoin3.offsetTop);

    mynumberleftcoin3 = parseFloat(imgcoin3.offsetLeft);






    if ((mynumberleftsw < mynumberleftcoin3 + imgcoin3.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberleftcoin3) && (mynumbertopsw < mynumbertopcoin3 + imgcoin3.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertopcoin3)

    {
      var audio = new Audio('mp3/stomp.mp3');
          audio.play();
      $(document).ready(function () {
        $('#coin3').hide();
        $("#coeur").show();

        
     $("#nodejs").show();

     $("#imagehtmlcssjs").show();
       
      });




    };



    var mynumbertopcoeur, mynumberleftcoeur, mynumbertopsw, mynumberleftsw; // De même pour le coeur

    var imgsw = document.getElementById("spritefinal");
    var imgcoeur = document.getElementById("coeur");




    mynumbertopsw = parseFloat(imgsw.offsetTop);

    mynumberleftsw = parseFloat(imgsw.offsetLeft);


    mynumbertopcoeur = parseFloat(imgcoeur.offsetTop);

    mynumberleftcoeur = parseFloat(imgcoeur.offsetLeft);






    if ((mynumberleftsw < mynumberleftcoeur + imgcoeur.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberleftcoeur) && (mynumbertopsw < mynumbertopcoeur + imgcoeur.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertopcoeur)

    {

      if (!animationSword) {


        $("#coeur").hide(200); //On fait disparaitre le coeur en 200ms
       
       
       maBarreDeVieCouleur.style.background = "rgb(0, 255, 10)"; // On repasse la couleur de la barre de vie en couleur Verte
       maBarreDeVieCouleur.style.width = "80%";                 // On augmente la largeur de la barre de vie à 80%
      

}        

      
 
    }
   
    
 

    var mynumbertopnode, mynumberleftnode, mynumbertopsw, mynumberleftsw; // De même pour Node JS

    var imgsw = document.getElementById("spritefinal");
    var imgnode = document.getElementById("nodejs");




    mynumbertopsw = parseFloat(imgsw.offsetTop);

    mynumberleftsw = parseFloat(imgsw.offsetLeft);


    mynumbertopnode = parseFloat(imgnode.offsetTop);

    mynumberleftnode = parseFloat(imgnode.offsetLeft);






    if ((mynumberleftsw < mynumberleftnode + imgnode.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberleftnode) && (mynumbertopsw < mynumbertopnode + imgnode.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertopnode)

    {

      if (animationSword) {


           var audio = new Audio('mp3/stomp.mp3');
          audio.play();


        myInterval = setInterval(function(){
 
         document.getElementById("nodejs").style.backgroundPositionX = position+"px";
         maBarreDeVieCouleur.style.background = "rgb(255, 0, 0)";
         maBarreDeVieCouleur.style.width = "40%";
          
         if (position < 1800) { 
           position = position + 300;
         } else {
           position = 1800; 
   
         }
 
 
       }, 1000);

    } 

  }



    var mynumbertophtml, mynumberlefthtml, mynumbertopsw, mynumberleftsw; // De même pour l'image HTML CSS & JS

    var imgsw = document.getElementById("spritefinal");
    var imghtml = document.getElementById("imagehtmlcssjs");




    mynumbertopsw = parseFloat(imgsw.offsetTop);

    mynumberleftsw = parseFloat(imgsw.offsetLeft);


    mynumbertophtml = parseFloat(imghtml.offsetTop);

    mynumberlefthtml = parseFloat(imghtml.offsetLeft);





 
    if ((mynumberleftsw < mynumberlefthtml + imghtml.clientWidth) && (mynumberleftsw + imgsw.clientWidth > mynumberlefthtml) && (mynumbertopsw < mynumbertophtml + imghtml.clientHeight) && imgsw.clientHeight + mynumbertopsw > mynumbertophtml)

    {



    
      if (animationSword) {


          
          var audio = new Audio('mp3/stomp.mp3');
          audio.play();


         myInterval = setInterval(function(){
 
 
         document.getElementById("imagehtmlcssjs").style.backgroundPositionX = position+"px"; //Changement de position au niveau du background
         maBarreDeVieCouleur.style.background = "rgb(255, 0, 0)";
         maBarreDeVieCouleur.style.width = "20%";
 
 
         if (position < 1800) { 
           position = position + 300;
         } else {
           position = 1800; 
   
         }
 
 
 
       }, 1000);

       $("#bulle").show(); // On affiche la bulle avec du texte et le contenu du CV

      
 
      var audio = new Audio('mp3/lvlup.mp3'); // Son pour indiquer qu'on a passé un niveau
          audio.play();




      } 
      

   

      
   


  }; 



   // var mynumbertopbulle, mynumberleftbulle, mynumbertopsw, mynumberleftsw; // De même pour l'image Bulle

   //  var imgsw = document.getElementById("spritefinal");
   //  var imgbulle = document.getElementById("bulle");




   //  mynumbertopsw = parseFloat(imgsw.offsetTop);

   //  mynumberleftsw = parseFloat(imgsw.offsetLeft);


   //  mynumbertopbulle = parseFloat(imgbulle.offsetTop);

   //  mynumberleftbulle = parseFloat(imgbulle.offsetLeft);





 
   //  if ( imgsw.style.top > imgbulle.style.top  )

   //  {

   //      maBarreDeVieCouleur.style.background = "rgb(0, 255, 10)";   // Sélection une couleur de fond pour la barre de vie
   //      maBarreDeVieCouleur.style.width = "100%"; 
       


   //  }
  




  };






});

