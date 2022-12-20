/**
 * Tableau contenant les données du jeu (V pour case vide, O pour joueur O et X pour joueur X)
 * X: case contenant le jeton X
 * O: case contenant le jeton O
 * V: case vide
 *
 * Le jeu du morpion possède 9 case. Ce tableau contiendra donc 9 entrées
 *
 * Exemple de ce que contiendra le tableau lors de la partie
 * si le joueur X, joue sur la case en haut à gauche (la première case), on aura un tableau comme ceci ['X', 'V', 'V, 'V', 'V, 'V', 'V, 'V', 'V']
 * si le joueur O, joue sur la case en bas à droite (la dernière case), on aura un tableau comme ceci ['X', 'V', 'V, 'V', 'V, 'V', 'V, 'V', 'O']
 * @type {*[]}
 */
let damier = []

/**
 * Variable contenant le jeton (O ou X) du joueur dont c'est le tour
 * @type {?string}
 */
let joueur = null

/**
 * Contient l'élément "#start"
 * @type {Node}
 */
// TODO: sélectionne l'élément "#start" et stocke le résultat dans une constante
// sélectionner un élément https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
// tu peux faire un console.log de la constante pour voir le résultat dans la console du navigateur
const boutonStart = document.querySelector("#start"); // sélectionne le bouton start
// console.log(boutonStart);

/**
 * Contient les éléments ".case img"
 * @type {NodeList}
 */
// TODO: sélectionne tous les éléments ".case img" et stocke le résultat dans une constante
// sélectionner plusieurs éléments https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
// tu peux faire un console.log de la constante pour voir le résultat dans la console du navigateur
const caseDuJeu = document.querySelectorAll(".case img");
// console.log(caseDuJeu);

const auClickSurBoutonStart = () => {
    // TODO: Créer un événement au "click" sur le bouton "#start" (avec la constante boutonStart)
    // ajouter un événement click https://developer.mozilla.org/fr/docs/Web/API/Element/click_event
    // lors du click sur ce bouton, fais un console.log('le click fonctionne'), vérifie dans la console du navigateur
    // Une fois que 'le click fonctionne' s'affiche dans la console, appelle la fonction demarrerPartie() à la place du console.log
    boutonStart.addEventListener('click', () => {
          demarrerPartie();
    })
    // console.log('fonctionne');
}



const auClickSurLeDamier = () => {
    // TODO: Créer un événement au "click" sur l'image d'une case ( ".case img" )
    // parcoure le tableau des éléments grâce à une boucle
    // parcourir tous ces élément grâce à une boucle https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll#acc%C3%A8s_aux_correspondances
    // à chaque itération, fais un console.log de l'élément et vérifie le résultat dans le console du navigateur
    // Un fois que le console.log fonctionne, ajoute un événement au click pour chaque éléments
    // Lors du click sur un élément, fais un console.log('le click fonctionne'), vérifie dans la console du navigateur
    // Une fois que 'le click fonctionne' s'affiche dans la console, appelle la fonction auClickSurUnElementDuDamier( numeroDeCase )
    // numeroDeCase est le numéro de la case, que tu peux récupérer dans l'attribut "data-case" (analyse bien le HTML).
    // récupérer une valeur avec dataset: https://developer.mozilla.org/fr/docs/Learn/HTML/Howto/Use_data_attributes

  caseDuJeu.forEach(function(element) { // dans la function anonyme on créer une variable en lien avec ma LISTE 
    element.addEventListener('click', () => {
        auClickSurUnElementDuDamier( element.dataset.case ) // en cliquand sur un element on appel mon data qui va les identitié
        // console.log(element.dataset.case)
    })
  });
}

/**
 * Cette fonction démarre la partie
 *
 * @return  {void}
 */
const demarrerPartie = () => {
    // On initialise le tableau damier
    initDamier();

    // On remplit chaque case du damier avec V
    dessineDamier();

    // On choisit aléatoirement si O ou X commence à jouer
    if (Math.random() >= 0.5) {
        joueur = "O";
    } else {
        joueur = "X";
    }

    // On affiche quel joueur joue dans "#zonedetexte" (O ou X)
    afficheTexte("Joueur : " + joueur);
}

/**
 * Cette fonction remplit le tableau damier qui contiendra les jetons des joueurs :
 * Elle remplit chaque case du tableau "damier[]" d'un 'V' (qui correspond à 'case vide'),
 * sachant que le damier comporte 9 cases.
 *
 * @return  {void}
 */
const initDamier = () => {
    damier = [];

    for ( i = 0; i < 9; i++ ){
        damier.push('V');
    }
    // console.log(damier);

    // TODO: fais une boucle for qui itère de 0 à <9
    // à chaque itération, ajoute un nouvel index au tableau damier avec la valeur 'V'
    // ajouter un éléments à un tableau https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push
    // le tableau doit ressembler à ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V']
}

