import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  isInLocalStorage(key: string): boolean {
    return localStorage.getItem(key) ? true : false;
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
