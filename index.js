const phoneNumber = '0898227585'
Array.from(document.getElementsByClassName('custom-tel-telelphone'))
    .forEach(node => node.href = `tel:${phoneNumber}`)

Array.from(document.getElementsByClassName('custom-zalo'))
    .forEach(node => node.href = `https://zalo.me/${phoneNumber}/`)