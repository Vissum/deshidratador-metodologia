$(document).ready(function() {
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).addClass('is-visible');
            }
        });
    });

    
    $(".typewriter-title").each(function() {
        var $this = $(this);
        var text = $this.text();
        $this.empty();
        var index = 0;

        function type() {
            if (index < text.length) {
                $this.append(text.charAt(index));
                index++;
                setTimeout(type, 100);
            }
        }

        setTimeout(type, 1000); 
    });


    $(".typewriter-subtitle").each(function() {
        var $this = $(this);
        var text = $this.text();
        $this.empty(); 
        var index = 0;

        function type() {
            if (index < text.length) {
                $this.append(text.charAt(index));
                index++;
                setTimeout(type, 100);
            }
        }

        setTimeout(type, 2500); 
    });
});