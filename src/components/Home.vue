<template>
  <div class="hello">
    <div class="form" v-if="isData===true">
      <span @click="changeScreen('dosya')">Dosya ile görüntüle</span> | <span @click="changeScreen('yapistir')">Sayfa kaynağını yapıştırarak görüntüle</span>
      <div v-if="screen==='dosya'" class="file">
        <form>
          <input type="file" multiple accept=".html" id="file">
          <p class="girisYazi">Html dosyasını buraya sürükleyin. Ya da bu alana tıklayın.</p>
        </form>
      </div>
      <div v-if="screen==='yapistir'" class="paste">
        <textarea v-model="pasteText" placeholder="Sayfa kaynak kodunu bu alana yapıştırın." rows="20" name="paste" id="paste" cols="40" class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"></textarea>
        <br>
        <button class="gonder" @click="addText()">Görüntüle</button>
      </div>
      <div class="info">
        Küçük ekranlarda net görüntülenemeyebilir. Görüntüyü uzaklaştırmayı deneyiniz. <br><br>
        Hiçbir şekilde veritabanı kaydı tutulmamaktadır. <br> Yazılım sadece istemci tarafında çalışır. <br>
        Dilerseniz kaynak kodlarına <a href="https://github.com/irfansener/soy-agaci/" target="_blank"> Github</a> üzerinden erişebilirsiniz.
      </div>
      <div class="about">
        Bu websitesi <a href="mailto:irfansener00@gmail.com">İrfan ŞENER</a> tarafından kodlanmıştır.<br>
        <a href="https://www.twitter.com/irfannsenerr" target="_blank">Twitter</a> | <a href="https://www.medium.com/@irfansener" target="_blank">Medium</a> | <a href="mailto:irfansener00@gmail.com">İletişim - Mail adresi</a>
      </div>
    </div>
    <div class="soyAgaci" v-else>
      <p @click="clean()" class="clean"><img src="../assets/delete.png" alt="Ekranı temizle" title="Dosyayı sil"> </p>
      <div>
        <div class="tree">
          <ul>
            <li>
              <a href="#" @click="openModal(people.Kendisi)" :style="changeColor(people.Kendisi)">{{people.Kendisi.adi+" " +people.Kendisi.soyAdi}}</a>
              <ul>
                <li>
                  <a href="#" @click="openModal(people.Annesi)" :style="changeColor(people.Annesi)">{{people.Annesi.adi+" " +people.Annesi.soyAdi}}</a>
                  <ul>
                    <li>
                      <a href="#" @click="openModal(people.Annesinin_Annesi)" :style="changeColor(people.Annesinin_Annesi)">{{people.Annesinin_Annesi.adi+" " +people.Annesinin_Annesi.soyAdi}}</a>
                      <ul v-if="people.Annesinin_Annesinin_Annesi">
                        <li v-if="people.Annesinin_Annesinin_Annesi">
                          <a href="#" @click="openModal(people.Annesinin_Annesinin_Annesi)" :style="changeColor(people.Annesinin_Annesinin_Annesi)">{{people.Annesinin_Annesinin_Annesi.adi+" " +people.Annesinin_Annesinin_Annesi.soyAdi}}</a>
                          <ul v-if="people.Annesinin_Annesinin_Annesinin_Annesi">
                            <li v-if="people.Annesinin_Annesinin_Annesinin_Annesi"><a href="#" @click="openModal(people.Annesinin_Annesinin_Annesinin_Annesi)" :style="changeColor(people.Annesinin_Annesinin_Annesinin_Annesi)">{{people.Annesinin_Annesinin_Annesinin_Annesi.adi+" " +people.Annesinin_Annesinin_Annesinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Annesinin_Annesinin_Annesinin_Babasi"><a href="#" @click="openModal(people.Annesinin_Annesinin_Annesinin_Babasi)" :style="changeColor(people.Annesinin_Annesinin_Annesinin_Babasi)">{{people.Annesinin_Annesinin_Annesinin_Babasi.adi+" " +people.Annesinin_Annesinin_Annesinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" @click="openModal(people.Annesinin_Annesinin_Babasi)" :style="changeColor(people.Annesinin_Annesinin_Babasi)">{{people.Annesinin_Annesinin_Babasi.adi+" " +people.Annesinin_Annesinin_Babasi.soyAdi}}</a>
                          <ul v-if="people.Annesinin_Annesinin_Babasinin_Annesi">
                            <li v-if="people.Annesinin_Annesinin_Babasinin_Annesi"><a href="#" @click="openModal(people.Annesinin_Annesinin_Babasinin_Annesi)" :style="changeColor(people.Annesinin_Annesinin_Babasinin_Annesi)">{{people.Annesinin_Annesinin_Babasinin_Annesi.adi+" " +people.Annesinin_Annesinin_Babasinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Annesinin_Annesinin_Babasinin_Babasi"><a href="#" @click="openModal(people.Annesinin_Annesinin_Babasinin_Babasi)" :style="changeColor(people.Annesinin_Annesinin_Babasinin_Babasi)">{{people.Annesinin_Annesinin_Babasinin_Babasi.adi+" " +people.Annesinin_Annesinin_Babasinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li v-if="people.Annesinin_Babasi">
                      <a href="#" @click="openModal(people.Annesinin_Babasi)" :style="changeColor(people.Annesinin_Babasi)">{{people.Annesinin_Babasi.adi+" " +people.Annesinin_Babasi.soyAdi}}</a>
                      <ul v-if="people.Annesinin_Babasinin_Annesi">
                        <li v-if="people.Annesinin_Babasinin_Annesi">
                          <a href="#" @click="openModal(people.Annesinin_Babasinin_Annesi)" :style="changeColor(people.Annesinin_Babasinin_Annesi)">{{people.Annesinin_Babasinin_Annesi.adi+" " +people.Annesinin_Babasinin_Annesi.soyAdi}}</a>
                          <ul v-if="people.Annesinin_Babasinin_Annesinin_Annesi">
                            <li v-if="people.Annesinin_Babasinin_Annesinin_Annesi"><a href="#" @click="openModal(people.Annesinin_Babasinin_Annesinin_Annesi)" :style="changeColor(people.Annesinin_Babasinin_Annesinin_Annesi)">{{people.Annesinin_Babasinin_Annesinin_Annesi.adi+" " +people.Annesinin_Babasinin_Annesinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Annesinin_Babasinin_Annesinin_Babasi"><a href="#" @click="openModal(people.Annesinin_Babasinin_Annesinin_Babasi)" :style="changeColor(people.Annesinin_Babasinin_Annesinin_Babasi)">{{people.Annesinin_Babasinin_Annesinin_Babasi.adi+" " +people.Annesinin_Babasinin_Annesinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                        <li v-if="people.Annesinin_Babasinin_Babasi">
                          <a href="#" @click="openModal(people.Annesinin_Babasinin_Babasi)" :style="changeColor(people.Annesinin_Babasinin_Babasi)">{{people.Annesinin_Babasinin_Babasi.adi+" " +people.Annesinin_Babasinin_Babasi.soyAdi}}</a>
                          <ul v-if="people.Annesinin_Babasinin_Babasinin_Annesi">
                            <li v-if="people.Annesinin_Babasinin_Babasinin_Annesi"><a href="#" @click="openModal(people.Annesinin_Babasinin_Babasinin_Annesi)" :style="changeColor(people.Annesinin_Babasinin_Babasinin_Annesi)">{{people.Annesinin_Babasinin_Babasinin_Annesi.adi+" " +people.Annesinin_Babasinin_Babasinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Annesinin_Babasinin_Babasinin_Babasi"><a href="#" @click="openModal(people.Annesinin_Babasinin_Babasinin_Babasi)" :style="changeColor(people.Annesinin_Babasinin_Babasinin_Babasi)">{{people.Annesinin_Babasinin_Babasinin_Babasi.adi+" " +people.Annesinin_Babasinin_Babasinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                      </ul>  
                    </li>
                  </ul>
                </li>
                <li v-if="people.Babasi">
                  <a href="#" @click="openModal(people.Babasi)" :style="changeColor(people.Babasi)">{{people.Babasi.adi+" " +people.Babasi.soyAdi}}</a>
                  <ul v-if="people.Babasinin_Annesi">
                    <li v-if="people.Babasinin_Annesi">
                      <a href="#" @click="openModal(people.Babasinin_Annesi)" :style="changeColor(people.Babasinin_Annesi)">{{people.Babasinin_Annesi.adi+" " +people.Babasinin_Annesi.soyAdi}}</a>
                      <ul v-if="people.Babasinin_Annesinin_Annesi">
                        <li v-if="people.Babasinin_Annesinin_Annesi">
                          <a href="#" @click="openModal(people.Babasinin_Annesinin_Annesi)" :style="changeColor(people.Babasinin_Annesinin_Annesi)">{{people.Babasinin_Annesinin_Annesi.adi+" " +people.Babasinin_Annesinin_Annesi.soyAdi}}</a>
                          <ul v-if="people.Babasinin_Annesinin_Annesinin_Annesi">
                            <li v-if="people.Babasinin_Annesinin_Annesinin_Annesi"><a href="#" :style="changeColor(people.Babasinin_Annesinin_Annesinin_Annesi)" @click="openModal(people.Babasinin_Annesinin_Annesinin_Annesi)">{{people.Babasinin_Annesinin_Annesinin_Annesi.adi+" " +people.Babasinin_Annesinin_Annesinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Babasinin_Annesinin_Annesinin_Babasi"><a href="#"  @click="openModal(people.Babasinin_Annesinin_Annesinin_Babasi)" :style="changeColor(people.Babasinin_Annesinin_Annesinin_Babasi)">{{people.Babasinin_Annesinin_Annesinin_Babasi.adi+" " +people.Babasinin_Annesinin_Annesinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                        <li v-if="people.Babasinin_Annesinin_Babasi">
                          <a href="#" @click="openModal(people.Babasinin_Annesinin_Babasi)" :style="changeColor(people.Babasinin_Annesinin_Babasi)">{{people.Babasinin_Annesinin_Babasi.adi+" " +people.Babasinin_Annesinin_Babasi.soyAdi}}</a>
                          <ul v-if="people.Babasinin_Annesinin_Babasinin_Annesi">
                            <li v-if="people.Babasinin_Annesinin_Babasinin_Annesi"><a href="#" @click="openModal(people.Babasinin_Annesinin_Babasinin_Annesi)" :style="changeColor(people.Babasinin_Annesinin_Babasinin_Annesi)">{{people.Babasinin_Annesinin_Babasinin_Annesi.adi+" " +people.Babasinin_Annesinin_Babasinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Babasinin_Annesinin_Babasinin_Babasi"><a href="#" @click="openModal(people.Babasinin_Annesinin_Babasinin_Babasi)" :style="changeColor(people.Babasinin_Annesinin_Babasinin_Babasi)">{{people.Babasinin_Annesinin_Babasinin_Babasi.adi+" " +people.Babasinin_Annesinin_Babasinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                      </ul>  
                    </li>
                    <li v-if="people.Babasinin_Babasi">
                      <a href="#" @click="openModal(people.Babasinin_Babasi)" :style="changeColor(people.Babasinin_Babasi)">{{people.Babasinin_Babasi.adi+" " +people.Babasinin_Babasi.soyAdi}}</a>
                      <ul v-if="people.Babasinin_Babasinin_Babasi">
                        <li v-if="people.Babasinin_Babasinin_Babasi">
                          <a href="#" @click="openModal(people.Babasinin_Babasinin_Babasi)" :style="changeColor(people.Babasinin_Babasinin_Babasi)">{{people.Babasinin_Babasinin_Babasi.adi+" " +people.Babasinin_Babasinin_Babasi.soyAdi}}</a>
                          <ul v-if="people.Babasinin_Babasinin_Babasinin_Annesi">
                            <li v-if="people.Babasinin_Babasinin_Babasinin_Annesi"><a href="#" @click="openModal(people.Babasinin_Babasinin_Babasinin_Annesi)" :style="changeColor(people.Babasinin_Babasinin_Babasinin_Annesi)">{{people.Babasinin_Babasinin_Babasinin_Annesi.adi+" " +people.Babasinin_Babasinin_Babasinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Babasinin_Babasinin_Babasinin_Babasi"><a href="#" @click="openModal(people.Babasinin_Babasinin_Babasinin_Babasi)" :style="changeColor(people.Babasinin_Babasinin_Babasinin_Babasi)">{{people.Babasinin_Babasinin_Babasinin_Babasi.adi+" " +people.Babasinin_Babasinin_Babasinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                        <li v-if="people.Babasinin_Babasinin_Annesi">
                          <a href="#" @click="openModal(people.Babasinin_Babasinin_Annesi)" :style="changeColor(people.Babasinin_Babasinin_Annesi)">{{people.Babasinin_Babasinin_Annesi.adi+" " +people.Babasinin_Babasinin_Annesi.soyAdi}}</a>
                          <ul v-if="people.Babasinin_Babasinin_Annesinin_Annesi">
                            <li v-if="people.Babasinin_Babasinin_Annesinin_Annesi"><a href="#" @click="openModal(people.Babasinin_Babasinin_Annesinin_Annesi)" :style="changeColor(people.Babasinin_Babasinin_Annesinin_Annesi)">{{people.Babasinin_Babasinin_Annesinin_Annesi.adi+" " +people.Babasinin_Babasinin_Annesinin_Annesi.soyAdi}}</a></li>
                            <li v-if="people.Babasinin_Babasinin_Annesinin_Babasi"><a href="#" @click="openModal(people.Babasinin_Babasinin_Annesinin_Babasi)" :style="changeColor(people.Babasinin_Babasinin_Annesinin_Babasi)">{{people.Babasinin_Babasinin_Annesinin_Babasi.adi+" " +people.Babasinin_Babasinin_Annesinin_Babasi.soyAdi}}</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="tamEkranProfil" v-if="showModal">
        <div class="modal-mask" @click="showModal=false">
          <div class="popUp">
            <p class="soru">Ad: </p><p class="cevap">{{modalPeople.adi}} </p><br>
            <p class="soru">Soy Ad: </p><p class="cevap">{{modalPeople.soyAdi}} </p><br>
            <p class="soru">Cinsiyet: </p><p class="cevap">{{modalPeople.cinsiyet}} </p><br>
            <p class="soru">Adres: </p><p class="cevap">{{modalPeople.adres}} </p><br>
            <p class="soru">Anne Adı: </p><p class="cevap">{{modalPeople.anneAdi}} </p><br>
            <p class="soru">Baba Adı: </p><p class="cevap">{{modalPeople.babaAdi}} </p><br>
            <p class="soru">Cilt No: </p><p class="cevap">{{modalPeople.ciltNo}} </p><br>
            <p class="soru">Doğum: </p><p class="cevap">{{modalPeople.dogum}} </p><br>
            <p class="soru">Medeni hali: </p><p class="cevap">{{modalPeople.medeniHali}} </p><br>
            <p class="soru">Durum: </p><p class="cevap">{{modalPeople.durum}} </p><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function addText() {
  console.log('..')
}
import Helper from "../Helper";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isData: window.localStorage.getItem("file") === null,
      data: window.localStorage.getItem("file"),
      people: {},
      showModal: false,
      modalPeople: {},
      screen: "dosya",
      pasteText: ''
    };
  },
  created() {
    let _this = this;
    $(document).ready(function() {
      $("#file").on("change", e => {
        Helper.addFile(e);
        _this.isData = false;
      });
    });
    var contents = window.localStorage.getItem("file");
    var re = new RegExp("<td>.*</td>", "g");
    let text = contents.match(re);
    text.unshift(".");
    text.pop();
    for (let i = 1; i < text.length; i += 12) {
      let yeniKisi = {};
      eval(`this.people.${Helper.makeVariable(text[i + 2])} = {
        'id': '${Helper.deleteHtml(text[i + 0])}',
        'cinsiyet': '${Helper.deleteHtml(text[i + 1])}',
        'yakinlik': '${Helper.deleteHtml(text[i + 2])}',
        'adi': '${Helper.deleteHtml(text[i + 3])}',
        'soyAdi': '${Helper.deleteHtml(text[i + 4])}',
        'babaAdi': '${Helper.deleteHtml(text[i + 5])}',
        'anneAdi': '${Helper.deleteHtml(text[i + 6])}',
        'dogum': '${Helper.deleteHtml(text[i + 7])}',
        'adres': '${Helper.deleteHtml(text[i + 8])}',
        'ciltNo': '${Helper.deleteHtml(text[i + 9])}',
        'medeniHali': '${Helper.deleteHtml(text[i + 10])}',
        'durum': '${Helper.deleteHtml(text[i + 11])}'
      }`);
      console.log(this.people.length);
    }
  },
  methods: {
    clean() {
      window.localStorage.removeItem("file");
      window.location.reload();
    },
    openModal(data) {
      this.showModal = true;
      this.modalPeople = data;
      console.log(data);
    },
    changeColor(data) {
      console.log(data.cinsiyet);
      const cinsiyetRengi = data.cinsiyet == "K" ? "#ffa4a4" : "#a8d2ff";
      const yasamRengi = data.durum[0] === "Ö" ? "#ff4f4f" : "green";
      return `border-left:1px solid ${cinsiyetRengi};border-right:1px solid ${yasamRengi};border-top:1px solid ${cinsiyetRengi};border-bottom:1px solid ${cinsiyetRengi}`;
    },
    changeScreen(val) {
      this.screen = val;
    },
    addText() {
      if(this.pasteText.length > 100){
        window.localStorage.setItem('file', this.pasteText);
        window.location.reload();
      }
    }
  }
};
</script>

<style>
span {
  cursor: pointer;
}
.info {
  margin-top: 50px;
}
.about {
  margin-top: 70px;
}
textarea {
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 100px;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
}
.gonder {
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  background-color: #b2bf3f;
  color: #fff;
  border-radius: 10px; 
}
.gonder:hover {
  transition: .5s;
  color: #b2bf3f;
  background-color: #fff;
}
textarea:focus {
  background: none repeat scroll 0 0 #ffffff;
  outline-width: 0;
}
.paste {
  margin-top: 5%;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.popUp {
  width: 40%;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}
.clean {
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 25px;
  padding: 5px;
  border: 1px solid green;
  border-radius: 6px;
  cursor: pointer;
}
.clean:hover {
  transition: 0.5s;
  color: white;
  background-color: green;
  border: 1px solid green;
}
.cevap {
  font-weight: 600;
}
p {
  display: inline;
}
body {
  background: rgba(255, 144, 0, 0.4);
}
.file {
  display: flex;
  justify-content: center;
}
form {
  margin-top: 5%;
  width: 500px;
  height: 200px;
  border: 4px dashed #000;
}
form p {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 155px;
  color: "black";
  font-family: Arial;
}
form input {
  cursor: pointer;
  position: absolute;
  margin: 0;
  padding: 0;
  margin-left: -3%;
  width: 500px;
  height: 200px;
  outline: none;
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
}

.tree ul {
  padding-top: 20px;
  position: relative;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

.tree li {
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

/*We will use ::before and ::after to draw the connectors*/

.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 50%;
  height: 20px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
}

/*We need to remove left-right connectors from elements without 
any siblings*/
.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}

/*Remove space from the top of single children*/
.tree li:only-child {
  padding-top: 0;
}

.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}
.tree li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}

.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 20px;
}

.tree li a {
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-decoration: none;
  color: #666;
  font-family: arial, verdana, tahoma;
  font-size: 11px;
  display: inline-block;

  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

.tree li a:hover,
.tree li a:hover + ul li a {
  background: #c8e4f8;
  color: #000;
  border: 1px solid #94a0b4;
}
.tree li a:hover + ul li::after,
.tree li a:hover + ul li::before,
.tree li a:hover + ul::before,
.tree li a:hover + ul ul::before {
  border-color: #94a0b4;
}

@media only screen and (max-width: 735px) {
  .popUp {
    width: 80%;
  }
}
</style>
