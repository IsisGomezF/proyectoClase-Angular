import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './shared/headers/headers.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeadersComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyecto-clase';

  nombre: string ="Isis"
}
