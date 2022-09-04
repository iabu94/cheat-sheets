import { Component } from '@angular/core';
import { doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { registerIcons } from './_helpers';

@Component({
  selector: 'dh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,
    private firestore: Firestore) {
    const icons = ['angular', 'csharp', 'mssql', 'nextjs', 'netcore', 'react'];
    registerIcons(this.matIconRegistry, this.domSanitizer, icons);

    this.logVisit();
  }

  private logVisit() {
    let visits: { hits: number; } = { hits: 0 };
    const ref = doc(this.firestore, 'cheatsheetvisits', 'cheatsheetvisitdocid');
    const sub = (docData(ref) as Observable<{ hits: number; }>).subscribe(
      data => {
        visits.hits = data.hits + 1;
        updateDoc(ref, visits).then(() => console.log('updated'));
        sub.unsubscribe();
      }
    );
  }
}
