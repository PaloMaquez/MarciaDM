const $form = document.querySelector('#form');
const thankyou = document.querySelector('.thankyou')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData (this)
    const response = await fetch (this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept' : 'aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
    }
}


