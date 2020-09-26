var myAudio;
var homeScreen = '<div onclick="HelpButton()" style="position:absolute;width: 16%;height: 6%;left:0px;right:0px;top: 30px;margin:auto;background:transparent;cursor:pointer;border-radius: 40%;"></div><div onclick="PressKit()" style="position:absolute;width: 9%;height: 4%;left: 11%;bottom: 13.5%;margin:auto;background:transparent;cursor:pointer;"></div><img src="./images/nissanWhite.png" style="position:absolute;width:13%;height:27%;left:0px;right:0px;top:10.5%;margin:auto;"/><div style="position: absolute;top:34%;margin: auto;left:0px;right: 0px;width: 22%;height: 34%;"><table style="position: absolute;top:0px;left:0px;width: 100%;height: 100%;color:white"><tr style="height:18%"><td align="center"><label style="font-size: 1vW;">You are on your way to the</label></td></tr><tr style="height:18%"><td align="center"><label style="font-size: 2vW;">NISSAN MAGNITE</label></td></tr><tr style="height:18%"><td align="center"><label style="font-size: 1.6vW;">VIRTUAL LAUNCH</label></td></tr><tr style="height:20%"><td align="center"><label style="font-size: 1.2vW;color: red;">15 - 10 - 2020 &emsp;&emsp; 03 : 00 PM</label></td></tr><tr><td align="center"><button onclick="OpenRegistrationPage()" class="buttonSigninStyle" style="margin-left:5%;width:80%;height:60%;">REGISTER</button></td></tr> </table></div>';

var registerScreen = '<div style="position: absolute;top:16%;margin: auto;left:0px;right: 0px;width: 30%;height: 53%;"><table style="position: absolute;top:0px;left:0px;width: 100%;height: 100%;color:white"><tr style="height:11%"><td colspan="2" align="center"><label style="font-size: 3vW;position:relative;top:10px;">NISSAN MAGNITE</label></td></tr><tr style="height:10%"><td colspan="2" align="center"><label style="font-size: 2.6vW;">VIRTUAL LAUNCH</label></td></tr><tr style="height:3%"><td colspan="2" align="center"><label class="nameLabelStyle">NAME</label></td></tr><tr style="height:8%"><td colspan="2" align="center"><input id="inputNameId" class="nameInputStyle" /></td></tr> <tr style="height:3%"><td colspan="2" align="center"><label class="nameLabelStyle">EMAIL ID</label></td></tr><tr style="height:8%"><td colspan="2" align="center"><input id="inputEmailId" class="nameInputStyle" /></td></tr> <tr style="height:3%"><td colspan="2" align="center"><label class="nameLabelStyle" >PHONE</label></td></tr><tr style="height:8%"><td colspan="2" align="center"><input id="inputPhoneId" class="nameInputStyle" /></td></tr> <tr style="height:3%"><td colspan="2" align="center"></td></tr> <tr style="height:8%"><td align="center" style="width:50%"><button onclick="SigninButtonClick()" class="buttonSigninStyle" style="margin-left:30%;">Sign in</button></td><td style="width:50%" align="center"><button onclick="BackButtonClick()" class="buttonSigninStyle" style="margin-right:30%;">Back</button></td></tr><tr style="height:5%"><td colspan="2" align="center"></td></tr> </table></div>';

var helpPopup = '<div class="helpInfoContainer" style="position: absolute;top:16%;margin: auto;left:0px;right: 0px;width: 30%;height: 40%;z-index:12;border:2px solid red;border-radius:10px;background:rgba(0,0,0,0.7)"><img onclick="OpenRegistrationPage()" src="./images/nissanWhite.png" style="position:absolute;left:0px;right:0px;top:0px;bottom:0px;margin:auto;width:50%;opacity:0.7;" /><label style="color:white;font-size:1vw;position:absolute;width:90%;height:90%;top:5%;left:5%;" ><b>Alan:</b> Hi! I will be your guide to the NISSAN MAGNITE launch event, how may i help you?</label></div>';

