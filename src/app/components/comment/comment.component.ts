import { Component, effect, inject, Input, signal } from '@angular/core';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { Comment } from '../../interfaces/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: Comment;

  isExpanded = signal(false);

  isReplying = signal(false);

  commentService = inject(CommentService);

  nestedComments = signal<Comment[]>([]);

  toggleIsExpanded() {
    this.isExpanded.set(!this.isExpanded());
  }

  toggleIsReplying() {
    this.isReplying.set(!this.isReplying());
    if(this.isReplying())
      this.isExpanded.set(true)
  }


  toggleIsExpandedEffect = effect(() => {
    if (this.isExpanded()) this.getNestedComments();
  });

  getNestedComments() {
    this.commentService.getComments(this.comment._id).subscribe((comments) => {
      this.nestedComments.set(comments);
    });
  }
  createComment(formDetails: { comment: string }) {
    console.log(formDetails);

    if (!formDetails) {
      return;
    }

    const newCommentDetails = {
      text: formDetails.comment,
      parentId: this.comment._id
    }

   this.commentService.createComment(newCommentDetails)
   ?.subscribe((comment)=>{
    this.nestedComments.update(prev => [...prev, comment])
   })
  }
}
