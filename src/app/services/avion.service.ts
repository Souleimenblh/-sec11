import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { Type } from '../model/Type.model';

@Injectable({
  providedIn: 'root',
})
export class AvionService {
  avions: Avion[]; //un tableau des avions
  types: Type[];

  constructor() {
    this.types = [
      {
        idTyp: 1,
        nomTyp: 'Chasse',
      },
      { idTyp: 2, nomTyp: 'Affaire' },
    ];

    console.log("creation d'un service avion");
    this.avions = [
      {
        idAvion: 1,
        matriculeAvion: 'Raptor e22',
        kilometrageAvion: 45434000.546,
        datefabrication: new Date('01/14/2019'),
        type: { idTyp: 1, nomTyp: 'Chasse' },
      },
      {
        idAvion: 2,
        matriculeAvion: 'Mirage g3',
        kilometrageAvion: 77546650.924,
        datefabrication: new Date('12/17/2015'),
        type: { idTyp: 2, nomTyp: 'Affaire' },
      },
      {
        idAvion: 3,
        matriculeAvion: 'Boeing 747',
        kilometrageAvion: 19057880.123,
        datefabrication: new Date('02/20/2022'),
        type: { idTyp: 1, nomTyp: 'Chasse' },
      },
    ];
  }
  listeAvions(): Avion[] {
    return this.avions;
  }

  addAvion(avion: Avion) {
    // console.log(this.newAvion);
    this.avions.push(avion);
  }

  ajouterAvion(avio: Avion) {
    this.avions.push(avio);
  }

  supprimerAvion(avio: Avion) {
    //supprimer le Avion prod du tableau Avions
    const index = this.avions.indexOf(avio, 0);
    if (index > -1) {
      this.avions.splice(index, 1);
    }
    //ou Bien
    /* this.Avions.forEach((cur, index) => {
    if(prod.idAvion === cur.idAvion) {
    this.Avions.splice(index, 1);
    }
    }); */
  }

  consulterAvion(id: number): Avion {
    return this.avions.find((p) => p.idAvion == id)!;
  }

  trierAvions() {
    this.avions = this.avions.sort((n1, n2) => {
      if (n1.idAvion! > n2.idAvion!) {
        return 1;
      }
      if (n1.idAvion! < n2.idAvion!) {
        return -1;
      }
      return 0;
    });
  }

  updateAvion(a: Avion) {
    this.supprimerAvion(a);
    this.ajouterAvion(a);
    this.trierAvions();
  }

  listeTypes(): Type[] {
    return this.types;
  }

  consulterType(id: number): Type {
    return this.types.find((typ) => typ.idTyp == id)!;
  }
}
