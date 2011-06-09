var windowWidth = 320;
    var windowHeight = 200;
    var numberOfPeople = 2;
    var paper;
    var circle1;
    var circle2;
    var name1;
    var name2;
    var circle1Radius
    var circle2Radius
        window.onload = function () {
        paper = Raphael(10, 50, windowWidth, windowHeight);
        circle1 = paper.circle(80, 100, 50);
        circle2 = paper.circle(240, 100, 50);
        //name1 = paper.text(160, 100, "Person1");
        //circle.attr("fill", "#000000");
        }
        function draw() {
            updateVotesVisualization(parseInt(document.frmOne.txtFirstValue.value), parseInt(document.frmOne.txtSecondValue.value));
        }
        function updateVotesVisualization(Votes1, Votes2) {
            var totalVotes = (Votes1 + Votes2);
            circle1Radius = ((Votes1/totalVotes)*(windowWidth/(numberOfPeople*2)));
            circle2Radius = ((Votes2/totalVotes)*(windowWidth/(numberOfPeople*2)));
            circle1.animate({r: circle1Radius}, 1000);
            circle2.animate({r: circle2Radius}, 1000);
            setTimeout("smallCircleAnimation()", 2000);
        }
        function smallCircleAnimation() {
            if (circle1Radius < 5)    {
                var expandingCircle = paper.circle(80, 100, circle1Radius);
                expandingCircle.attr({stroke: "blue"});
                expandingCircle.animate({r: circle1Radius + 10}, 1000);
                expandingCircle.animate({opacity: 0}, 1000);
                setTimeout("smallCircleAnimation()", 3000);
            }
            else if (circle2Radius < 5) {
                var expandingCircle = paper.circle(240, 100, circle2Radius);
                expandingCircle.attr({stroke: "blue"});
                expandingCircle.animate({r: circle2Radius + 10}, 1000);
                expandingCircle.animate({opacity: 0}, 1000);
                setTimeout("smallCircleAnimation()", 3000);
            }
        }