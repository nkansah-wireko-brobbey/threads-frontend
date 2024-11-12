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

  formSubmit($event: SubmitEvent){

    $event.preventDefault();

    const formData = $event.target as HTMLFormElement;

    const textAreaElement = formData.elements.namedItem('commentText')  as HTMLTextAreaElement

    const comment = textAreaElement.value
    formData.reset();

    console.log(comment)

    this.formSubmitted.emit({
      comment
    })

  }  

}
