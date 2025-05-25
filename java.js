function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}


        function verificaRaspunsurile() {
            let raspunsuriCorecte = {
                q1: "1850",
                q2: "Luceafărul",
                q3: "Romantism",
                q4: "Prin poeziile sale filozofice și patriotice",
                q5: "Dragostea, natura, trecerea timpului, filosofia",
                q6: "Viena și Berlin",
                q7: "Veronica Micle",
                q8: "1889",
                q9: "Timpul",
                q10: "Luna și stelele"
            };

            let scor = 0;

            for (let intrebare in raspunsuriCorecte) {
                let optiuneSelectata = document.querySelector('input[name="${intrebare}"]:checked');
                
                if (optiuneSelectata && optiuneSelectata.value === raspunsuriCorecte[intrebare]) {
                    scor++;
                }
            }

            document.getElementById("rezultat").innerText = "Ai obținut " + scor + "/10 răspunsuri corecte!";
        }
        function toggleSize(gallery){
            galerry.classList.toggle('expanded')
        }
   