import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockageService {
  private allNews = [
    {
      title: "François Hollande : Je ne connais personne qui n'aime pas le Flanby!",
      image: '/assets/img/flanby.jpg',
      description: "Entre deux séances de dédicaces de son dernier livre François Hollande a rencontré les élèves de l émission Au Tableau! fin avril. L ancien président se confie et revient sur quelques moqueries qui ont émaillé son quinquennat. François Hollande face aux élèves de l émission de C8. François Hollande face aux élèves de l émission de C8. François Hollande n'est plus à l Elysée mais il n empêche depuis la sortie de son livre Les leçons du pouvoir l ancien Président n en finit plus de distiller petits phrases et commentaires. Sur son bilan certes, mais aussi sur la politique menée par celui qui était son ministre et qui finalement lui a succédé. Séances de dédicaces plateaux télévisés Désormais c'est face aux élèves de l émission Au Tableau tournée le 28 avril et diffusée le 13 juin  que François Hollande se raconte se disant prêt à leur faire connaître une autre facette de sa personnalité et à dire toute la vérité. Sur Emmanuel Macron d'abord C est trop tôt pour juger \
      de l action d un Président. Il faut du temps  déclare l'ancien Président, qui met quand même un bien sur l'international et un moins bien sur le dialogue. Mais quand il doit le comparer à Manuel Valls et revenir sur l'année pré-présidentielle de 2016, François Hollande choisit son ex-Premier ministre Je pense que c était plus conforme à l esprit des institutions et aux liens que nous avions ensemble d attendre ma décision avant de candidater soi-même. Le surnom Flanby, la cravate de travers, la pluie\
      Un an et demi après regrette-t - il de ne pas s être représenté. Parfois je peux avoir quelques états d âme mais cnest fait. Quand le lait est renversé on ne peut plus le remettre explique François Hollande face à la classe. Il répète une nouvelle fois s être sacrifié pour ne pas mettre le pays dans la situation de choisir entre la droite dure et l extrême droite.Une fable dénoncée par plusieurs socialistes qui rappellent qu au vu de la situation de l époque il ne pouvait tout simplement pas être de nouveau candidat.Son impopularité l ancien locataire de l Elysée la met sur le compte de résultats arrivés trop tard pour faire bonne impression \
      Il vaut mieux une cravate de travers et une pensée droite que le contraire\
      Plusieurs séquences de l émission reviennent aussi sur ce qui a été sujet à moqueries au cours de son mandat. Voire même avant avec son surnom Flanby que lui avait attribué Arnaud Montebourg - un ami politique - au début des années 2000. Il veut me blesser mais c est une très bonne proposition  je ne connais personne qui n aime pas le Flanby rétorque François Hollande sourire jaune en coin La cravate de travers Qu'on ait pu me juger sur le fait que ma cravate était de travers m a toujours insupporté.  Cest l action qui compte pas l apparence. Il vaut mieux une cravate de travers et une pensée droite que le contraire. On apprend aussi au passage que la chapka et le manteau beige offerts par le président du Kazakhstan sont toujours à l Elysée Peut - être un jour l un de mes successeurs voudra la revêtir.\
      La pluie et l'image d'un Président trempé sur l'île de Sein ? Ce qui compte c'est la dignité. \
      Elle ne tient pas à une goutte sur ses lunettes, mais aux propos qu'on tient\
      C est d ailleurs en se basant sur cette anecdote que les élèves - avec qui François Hollande s essaie même quelques secondes au floss, la nouvelle danse à la mode - ont réfléchi à une petite idée de cadeau pour François Hollande. Ils en ont trouvé deux : une paire de lunettes de soleil et des lunettes avec des essuie-glaces… \
      Sera-t-il de nouveau candidat? L'intéressé, qui leur a offert une photo du rassemblement du 11 janvier 2015, botte en touche: Maintenant que vous m'avez donné des lunettes anti-pluie, je vais commencer à inquiéter beaucoup de monde.",

      id: 'new1'
    },
    {
      title: "RT et Sputnik ont-ils relayé des fake news pendant la campagne comme le dit En Marche ?",
      image: '/assets/img/poutine.jpg',
      description: "Depuis la campagne présidentielle jusqu’au projet de loi contre les fake news, Macron et ses troupes ont une cible favorite : les médias russes en France, RT et Sputnik. Question posée par Paul le 28/11/2017\
      Bonjour, Lors de la première annonce de la loi contre les fake news, à l’occasion de ses vœux à la presse début 2018, Emmanuel Macron avait clairement visé la Russie et ses médias, sans les citer : «Nous vivons l’irruption dans le champ médiatique des fausses nouvelles, les fake news, et des médias qui les propagent […] Cette montée des fausses nouvelles est aujourd’hui […] bien souvent utilisée par des puissances qui s’amusent en quelque sorte des faiblesses de la démocratie. […] C’est vous, journalistes, qui êtes les premiers menacés par cette propagande. Elle adopte votre ton, parfois vos formats. Elle emploie votre vocabulaire et parfois même, elle recrute parmi vous. Parfois même financée par certaines démocraties illibérales que nous condamnons au quotidien.\
      Le président ciblait en fait deux médias : la chaîne RT et le site Sputnik, tous deux entièrement financés par le gouvernement russe, dirigés par la même rédactrice en chef (même s’ils assurent être indépendants l’un de l’autre) et chargés de présenter le point de vue russe sur l’actualité à l’étranger.\
      L’animosité entre Emmanuel Macron et ces médias n’est pas nouvelle : elle remonte à la campagne présidentielle. «Deux grands médias, Russia Today et Sputnik, qui appartiennent à l’Etat russe» font «au quotidien de la diffusion, de la propagation, de fausses nouvelles» estimait ainsi début février 2017, Richard Ferrand, alors secrétaire général du mouvement En Marche, sur le plateau de France 2. Le même jour, sur un autre plateau, Benjamin Griveaux, porte-parole du candidat, fustigeait lui une déstabilisation orchestrée par «deux sites contrôlés à 100% par l’Etat russe».\
      Le message était limpide : après la campagne américaine pourrie par les fake news, la Russie avait décidé de s’attaquer à la France en diffusant massivement des fausses informations.\
      Fraîchement élu, Macron en remettait une couche fin mai 2017. Et en présence de Vladimir Poutine, alors en visite en France. «Quand des organes de presse répandent des contre-vérités infamantes, ce ne sont plus des journalistes, ce sont des organes d’influence […] Russia Today [ancien nom de RT, ndlr] et Sputnik ont été des organes d’influence durant cette campagne qui, à plusieurs reprises, ont produit des contre-vérités», répond le président Français à la présidente de RT France, Xenia Fedorova, qui l’interrogeait sur le refus du parti LREM d’accréditer certains journalistes russes.\
      Quelles fake news?\
      Ce qui est sûr, c’est que les deux médias ne roulent pas pour Macron. Concernant la France RT et Sputnik sont réputés pour leur ligne éditoriale ultra-sélective, très marquée politiquement. Ces deux médias donnent ainsi, par exemple, à longueur d’articles une image apocalyptique du pays, avec un prisme qui rejoint peu ou prou celui du Front national (dont les (ex) responsables squattent d’ailleurs les colonnes de ces deux médias). Les deux médias ont par ailleurs systématiquement relayé tout ce qui pouvait être favorable à Marine Le Pen et François Fillon, quand le moindre angle d’attaque contre Macron était exploité.\
      Mais une ligne éditoriale, même ultra-orientée, n’est pas (forcément) synonyme de fake news. Et quand il s’est agi de donner des exemples, les responsables d’En Marche ont été bien à la peine. Richard Ferrand citait une «rumeur [partie] d’un blog» qui voudrait qu’Emmanuel Macron ait dormi «aux frais du contribuable» à l’ambassade de France, lors d’un déplacement au Liban en janvier. Mais la «rumeur» venait en fait d’un site d’info français, Le Vent se lève, et elle avait été reprise par un média tout aussi français, les Inrocks, qui titrait «L’Elysée aiderait discrètement Macron pour ses levées de fonds à l’étranger». RT a bel et bien cité à son tour Le Vent se lève, mais dans un article plus large, titré sur la visite de Macron au Liban et non directement sur une aide supposée de l’Elysée. \
      Benjamin Griveaux évoquait lui «des images, des photos, des vidéos, qui ne datent pas des derniers jours, et qui ont été présentées comme datant des derniers jours» concernant des violences en marge des rassemblements en soutien à Théo L. Là aussi, le procès fait aux médias russes était un peu rapide puisque ces derniers avaient surtout repris des photos d’agence ou de journalistes sur place. Quand d’autres, comme l’hebdo Valeurs actuelles, utilisaient une photo prise à Nantes pour illustrer les violences à Bobigny.\
      Dans les deux cas, les fausses informations qu’ils évoquent émanaient donc plutôt de médias français. Les médias russes en avaient profité pour foncer dans la brèche  Il semble qu’il soit devenu acceptable de proférer de telles accusations contre RT sans apporter la moindre preuve de même qu’il semble devenu normal de décerner un label fausses informations à RT au sujet de n’importe quel article que l’on pourrait simplement trouver défavorable déplore ainsi le site de la chaîne dans un communiqué.\
      L’affaire du (faux) compte aux Bahamas\
      Rebelote quelques mois plus tard, à l’approche du scrutin, quand débarque une rumeur de compte aux Bahamas détenu par Emmanuel Macron, reprise en direct pendant le débat par Marine Le Pen. Sur France Inter, le candidat d’En Marche! dément en bloc et parle de «fausses annonces et mensonges» provenant de «sites pour certains liés à des intérêts russes». Derrière la formule floue, on reconnaît aisément RT et Sputnik. Mais ni l’un ni l’autre n’est lié à la diffusion de cette fausse nouvelle. Arrivée en France via l’extrême droite américaine, l’intox est massivement reprise par des comptes Twitter ayant pour habitude de partager des contenus provenant des deux médias russes, comme l’avait relevé le chercheur belge Nicolas Vanderbiest. Ce qui n’est pas pareil.\
      Des rumeurs distillées au conditionnel\
      Reste que Sputnik et RT, pendant la campagne, se sont parfois aventurés à la lisière du territoire des fake news. Exemple ? Pour mieux taper sur Macron, Sputnik donnait la parole à un élu pro-Kremlin du parti Les Républicains, Nicolas Dhuicq, estimant en pleine campagne présidentielle que le candidat d’En Marche était «un agent du grand système bancaire américain» et qu’il y avait «un riche lobby gay derrière [lui]». RT, de son côté, n’hésitait pas à verser dans la reprise de rumeurs. Le site de la chaîne avait par exemple publié un article particulièrement confus sur la proximité supposée entre Macron et le groupe SFR Presse (dont fait partie Libération) en s’appuyant sur une photo de Christophe Barbier. Le même site relayait volontiers la rumeur, à nouveau, quand il écrivait que «WikiLeaks pourrait révéler des zones d’ombre concernant l’un des favoris de l’élection présidentielle» (ce qui n’a finalement pas été le cas).\
      La majorité a quoi qu’il en soit prévu dans sa loi fake news un volet quasiment taillé sur mesure pour les Russes. Il prévoit que le Conseil supérieur de l’audiovisuel (CSA) puisse «suspendre» en période électorale, voire «révoquer» la convention d’un média sous influence d’un Etat étranger «susceptible de porter atteinte aux intérêts fondamentaux de la nation ou de participer à une entreprise de déstabilisation de ses institutions, notamment par la diffusion de fausses nouvelles.",
      id: 'new2'
    },
    {
      title: "Guet-apens mortel à Mourmelon: les amis de Kevin sous le choc",
      image: '/assets/img/mourmelon.jpg',
      description: "Témoignages RMC - Quatre jours après la mort de Kevin, 17 ans, poignardé à Mourmelon-le-Grand dans la Marne, deux mineurs ont été mis en examen pour assassinat. Les amis de Kevin sont sous le choc.\
      Rebondissement dans l'enquête sur la mort de Kevin, 17 ans, poignardé samedi à Mourmelon-le-Grand dans la Marne. Deux mineurs ont été mis en examen mercredi pour assassinat, dont l'adolescente qui était avec lui au moment du drame.\
      Lors d'une conférence de presse, le procureur de la République de Reims, Matthieu Bourrette, évoque une dynamique organisationnelle quasiment machiavélique Après les faits, l'adolescente avait en effet déclaré ne pas connaître l'auteur des coups de couteau qui avait tenté de la frapper sans raison. Elle avait fait le portrait-robot d'un homme de type basané, habillé en treillis militaire. Tout était faux, a balayé le procureur, soulignant qu'elle avait sciemment aiguillé les enquêteurs sur une fausse piste.\
      A Mourmelon, les amis de Kevin sont sous le choc. Un petit groupe d'entre eux avait rendu visite à la jeune fille pour la soutenir. Elle leur avait raconté la même version qu'aux gendarmes: un inconnu avait tué Kevin. On était effondré pour elle, c'est horrible ce qu'elle a dû voir. On a essayé de la soutenir. Quand on voit les éléments actuels, on s'est clairement fait mener en bateau, elle nous a menti à tous, raconte l'un d'eux au micro de RMC.\
      On s'est tous fait manipuler\
      Vu qu'elle se retrouve accusée, c'est horrible, vraiment. Ça veut dire qu'on s'est tous fait manipuler, déplore une autre amie de la victime. Les adolescents tentent d'expliquer la relation compliquée qu'entretenait Kevin et cette jeune fille: Il était beaucoup attachée à elle et ces derniers temps, il commençait à prendre conscience qu'il souffrait. Il disait qu'elle en avait marre qu'elle le fasse espérer, du coup, il avait décidé d'arrêter. Il avait arrêté de lui parler et c'est elle qui était revenue vers lui.\
      Impossible pour eux de voir dans cette rupture un mobile pour l'horreur qui a suivi: Je n'arrive même pas à réaliser la mort de Kevin, alors la suite….\
      D'après ses premières déclarations, le meurtrier aurait voulu aider son amie à se débarrasser de Kevin, avec qui elle continuait d'entretenir une relation ambiguë mais dont elle se plaignait du harcèlement.",
      id: 'new3'
    },
    {
      title: "Rocket League détaille son évènement d'été Beach Blast",
      image: '/assets/img/rl.jpg',
      description: "Après le déploiement de la mise à jour Salty Shores le 29 mai dernier, qui a notamment ajouté une nouvelle arène, Rocket League se mettra au rythme de l'été le 11 juin prochain avec Beach Blast, le traditionnel évènement saisonnier synonyme de nouveaux objets cosmétiques.\
      Le site officiel Rocket League nous présente en détail l'évènement Beach Blast, qui se tiendra du 11 juin à 19 heures au 3 juillet à 2 heures. Comme pour les évènements de Noël et d'Halloween, une nouvelle monnaie temporaire fera son apparition : les coquillages. Après en avoir accumulé suffisamment au fil des parties, il sera possible de les échanger contre douze objets d'été différents, dont un magnifique chapeau ananas, des caisses fermées Beach Blast ou des Décrypteurs qui permettent justement d'ouvrir ces dernières et plus largement n'importe quelle caisse du jeu. Un moyen d'obtenir, simplement en jouant, des objets habituellement réservés aux joueurs qui passent à la caisse en achetant des clés contre de l'argent réel.",
      id: 'new4'

    },
  ]
  constructor() { }
  getNews() {
    return this.allNews;

  }
  getNewsbyid(id: string) {

    for (var i = 0; i < this.allNews.length; i++) {
      if (this.allNews[i].id == id) {
        return this.allNews[i];
      }
    }
    return this.allNews[1];
  }


}
