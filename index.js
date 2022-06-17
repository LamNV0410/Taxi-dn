const phoneNumber = '0356894547'
Array.from(document.getElementsByClassName('custom-tel-telelphone'))
    .forEach(node => node.href = `tel:${phoneNumber}`)

Array.from(document.getElementsByClassName('custom-zalo'))
    .forEach(node => node.href = `https://zalo.me/${phoneNumber}/`)