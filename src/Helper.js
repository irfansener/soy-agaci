class helper {
    addFile(evt) {
        var files = evt.target.files[0]; // Yuklenilen dosya 
        var reader = new FileReader();
        reader.onload = function (event) { //Dosya istemci tarafindan aciliyor
            var contents = event.target.result;
            window.localStorage.setItem("file", contents);
            window.location.reload();
            //Dosya tarayici uzerinden bilgisayara kaydediliyor
            //Bu sayede ayni bilgisayar ve tarayici uzerinden tekrar girislerde 
            //Yeniden dosyayi yuklemeniz gerekmez
        };
        reader.readAsText(files); //Yuklenilen dosyanin icerigi okunuyor
    }
    deleteHtml(text) {
        return text
            .replace('</td>', "")
            .replace('<br>', " ")
            .replace('/<br>', " / ")
            .replace('<td>', "");
    }
    makeVariable(text) {
        return this.deleteHtml(text)
            .replace(/ı/g, 'i')
            .replace(/ /g, '_')
    }
}

const Helper = new helper();
export default Helper;