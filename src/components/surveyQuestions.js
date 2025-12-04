// 🚄 COMPIÈGNE TRAIN STATION INTERMODALITY SURVEY
// Based on AREP mobility study questionnaire

export const templateSurveyQuestions = [
    // Q1 - Station presence reason (filters survey flow)
    {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2_MONTANTS" },
            { id: 2, text: "Je viens de descendre du train", next: "end" }, // Descendants - not interviewed
            { id: 3, text: "Je traverse la gare", next: "Q2_TRAVERSANTS" },
            { id: 4, text: "Autre raison (accompagnement, achat billet, commerces en gare…)", next: "Q2_NON_VOYAGEURS" }
        ]
    },

    // ============ SECTION MONTANTS (Train passengers) ============

    // Q2 - Origin for train passengers
    {
        id: "Q2_MONTANTS",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Compiègne", next: "Q2A_MONTANTS" },
            { id: 2, text: "Margny-les-Compiègne", next: "Q2B_MONTANTS" },
            { id: 3, text: "Autre commune", next: "Q2_AUTRE_MONTANTS" }
        ]
    },

    // Q2a - Street in Compiègne
    {
        id: "Q2A_MONTANTS",
        text: "De quelle rue de Compiègne venez-vous ?",
        type: 'street',
        next: "Q3_MONTANTS"
    },

    // Q2b - Street in Margny-les-Compiègne
    {
        id: "Q2B_MONTANTS",
        text: "De quelle rue de Margny-les-Compiègne venez-vous ?",
        type: 'street',
        next: "Q3_MONTANTS"
    },

    // Q2 - Autre commune
    {
        id: "Q2_AUTRE_MONTANTS",
        text: "Préciser nom de la commune :",
        type: 'commune',
        next: "Q3_MONTANTS"
    },

    // Q3 - Transport mode to station
    {
        id: "Q3_MONTANTS",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4_MONTANTS" },
            { id: 2, text: "En voiture -- en tant que conducteur", next: "Q3A_MONTANTS" },
            { id: 3, text: "En voiture -- en tant que passager", next: "Q4_MONTANTS" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4_MONTANTS" },
            { id: 5, text: "En bus/car", next: "Q3B_MONTANTS" },
            { id: 6, text: "À vélo", next: "Q3C_MONTANTS" },
            { id: 7, text: "En trottinette", next: "Q3C_MONTANTS" },
            { id: 8, text: "En Taxi/VTC", next: "Q4_MONTANTS" },
            { id: 9, text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q3A_MONTANTS" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4_MONTANTS" },
            { id: 11, text: "Autre", next: "Q3_AUTRE_MONTANTS" }
        ]
    },

    // Q3 - Autre transport mode
    {
        id: "Q3_AUTRE_MONTANTS",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_MONTANTS"
    },

    // Q3a - Vehicle parking location
    {
        id: "Q3A_MONTANTS",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: '/plan-compiegne.png',
        imageAlt: 'Plan de la gare de Compiègne montrant les zones de stationnement',
        options: [
            { id: 1, text: "Sur le parking sur le parvis de la gare", next: "Q3A_PRIME_MONTANTS" },
            { id: 2, text: "Sur le parking Indigo gare", next: "Q3A_PRIME_MONTANTS" },
            { id: 3, text: "Sur la place du 54e régiment d'infanterie", next: "Q3A_PRIME_MONTANTS" },
            { id: 4, text: "Sur le parking Indigo quai de Venette", next: "Q3A_PRIME_MONTANTS" },
            { id: 5, text: "Sur le parking Solférino", next: "Q3A_PRIME_MONTANTS" },
            { id: 6, text: "Sur le parking rue de Noyon", next: "Q3A_PRIME_MONTANTS" },
            { id: 7, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q3A_SUD_MONTANTS" },
            { id: 8, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q3A_NORD_MONTANTS" },
            { id: 9, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q3A_PRIME_MONTANTS" }
        ]
    },

    // Q3a - Précision parking sud
    {
        id: "Q3A_SUD_MONTANTS",
        text: "Préciser si nécessaire le nom du parking :",
        type: 'freeText',
        freeTextPlaceholder: "Nom du parking (optionnel)",
        next: "Q3A_PRIME_MONTANTS"
    },

    // Q3a - Précision parking nord
    {
        id: "Q3A_NORD_MONTANTS",
        text: "Préciser si nécessaire le nom du parking :",
        type: 'freeText',
        freeTextPlaceholder: "Nom du parking (optionnel)",
        next: "Q3A_PRIME_MONTANTS"
    },

    // Q3a' - Parking duration
    {
        id: "Q3A_PRIME_MONTANTS",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4_MONTANTS" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4_MONTANTS" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4_MONTANTS" },
            { id: 4, text: "2 à 3 jours", next: "Q4_MONTANTS" },
            { id: 5, text: "3 à 6 jours", next: "Q4_MONTANTS" },
            { id: 6, text: "1 semaine ou plus", next: "Q4_MONTANTS" }
        ]
    },

    // Q3b - Bus line
    {
        id: "Q3B_MONTANTS",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Une ligne TIC : 1", next: "Q4_MONTANTS" },
            { id: 2, text: "Une ligne TIC : 2", next: "Q4_MONTANTS" },
            { id: 3, text: "Une ligne TIC : 3", next: "Q4_MONTANTS" },
            { id: 4, text: "Une ligne TIC : 4", next: "Q4_MONTANTS" },
            { id: 5, text: "Une ligne TIC : 5", next: "Q4_MONTANTS" },
            { id: 6, text: "Une ligne TIC : 6", next: "Q4_MONTANTS" },
            { id: 7, text: "Une ligne TIC : Arc Express", next: "Q4_MONTANTS" },
            { id: 8, text: "Une ligne TIC : Navette HM", next: "Q4_MONTANTS" },
            { id: 9, text: "Une ligne TIC : 101", next: "Q4_MONTANTS" },
            { id: 10, text: "Une ligne TIC : 103", next: "Q4_MONTANTS" },
            { id: 11, text: "Une ligne TIC : 105", next: "Q4_MONTANTS" },
            { id: 12, text: "Une ligne TIC : 106", next: "Q4_MONTANTS" },
            { id: 13, text: "Une ligne TIC : 107", next: "Q4_MONTANTS" },
            { id: 14, text: "Une ligne TIC : 109", next: "Q4_MONTANTS" },
            { id: 15, text: "Un car scolaire", next: "Q4_MONTANTS" },
            { id: 16, text: "Le service de Transport en commun à la Demande AlloTIC", next: "Q4_MONTANTS" },
            { id: 17, text: "Autre", next: "Q3B_AUTRE_MONTANTS" }
        ]
    },

    // Q3b - Autre bus line
    {
        id: "Q3B_AUTRE_MONTANTS",
        text: "Préciser la ligne :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_MONTANTS"
    },

    // Q3c - Bike/scooter parking
    {
        id: "Q3C_MONTANTS",
        text: "Où avez-vous stationné votre vélo/trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur les arceaux au sud de la gare", next: "Q4_MONTANTS" },
            { id: 2, text: "Dans la consigne sécurisée au sud de la gare", next: "Q4_MONTANTS" },
            { id: 3, text: "Sur les arceaux au nord de la gare", next: "Q4_MONTANTS" },
            { id: 4, text: "Dans la consigne sécurisée au nord de la gare", next: "Q4_MONTANTS" },
            { id: 5, text: "Je le transporte avec moi dans le train", next: "Q4_MONTANTS" },
            { id: 6, text: "Autre", next: "Q3C_AUTRE_MONTANTS" }
        ]
    },

    // Q3c - Autre bike parking
    {
        id: "Q3C_AUTRE_MONTANTS",
        text: "Préciser l'emplacement :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_MONTANTS"
    },

    // Q4 - Station entrance access
    {
        id: "Q4_MONTANTS",
        text: "Par quel accès êtes-vous entrés dans la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "L'accès côté Compiègne (sud / BV)", next: "Q5_MONTANTS" },
            { id: 2, text: "L'accès côté Margny-les-Compiègne (nord / souterrain)", next: "Q5_MONTANTS" }
        ]
    },

    // Q5 - Arrival time before train departure
    {
        id: "Q5_MONTANTS",
        text: "Combien de temps en avance êtes-vous arrivés (par rapport au départ du train) ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 5 min", next: "Q6_MONTANTS" },
            { id: 2, text: "5 à 10 min", next: "Q6_MONTANTS" },
            { id: 3, text: "10 à 20 min", next: "Q6_MONTANTS" },
            { id: 4, text: "20 à 30 min", next: "Q6_MONTANTS" },
            { id: 5, text: "30 à 45 min", next: "Q6_MONTANTS" },
            { id: 6, text: "Plus de 45 min", next: "Q6_MONTANTS" }
        ]
    },

    // Q6 - Final destination station
    {
        id: "Q6_MONTANTS",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Paris Nord", next: "Q7_MONTANTS" },
            { id: 2, text: "Creil", next: "Q7_MONTANTS" },
            { id: 3, text: "Saint-Quentin", next: "Q7_MONTANTS" },
            { id: 4, text: "Amiens", next: "Q7_MONTANTS" },
            { id: 5, text: "Beauvais", next: "Q7_MONTANTS" },
            { id: 6, text: "Autre", next: "Q6_AUTRE_MONTANTS" }
        ]
    },

    // Q6 - Autre destination
    {
        id: "Q6_AUTRE_MONTANTS",
        text: "Préciser la gare de destination :",
        type: 'gare',
        next: "Q7_MONTANTS"
    },

    // Q7 - Trip purpose
    {
        id: "Q7_MONTANTS",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q8_MONTANTS" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q8_MONTANTS" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q7A_MONTANTS" },
            { id: 4, text: "Déplacement professionnel", next: "Q8_MONTANTS" },
            { id: 5, text: "Loisirs, tourisme", next: "Q8_MONTANTS" },
            { id: 6, text: "Autres", next: "Q7_AUTRE_MONTANTS" }
        ]
    },

    // Q7 - Autre trip purpose
    {
        id: "Q7_AUTRE_MONTANTS",
        text: "Préciser le motif (Achats, démarches administratives, RDV médical…) :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q8_MONTANTS"
    },

    // Q7a - Reason for coming to Compiègne
    {
        id: "Q7A_MONTANTS",
        text: "Quel était la raison de votre venue à Compiègne ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q8_MONTANTS" },
            { id: 2, text: "Études", next: "Q8_MONTANTS" },
            { id: 3, text: "Déplacement professionnel", next: "Q8_MONTANTS" },
            { id: 4, text: "Loisirs, tourisme", next: "Q8_MONTANTS" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite…)", next: "Q8_MONTANTS" }
        ]
    },

    // Q8 - Trip frequency
    {
        id: "Q8_MONTANTS",
        text: "À quelle fréquence effectuez-vous ce déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours de la semaine ou presque", next: "Q9_MONTANTS" },
            { id: 2, text: "2 à 3 fois par semaine", next: "Q9_MONTANTS" },
            { id: 3, text: "1 ou plusieurs fois par mois", next: "Q9_MONTANTS" },
            { id: 4, text: "Moins d'une fois par mois", next: "Q9_MONTANTS" },
            { id: 5, text: "C'est la première fois", next: "Q9_MONTANTS" }
        ]
    },

    // Q9 - Improvement suggestions
    {
        id: "Q9_MONTANTS",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    },

    // ============ SECTION TRAVERSANTS (People crossing through) ============

    // Q2 - Station entrance access for traversants
    {
        id: "Q2_TRAVERSANTS",
        text: "Par quel accès êtes-vous entrés dans la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "L'accès côté Compiègne (sud / BV)", next: "Q3_TRAVERSANTS" },
            { id: 2, text: "L'accès côté Margny-les-Compiègne (nord / souterrain)", next: "Q3_TRAVERSANTS" }
        ]
    },

    // Q3 - Origin for traversants
    {
        id: "Q3_TRAVERSANTS",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti avant d'entrer dans la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Compiègne", next: "Q4_TRAVERSANTS" },
            { id: 2, text: "Margny-les-Compiègne", next: "Q4_TRAVERSANTS" },
            { id: 3, text: "Autre commune", next: "Q3_AUTRE_TRAVERSANTS" }
        ]
    },

    // Q3 - Autre commune pour traversants
    {
        id: "Q3_AUTRE_TRAVERSANTS",
        text: "Préciser nom de la commune :",
        type: 'commune',
        next: "Q4_TRAVERSANTS"
    },

    // Q4 - Transport mode before entering station
    {
        id: "Q4_TRAVERSANTS",
        text: "Quel mode de transport avez-vous utilisé avant d'entrer dans la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q5_TRAVERSANTS" },
            { id: 2, text: "En voiture -- en tant que conducteur", next: "Q5_TRAVERSANTS" },
            { id: 3, text: "En voiture -- en tant que passager", next: "Q5_TRAVERSANTS" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q5_TRAVERSANTS" },
            { id: 5, text: "En bus/car", next: "Q5_TRAVERSANTS" },
            { id: 6, text: "À vélo", next: "Q5_TRAVERSANTS" },
            { id: 7, text: "En trottinette", next: "Q5_TRAVERSANTS" },
            { id: 8, text: "En Taxi/VTC", next: "Q5_TRAVERSANTS" },
            { id: 9, text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q5_TRAVERSANTS" },
            { id: 10, text: "Autre", next: "Q4_AUTRE_TRAVERSANTS" }
        ]
    },

    // Q4 - Autre transport pour traversants
    {
        id: "Q4_AUTRE_TRAVERSANTS",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q5_TRAVERSANTS"
    },

    // Q5 - Destination for traversants
    {
        id: "Q5_TRAVERSANTS",
        text: "Quelle est votre destination ? Vers ou vous dirigez vous en sortant de la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Compiègne", next: "Q6_TRAVERSANTS" },
            { id: 2, text: "Margny-les-Compiègne", next: "Q6_TRAVERSANTS" },
            { id: 3, text: "Autre commune", next: "Q5_AUTRE_TRAVERSANTS" }
        ]
    },

    // Q5 - Autre destination pour traversants
    {
        id: "Q5_AUTRE_TRAVERSANTS",
        text: "Préciser nom de la commune :",
        type: 'commune',
        next: "Q6_TRAVERSANTS"
    },

    // Q6 - Transport mode after leaving station
    {
        id: "Q6_TRAVERSANTS",
        text: "Quel mode de transport allez-vous utiliser en sortant de la gare pour rejoindre votre destination ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "end" },
            { id: 2, text: "En voiture -- en tant que conducteur", next: "end" },
            { id: 3, text: "En voiture -- en tant que passager", next: "end" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "end" },
            { id: 5, text: "En bus/car", next: "end" },
            { id: 6, text: "À vélo", next: "end" },
            { id: 7, text: "En trottinette", next: "end" },
            { id: 8, text: "En Taxi/VTC", next: "end" },
            { id: 9, text: "En 2 roues Motorisé (Moto, scooter...)", next: "end" },
            { id: 10, text: "Autre", next: "Q6_AUTRE_TRAVERSANTS" }
        ]
    },

    // Q6 - Autre transport après sortie
    {
        id: "Q6_AUTRE_TRAVERSANTS",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "end"
    },

    // ============ SECTION NON-VOYAGEURS (Non-passengers) ============

    // Q2 - Reason for presence in station
    {
        id: "Q2_NON_VOYAGEURS",
        text: "Quel est le motif de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "J'accompagne / je viens chercher quelqu'un", next: "Q3_NON_VOYAGEURS" },
            { id: 2, text: "Je viens pour un renseignement ou un achat de titres", next: "Q3_NON_VOYAGEURS" },
            { id: 3, text: "Je viens utiliser un service ou un commerce en gare", next: "Q3_NON_VOYAGEURS" },
            { id: 4, text: "Je travaille dans la gare", next: "Q3_NON_VOYAGEURS" },
            { id: 5, text: "Autres", next: "Q2_AUTRE_NON_VOYAGEURS" }
        ]
    },

    // Q2 - Autre motif non-voyageurs
    {
        id: "Q2_AUTRE_NON_VOYAGEURS",
        text: "Préciser le motif :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q3_NON_VOYAGEURS"
    },

    // Q3 - Origin for non-voyageurs
    {
        id: "Q3_NON_VOYAGEURS",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Compiègne", next: "Q3A_NON_VOYAGEURS" },
            { id: 2, text: "Margny-les-Compiègne", next: "Q3B_NON_VOYAGEURS" },
            { id: 3, text: "Autre commune", next: "Q3_AUTRE_NON_VOYAGEURS" }
        ]
    },

    // Q3a - Street in Compiègne pour non-voyageurs
    {
        id: "Q3A_NON_VOYAGEURS",
        text: "De quelle rue de Compiègne venez-vous ?",
        type: 'street',
        next: "Q4_NON_VOYAGEURS"
    },

    // Q3b - Street in Margny-les-Compiègne pour non-voyageurs
    {
        id: "Q3B_NON_VOYAGEURS",
        text: "De quelle rue de Margny-les-Compiègne venez-vous ?",
        type: 'street',
        next: "Q4_NON_VOYAGEURS"
    },

    // Q3 - Autre commune pour non-voyageurs
    {
        id: "Q3_AUTRE_NON_VOYAGEURS",
        text: "Préciser nom de la commune :",
        type: 'commune',
        next: "Q4_NON_VOYAGEURS"
    },

    // Q4 - Transport mode pour non-voyageurs
    {
        id: "Q4_NON_VOYAGEURS",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q5_NON_VOYAGEURS" },
            { id: 2, text: "En voiture -- en tant que conducteur", next: "Q4A_NON_VOYAGEURS" },
            { id: 3, text: "En voiture -- en tant que passager", next: "Q5_NON_VOYAGEURS" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q5_NON_VOYAGEURS" },
            { id: 5, text: "En bus/car", next: "Q5_NON_VOYAGEURS" },
            { id: 6, text: "À vélo", next: "Q5_NON_VOYAGEURS" },
            { id: 7, text: "En trottinette", next: "Q5_NON_VOYAGEURS" },
            { id: 8, text: "En Taxi/VTC", next: "Q5_NON_VOYAGEURS" },
            { id: 9, text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q4A_NON_VOYAGEURS" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q5_NON_VOYAGEURS" },
            { id: 11, text: "Autre", next: "Q4_AUTRE_NON_VOYAGEURS" }
        ]
    },

    // Q4 - Autre transport pour non-voyageurs
    {
        id: "Q4_AUTRE_NON_VOYAGEURS",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q5_NON_VOYAGEURS"
    },

    // Q4a - Vehicle parking pour non-voyageurs
    {
        id: "Q4A_NON_VOYAGEURS",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        image: '/plan-compiegne.png',
        imageAlt: 'Plan de la gare de Compiègne montrant les zones de stationnement',
        options: [
            { id: 1, text: "Sur le parking sur le parvis de la gare", next: "Q5_NON_VOYAGEURS" },
            { id: 2, text: "Sur le parking Indigo gare", next: "Q5_NON_VOYAGEURS" },
            { id: 3, text: "Sur la place du 54e régiment d'infanterie", next: "Q5_NON_VOYAGEURS" },
            { id: 4, text: "Sur le parking Indigo quai de Venette", next: "Q5_NON_VOYAGEURS" },
            { id: 5, text: "Sur le parking Solférino", next: "Q5_NON_VOYAGEURS" },
            { id: 6, text: "Sur le parking rue de Noyon", next: "Q5_NON_VOYAGEURS" },
            { id: 7, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q4A_SUD_NON_VOYAGEURS" },
            { id: 8, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q4A_NORD_NON_VOYAGEURS" },
            { id: 9, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q5_NON_VOYAGEURS" }
        ]
    },

    // Q4a - Précision parking sud pour non-voyageurs
    {
        id: "Q4A_SUD_NON_VOYAGEURS",
        text: "Préciser si nécessaire le nom du parking :",
        type: 'freeText',
        freeTextPlaceholder: "Nom du parking (optionnel)",
        next: "Q5_NON_VOYAGEURS"
    },

    // Q4a - Précision parking nord pour non-voyageurs
    {
        id: "Q4A_NORD_NON_VOYAGEURS",
        text: "Préciser si nécessaire le nom du parking :",
        type: 'freeText',
        freeTextPlaceholder: "Nom du parking (optionnel)",
        next: "Q5_NON_VOYAGEURS"
    },

    // Q5 - Station entrance access pour non-voyageurs
    {
        id: "Q5_NON_VOYAGEURS",
        text: "Par quel accès êtes-vous entrés dans la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "L'accès côté Compiègne (sud / BV)", next: "Q6_NON_VOYAGEURS" },
            { id: 2, text: "L'accès côté Margny-les-Compiègne (nord / souterrain)", next: "Q6_NON_VOYAGEURS" }
        ]
    },

    // Q6 - Station exit access pour non-voyageurs
    {
        id: "Q6_NON_VOYAGEURS",
        text: "Par quel accès allez-vous sortir de la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "L'accès côté Compiègne (sud / BV)", next: "Q7_NON_VOYAGEURS" },
            { id: 2, text: "L'accès côté Margny-les-Compiègne (nord / souterrain)", next: "Q7_NON_VOYAGEURS" }
        ]
    },

    // Q7 - Improvement suggestions pour non-voyageurs
    {
        id: "Q7_NON_VOYAGEURS",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    }
];

