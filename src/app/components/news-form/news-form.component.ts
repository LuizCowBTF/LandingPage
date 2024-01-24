import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsLetterService } from '../../services/news-letter.service';

@Component({
  selector: 'news-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  providers: [NewsLetterService],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
  newsLetterForms!: FormGroup;

  constructor(private service: NewsLetterService) {
    this.newsLetterForms = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    if(this.newsLetterForms.valid) {
      this.service.sendData(this.newsLetterForms.value.name, this.newsLetterForms.value.email).subscribe({
        next: () => {
          this.newsLetterForms.reset();
        }
      })
    }
  }
}