/**
 * Cette fonction dessine le damier du morpion dans la page HTML
 * à partir des informations contenues dans le tableau damier.
 *
 * @return  {void}
 */
const dessineDamier = () => {
    // TODO: Parcours le tableau damier[] avec une boucle https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // Dans la boucle, sélectionne l'élément HTML '#case+i' grâce à JavaScript et stocke dans une constante 'caseElement'
        // pour chaque itération, fais un console et vérifie dans la console du navigateur
        // quand le console.log fonctionne, écris les conditions suivantes :
        // si la valeur damier[i] est égale à V.
            // remplacer l'attribut 'src' de caseElement par image vide.jpg
        // si la valeur damier[i] est égale à O.
            // remplacer l'attribut 'src' de caseElement par rond.png
        // si la valeur damier[i] est égale à X.
            // remplacer l'attribut 'src' de caseElement par croix.png
        // remplacer les attributs d'un élément: https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute

        /* for (let i = 0; i < damier.length; i++) {
            const id = 'case'+i
            const CaseElement = document.getElementById(id)
            console.log(CaseElement)
        }*/

        damier.forEach(function(value, index) {
            const image = document.getElementById('case'+index)
           //  console.log(image, damier[index])
            if (damier[index] === 'O'){
            image.setAttribute('src', '../img/rond.png')
            }
            if (damier[index] === 'X'){
                image.setAttribute('src', '../img/croix.png')
            }
            
            //console.log(CaseElement)

    })
}

/**
 * Cette fonction permet d'afficher le texte de l'argument
 * texte dans la span #zonedetexte.
 *
 * @param   {string}  texte  le text à afficher
 *
 * @return  {void}
 */
const afficheTexte = (texte) => {
    // TODO: remplace le texte de #zonedetexte par la variable texte
        // sélectionne l'élément #zonedetexte et stocke le dans une constante
        // remplace le text de cet élément avec le la variable texte
        // replacer le texte d'un élément: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
        document.getElementById('zonedetexte').textContent = texte;
}

/**
 * Cette fonction parcours le tableau "damier[]"
 * et retourne le nombre de cases "vides" (contenant 'V') du tableau.
 *
 * @return int
 */
const nbCaseVide = () => {
    let nombreDeCaseVide = 0;
    // TODO: parcours le tableau damier avec une boucle for
    
    for (let i = 0; i < damier.length; i++) {
        // À chaque itération, si la valeur damier[i] est égale 'V': incrémente nombreDeCaseVide de 1
        if (damier[i] === 'V'){
            nombreDeCaseVide++
        }
        // console.log(damier[i])
    }

    // console.log(nombreDeCaseVide);

    return nombreDeCaseVide;
}

/**
 * Cette fonction vérifie si "joueur" est X ou O
 * et change la variable joueur en fonction.
 *
 * @return  {void}
 */
const alterneJoueur = () => {
    // TODO: si la variable joueur est égale à 'X'
        // Change la valeur de la variable joueur par 'O'
    // TODO: si la variable joueur est égale à 'O'
        // Change la valeur de la variable joueur par 'X'

    if (joueur === 'X'){
        joueur = 'O';
    } else {
        if (joueur === 'O'){
            joueur = "X";
        }
    }
}

/**
 * Cette fonction appelle la majorité des autres fonctions
 * et se lance lors d'un click sur une case
 *
 * @param   {int}  numeroDeCase  le numéro de la case
 *
 * @return  {void}
 */
const auClickSurUnElementDuDamier = (numeroDeCase) => {
    if (joueur === null) { // la partie n'a pas commencée
        afficheTexte("Cliquer sur Démarrer pour commencer une partie")
        return
    }

    if (damier[numeroDeCase] !== 'V') { // La case jouée n'est pas vide, on ne peut pas jouer sur une case déjà jouée !
        afficheTexte("La case jouée n'est pas vide, recommencez")
        return
    }

    // Enregistre le jeu du joueur
    damier[numeroDeCase] = joueur

    // On actualise le Damier sur la page
    dessineDamier()

    // On vérifie les alignements
    if (alignement(joueur)) {
        // Affiche un message de victoire
        afficheTexte('Le joueur ' + joueur + ' a gagné !!!! Cliquez sur "Démarrer une partie pour" recommencer')
        joueur = null // Arrêt de la partie
        return
    }
    // Vérifie que la partie est nulle
    if (nbCaseVide() === 0) {
        afficheTexte("Partie nulle, aucun joueur n'a gagné, cliquez sur Démarer pour recommencer")
        joueur = ""
        return
    }

    // La partie continue, on passe le tour à l'autre joueur
    alterneJoueur()
    afficheTexte("Joueur : " + joueur)
}