/*
🎯 COMPIÈGNE SURVEY STRUCTURE:

📋 FLUX MONTANTS (Train passengers - Q1=1):
Q1 → Q2_MONTANTS → Q2A/Q2B/Q2_AUTRE_MONTANTS → Q3_MONTANTS → Q3A/Q3B/Q3C/Q4_MONTANTS → Q3A'/Q4_MONTANTS → Q4_MONTANTS → Q5_MONTANTS → Q6_MONTANTS → Q7_MONTANTS → Q7A/Q8_MONTANTS → Q8_MONTANTS → Q9_MONTANTS

🚶 FLUX TRAVERSANTS (Crossing through - Q1=3):
Q1 → Q2_TRAVERSANTS → Q3_TRAVERSANTS → Q4_TRAVERSANTS → Q5_TRAVERSANTS → Q6_TRAVERSANTS

👥 FLUX NON-VOYAGEURS (Non-passengers - Q1=4):
Q1 → Q2_NON_VOYAGEURS → Q3_NON_VOYAGEURS → Q3A/Q3B/Q3_AUTRE_NON_VOYAGEURS → Q4_NON_VOYAGEURS → Q4A/Q5_NON_VOYAGEURS → Q5_NON_VOYAGEURS → Q6_NON_VOYAGEURS → Q7_NON_VOYAGEURS

❌ DESCENDANTS (Arriving passengers - Q1=2):
Survey ends immediately

🔀 ROUTING LOGIC:
- Q1 divides into 4 paths: montants, descendants (excluded), traversants, non-voyageurs
- Q2 divides by origin: Compiègne vs Margny-les-Compiègne vs other commune
- Q3 divides by transport mode with specific sub-questions
- Q7 has Q7A conditional only for "return home"

📝 CONVENTIONS:
- _MONTANTS: for train passengers (9 questions: Q2-Q9)
- _TRAVERSANTS: for people crossing through station (5 questions: Q2-Q6)
- _NON_VOYAGEURS: for companions and other visitors (6 questions: Q2-Q7)
- _AUTRE: for "Other" response specifications
- _PRIME: for Q3A' (prime = apostrophe)

✅ FEATURES:
- Exact question naming from document (Q1, Q2, Q2A, etc.)
- No redundant conditions (routing via 'next')
- Appropriate termination for excluded descendants
- Parallel flows for different respondent types
- Specification questions for "Other" responses
- Compiègne-specific details (parking zones, bus lines, destinations)

⚠️ NOTE: Train line question (Krono/Proxi/Citi) was removed from official survey version
*/