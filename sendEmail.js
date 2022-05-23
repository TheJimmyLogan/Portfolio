    document.getElementById('sendMessageBtn').addEventListener(
        'click',
        ()=>{
            let templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
            };
            const messageStatusDive = document.getElementById('messageStatus')
            emailjs.send('service_juyaicv', 'template_crwie9j', templateParams)
            .then(function(response) {
                messageStatusDive.innerText='Message delivered successfuly'
                messageStatusDive.classList.toggle('active')
                setTimeout(()=>{
                    messageStatusDive.classList.toggle('active')
                }, 2000)
            }, function(error) {
                messageStatusDive.classList.toggle('active')
                messageStatusDive.innerText='Error sending message'
                setTimeout(()=>{
                    messageStatusDive.classList.toggle('active')
                }, 2000)
            });
        }
    )