import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {

  @Input() placeholder: string = 'Write something'
  @Input() buttonText: string = 'Create'

  @Output() formSubmitted = new EventEmitter<{
    comment: string
  }>()

  

}
