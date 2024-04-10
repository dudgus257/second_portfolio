const TabBtnEls = document.querySelectorAll('.TabBtn')

TabBtnEls.forEach(function(button){
    button.addEventListener('click', function(){
        const TargetTab = button.getAttribute('data-tab');
        const TabContEl = document.querySelectorAll('.TabCont')

        TabBtnEls.forEach(function(TabBtn){
            TabBtn.classList.remove('active');
        });

        TabContEl.forEach(function(TabCont){
            TabCont.classList.remove('active');
        });

        button.classList.add('active');
        document.getElementById(TargetTab).classList.add('active');

    })
})