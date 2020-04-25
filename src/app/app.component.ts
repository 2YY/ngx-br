import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-br';
  message = 'What do you want to do next with your app?'.replace(/\s/g, '\n');
}
