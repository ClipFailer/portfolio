$(function() {

    // Открытие модального окна
    $('#show-modal-btn').on('click', function () {
        $('.modal').addClass('active');
    });

    // Закрытие модального окна
    $('.close-modal-btn').on('click', function () { 
        $('.modal').removeClass('active');
    })


    let userName = '';
    // Управляемое поле ввода
    $('#name').on('change', function () { 
        userName = $('#name').val();
        
    })

    let userEmail = '';
    $('#email').on('change', function () { 
        userEmail = $('#email').val();
        
    })

    let userMessage = '';
    $('#message').on('change', function () { 
        userMessage = $('#message').val();  
    })

    // Отправка формы
    $('#submit-btn').on('click', function (event) { 
        // event.preventDefault();

        alert(`userName: '${userName}, \nuserEmail: '${userEmail},\nuserMessage: '${userMessage}'`)
    })
});