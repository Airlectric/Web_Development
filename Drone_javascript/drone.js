(function () {
    "use strict"
    const tabs = document.querySelectorAll('#tabs>ul>li>a');

    tabs.forEach(tab => {tab.addEventListener('click', selectTab)});

    function selectTab(evt) {
        evt.preventDefault();
        tabs.forEach(tab => {tab.removeAttribute('class');} )
        evt.target.className='active';

        const thisTab = evt.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldContent = document.querySelector('.visible');

        oldContent.className= 'visuallyhidden';
        oldContent.addEventListener('transitionend', function(){
            oldContent.className= 'hidden';
            thisContent.className= 'visible visuallyhidden';

            setTimeout(() => {
                thisContent.classList.remove('visuallyhidden')
            },20);
        },{once:true})

    }
    
})();
