/**
 * Created by Administrator on 2017/8/18.
 */
$(function() {
    $('.m_nav-all_li').hover(
        function(){
            $(this).children().stop().slideDown()
        },function(){
            $(this).children().stop().slideUp()
        }
    );
    $('.m_all_down').hover(
        function(){
            $(this).css('color','red')
        },function(){
            $(this).css('color','red')
        }
    )

});