/**
 * Cette fonction vérifie si UNE ligne aligne 3 jetons X ou O
 * Si c'est le cas, elle retourne true, sinon false
 *
 * @param   {int}       numligne  le numéro de la ligne à vérifier
 * @param   {string}   jeton     le jeton du joueur: 'X' ou 'O'
 *
 * @return  {bool}            return true si une ligne est compléte, false sinon
 */
const alignementLigne = (jeton) => {
    // TODO: Pour compléter cette fonction, il va falloir faire un console.log(damier)
    // et analyser son contenu.
    // Exemple : S'il y a 3 'O' à la ligne 1, on retourne true. Sinon on retourne false.

    // Avant de démarrer
    // - comment accéder à un index d'un tableau ? Réponse : tableau[1] par exemple
    // - quels sont les index des cases qui correspondent à la première ligne ? Réponse : à toi de trouver

    // pour vérifier la première ligne
   

    if (damier[0] === jeton && damier[1] === jeton && damier[2] === jeton) {
        return true
    }

    if (damier[3] === jeton && damier[4] === jeton && damier[5] === jeton) {
        return true
    }

    if (damier[6] === jeton && damier[7] === jeton && damier[8] === jeton) {
        return true
    }

    return false

}

/**
 * Cette fonction vérifie si UNE colonne (numcolonne) algine 3 jetons X ou O (jeton)
 * Si c'est le cas, elle retourne true, sinon false
 *
 * @param   {int}      numcolonne  le numéro de la colonne à vérifier
 * @param   {string}   jeton     le jeton du joueur: 'X' ou 'O'
 *
 * @return  {bool}            return true si une colonne est compléte, false sinon
 */
const alignementColonne = (jeton) => {
    // TODO: Pour compléter cette fonction, il va falloir faire un console.log(damier)
    // et analyser son contenu.

    // Exemple : S'il y a 3 'O' dans la colonne 1, on retourne true. Sinon on retourne false.

    // Avant de démarrer
    // - comment accéder à un index d'un tableau ? Réponse : tableau[1] par exemple
    // - quels sont les index des cases qui correspondent à la première colonne ? Réponse : à toi de trouver

    if (damier[0] === jeton && damier[3] === jeton && damier[6] === jeton) {
        return true
    }

    if (damier[1] === jeton && damier[4] === jeton && damier[7] === jeton) {
        return true
    }

    if (damier[2] === jeton && damier[5] === jeton && damier[8] === jeton) {
        return true
    }

    return false
}

/**
 * Cette fonction vérifie si une des 2 diagonales aligne 3 jetons X ou O
 *
 * @param   {string}   jeton     le jeton du joueur: 'X' ou 'O'
 *
 * @return  {bool}            return true si une diagonal est compléte, false sinon
 */
const alignementDiagonale = (jeton) => {

    // TODO: Pour compléter cette fonction, il va falloir faire un console.log(damier)
    // et analyser son contenu.

    // Exemple : S'il y a 3 'O' dans une diagonale, on retourne true. Sinon on retourne false.

    // Avant de démarrer
    // - comment accéder à un index d'un tableau ? Réponse : tableau[1] par exemple
    // - quels sont les index des cases qui correspondent aux diagonales ? Réponse : à toi de trouver
    if (damier[0] === jeton && damier[4] === jeton && damier[8] === jeton) {
        return true
    }

    if (damier[2] === jeton && damier[4] === jeton && damier[6] === jeton) {
        return true
    }

    return false
}

/**
 * Cette fonction vérifie tous les alignements : horizontal, vertical et diagonal.
 * Pour vérifier cela, elle parcourt le tableau damier qui contient les informations sur le jeu.
 * Elle renvoie true si un alignement est complet, false sinon
 *
 * @param   {string}  jeton  Peut être 'X' ou 'O'
 *
 * @return  {void}
 */
const alignement = (jeton) => {

    const estCeQueLesLignesSontAlignees = alignementLigne(jeton)
    console.log(estCeQueLesLignesSontAlignees);

    const estCeQueLesColonnesSontAlignees = alignementColonne(jeton)
    console.log(estCeQueLesColonnesSontAlignees);

    const estCeQueLesDiagonalesSontAlignees = alignementDiagonale(jeton)
    console.log(estCeQueLesDiagonalesSontAlignees);
}

// appelle la fonction auClickSurBoutonStart()
auClickSurBoutonStart()

// appelle la fonction auClickSurLeDamier()
auClickSurLeDamier()

