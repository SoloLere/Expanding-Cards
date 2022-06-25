const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel')

container.addEventListener('click', function(e){
    const whereClicked = e.target;
    console.log(whereClicked);
    const panel = whereClicked.closest('.panel');
    if (!panel) return
    // remove active class
    panels.forEach(panel => panel.classList.remove('active'));
    // add active to target
    panel.classList.add('active');

})