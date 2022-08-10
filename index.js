window.onload = function() {
    var head1 = document.getElementById('head1');
    head1.onmouseenter = function() {
        this.style.color = '#090';
    }

    head1.onmouseleave = function() {
        this.style.color = '#f00';
    }
};

