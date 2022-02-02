import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = '';
  constructor(
    private httpClient: HttpClient,
  ) { }

  getMovies(): Observable<IMovie[]> {
    return of([
      {
        id: 1,
        name: "Anna i król"
      },
      {
        id: 2,
        name: "Avengers"
      },
      {
        id: 3,
        name: "Bridget Jones 3"
      },
      {
        id: 4,
        name: "Buntownik z wyboru"
      },
      {
        id: 5,
        name: "CBS przedstawia: Wywiad Oprah"
      },
      {
        id: 6,
        name: "Chłopcy z ferajny"
      },
      {
        id: 7,
        name: "Czerwony smok"
      },
      {
        id: 8,
        name: "Deadpool 2"
      },
      {
        id: 9,
        name: "Diabeł ubiera się u Prady"
      },
      {
        id: 10,
        name: "Django"
      },
      {
        id: 11,
        name: "Dowód życia"
      },
      {
        id: 12,
        name: "Dwa tygodnie na miłość"
      },
      {
        id: 13,
        name: "Dziennik Bridget Jones"
      },
      {
        id: 14,
        name: "Ekspres polarny"
      },
      {
        id: 15,
        name: "Epidemia"
      },
      {
        id: 16,
        name: "Fantastyczne zwierzęta i jak je znaleźć"
      },
      {
        id: 17,
        name: "Francuski pocałunek"
      },
      {
        id: 18,
        name: "Gambit, czyli jak ograć króla"
      },
      {
        id: 19,
        name: "Głębia oceanu"
      },
      {
        id: 20,
        name: "Godzilla"
      },
      {
        id: 21,
        name: "Godziny szczytu 2"
      },
      {
        id: 22,
        name: "Godziny szczytu 3"
      },
      {
        id: 23,
        name: "Gran Torino"
      },
      {
        id: 24,
        name: "Gwiezdne wojny: Część 7 - Przebudzenie mocy"
      },
      {
        id: 25,
        name: "Han Solo: Gwiezdne wojny"
      },
      {
        id: 26,
        name: "Hannibal"
      },
      {
        id: 27,
        name: "Harry Potter I Czara Ognia"
      },
      {
        id: 28,
        name: "Harry Potter I Insygnia Śmierci Część 1"
      },
      {
        id: 29,
        name: "Harry Potter I Insygnia Śmierci Część 2"
      },
      {
        id: 30,
        name: "Harry Potter I Kamień Filozoficzny"
      },
      {
        id: 31,
        name: "Harry Potter I Komnata Tajemnic"
      },
      {
        id: 32,
        name: "Harry Potter I Książe Półkrwi"
      },
      {
        id: 33,
        name: "Harry Potter I Więzień Azkabanu"
      },
      {
        id: 34,
        name: "Harry Potter I Zakon Feniksa"
      },
      {
        id: 35,
        name: "Hobbit: Bitwa Pięciu Armii"
      },
      {
        id: 36,
        name: "Hobbit: Niezwykła Podróż"
      },
      {
        id: 37,
        name: "Hobbit: Pustkowie Smauga"
      },
      {
        id: 38,
        name: "Holiday"
      },
      {
        id: 39,
        name: "Igrzyska śmierci"
      },
      {
        id: 40,
        name: "Igrzyska śmierci: Kosogłos"
      },
      {
        id: 41,
        name: "Incepcja"
      },
      {
        id: 42,
        name: "Jak ona to robi?"
      },
      {
        id: 43,
        name: "Jestem legendą"
      },
      {
        id: 44,
        name: "Jutro nie umiera nigdy"
      },
      {
        id: 45,
        name: "Kac Vegas"
      },
      {
        id: 46,
        name: "Kac Vegas 3"
      },
      {
        id: 47,
        name: "Kac Vegas w Bangkoku"
      },
      {
        id: 48,
        name: "Kevin sam w domu"
      },
      {
        id: 49,
        name: "Kevin sam w Nowym Jorku"
      },
      {
        id: 50,
        name: "Kill Bill"
      },
      {
        id: 51,
        name: "Kochajmy się od święta"
      },
      {
        id: 52,
        name: "Kod nieśmiertelności"
      },
      {
        id: 53,
        name: "Kolekcjoner kości"
      },
      {
        id: 54,
        name: "Księgowy"
      },
      {
        id: 55,
        name: "Listy do M."
      },
      {
        id: 56,
        name: "Listy do M. 2"
      },
      {
        id: 57,
        name: "Listy do M. 3"
      },
      {
        id: 58,
        name: "Lśnienie"
      },
      {
        id: 59,
        name: "Lucy"
      },
      {
        id: 60,
        name: "Łotr 1. Gwiezdne wojny - historie"
      },
      {
        id: 61,
        name: "Małe kobietki odc. 1"
      },
      {
        id: 62,
        name: "Małe kobietki odc. 2"
      },
      {
        id: 63,
        name: "Małe kobietki odc. 3"
      },
      {
        id: 64,
        name: "Mama na obcasach"
      },
      {
        id: 65,
        name: "Marsjanin"
      },
      {
        id: 66,
        name: "Miasto złodziei"
      },
      {
        id: 67,
        name: "Miłość jest wszystkim"
      },
      {
        id: 68,
        name: "Miłość w Nowym Jorku"
      },
      {
        id: 69,
        name: "Narzeczony mimo woli"
      },
      {
        id: 70,
        name: "Niezgodna"
      },
      {
        id: 71,
        name: "Notting Hill"
      },
      {
        id: 72,
        name: "Obcy kontra predator"
      },
      {
        id: 73,
        name: "Peterson"
      },
      {
        id: 74,
        name: "Pierwszy śnieg"
      },
      {
        id: 75,
        name: "Polowanie na \"Czerwony Październik\""
      },
      {
        id: 76,
        name: "Pożegnanie z Afryką"
      },
      {
        id: 77,
        name: "Praktykant"
      },
      {
        id: 78,
        name: "Raport Pelikana"
      },
      {
        id: 79,
        name: "Bękarty wojny"
      },
      {
        id: 80,
        name: "Robin Hood"
      },
      {
        id: 81,
        name: "Rodzinny dom wariatów"
      },
      {
        id: 82,
        name: "Sahara"
      },
      {
        id: 83,
        name: "Sekrety i grzeszki"
      },
      {
        id: 84,
        name: "Seks w wielkim mieście"
      },
      {
        id: 85,
        name: "Seks w wielkim mieście 2"
      },
      {
        id: 86,
        name: "Seria niezgodna: Zbuntowana"
      },
      {
        id: 87,
        name: "Showtime"
      },
      {
        id: 88,
        name: "Shrek"
      },
      {
        id: 89,
        name: "Shrek 2"
      },
      {
        id: 90,
        name: "Shrek Trzeci"
      },
      {
        id: 91,
        name: "Shrek Forever"
      },
      {
        id: 92,
        name: "Sully"
      },
      {
        id: 93,
        name: "Szczęśliwy dzień"
      },
      {
        id: 94,
        name: "Szpital New Amsterdam 3 odc. 1"
      },
      {
        id: 95,
        name: "Szybcy i wściekli VIII"
      },
      {
        id: 96,
        name: "Szybcy i wściekli: Tokio Drift"
      },
      {
        id: 97,
        name: "Święty Mikołaj z 34. ulicy"
      },
      {
        id: 98,
        name: "Taksówkarz"
      },
      {
        id: 99,
        name: "Terminal"
      },
      {
        id: 100,
        name: "The Voice of Poland 12 odc. 11"
      },
      {
        id: 101,
        name: "Troja"
      },
      {
        id: 102,
        name: "Tylko mnie kochaj"
      },
      {
        id: 103,
        name: "Warcraft: Początek"
      },
      {
        id: 104,
        name: "Władca Pierścieni: Dwie wieże"
      },
      {
        id: 105,
        name: "Włoska robota"
      },
      {
        id: 106,
        name: "Wojna światów"
      },
      {
        id: 107,
        name: "Wszystko, co dobre"
      },
      {
        id: 108,
        name: "Wyszła za mąż, zaraz wracam"
      },
      {
        id: 109,
        name: "Wytańczyć marzenia"
      },
      {
        id: 110,
        name: "Wyznania zakupoholiczki"
      },
      {
        id: 111,
        name: "Z Archiwum X: Chcę wierzyć"
      },
      {
        id: 112,
        name: "Za jakie grzechy"
      },
      {
        id: 113,
        name: "Zanim się pojawiłeś"
      },
      {
        id: 114,
        name: "Złap mnie, jeśli potrafisz"
      }
    ])
  }

  addMovie(name: string) {
    this.httpClient.post(this.url, { body: name });
  }

  deleteMovie(id: number) {
    this.httpClient.delete(this.url, { body: id });
  }

  editMovie(id: number, name: string) {
    this.httpClient.put(this.url, { body: id })
  }

}
