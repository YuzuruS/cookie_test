(function(url){
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = (location.protocol == 'https:' ? 'https:' : 'http:') + url + "?cb=" + new Date().getTime();
		var d = document.getElementsByTagName('script')[0];
		d.parentNode.insertBefore(s, d);
})("//hoge.hoge.example.com:3000/api.php");
