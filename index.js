(function() {

    fuckWeChat();

    var form = $('#form');
    var num = $('#num');

    // 点击事件
    $('#cal').addEventListener("click", function() {
        var x = 0;
        var formed_x = 0;
        var err = 0;

        var c = form.c.value;
        var p = form.p.value;
        var y = form.y.value;
        var s = form.s.value;

        var res_c = validate(c, '商品价格');
        var res_p = validate(p, '贷款比例');
        var res_y = validate(y, '贷款年限');
        var res_s = validate(s, '贷款服务费');

        if (res_c && res_p && res_y && res_s) {
            x = 24*s/(12*y+1)/p/c;

            if (isNaN(x)) {
                alert('请按要求正确输入');
                return false;
            }

            formed_x = (x * 100).toFixed(2);

            num.innerHTML = formed_x;
        }

        return false;

        function validate(value, msg) {
            if (err) {
                return false;
            }

            var res =  value !== '' && isNaN(value) === false;

            if (!res) {
                alert('请正确填写' + msg);
                err++;
            }

            return res;
        }
    });



    function $(selector) {
        return document.querySelector(selector);
    }
    function $$(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }

    function isWechat() {
        var ua = navigator.userAgent;

        if (ua.indexOf('MicroMessenger') === -1) {
            return false;
        }else{
            return true;
        }
    }

    function isIOS() {
        var ua = navigator.userAgent;

        if (ua.indexOf('iPhone') === -1) {
            return false;
        }else{
            return true;
        }
    }

    function fuckWeChat() {
        if (isWechat() && isIOS()) {
            $('#wechat').style.display = 'block';
        }
    }

})();
