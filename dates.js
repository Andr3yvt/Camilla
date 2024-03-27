(function(){
    new cursoreffects.ghostCursor();

    const today = new Date();
    const aniversarioAndrey = new Date("05/21/2007");
    const aniversarioCamilla = new Date("05/22/2007");
    const meeting = new Date("06/15/2022");
    const seeing = new Date("09/06/2022");
    const dating = new Date("06/08/2023");
    const living = new Date("03/08/2023"); // Corrigido para 2023
    const marriage = new Date("09/06/2022"); // Corrigido com aspas de fechamento

    const meetingPhrase = document.getElementById('meeting');
    const seeingPhrase = document.getElementById('seeing');
    const datingPhrase = document.getElementById('dating');
    const livingPhrase = document.getElementById('living');
    const marriagePhrase = document.getElementById('marriage');

    const idadeAndrey = document.getElementById('idadeAndrey');
    const idadeCamilla = document.getElementById('idadeCamilla');
    const yearsHero = document.getElementById('datingHero');

    function yearComparison(date) {
      const timeDiff = Math.abs(today.getTime() - date.getTime());
      const fullDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
      const years = Math.floor(fullDays / 365);

      return `${years}`
    }

    idadeAndrey.innerHTML += yearComparison(aniversarioAndrey);
    idadeCamilla.innerHTML += yearComparison(aniversarioCamilla);
    yearsHero.innerHTML += yearComparison(dating);

    function dateCreator(date) {
        const timeDiff = Math.abs(today.getTime() - date.getTime());
        const fullDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
        const years = Math.floor(fullDays / 365);
        const months = Math.floor((fullDays % 365) / 30.5);
        const days = Math.floor((fullDays % 30.5) + 1);

        return `${years} ano${years > 1 ? 's' : ''}, 
                ${months} mes${months > 1 ? 'es' : ''} e 
                ${days} dia${days > 1 ? 's' : ''}`
    }

    meetingPhrase.innerHTML += dateCreator(meeting);
    seeingPhrase.innerHTML += dateCreator(seeing);
    datingPhrase.innerHTML += dateCreator(dating);
    livingPhrase.innerHTML += dateCreator(living);
    marriagePhrase.innerHTML += dateCreator(marriage);

})();

(function(){
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(function() { // Corrigido para declarar 't'
        startTime()
      }, 500);
    }
    startTime();
})();