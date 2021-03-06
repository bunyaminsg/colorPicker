import { Component } from '@angular/core';

import { PickerPage } from '../picker/picker';
import { PalettesPage } from '../palettes/palettes'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PickerPage;
  tab2Root: any = PalettesPage;

  constructor() {

  }
}
