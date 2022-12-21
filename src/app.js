document.addEventListener('DOMContentLoaded', () => {

    function encrypt(){
        if (textArea.value === '') {
            alert('No hay texto para encriptar');
            return;
        }

        const text = textArea.value;
        const textEncrypted = text.toLowerCase().replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        
        const row = table.insertRow();
       
        row.innerHTML = `<tr>
            <td ><button type="button" id="copy">Copy</button>${textEncrypted}</td>
        </tr>`;
  
        document.getElementById('img-item').style.display = 'none';
    }

    function dencrypt(){
        if (textArea.value === '') {
            alert('No hay texto para encriptar');
            return;
        }

        const text = textArea.value;
        const textEncrypted = text.toLowerCase().replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        const row = table.insertRow();
        row.innerHTML = `<tr>
            <td><button type="button" id="copy">Copy</button><strong>${textEncrypted}</strong></td>
        </tr>`;
        document.getElementById('img-item').style.display = 'none';
    }

    const table = document.getElementById('table');
    const btnEncrypt = document.getElementById('btn-encrypt');
    const btnDecrypt = document.getElementById('btn-decrypt');
    const textArea = document.getElementById('text-area');
    
    btnEncrypt.addEventListener('click', encrypt);
    btnDecrypt.addEventListener('click', dencrypt);

    if (table) {
        table.addEventListener('click', (e) => {
            if (e.target.id === 'copy') {
                const text = e.target.parentElement.textContent;
                const textToCopy = text.replace('Copy', '');
                navigator.clipboard.writeText(textToCopy);
            }
        });
    };

});