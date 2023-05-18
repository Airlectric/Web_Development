$(window).on('load', () =>{
    const imgCount = $('#slider ul li ').length;
    const imgWidth = $('#slider ul li img').first().width();
    const totalWidth = `${imgCount * imgWidth}px`

    let counter = 0;
    let leftLength = 0;

    $('#next').click(function(){
        counter++;
        if(counter == imgCount){
            counter = 0;

            $('#slider ul').clone().appendTo('#slider');
            $('#slider ul').last().css('left',imgWidth + 'px');

            $('#slider ul').first().animate({left:`-${totalWidth}px`},700,'easeInQuad',function(){
                $('#slider ul').first().remove();
            }
            );

            $('#slider ul').last().animate({last:0},700,'easeInQuad');
        }

        else{
            leftLength = `-${counter * imgWidth}px`;

        $('#slider ul').animate({left:leftLength},700,'easeInQuad')
        }
    });

    $('#previous').click(function(){
        counter--;
        if(counter < 0){
            counter = imgCount-1;

            $('#slider ul').clone().appendTo('#slider');
            $('slider ul').last().css('left',`-${totalWidth}`)

            leftLength = `-${counter * imgWidth}`

            $('#slider ul').first().animate({left: imgWidth},700,'easeInQuad',function(){
                $('#slider ul').first().remove();
            })

            $('#slider ul').last().animate({left:leftLength},700,'easeInQuad');
        }

        else{
            leftLength = `-${counter * imgWidth}px`;

        $('#slider ul').animate({left:leftLength},700,'easeInQuad')
        }
    })
});