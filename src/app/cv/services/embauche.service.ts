import {Injectable, signal, Signal, WritableSignal} from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  public embauchees: WritableSignal<Cv[]> = signal<Cv[]>([]);

  constructor() {}

  /**
   *
   * Retourne la liste des embauchees
   *
   * @returns CV[]
   *
   */

  /**
   *
   * Embauche une personne si elle ne l'est pas encore
   * Sinon il retourne false
   *
   * @param cv : Cv
   * @returns boolean
   */
  embauche(cv: Cv): boolean {
    const index = this.embauchees().findIndex((item) => item.id === cv.id);
    if (index >= 0) {
      return false;
    }
    this.embauchees.update((embauchees) => [...embauchees, cv]);
    return true;
  }
}
