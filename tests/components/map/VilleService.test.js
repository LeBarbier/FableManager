import villeService from '../../../src/components/map/VilleService.js';
const marqueurBase = {titre:'MarqueurBase', description:'Marqueur de base', lat:3, long:4}

describe('Test de villeService', () => {
    describe('obtenirVilles', () => {
        test('obtenirVilles_Retourne le nom de toutes les viles', () => {
            const nomVilles = obtenirNomVille();

            expect(nomVilles).toBeInstanceOf(Array);
            expect(nomVilles.length).toBeGreaterThan(1);
        });
    });

    describe('obtenirVilleFromNom', () => {
        test('obtenirVilleFromNom_NomChaineVide_RetourneUndefined', () => {
            const infoVille = villeService.obtenirVilleFromNom('');
            expect(infoVille).toBe(undefined);
        });

        test('obtenirVilleFromNom_NomNull_RetourneUndefined', () => {
            const infoVille = villeService.obtenirVilleFromNom(null);
            expect(infoVille).toBe(undefined);
        });

        test('obtenirVilleFromNom_NomExistant_RetourneInfoVille', () => {
            const nomVilles = obtenirNomVille();

            expect(nomVilles.length).toBeGreaterThan(1);
            const infoVille = villeService.obtenirVilleFromNom(nomVilles[0]);

            expect(infoVille).toBeInstanceOf(Object);
        });

        test('obtenirVilleFromNom_NomInexistant_RetourneInfoVille', () => {
            const infoVille = villeService.obtenirVilleFromNom('allo');
            expect(infoVille).toBe(undefined);
        });
    });

    describe('modifierMarqueurVille', () => {
        test('modifierMarqueurVille_MarqueurNull_RetourneNull', () => {
            const resultat = villeService.modifierMarqueurVille('Ville1', null);
            expect(resultat).toBe(null);
        });
        test('modifierMarqueurVille_MarqueurUndefined_RetourneNull', () => {
            const resultat = villeService.modifierMarqueurVille('Ville1', undefined);
            expect(resultat).toBe(null);
        });
        test('modifierMarqueurVille_MarqueurObjectVide_RetourneNull', () => {
            const resultat = villeService.modifierMarqueurVille('Ville1', {});
            expect(resultat).toBe(null);
        });
        test('modifierMarqueurVille_MarqueurNonComplet_RetourneNull', () => {
            const resultatTitreManquant = villeService.modifierMarqueurVille('Ville1', {description: '', lat: 0, long: 0});
            const resultatDescriptionManquant = villeService.modifierMarqueurVille('Ville1', { titre: '', lat: 0, long: 0});
            const resultatLatManquant = villeService.modifierMarqueurVille('Ville1', { titre: '', description: '', long: 0});
            const resultatLongManquant = villeService.modifierMarqueurVille('Ville1', { titre: '', description: '', lat: 0 });

            expect(resultatTitreManquant).toBe(null);
            expect(resultatDescriptionManquant).toBe(null);
            expect(resultatLatManquant).toBe(null);
            expect(resultatLongManquant).toBe(null);
        });
        test('modifierMarqueurVille_VilleNonValide_RetourneNull', () => {
            const resultat = villeService.modifierMarqueurVille('', marqueurBase);
            expect(resultat).toBe(null);
        });
        test('modifierMarqueurVille_VilleInexistant_RetourneNull', () => {
            const resultat = villeService.modifierMarqueurVille('Ville1', marqueurBase);
            expect(resultat).toBe(null);
        });
    });
});

function obtenirNomVille() {
    return villeService.obtenirVilles();
}