var pressKitScreen = '<div class="pressKitContainer" style="position: absolute;top:16%;margin: auto;left:0px;right: 0px;width: 29%;height: 40%;"><table style="position: absolute;top:0px;left:0px;width: 100%;height: 100%;color:white"><tr style="height:11%"><td colspan="2" align="center"><label style="font-size: 3vW;position:relative;top:20px;">NISSAN MAGNITE</label></td></tr><tr style="height:10%"><td colspan="2" align="center"><label style="font-size: 2.6vW;">PRESS - KIT</label></td></tr><tr style="height:15%"><td colspan="2" align="center"><label class="nameLabelStyle">PASSCODE</label></td></tr><tr style="height:10%"><td colspan="2" align="center"><input id="inputNameId" class="nameInputStyle" /></td></tr> <tr style="height:5%"><td colspan="2" align="center"><label style="position:relative;top:10px;font-size:0.9vw;" class="nameLabelStyle" >SPECIAL  ACCESS  FOR  PRESS  </br> AVAILABLE  POST  LAUNCH</label></td></tr></table></div>';

function docOnload()
{
	myAudio = document.getElementById("myAudio"); 
	setTimeout(function(){
		$("#journeyContainerId").fadeIn();
		$("#journeyContainerId").empty().append('<label style="position: absolute;top:28%;left:0px;text-align:center;color:white;width: 100%;font-size: 4vw;">MICROSITE</label><label style="position: absolute;top:40%;left:0px;text-align:center;color:white;width: 100%;font-size: 2.6vw;">Customer Journey</label>');
		
		setTimeout(function(){
			$("#audioBtnId").css("display","block");
			var imageUrl = "./images/southwestRoad.gif";
			var imgFront = "./images/unnamedLatest.png";
			$("#journeyContainerId").css('background-image', 'url(' + imgFront + '),url(' + imageUrl + ')').empty().append(homeScreen);
		}, 1000);
	}, 1000);
	TimerFunction();
}

function SigninButtonClick(){
	console.log("Sign in");
	$("#journeyContainerId").empty().append(homeScreen);
}

function BackButtonClick(){
	console.log("Back");
	$("#journeyContainerId").empty().append(homeScreen);
}

function OpenRegistrationPage(){
	console.log("register");
	$("#journeyContainerId").empty().append(registerScreen);
}

function HelpButton(){
	if($("#journeyContainerId").find('.helpInfoContainer').length == 0)
	{
		$("#journeyContainerId").empty().append(helpPopup);
	}
	else
	{
		$("#journeyContainerId").empty().append(homeScreen);
	}
	console.log("help button");
}

function PressKit(){
	console.log("Press kit");
	if($("#journeyContainerId").find('.pressKitContainer').length == 0)
	{
		$("#journeyContainerId").empty().append(pressKitScreen);
	}
	else
	{
		$("#journeyContainerId").empty().append(homeScreen);
	}
}


function PlayPauseAudio() {
	if (myAudio.duration > 0 && !myAudio.paused) {
		myAudio.pause(); 
	} else {
		myAudio.play(); 
	}
}

function TimerFunction()
	{
		var countDownDate = new Date("Oct 15, 2020 15:00:00").getTime();
		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get today's date and time
		  var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) < 10 ? "0"+Math.floor(distance / (1000 * 60 * 60 * 24)) : Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ? "0"+Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? "0"+Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000) < 10 ? "0"+Math.floor((distance % (1000 * 60)) / 1000) : Math.floor((distance % (1000 * 60)) / 1000);
		  
		  $("#dayId").text(days+" |");
		  $("#hourId").text(hours+" |");
		  $("#minuteId").text(minutes+" |");
		  $("#secondId").text(seconds);

		  // Display the result in the element with id="demo"
		  //document.getElementById("timerId").innerHTML = hours + " : " + minutes + " : " + seconds;

		  // If the count down is finished, write some text
		  if (distance < 0) {
			clearInterval(x);
			//document.getElementById("demo").innerHTML = "EXPIRED";
		  }
		}, 1000);
	}