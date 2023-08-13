const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
    question.addEventListener(('click'),(e) => 
    {
        if(e.target.classList.contains('oneq'))
        {
            document.querySelector('.oneq h3').classList.toggle('bold')
            document.querySelector('.oneq svg').classList.toggle('svgrot')
            document.getElementById('onea').classList.toggle('display');
        }
        else if(e.target.classList.contains('twoq'))
        {
            document.querySelector('.twoq h3').classList.toggle('bold')
            document.querySelector('.twoq svg').classList.toggle('svgrot')
            document.getElementById('twoa').classList.toggle('display');
        }
        else if(e.target.classList.contains('threeq'))
        {
            document.querySelector('.threeq h3').classList.toggle('bold')
            document.querySelector('.threeq svg').classList.toggle('svgrot')
            document.getElementById('threea').classList.toggle('display');
        }
        else if(e.target.classList.contains('fourq'))
        {
            document.querySelector('.fourq h3').classList.toggle('bold')
            document.querySelector('.fourq svg').classList.toggle('svgrot')
            document.getElementById('foura').classList.toggle('display');
        }
        else if(e.target.classList.contains('fiveq'))
        {
            document.querySelector('.fiveq h3').classList.toggle('bold')
            document.querySelector('.fiveq svg').classList.toggle('svgrot')
            document.getElementById('fivea').classList.toggle('display');
        }
    })})