<textarea  #tasknote name="tasknote" [(ngModel)]="taskNote" placeholder="{{ notePlaceholder }}" 
style="background-color: pink" (blur)="updateNote() ; noteEditMode = false " (click)="noteEditMode = false">
  {{ todo.note }} 
</textarea> // <-- changes id to local var


export class MyComponent implements AfterViewInit {
  @ViewChild('tasknote') input: ElementRef;

   ngAfterViewInit() {
    this.input.nativeElement.focus();

  }
}