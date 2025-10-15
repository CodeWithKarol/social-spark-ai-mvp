import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AUDIENCE_TYPES, BRAND_TONES, BUSINESS_TYPES } from './models/business-types';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private formBuilder = inject(FormBuilder);
  protected businessTypes = BUSINESS_TYPES;
  protected audienceTypes = AUDIENCE_TYPES;
  protected brandTones = BRAND_TONES;
  protected contentForm = this.formBuilder.group({
    businessType: [null, { validators: [Validators.required] }],
    audienceType: [null, { validators: [Validators.required] }],
    brandTone: [null, { validators: [Validators.required] }],
  });

  onSubmit(): void {
    const formData = this.contentForm.value;
    console.log('Form submitted:', formData);
  }
}
