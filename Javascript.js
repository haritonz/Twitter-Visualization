var windowWidth = 640;
var windowHeight = 400;
var numberOfPeople = 2;
var animationTime = 1000;
var paper;
var circle1;
var circle2;
var name1;
var name2;
var circle1Radius
var circle2Radius
    window.onload = function () {
    paper = Raphael(10, 50, windowWidth, windowHeight);
    circle1 = paper.circle(windowWidth/4, windowHeight/2, 0);
    circle2 = paper.circle((windowWidth/4)*3, windowHeight/2, 0);
    name1 = paper.text(windowWidth/4, windowHeight/2, "Person 1");
    name2 = paper.text((windowWidth/4)*3, windowHeight/2, "Person 2");
    name1.attr({ "font-size": 0 });
    name2.attr({ "font-size": 0 });
    }
    function draw() {
        updateVotesVisualization(parseInt(document.frmOne.txtFirstValue.value), parseInt(document.frmOne.txtSecondValue.value));
    }
    function updateVotesVisualization(Votes1, Votes2) {
        var totalVotes = (Votes1 + Votes2);
        circle1Radius = ((Votes1/totalVotes)*(windowWidth/(numberOfPeople*2)));
        circle2Radius = ((Votes2/totalVotes)*(windowWidth/(numberOfPeople*2)));
        circle1.animate({r: circle1Radius}, animationTime);
        circle2.animate({r: circle2Radius}, animationTime);
        if (circle1Radius > 36)  {
            name1.animate({"font-size": circle1Radius/2.3, x: windowWidth/4, y: windowHeight/2}, animationTime);
        }
        else    {
            name1.animate({"font-size": 16, x: circle1Radius+(windowWidth/4 - 60), y: (windowHeight/2 - 20)-circle1Radius}, animationTime);
        }
        if (circle2Radius > 36)  {
            name2.animate({"font-size": circle2Radius/2.3, x: ((windowWidth/4)*3), y: windowHeight/2}, animationTime);
        }
        else    {
            name2.animate({"font-size": 16, x: circle2Radius+(((windowWidth/4)*3) + 10), y: (windowHeight/2 - 20)-circle2Radius}, animationTime);
        }
        setTimeout("smallCircleAnimation()", animationTime + 1000);
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