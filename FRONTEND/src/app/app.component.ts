import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedComponent } from './shared/shared.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppComponent, SharedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multimedia';
}
