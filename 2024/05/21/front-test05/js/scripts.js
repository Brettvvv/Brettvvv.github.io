$(document).ready(function() {
    $('#registerForm').on('submit', function(e) {
        // 阻止表单的默认提交行为
        e.preventDefault();

        // 清空之前的错误信息
        $('.error').text('');

        let email = $('#email').val();
        let phone = $('#phone').val();
        let password = $('#password').val();
        let repassword = $('#repassword').val();

        let isValid = true;

        // 邮箱验证
        if (email === '') {
            $('#emailError').text('邮箱不能为空');
            isValid = false;
        } else if (!validateEmail(email)) {
            $('#emailError').text('邮箱格式不正确');
            isValid = false;
        }

        // 电话验证
        if (phone === '') {
            $('#phoneError').text('电话不能为空');
            isValid = false;
        } else if (!validatePhone(phone)) {
            $('#phoneError').text('电话格式不正确');
            isValid = false;
        }

        // 密码验证
        if (password === '') {
            $('#passwordError').text('密码不能为空');
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text('密码长度不能少于6位');
            isValid = false;
        }

        // 确认密码验证
        if (repassword === '') {
            $('#repasswordError').text('确认密码不能为空');
            isValid = false;
        } else if (password !== repassword) {
            $('#repasswordError').text('两次输入的密码不一致');
            isValid = false;
        }

        if (isValid) {
            alert('注册成功');
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^1[3-9]\d{9}$/;
        return re.test(phone);
    }
});
