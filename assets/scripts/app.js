        $(document).ready(function() {
        $('.cabinet-sidebar .cabinet-menu li a').on('click', function(e)  {
            var clickedAttrLink = $(this).attr('href');
            $('.cabinet-sidebar-content .cabinet-container ' + clickedAttrLink).show().siblings().hide();
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            $(this).children('span').addClass('page-active').parent('a').parent('li').siblings().children('a').children('span').removeClass('page-active');
            $(this).children('i').addClass('page-active').parent('a').parent('li').siblings().children('a').children('i').removeClass('page-active');
            e.preventDefault();        
        });

        $('.navbar .mp-navbar-right ul li img').on('click', function(e) {
            document.location.href = "profile.html";
        });

        $('.navbar .mp-navbar-right ul li p').on('click', function(e) {
            document.location.href = "profile.html";
        });

        $('#from').datepicker ({
             onSelect: function()
            { 
                var dateObject = $(this).datepicker('getDate');
                console.log(dateObject); 
                console.log("hello " + $("#from").val());
            }
        });
    });
