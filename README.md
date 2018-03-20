# quete_nodejs_template_pug

Désormais c'est à toi de jouer ! En repartant des fichiers de l'exercice précédent (sur le routing), tu vas pouvoir modifier les fichiers du dossier views. Lors de l'appel de la route /coucou-pug dans le fichier routes/index.js, le render() enverra au template une variable sayHello contenant Hello buddy. Une page (et seulement une) doit apparaître, elle sera composé :

d'une page coucou.pug affichant le contenu de la variable sayHello et étendant le fichier layout.pug

d'un layout (layout.pug) contenant les balises html, head et body

de l'inclusion d'une page header.pug affichant Ici c'est le header dans une balise <p>
  
  
Le code sera disponible sur Github.


Critéres de validation

La page coucou.pug étend bien layout.pug

La page layout.pug contient un block permettant l'appel

La page header.pug est appelée via un include

Le render contient bien un JSON avec pour clé sayHello et pour valeur `hello buddy
