import personnageService from '../../../src/components/characters/PersonnageService.js';

describe('PersonnageService', () => {
    test('obtenirPersonnages_Retourne la liste des personnages', () => {
        const personnages = obtenirNomPersonnages();

        expect(personnages).toBeInstanceOf(Array);
        expect(personnages.length).toBeGreaterThan(1);
        expect(personnages[0]).toBeInstanceOf(Object);
    });

    test('obtenirPersonnage_NomVide_RetourneUndefined', () => {
        const personnage = personnageService.obtenirPersonnage('');
        expect(personnage).toBe(undefined);
    });

    test('obtenirPersonnage_NomNull_RetourneUndefined', () => {
        const personnage = personnageService.obtenirPersonnage(null);
        expect(personnage).toBe(undefined);
    });

    test('obtenirPersonnage_NomInexistant_RetourneUndefined', () => {
        const personnage = personnageService.obtenirPersonnage('allo');
        expect(personnage).toBe(undefined);
    });

    test('obtenirPersonnage_NomExistant_RetournePersonnage', () => {
        const nomPersonnage = obtenirNomPersonnages()[0];
        const personnage = personnageService.obtenirPersonnage(nomPersonnage.name);
        expect(personnage).toBeInstanceOf(Object);
    });
});

function obtenirNomPersonnages() {
    return personnageService.obtenirPersonnages();
}