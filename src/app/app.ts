import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AUDIENCE_TYPES, BRAND_TONES, BUSINESS_TYPES } from './models/business-types';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from './models/post.model';
import { MOCK_POSTS } from './models/mock-posts';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private formBuilder = inject(FormBuilder);
  private clipboard = inject(Clipboard);
  private snackbar = inject(MatSnackBar);
  protected businessTypes = BUSINESS_TYPES;
  protected audienceTypes = AUDIENCE_TYPES;
  protected brandTones = BRAND_TONES;
  protected contentForm = this.formBuilder.group({
    businessType: [null, { validators: [Validators.required] }],
    audienceType: [null, { validators: [Validators.required] }],
    brandTone: [null, { validators: [Validators.required] }],
  });

  loading = signal(false);
  errorMessage = signal<string | null>(null);
  posts = signal<Post[]>([]);

  onSubmit(): void {
    const formData = this.contentForm.value;
    console.log('Form submitted:', formData);

    this.loading.set(true);
    this.errorMessage.set(null);
    this.posts.set([]);

    // Simulate an async operation (e.g., API call)
    setTimeout(() => {
      this.loading.set(false);
      if (Math.random() > 0.25) {
        const randomPosts = MOCK_POSTS.sort(() => 0.5 - Math.random()).slice(0, 10);
        this.posts.set(randomPosts);
      } else {
        this.errorMessage.set('Failed to generate content. Please try again.');
      }
    }, 3000);
  }

  onCopyPost(post: Post): void {
    // Create the text to copy (title + content + hashtags)
    const textToCopy = `${post.title}\n\n${post.content}\n\n${post.hashtags.join(' ')}`;

    // Copy to clipboard
    this.clipboard.copy(textToCopy);

    // Log the copied text
    console.log('Post copied to clipboard:', textToCopy);

    // Show a snackbar notification
    this.snackbar.open('Post copied to clipboard!', 'Close', { duration: 2000 });
  }

  onEditPost(post: Post): void {
    console.log('Edit post:', post);
    // TODO: Implement edit functionality (e.g., open a dialog with a form)
  }

  onDeletePost(postId: string): void {
    console.log('Delete post:', postId);
    // Remove the post from the posts signal
    const updatedPosts = this.posts().filter((p) => p.id !== postId);
    this.posts.set(updatedPosts);
  }

  onCopyAllPosts() {
    // Create the text to copy for all posts
    const allPostsText = this.posts()
      .map((post) => `${post.title}\n\n${post.content}\n\n${post.hashtags.join(' ')}`)
      .join('\n\n---\n\n');

    // Copy to clipboard
    this.clipboard.copy(allPostsText);

    // Log the copied text
    console.log('All posts copied to clipboard:', allPostsText);

    // Show a snackbar notification
    this.snackbar.open('All posts copied to clipboard!', 'Close', { duration: 2000 });
  }

  onExportPostsAsCsv() {
    const headers = ['ID', 'Category', 'Title', 'Content', 'Hashtags'];
    const csvRows = this.posts().map((post) => {
      const escapedContent = post.content.replace(/"/g, '""'); // Escape double quotes
      const escapedTitle = post.title.replace(/"/g, '""'); // Escape double quotes
      const hashtags = post.hashtags.join(' ');
      return `"${post.id}","${post.category}","${escapedTitle}","${escapedContent}","${hashtags}"`;
    });

    const csvContent = [headers.join(','), ...csvRows].join('\n');

    // Create a blob and trigger a download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated_posts.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
