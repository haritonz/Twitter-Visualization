var windowWidth = 640;
var windowHeight = 400;
var animationTime = 1000;
var currentVotes1 = 0;
var currentVotes2 = 0;
var paper;
var circle1;
var circle2;
var name1;
var name2;
var option1;
var option2;
var Votes1Lable;
var Votes2Lable;
var circle1Radius;
var circle2Radius;
    window.onload = function () {
    paper = Raphael(10, 50, windowWidth, windowHeight);
    circle1 = paper.circle(windowWidth/4, windowHeight/2, 0);
    circle2 = paper.circle((windowWidth/4)*3, windowHeight/2, 0);
    name1 = paper.text(windowWidth/4, windowHeight/2, "#dumpRonnie");
    name2 = paper.text((windowWidth/4)*3, windowHeight/2, "#keepRonnie");
    option1 = paper.text(windowWidth/4, windowHeight/2, "Yes");
    option2 = paper.text((windowWidth/4)*3, windowHeight/2, "No");
    Votes1Lable = paper.text(windowWidth/4, windowHeight/2, "");
    Votes2Lable = paper.text((windowWidth/4)*3, windowHeight/2, "");
    name1.attr({ "font-size": 0 });
    name2.attr({ "font-size": 0 });
    option1.attr({ "font-size": 0 });
    option2.attr({ "font-size": 0 });
    Votes1Lable.attr({ "font-size": 0 });
    Votes2Lable.attr({ "font-size": 0 });
    option1.click(function (event) {
    });
    option2.click(function (event) {
    });
    name1.click(function (event) {
    });
    name2.click(function (event) {
    });
    }
    function draw() {
        updateVotesVisualization(parseInt(document.frmOne.txtFirstValue.value), parseInt(document.frmOne.txtSecondValue.value));
    }
    function updateVotesVisualization(Votes1, Votes2) {
        var totalVotes = (Votes1 + Votes2);
        if ((windowWidth/4) < windowHeight/2)   {
            circle1Radius = ((Votes1/totalVotes)*((windowWidth-200)/4));
            circle2Radius = ((Votes2/totalVotes)*((windowWidth-200)/4));
        }
        else    {
            circle1Radius = ((Votes1/totalVotes)*(windowHeight-200)/2);
            circle2Radius = ((Votes2/totalVotes)*(windowHeight-200)/2);
        }
        circle1.animate({r: circle1Radius}, animationTime);
        circle2.animate({r: circle2Radius}, animationTime);
        if (circle1Radius > 36)  {
            name1.animate({"font-size": circle1Radius/3.3, x: windowWidth/4, y: windowHeight/2}, animationTime);
            option1.animate({"font-size": circle1Radius/3.3, x: windowWidth/4, y: ((windowHeight/2)-circle1Radius/3.3 - 5)}, animationTime);
            Votes1Lable.animate({"font-size": circle1Radius/3.3, x: windowWidth/4, y: ((windowHeight/2)+circle1Radius/3.3 + 5)}, animationTime);
            Votes1Lable.attr({text: Votes1});
        }
        else    {
            name1.animate({"font-size": 16, x: circle1Radius+(windowWidth/4 - 60), y: (windowHeight/2 - 20)-circle1Radius}, animationTime);
            option1.animate({"font-size": 16, x: circle1Radius+(windowWidth/4 - 60), y: (windowHeight/2 - 41)-circle1Radius}, animationTime);
            Votes1Lable.animate({"font-size": 16, x: circle1Radius+(windowWidth/4 - 60), y: (windowHeight/2 + 1)-circle1Radius}, animationTime);
            Votes1Lable.attr({text: Votes1});
        }
        if (circle2Radius > 36)  {
            name2.animate({"font-size": circle2Radius/3.3, x: ((windowWidth/4)*3), y: windowHeight/2}, animationTime);
            option2.animate({"font-size": circle2Radius/3.3, x: ((windowWidth/4)*3), y: ((windowHeight/2)-circle2Radius/3.3 - 5)}, animationTime);
            Votes2Lable.animate({"font-size": circle2Radius/3.3, x: ((windowWidth/4)*3), y: ((windowHeight/2)+circle2Radius/3.3 + 5)}, animationTime);
            Votes2Lable.attr({text: Votes2});
        }
        else    {
            name2.animate({"font-size": 16, x: circle2Radius+(((windowWidth/4)*3) + 10), y: (windowHeight/2 - 20)-circle2Radius}, animationTime);
            option2.animate({"font-size": 16, x: circle2Radius+(((windowWidth/4)*3) + 10), y: (windowHeight/2 - 41)-circle2Radius}, animationTime);
            Votes2Lable.animate({"font-size": 16, x: circle2Radius+(((windowWidth/4)*3) + 10), y: (windowHeight/2 + 1)-circle2Radius}, animationTime);
            Votes2Lable.attr({text: Votes2});
        }
        setTimeout("smallCircleAnimation()", animationTime + 1000);
        setTimeout("VoteBubbleAnimation1("+(Votes1 - currentVotes1)+","+(animationTime/(Votes1 - currentVotes1))+")", 0);
        setTimeout("VoteBubbleAnimation2("+(Votes2 - currentVotes2)+","+(animationTime/(Votes2 - currentVotes2))+")", 0);
        currentVotes1 = Votes1;
        currentVotes2 = Votes2;
    }
    function VoteBubbleAnimation1(NumberOfCircles, Time) {
        if (NumberOfCircles > 0)   {
            var angle = Math.random()*(Math.PI*2);
            var bubble = paper.circle((windowWidth/4 + (Math.cos(angle)*(circle1Radius + 100))), (windowHeight/2 + (Math.sin(angle)*(circle1Radius + 50))), 5);
            bubble.animate({cx: windowWidth/4 + (Math.cos(angle)*circle1Radius), cy: windowHeight/2 + (Math.sin(angle)*circle1Radius), opacity: 0}, 300);
            bubble.attr("fill", "#f00");
            bubble.attr("stroke", "#f00");
            setTimeout("VoteBubbleAnimation1(" + (NumberOfCircles - 1)+"," + Time + ")", Time, "<>");
            setTimeout("bubble.hide()", 300);
        }
    }
    function VoteBubbleAnimation2(NumberOfCircles, Time) {
        if (NumberOfCircles > 0)   {
            var angle = Math.random()*(Math.PI*2);
            var bubble = paper.circle(((windowWidth/4)*3 + (Math.cos(angle)*(circle2Radius + 100))), (windowHeight/2 + (Math.sin(angle)*(circle2Radius + 50))), 5);
            bubble.animate({cx: (windowWidth/4)*3 + (Math.cos(angle)*circle2Radius), cy: windowHeight/2 + (Math.sin(angle)*circle2Radius), opacity: 0}, 300);
            bubble.attr("fill", "green");
            bubble.attr("stroke", "green");
            setTimeout("VoteBubbleAnimation2(" + (NumberOfCircles - 1)+"," + Time + ")", Time, "<>");
            setTimeout("bubble.hide()", 300);
        }
    }
    function smallCircleAnimation() {
        if (circle1Radius < 5)    {
            var expandingCircle = paper.circle(windowWidth/4, windowHeight/2, circle1Radius);
            expandingCircle.attr({stroke: "blue"});
            expandingCircle.animate({r: circle1Radius + 10}, 1000);
            expandingCircle.animate({opacity: 0}, 1000);
            setTimeout("smallCircleAnimation()", 3000);
        }
        else if (circle2Radius < 5) {
            var expandingCircle = paper.circle((windowWidth/4)*3, windowHeight/2, circle2Radius);
            expandingCircle.attr({stroke: "blue"});
            expandingCircle.animate({r: circle2Radius + 10}, 1000);
            expandingCircle.animate({opacity: 0}, 1000);
            setTimeout("smallCircleAnimation()", 3000);
        }
    }