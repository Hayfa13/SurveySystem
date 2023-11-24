document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('head').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
